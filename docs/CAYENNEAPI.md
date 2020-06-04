<p id="cayenne-api" class="anchor-link"></p>

# Cayenne Cloud API (Deprecated)

## Overview

The Cayenne Cloud API allows for interacting and creating applications using the myDevices IoT RESTful API.  REST is a lightweight, stateless web service standard that myDevices IoT provides to partners and customers. Our REST API is secured with OAuth2 standard, which offers increased security by using JWT access tokens. In addition to Authorization and Authentication mechanism, we encrypt all transport communications with TLS/SSL endpoints.

## Preparing to use the API

### Create a Cayenne account

In order to use the Cayenne Cloud API, you will need to first create a Cayenne account. Visit the <a href="https://developers.mydevices.com/cayenne/features/" target="_blank">Cayenne website</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/get-started-for-free.png" width="660" height="438" alt="get started for free"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/account-sign-up.png" width="660" height="438" alt="account sign up"><br/><br/></p>

### Obtain your Cayenne Cloud API Key

Before you can use the Cayenne Cloud API you will need to obtain your **App Key** and **App Secret**. In order for your custom application to successfully connect with Cayenne you will need to provide these keys when using the Cayenne Cloud API.

*TIP: For more information how these keys are used, see the [Authentication section](https://developers.mydevices.com/cayenne/docs/cayenne-api/#cayenne-cloud-api-deprecated-http-api-reference-authentication-users-applications) of the HTTP API documentation.*

To obtain your keys, log into your account and select **Create App**. The *App Credentials* page that appears contains your keys. Copy & paste the **App Key** and **App Secret** into your code.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/05/Caynne-API-Create-App.png" width="660" height="414" alt="Create App example"><br/><br/></p>

## HTTP API Reference

The myDevices IoT platform is composed of micro services. By not having a monolith application, we can maintain a high level of uptime without taking down the whole platform. When issues arise, the system is still operational and just portions of the platform might not be reachable. Not to mention, the benefits of having micro service also is reflected in the speed and code quality.

### Getting Started

At a glance, we have a sandbox service that provide interactivity with the API to enhance and speed development while building applications. Before using the API users or applications need to authenticate to our authentication service to obtain a token. 


### Authentication, Users & Applications

myDevices IoT API is protected by JWT tokens and established ACL rules. We use the oAuth2 protocol to authenticate users and applications. The authentication service that provide these tokens support all of the oAuth2 authentication grant types:

- Authorization code grant
- Resource owner grant
- Refresh token grant 
- Client credentials grant

In addition to oAuth2, our authentication service also incorporates Single Sign On for internal and public facing applications, user management, password reset flows, and application management.

| HTTP Status Code	| Reason  |
|-------|-------------------------------------------|
| 200  |  Operation success |
| 201  |  Object added     |
| 400  |  Bad Request: payload validation     |
| 401  |  Unauthorized: Invalid or expired token used.     |

All authentication requests are directed to **``https://accounts.mydevices.com``**.

##### Get User Information

Get specific user information

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/auth/realms/cayenne/protocol/openid-connect/userinfo</td>
</tr>
</tbody>
</table>

| Header | Value  |
|-------|-------------------------------------------|
| Authorization | Bearer JWT_TOKEN |

**Response Model**
 ```
{
	"sub": "XXXXXXXX",
    "email_verified": false,
	"email": "some@email.com",
    "user_id": "XXXXXXXX",
	"given_name": "Name",
	"family_name": "LastName",
    "name": "Name Lastname"
}
```

Additionally, JWT tokens already contain user information. A JWT token is deviced into 3 parts, all separated by a `.` character. The middle part, is a JSON object base 64 encoded that contains user information among other information like roles and scopes granted.

#### User Password

User password can be reset at the following url: **``https://accounts.mydevices.com/auth/realms/cayenne/login-actions/reset-credentials``**.

##### Token Exchange Step

With the user authenticated and the application allowed access, it must now exchange the code grant for an actual usable set of access and refresh tokens for the user. The application should thus make a **server side** request to the following URL:

```
POST https://accounts.mydevices.com/auth/realms/cayenne/protocol/openid-connect/token
{
  “grant_type”: “authorization_code”,
  “code”: “<authorization code>”,
  “redirect_uri”: “<redirect_uri>”,
  “client_id”: “<client_id>”,
  “client_secret”: “<client_secret>”
}
```

**Payload parameters:**

- grant_type: should be **authorization_code** as this step is exchanging an authorization code for a token
- code: the authorization code received from the previous step
- redirect_uri: should be the same re-direct uri provided in the initial step of the process. 
- client_id: the unique id for the 3rd party application
- client_secret: a unique key provided when the 3rd party application was created. This key should only be sent by a server side application and never exposed to the client. 

**Error behaviors:**

- Incorrect grant_type - Not sending the grant_type of authorization_code
- Incorrect code - Sending an authorization code which has expired or is missing
- Missing or incorrect redirect_uri - The sent redirect uri should match the original redirect uri sent to obtain the authorization code. If it is not sent or different an error will be returned.
- Incorrect client details - If the client_id or client_secret are missing or incorrect an error will be returned.

**Success behavior:** Successfully exchanging the authorization code for a token will result in an access_token and refresh_token for that user.

#### Oauth2 Authentication Implicit Flow

The implicit flow is similar to the explicit flow except it is designed to be utilized by single page, mobile and other applications which cannot provide guarantees of protection for application secrets. Therefore there is no exchange of a code grant for an access and refresh token pair. Simply, if the initial authentication is successful an access token will be provided as a hash fragment to the redirected user. Also note that due to the insecure nature of these applications, a refresh token will not be issued. The following steps describe the flow in more detail:

##### Client Redirect to Authentication Server Step

The user must be authenticated against the authorization server by directing them to the following link:

```
GET https://accounts.mydevices.com/auth/realms/cayenne/protocol/openid-connect/auth?response_type=token&client_id=<client id>&redirect_uri=<redirect uri>&scope=<scopes>&state=<state>
```

**Query parameters:**

- response_type - Should be **token** for this leg of the implicit authentication flow. 
- client_id - The identifier of the client application received upon application creation
- redirect_uri - The URI which the client is expected to be returned after successfully authenticating with Cayenne. This redirect uri must have been added to the list of allowable redirects prior to authentication.
- scope - A comma delimited list of grants that the 3rd party application wishes to receive on behalf of the user.
- state - A randomly generated string utilized by the 3rd party application to protect against csrf attacks.

**Error Behaviors:**

- Missing or non-whitelisted redirect_uri - The request will be redirected back to the 3rd party application with an error stating an incorrect redirect_uri was presented
- Incorrect client_id - Not passing a client id or sending one that does not match our records will result in redirection back to the 3rd party application with a corresponding error.
- Incorrect response type - Passing a response_type of anything other than code for this leg of the process will result in a redirection back to 3rd party application with an appropriate error. 
- Missing state - 3rd party applications should ensure they are securely authenticating their users and thus should utilize state to protect against CSRF attacks. Not including state will result in a redirection with an appropriate error.

**Success Behavior:** The user will be directed to the Cayenne authorization server for authentication.

##### Client Authentication and Approval Step

The user will now login, if not already logged in as a Cayenne user. If they are already logged in due to the presence of a secured SSO cookie they will be forwarded to the next step. Otherwise, they will fill out a sign-in form and if they are able to authenticate correctly, allow access to the grants specified to the application. The following describes the behavior of success and error conditions:

**Error behaviors:**

- The user cannot login after multiple attempts- The request will be redirected back to the 3rd party application with the appropriate error
- The user does not accept the applications request for user scope - The request will be redirected back to the application with the corresponding error.

**Success behavior:** After successfully authenticating and accepting the requested scope, the user will be redirected back to the **redirect_uri** provided by the prior step in the following fashion:

```
<redirect_uri>?access_token=<access_token>&state=<state>
```

**Query parameters:**

- access_token - This is the JWT access token for the user. It can then be utilized directly against the resource server. 
- state - This state should be the same state value passed to the Cayenne Authorization server in the first step. If the client receives a different state than the one sent it should not continue the authorization process. 

#### Resource Owner and Refresh Token Grants

Requests for Resource owner and Refresh token are handled by one endpoint by assigning **grant_type** to password or refresh_token.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/auth/realms/cayenne/protocol/openid-connect/token</td>
</tr>
</tbody>
</table>

**Ressource Owner Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| email      | email login for password grant type  | String |
| password      | user password for password grant type  | String |
| refresh_token      | Sent upon request of new access token  | String |
| client_id      | used to identify which application/client id is being used for user  | String |
| client_secret      | the secret key associated to the client id | String |
| grant_type      | defines grant type to route authentication (password)  | String |
| scope      | scope of permissions requested  | String |

**Refresh Token Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| refresh_token      | Sent upon request of new access token  | String |
| client_id      | used to identify which application/client id is being used for user  | String |
| client_secret      | the secret key associated to the client id | String |
| grant_type      | defines grant type to route authentication (refresh_token)  | String |

**Response Object and Messages**

Success Response (200)

```
{ 
	“access_token”: “123456”,
	“refresh_token”: “123456” 
}
```

#### Curl example using Resource Owner Grant

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'grant_type=password&email=foobar%40example.com&password=example&client_id=123456' 'https://accounts.mydevices.com/auth/realms/cayenne/protocol/openid-connect/token'
```

#### Single Sign On

Single sign on is provided for users as part of the authentication procedure. When a user has successfully logged in, the authorization server will create a secure cookie for that user only at the authorization domain. When the user returns to the authorization server whether for the same application or a different one, if the cookie is present, the user not be forced to login again and be redirected back to the source application as normal. This session will be valid for one week at which point the user will be forced to login again.
