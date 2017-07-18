<p id="cayenne-api" class="anchor-link"></p>

# Cayenne Cloud API

## Overview

The Cayenne Cloud API allows for interacting and creating applications using the myDevices IoT RESTful API.  REST is a lightweight, stateless web service standard that myDevices IoT provides to partners and customers. Our REST API is secured with OAuth2 standard, which offers increased security by using JWT access tokens. In addition to Authorization and Authentication mechanism, we encrypt all transport communications with TLS/SSL endpoints.

## Preparing to use the API

### Create a Cayenne account

In order to use the Cayenne Cloud API, you will need to first create a Cayenne account. Visit the <a href="http://www.cayenne-mydevices.com/" target="_blank">Cayenne website</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/get-started-for-free.png" width="660" height="438" alt="get started for free"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/account-sign-up.png" width="660" height="438" alt="account sign up"><br/><br/></p>

### Obtain your Cayenne Cloud API Key

Before you can use the Cayenne Cloud API you will need to obtain your **App Key** and **App Secret**. In order for your custom application to successfully connect with Cayenne you will need to provide these keys when using the Cayenne Cloud API.

*TIP: For more information how these keys are used, see the [Authentication section](#cayenne-cloud-api-http-api-reference-using-the-http-api-authenticating) of the HTTP API documentation.*

To obtain your keys, log into your account and select **Create App**. The *App Credentials* page that appears contains your keys. Copy & paste the **App Key** and **App Secret** into your code.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525132751/Caynne-API-Create-App.png" width="660" height="414" alt="Create App example"><br/><br/></p>

## Using the API

In this section you will find examples of how to put the Cayenne Cloud API into use.

- [Example Walkthrough](#cayenne-cloud-api-using-the-api-example-walkthrough): Guides you through using each feature of the API, covering an example found in our Tank Monitoring Sample App.
- [Samples](#cayenne-cloud-api-using-the-api-samples): Links to additional sample solutions found on our GitHub.

In addition to the examples provided, you will find additional code snippets and notes throughout the API References. You may also wish to refer to the appropriate reference information for the API or SDK that you are using in our project.

- [Cayenne HTTP API Reference](#cayenne-cloud-api-http-api-reference)
- Mobile App SDKs
   - [iOS SDK Reference](#cayenne-cloud-api-ios-sdk-reference)
   - [Android SDK Reference](#cayenne-cloud-api-android-sdk-reference)

### Example Walkthrough

In this section we will cover practical examples of putting the Cayenne Cloud API into use.

The example walkthrough shown here is arranged as a narrative that walks you through the various API-related topics required to implement each screen found in the **Tank Monitoring sample app**. After covering the sample app, we will discuss some additional API features.

1. **[Creating an account](#cayenne-cloud-api-using-the-api-example-walkthrough-creating-an-account)** - Creating a new account.
2. **[Logging into an account](#cayenne-cloud-api-using-the-api-example-walkthrough-logging-into-account)** - Log into our account.
3. **[Resetting password](#cayenne-cloud-api-using-the-api-example-walkthrough-reset-password)** - Resetting the account password.
4. **[Provisioning devices](#cayenne-cloud-api-using-the-api-example-walkthrough-provisioning-devices)** - Provisioning a device so that it can be later activated.
5. **[Activating devices](#cayenne-cloud-api-using-the-api-example-walkthrough-activating-a-device)** - Activating devices.
6. **[Get real-time device data](#cayenne-cloud-api-using-the-api-example-walkthrough-getting-real-time-device-data)** - Fetching device status and current device data.
7. **[Remote control](#cayenne-cloud-api-using-the-api-example-walkthrough-remote-control)** - Controlling devices remotely.
8. **[Device History](#cayenne-cloud-api-using-the-api-example-walkthrough-getting-device-history)** - Fetching historical device data.
9. **[Alerts](#cayenne-cloud-api-using-the-api-example-walkthrough-alerts)** - Creating and managing Alerts.
10. **[Multi-Tenant](#cayenne-cloud-api-using-the-api-example-walkthrough-multi-tenant)** - Creating and managing Users.

#### Creating an account

In order to use the Tank Monitoring sample app, users are reqired to have an account. If they do not already have an account, they can create one directly from the app. To begin, the user is asked to provide the necessary account information used to create the new account.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524163604/Tank-Monitoring-Create-account2.png" width="346" height="615" alt="Sample App Create Account 1"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524163607/Tank-Monitoring-Create-account3.png" width="346" height="615" alt="Sample App Create Account 2"><br/><br/></p>

Once we have the information from the user, we can use the Cayenne Cloud API to create a new account. If the account creation is successful, we can proceed with logging the user into their account.

```
Dev to provide Sample App - account creation code example code to be put here.

0. Example code for creating an account using fake info supplied by a user.
1. Example output of successful account creation.
```

#### Logging into account

Once the user has a valid account, they will need to be logged in to continue. This is handled in the sample app in one of two ways:

1. **[Log in after account creation](#cayenne-cloud-api-using-the-api-example-walkthrough-logging-into-account-logging-in-after-account-creation)** - How to log in automatically after account creation.
2. **[Log in to existing account](#cayenne-cloud-api-using-the-api-example-walkthrough-logging-into-account-logging-into-existing-account)** - Log in to a returning users account.

##### Logging in after account creation

The Tank Monitoring sample app automatically logs a user into their account after having just created the user's account. After being logged in, the user remains logged in until they log out of the app. This is a common user experience given that the user has already supplied their account credentials to the app. Let's build upon the [Create account](#cayenne-cloud-api-using-the-api-example-walkthrough-creating-an-account) example done earlier and see how the Cayenne Cloud API can be used to automatically log the user in.

```
Dev to provide example code that builds upon the previous 'Create Account' example and logs the user into their account.
```

##### Logging into existing account

After logging out of the app, returning users will want to log into their existing account. Let's take a look at how the Tank Monitoring sample app and asks the user for their account credentails. We will then examine how the Cayenne Cloud API can be used to log the user into their existing account using the information provided.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084310/Restaurant-iPhone_LogIn-1-2.png" width="346" height="615" alt="Sample App Login screen"><br/><br/></p>

```
Dev to provide example code showing a call using the account info provided by the user from the Sample App - Login screen to log into their account.
```

#### Reset Password

In the event that a user has forgotten their password, the Cayenne Cloud API can be used to reset the password. Let's take a look at the Tank Monitoring sample app and examine how it deals with this scenario.

**Generate password reset email**

In order to reset the user's password, we first need to know the users login information. After providing this information, we can use the Cayenne Cloud API to generate and send an email containing a password reset link.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524083818/Restaurant-iPhone_LogIn-1-3.png" width="346" height="615" alt="Sample App Forgot password screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524164225/Tank-Monitoring-Reset-Password.png" width="346" height="615" alt="Sample App Password reset email confirmation"><br/><br/></p>

```
Dev to provide example code showing a call using the account info provided by the user from the Sample App - Forgot Password screen to generate this link/email.
```

**Changing the password**

The password reset email that the user receives includes a link that they can use to reset their password. Following this link takes the user to a screen where they can create a new password. Let's take a look at how the Cayenne Cloud API uses the password reset link and the user's desired new password to change the password.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524164522/Tank-Monitoring-Change-password-web.png" width="256" height="210" alt="Example new password creation web page"><br/><br/></p>

```
Dev to provide example code showing Cayenne Cloud API call to change the user's password.
```

#### Provisioning Devices

Before a device can be activated using the Cayenne Cloud API, it must first be provisioned. Provisioning a device prepares the Cayenne backend to activate the device and generates the **Hardware IDs** that are required during the [Device Activation](#cayenne-cloud-api-using-the-api-example-walkthrough-activating-a-device) process.

Let's provision an example Gateway, Sensor and Actuator which we will continue to use throughout the rest of our examples. The Cayenne Cloud API provides different ways for us to provision these devices.

- **[Provision devices one at a time](#cayenne-cloud-api-using-the-api-example-walkthrough-provisioning-devices-provision-single-devices)** - How to provision devices one at a time.
- **[Bulk provision the devices](#cayenne-cloud-api-using-the-api-example-walkthrough-provisioning-devices-bulk-provisioning-devices)** - How to provision multiple devices at once.

##### Provision single Devices

Devices can be provisioned one at a time, allowing for tasks such as one-off or on demand provisioning of devices. Let's examine using the Cayenne Cloud API to provision our example devices, one at a time.

```
Dev to provide example code that demonstrates how to provision a single device using the API. We should show multiple examples here (even if they are the same call but generating different output Hardware IDs). These will be used later in examples of device activation, device data history, etc.

0. Example in/out for a sample Gateway Device.
1. Example in/out for Tank Level Sensor.
2. Example in/out for an Door ("Gate") Lock Actuator.
```

##### Bulk Provisioning Devices

If you have multiple devices that need to be provisioned, the Cayenne Cloud API allows you to batch or bulk provision the devices. Let's provision the same devices as seen in the [Single Device](#cayenne-cloud-api-using-the-api-example-walkthrough-provisioning-a-device-provision-single-devices) example, only this time we'll see how they can be provisioned all at once.

**Note: There is a limit of 500 devices that can be provisioned at a time.**

```
Dev to provide example code that demonstrates how to bulk provision devices using the Cayenne Cloud API. The example shown here should bulk provision the same 3 devices used in the preceeding 'Single device' example. That way the user can see how to do them one a time or all in once. Please be sure that the example in/out uses those same devices as the other example.
```

#### Activating a Device

Once a device has been provisioned, it can then be activated and added to the user's account. Let's build upon the [provisioning example](/#cayenne-cloud-api-using-the-api-example-walkthrough-provisioning-devices) and examine how the user can activate the example devices using the Tank Monitoring sample app and the Cayenne Cloud API.

Let's begin by seeing how a Gateway device is activated. After selecting to add a Gateway device, the user is asked for device information needed to activate the gateway. After entering in the information, the Cayenne Cloud API can be used to activate the device.

*NOTE: Notice how the user is asked for the __Gateway ID__ during the activation process. This ID is the __Hardware ID__ generated earlier during the device provisioning step.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084436/Restaurant-iPhone_AddGateway-1-2.png" width="346" height="615" alt="Sample App Add Gateway screen"><br/><br/></p>

```
Dev to provide example of activating the example Gateway device. The example in/out should match the provisioned device information from our provisioning example covered earlier.
```

After adding a Gateway device, we can then add sensors and actuators that will communicate with the gateway. Let's activate the sensor and actuator example devices that we previously provisioned. After selecting to add a Device, the user is asked for device information needed to activate the sensor or actuator. After entering in the information, the Cayenne Cloud API can be used to activate the device.

*NOTE: Notice how the user is asked for the __ID__ during the activation process. This ID is the __Hardware ID__ generated earlier during the device provisioning step.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084522/Restaurant-iPhone_AddSensor-1-2.png" width="346" height="615" alt="Sample App Add Sensor screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524104638/Restaurant-iPhone_AddSensor-1-1.png" width="346" height="615" alt="Sample App Add Sensor screen2"><br/><br/></p>

```
Dev to provide example of activating the example Sensor & Actuator device (only one example is OK as long as there is no difference between the in/out from activation call). The example in/out should match the provisioned device information from our provisioning example covered earlier.
```

#### Getting Real-Time Device Data

After devices are activated and begin transmitting data to Cayenne, the Cayenne Cloud API can be used to query real-time data on the device. Let's take a look at the Tank Monitoring sample app and see how it uses the Cayenne Cloud API to fetch current device status so that it can be displayed on the *Status* screen.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525074129/Tank-Monitoring-Status-screen.png" width="346" height="615" alt="Sample App Status screen"><br/><br/></p>

```
Dev to provide example code that demonstrates how to use the API to get the current device data used to in the Sample App's Status screen.


1. Ideally the in/out shown here would continue to match the same 3 example Gateway, Sensor, Actuator devices previously provisioned and activated.

As part of this, we should make sure the output includes the same content shown on the Status screen example. E.g.
- Status
- Name
- Reading
- Signal strength
- Battery
etc

2. We should also cover how to use the API to filter results.
```

#### Remote Control

In addition to monitoring Sensor devices, the Cayenne Cloud API also supports Actuators. Actuators devices allow you to not only monitor the status of the actuator, but also to remotely control their state. For example, you can remotely lock or unlock a Door Lock, or change the brightness of a Light. The Tank Monitoring sample app includes an example of a Door Lock that we can exmaine. From the *Status* screen we see that there is a toggle shown next to the **Gate Lock** device. The user is able to tap on this button to switch the current lock state of the device. Let's take a look at how this is accomplish using the Cayenne Cloud API.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525074533/Tank-Monitoring-Status-screen-actuator-highlight.png" width="492" height="615" alt="Sample App Device History screen"><br/><br/></p>

```
Dev to provide example code that demonstrates how to use the API to remotely change the state of our example Door ("Gate") Lock Actuator.
```

#### Getting Device History

Cayenne maintains historical information on data received from connected devices. Let's examine using the Cayenne Cloud API to query historical data for our example devices and see some very different examples of how the Tank Monitoring sample app uses this data to display the information to the user.

##### Sensor History example

Tapping on a device from the Tank Monitoring sample app's *Status* screen opens the *Device History* screen which displays historical device data. The user can use this table view to filter and examine data. Let's explore how this is accomplished using the Cayenne Cloud API.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084752/Restaurant-iPhone_Sensor-1-1.png" width="346" height="615" alt="Sample App Device History screen"><br/><br/></p>

```
Dev to provide example code for how the Sample app history details screen uses the Cayenne Cloud API to fetch the historical data for display. 

IF the Actuator and Temperature in/out differ, we should document both examples in code.
```

##### Asset Tracking example

The Tank Monitoring sample app's *Map* screen provides another great example of using historical device data in a unique way. In this case, for display of device location and status on a map. Let's take a look at this *Asset Tracking* feature and how the Cayenne Cloud API is used to accomplish this.

**Displaying device location on a map**

On the *Map* screen in the Tank Monitoring sample app, the user can see the location and movement of their devices on a map. This unique presentation makes use of current and historical device information provided in the Cayenne Cloud API to visualize device location data.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524091320/Restaurant-iPhone_SensorMap-1-13.png" width="660" height="371" alt="Sample App rotated map screen"><br/><br/></p>

```
Dev to provide example code for how to the Sampe App fetches the current and past location data so that the Map view can be shown to the user.

0. Example of a device with a fixed (manual) address.
1. Example of a device using GPS data.

Note from Brent: How does our API make use of the Google Maps API for the map? Should we be detailing how to make use of the Google Map API in our API as well? I didn't know if this was exposed to the user, or if it is something that our API does not yet provide.
```

**Displaying historical device data on a map**

In addition to visualizing the location of the device on a map, a user can tap on a device marker to pull up additional information. Within the popup dialog that appears, the historical information on the device is displayed. This allows the Tank Monitoring sample app user to not only see where the device was, but also to see its status at that time.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524091339/Restaurant-iPhone_SensorMap-1-9.png" width="346" height="615" alt="Sample App Map screen"><br/><br/></p>

```
Dev to provide example code for how the Sample App fetches historical device status, sensor status, etc as shown in Map screen details popup for a device.
```

#### Alerts

Alerts allow you to receive notifications when certain conditions are met. Let's take a look at the Tank Monitoring sample app and see how the user can create an Alert and manage existing alerts using the Cayenne Cloud API.

##### Creating an Alert

To create a new Alert, the user must specify information on what conditions should be met and who should be notified. After obtaining the information from the user, a new Alert can be created.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524100109/Restaurant-iPhone_Alert-1-4.png" width="346" height="615" alt="Sample App create alert screen"><br/><br/></p>

```
Dev to provide example code for how to create an Alert using the information obtained from the user in the Sample App.
```

##### Managing Alerts

After setting up alerts, users will want to be able to manage them. Let's take a look at the Tank Monitoring sample app's *Alerts* screen. From this screen the user can see a list of existing alerts, information on each alert, and they can manage the alerts. Let's see how these tasks are accomplished using the Cayenne Cloud API.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524100107/Restaurant-iPhone_Alert-1-2.png" width="346" height="615" alt="Sample App Alerts screen"><br/><br/></p>

```
Dev to provide example code for how to manange existing alerts.

0. Example code for fetching information on current status (# times run, ON/OFF, name, etc) for display on Alerts screen in Sample App.
1. Maybe example code for how to toggle an Alert on/off?
2. Maybe example code for how to update existing Alert information? E.g. user edits and saves changes.
```

#### Multi-Tenant

In addition to manging Accounts and Devices, the Cayenne Cloud API also provides functionality to help create and manage Users. Using the Multi-Tenant features found in the Cayenne Cloud API, you can create Users and assign Roles and permissions. Let's take a look at an example which demonstrates these features.

##### Creating Users, assigning Roles & Permissions

Before you can manage users and assign permission, a new User must be created. As an example, this can be done from an *Add User* screen. In order to get started with creating a new user, we must first get some basic information on the user.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525090358/Multi-Tenant-2.png" width="660" height="483" alt="Multi tenant Add User 1"><br/><br/></p>

After capturing the basic user information, we then select the **Role** and **Permissions** available to the user. By adjusting the user's role and permissions, we can control what access the user has within the account. Setting the user's **Role** will determine certain default **Permissions** available. If you want, you can override the default permissions by specifying what the user should have on a per-feature basis.

- **View:** Allows the User to view this feature. Without this permission, the feature will not be visible to the user.
- **Add/Edit:** Allows the User to modify items within this feature. For example, to Add device or Edit/Update information.
- **Delete:** Allows the User to delete items within this feature. For example, to remove devices.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525090412/Multi-Tenant-3.png" width="660" height="483" alt="Multi tenant Add User 2"><br/><br/></p>

After gathering the information required to create a new User, we can then use the Cayenne Cloud API to create a new user. Let's examine how this is accomplished.

```
Dev to provide example of creating a new User and assigning permissions using Cayenne Cloud API.
```

##### Managing existing users

After creating some Users, we need to be able to manage them. Let’s take a look at an example *Users* screen. From this screen you can see a list of existing users and we can manage the existing user from here. Let's see how these tasks are accomplished using the Cayenne Cloud API.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525090259/Multi-Tenant-1.png" width="660" height="290" alt="Multi tenant manage Users screen"><br/><br/></p>

```
Dev to provide example code for how to manange existing users.

0. Example code for fetching information on the user so that it can be displayed such as on an example Users screen.
1. Maybe example code for how to update existing User information? E.g. user edits and saves changes.
```

### Samples

The Cayenne Cloud API repo on GitHub includes a number of additional samples that illustrate the use of the Cayenne Cloud API.

```
Dev to provide GitHub repo for Samples and a list of samples that should be linked here in docs.
```

- Tank Monitoring Sample App: A sample app that demonstrates the Cayenne Cloud API features. This is the sample app used throughout the [Example walkthrough section](#cayenne-cloud-api-using-the-api-example-walkthrough).
- Another Example link: Short description of what the sample provides.

### Best practices

```
Optional - If Dev has some tips and best practices, they can go here. If not, this section can be removed.

Dev to provide this information.
```

## HTTP API Reference

The myDevices IoT platform is composed of micro services. By not having a monolith application, we can maintain a high level of uptime without taking down the whole platform. When issues arise, the system is still operational and just portions of the platform might not be reachable. Not to mention, the benefits of having micro service also is reflected in the speed and code quality.

### Getting Started

At a glance, we have a sandbox service that provide interactivity with the API to enhance and speed development while building applications. Before using the API users or applications need to authenticate to our authentication service to obtain a token. 

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170531100529/Caynne-API-Getting-Started.png" width="660" height="563" alt="API Getting Started auth"><br/><br/></p>

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

All authentication requests are directed to **``https://auth.mydevices.com``**.

#### User Management

This authentication service also provides routes for user creation, modification and information.
All requests need to include a Authorization header and API version, for example:

| Header	| Value  |
|-------|-------------------------------------------|
| Authorization  |  Bearer JWT_TOKEN |
| X-API-Version  |  1.0     |

##### Create User

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/users</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| first_name \*      | first name of user | String |
| last_name \*       | last name of user | String |
| email \*           | user’s email | String |
| password \*        | user's password | String |
| user_class_id      | identify user class | Integer |
| user_group_id      | categorize user group | Integer |
| application_id     | adds a user to an application | String |
| permission_role_id | permission role associated with user | Integer |

\* *required*

**Response Model**

```
{
  “id”: UUID,
  "first_name": "",
  "last_name": "",
  "email": "",
  "password": "",
  "user_class_id": 0,
  "permission_role_id": 0,
  "user_groups_id": 0,
  "application_id": “"
}
```

##### Get User

Get specific user information by user Id.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/users/{userId}</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| userId \*      | required to obtain specific user | String |

\* *required*

**Response Model**

```
{
	"id": "XXXXXXXX",
	"email": "some@email.com",
	"first_name": "Name",
	"last_name": "LastName",
	"last_login": "2017-05-03T22:30:21.000Z",
	"phone_number": null,
	"created_at": "2017-05-03T22:30:21.000Z",
	"updated_at": "2017-05-03T22:30:21.000Z",
	"user_class_id": null
}
```

##### Update User

This request can be used to update entire user attributes or just some. To update password, follow the password endpoint for more information. Email cannot be changed.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #d17e14; color: #ffffff;"><b>PUT</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #fce5cd; color: #000000;">/users/{userId}</td>
</tr>
</tbody>
</table>

**Parameters**

Same parameters as when creating an user can be send in this request.

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| first_name      |    | String |
| ...      | ...   | ... |


**Response Model**

```
{
  “id”: UUID,
  "first_name": "",
  "last_name": "",
  "email": "",

  "user_class_id": 0,
  "permission_role_id": 0,
  "user_groups_id": 0,
  "application_id": “"
}
```

#### User Password

To begin a password reset action, this API provides two endpoints that will create a reset token and send out an email to the user.

##### Initiate Password Reset

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/password/forgot</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| email \*      | User’s email to send reset password link  | String |

**Response Model**

```
{
  "first_name": "Foobar",
  "last_name": "example",
  "email": “foobar@example.com",
  "token": "125a4s5as1as2a2"
}
```

##### Change Password

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/password/rese</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| token \*      | token gathered from /password/forgot  | String |
| password \*      | new password  | String |

**Response Model**

```
{
  "success": true
}
```

#### Applications

One key importance of myDevices IoT API is to allow other customers to create application using our API. The following endpoints allow such operation and the credentials returned must be used across all other services.

##### List applications

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/applications</td>
</tr>
</tbody>
</table>

**Query Parameters**

| Parameter	| Value |  Description |	Type |
|-------------|--------------------|---|---|
| status      | active (default), <br/> inactive, blocked  | application status to search for | String |

**Response**

```
[{
  "id": “”,
  “name”: “”,
  “description”: “”
}, …]
```

##### Create application

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/applications</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| name      | Application name  | String |
| description      | Description  | String |

**Response**

```
{
  "id": “”,
  “name”: “”,
  “description”: “”
}
```

##### Update application

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #d17e14; color: #ffffff;"><b>PUT</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #fce5cd; color: #000000;">/applications/{applicationId}</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| name      | Application name  | String |
| description      | Description  | String |

**Response**

```
{
  "id": “”,
  “name”: “”,
  “description”: “”
}
```

##### Get application

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/applications/{applicationId}</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| applicationId      | Application Id  | String |

**Response**

```
{
  "id": “”,
  “name”: “”,
  “description”: “”
}
```

##### Set applications redirect uri

One of the Oauth important steps is to redirect your app to the authorization link.
For that you need to authorize the redirect uri for your application.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/applications/{applicationId}/redirects</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| redirect_uri      | Uri to redirect at auth step one. <br/>Example: http://localhost:8080  | String |

**Response**

```
{
	"id": "38d8d299-9354-4155-8a76-75dac535825c",
	"app_id": "5cb32d32-00fc-4555-8936-4bcef63c3163",
	"redirect_uri": "http://localhost:8080",
	"updated_at": "2017-05-01T23:21:21.000Z",
	"created_at": "2017-05-01T23:21:21.000Z"
}
```

#### Oauth Authentication Explicit Flow

To authenticate users originating from a 3rd party server side application we utilize the explicit log in flow for OAuth. This requires a series of back and forth requests between the application server and the Cayenne authorization server. It should be noted that the explicit flow calls for the application secret to be passed which means this flow needs to be conducted from source which does not leak the secret publically (ie. from a single page application).

##### Client Redirect to Authentication Server Step

The user must be authenticated against the authorization server by directing them to the following link:

```
GET http://auth.mydevices.com?response_type=code&client_id=<client id>&redirect_uri=<redirect uri>&scope=<scopes>&state=<state>
```

**Query parameters**

- response_type - Should be **code** for this leg of the authentication flow. By passing code the 3rd party application will receive a code grant which will be exchanged for the users authorization token.
- client_id - The identifier of the client application received upon application creation
- redirect_uri - The URI which the client is expected to be returned after successfully authenticating with Cayenne. This redirect uri must have been added to the list of allowable redirects prior to authentication.
- scope - A comma delimited list of grants that the 3rd party application wishes to receive on behalf of the user. Scopes are optional for now.
- state - A randomly generated string utilized by the 3rd party application to protect against csrf attacks.

**Error Behaviors:**

- Missing or non-whitelisted redirect_uri - The request will be redirected back to the 3rd party application with an error stating an incorrect redirect_uri was presented
- Incorrect client_id - Not passing a client id or sending one that does not match our records will result in redirection back to the 3rd party application with a corresponding error.
- Incorrect response type - Passing a response_type of anything other than code for this leg of the process will result in a redirection back to 3rd party application with an appropriate error. 
- Missing state - 3rd party applications should ensure they are securely authenticating their users and thus should utilize state to protect against CSRF attacks. Not including state will result in a redirection with an appropriate error.

**Success Behavior:** The user will be directed to the Cayenne authorization server for authentication

##### Client Authentication and Approval Step

The user will now login, if not already logged in as a Cayenne user. If they are already logged in due to the presence of a secured SSO cookie they will be forwarded to the next step. Otherwise, they will fill out a sign-in form and if they are able to authenticate correctly, allow access to the grants specified to the application. The following describes the behavior of success and error conditions:

**Error behaviors:**

- The user cannot login after multiple attempts- The request will be redirected back to the 3rd party application with the appropriate error
- The user does not accept the applications request for user scope - The request will be redirected back to the application with the corresponding error.

**Success behavior:** After successfully authenticating and accepting the requested scope, the user will be redirected back to the **redirect_uri** provided by the prior step in the following fashion:

```
<redirect_uri>?code=<authorization_code>&state=<state>
```

**Query parameters:**

- code - The code grant that signifies the user has successfully logged in and approved the applications access. It will be used in the following step. 
- state - This state should be the same state value passed to the Cayenne Authorization server in the first step. If the client receives a different state than the one sent it should not continue the authorization process.

##### Token Exchange Step

With the user authenticated and the application allowed access, it must now exchange the code grant for an actual usable set of access and refresh tokens for the user. The application should thus make a **server side** request to the following URL:

```
POST http://auth.mydevices.com/oauth/token
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
GET http://auth.mydevices.com?response_type=token&client_id=<client id>&redirect_uri=<redirect uri>&scope=<scopes>&state=<state>
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
<redirect_uri>#access_token=<access_token>&state=<state>
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
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/oauth/token</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| email      | email login for password grant type  | String |
| password      | user password for password grant type  | String |
| refresh_token      | Sent upon request of new access token  | String |
| client_id      | used to identify which application/client id is being used for user  | String |
| grant_type      | defines grant type to route authentication (password/refresh_token)  | String |
| scope      | scope of permissions requested  | String |

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
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' -d 'grant_type=password&email=foobar%40example.com&password=example&client_id=123456' 'https://auth.mydevices.com/oauth/token'
```

#### Single Sign On

Single sign on is provided for users as part of the authentication procedure. When a user has successfully logged in, the authorization server will create a secure cookie for that user only at the authorization domain. When the user returns to the authorization server whether for the same application or a different one, if the cookie is present, the user not be forced to login again and be redirected back to the source application as normal. This session will be valid for one week at which point the user will be forced to login again.

### API

All other generic calls are provided through **``platform.mydevices.com``**.

Each request must include an Authorization and API version header, for example:

| Header | Value  |
|-------|-------------------------------------------|
| Authorization | Bearer JWT_TOKEN |
| X-API-Version | 1.0 |

Various response messages for all requests

#### Thing type

##### Register your device type id by submitting thing type

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/v1.1/things/types</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| name      | thing type name. Example: Arduino, Raspberry Pi, Actuator. Required.  | String |
| description      | A brief description that can be displayed to the user. Required.  | String |
| model      | Details about model of the device. Optional.  | String |
| version      | Versioning. Optional.  | String |
| manufacturer      | Manufacturer information. Optional  | String |
| transport_protocol      | Default is mqtt. Other supported protocols are: tcp, http  | String |
| protocol_version      | 1.1  | String |
| category      | Values: 'sensor','actuator','computer','module'  | String |
| subcategory      | Examples: lora, raspberrypi, arduino  | String |
| data_type      | Can be a certain data type that was added to our system  | String |

**Response 200**

```
{
	"id": "878b4d60-3b52-11e7-a1d3-3b7a6118b612",
	"created_at": "2017-05-17T22:45:30.000Z",
	"updated_at": "2017-05-17T22:45:30.000Z",
	"name": "test name 2",
	"description": "test description 2",
	"transport_protocol": "mqtt",
	"category": "computer",
	"child_constraint": "ALLOWED",
	"parent_constraint": "NOT_ALLOWED"
}
```

##### Retrieve thing types

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/v1.1/things/types</td>
</tr>
</tbody>
</table>

**Response**

```
[
	{
		"id": "e74b5e10-3b53-11e7-8c1d-99e76be77663",
		"name": "ExuinoBeta",
		"description": "ExuinoBeta",
		"category": "computer",
		"subcategory": null,
		"parent_constraint": "NOT_ALLOWED",
		"child_constraint": "ALLOWED",
		"model": null,
		"version": null,
		"manufacturer": null,
		"transport_protocol": "mqtt",
		"protocol_version": null,
		"created_at": "2017-05-17T22:55:20.000Z",
		"updated_at": "2017-05-17T22:55:20.000Z",
		"data_type": null,
		"proxy_handler": null
	}
]
```
##### Retrieve a thing type

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/v1.1/things/types/{typeId}</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| typeId      | type id  | String (UUID) |

**Response**

```
{
	"id": "e74b5e10-3b53-11e7-8c1d-99e76be77663",
	"name": "Exuino beta",
	"description": "ExuinoBeta",
	"category": "computer",
	"subcategory": null,
	"parent_constraint": "NOT_ALLOWED",
	"child_constraint": "ALLOWED",
	"model": null,
	"version": null,
	"manufacturer": null,
	"transport_protocol": "mqtt",
	"protocol_version": null,
	"created_at": "2017-05-17T22:55:20.000Z",
	"updated_at": "2017-05-17T22:55:20.000Z",
	"data_type": null,
	"proxy_handler": null
}
```

##### Update a thing type

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #d17e14; color: #ffffff;"><b>PUT</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #fce5cd; color: #000000;">/v1.1/things/types/{type_id}</td>
</tr>
</tbody>
</table>

#### Mqtt client

##### Create a thing mqtt client credentials

All items within an application will share same mqtt credentials by default.
At a later release the system will provide mqtt credentials per item or per thing type.
Use the same request to also retrieve the credentials.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/v1.1/clients</td>
</tr>
</tbody>
</table>

**Response**

```
{
	"id": "67027a80-aa9a-11e6-be77-ad344203fbf7",
	"clear_secret": "356410f5ea38448f96073bbbdb77c9e0e286f698"
}
```

In order to create an mqtt connection to our servers use parameters from table below.

| Parameter	| Description |
|--------------------|--------------------|
| Server      | mqtt.mydevices.com  |
| Server port   | 1883  |
| Server   | 1883  |
| Websockets port   |   |
| Username   | “id” retrieved from POST /v1.1/clients  |
| Password   | “clear_secret” retrieved from POST /v1.1/clients  |
| Client id   | Thing “id” that you created with POST /v1.1/things  |

#### Things

Everything in myDevices IoT that connects to our platform is categorized as a “thing”. Things have properties, values, and functions. 

| HTTP Status Code	| Reason |
|--------------------|--------------------|
| 200      | Operation success  |
| 201   | Object added  |
| 400   | Bad Request: payload validation  |
| 401   | Unauthorized: Invalid or expired token used.  |

##### Create

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/v1.1/things </td>
</tr>
</tbody>
</table>

POST /v1.1/clients must be called before creating a thing.

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| name      | thing name  | String |
| device_type_id      | Id of the device type being added, default set to generic.  | String |
| properties      | JSON object of device properties or device specific settings.  | String |
| active      | Disable or Enable  | String |
| status      | Active, Deactivated, Blocked  | String |
| parent_id      | Establish device hierarchy by specifying a parent thing id.  | String |

**Response**

```
{
  “id”: “UUID”,
  "name": "string",
  "device_type_id": "string",
  "parent_id": "string",
  "hardware_id": "string",
  "properties": {},
  "active": 0,
  "status": "string",
  "last_online": 0
}
```

##### Batch provision single type of devices

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/v1.1/things/registry/batch</td>
</tr>
</tbody>
</table>

There is a limit of 500 devices that can be provisioned at a time. 

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| device_type_id      | Id of the device type being added, default set to generic.  | String |
| hardware_ids      | Device IMEI, Serial Number in a array. Length must match count parameter if hardware_ids are provide.  | String |
| count      | Number of devices to be activated. Limited to 500  | Number |
| codec      | Codec to be provided for lora devices  | String |
| response_csv      | Defaults to false meaning that the response is usual in json format.  | Boolean |

**Response**

Either in csv or json format depending on response_csv parameter.

```
[
	{
		"id": "fcbbc900-508f-11e7-8dac-05888f0195a1",
		"application_id": null,
		"hardware_id": null,
		"device_type_id": "35d8719a-b1c6-4b0d-bf8e-075825aa6015",
		"codec": "some.codec.name",
		"status": "PENDING",
		"created_at": "2017-06-13T23:28:20.000Z"
	},
	{
		"id": "fcbbf010-508f-11e7-8dac-05888f0195a1",
		"application_id": null,
		"hardware_id": null,
		"device_type_id": "35d8719a-b1c6-4b0d-bf8e-075825aa6015",
		"codec": "some.codec.name",
		"status": "PENDING",
		"created_at": "2017-06-13T23:28:20.000Z"
	}
]
```

##### Batch provision multiple types of devices

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/v1.1/things/registry/csv</td>
</tr>
</tbody>
</table>

There is a limit of 500 devices that can be provisioned at a time. 
The provisioned devices in this format can have different device types.

CSV File content per columns:
File parameter name: file

| Column	| Description |	Type |
|--------------------|--------------------|---|
| hardware_id      | Device IMEI, Serial Number  | String |
| device_type_id      | Id of the device type being added, default set to generic.  | String |
| codec      | Codec to be provided for lora devices  | String |

Form variables:

| Variable	| Description |	Type |
|--------------------|--------------------|---|
| response_csv      | Defaults to false meaning that the response is usual in json format.   | String |


##### Pair a thing that was provisioned

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/v1.1/things/pair</td>
</tr>
</tbody>
</table>

In order to activate an already provisioned device - registered device call the pair route you need to login into user account and use that token.
The device will be asociated with the user account.

Form variables:

| Variable	| Description |	Type |
|--------------------|--------------------|---|
| hardware_id      | The hardware id that was added in the prebatch list. Can be DEVEUI, IMEI or other serial number.   | String |
| name      | optional thing name  | String |

##### List Things

Returns a collection of things associated with user or application. Only things with ``status`` set to *ACTIVE* will be provided.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/v1.1/things</td>
</tr>
</tbody>
</table>

**Response**

```
[{
  “id”: “UUID”,
  "name": "string",
  "device_type_id": "string",
  "parent_id": "string",
  "hardware_id": "string",
  "properties": {},
  "active": 0,
  "status": "string",
  "last_online": 0
}, …]
```

##### Get single thing

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/v1.1/things/{thingId}</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| thingId      | thing id  | String (UUID) |

**Response**

```
{
  “id”: “UUID”,
  "name": "string",
  "device_type_id": "string",
  "parent_id": "string",
  "hardware_id": "string",
  "properties": {},
  “children”: [ Collection of things if parent ],
  "active": 0,
  "status": "string",
  "last_online": 0
}
```

##### Get single thing

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/v1.1/things/{thingId}</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| thingId      | thing id  | String (UUID) |

**Response**

```
{
  “id”: “UUID”,
  "name": "string",
  "device_type_id": "string",
  "parent_id": "string",
  "hardware_id": "string",
  "properties": {},
  “children”: [ Collection of things if parent ],
  "active": 0,
  "status": "string",
  "last_online": 0
}
```

##### Update thing

This endpoint supports partial updates for thing’s attributes.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #d17e14; color: #ffffff;"><b>PUT</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #fce5cd; color: #000000;">/v1.1/things/{thing_id}</td>
</tr>
</tbody>
</table>

**Parameters**

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| **name**      | thing name  | String |
| device_type_id      | Id of the device type being added, default set to generic.  | String |
| properties      | JSON object of device properties or device specific settings.  | String |
| active      | Disable or Enable  | String |
| **status**      | Active, Deactivated, Blocked  | String |
| parent_id      | Establish device hierarchy by specifying a parent thing id.  | String |

**Response**

```
{
  “id”: “UUID”,
  "name": "string",
  "device_type_id": "string",
  "parent_id": "string",
  "hardware_id": "string",
  "properties": {},
  “children”: [ Collection of things if parent ],
  "active": 0,
  "status": "string",
  "last_online": 0
}
```

##### Remove thing

This endpoint does not actually removes a thing object from the database. Instead, the ``status`` attribute is set to *DEACTIVATED*.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #cc0000; color: #ffffff;"><b>DELETE</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #f4cccc; color: #000000;">/v1.1/things/{thing_id}</td>
</tr>
</tbody>
</table>

##### Sending a command to a mqtt channel through HTTP api

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/v1.1/things/{thingsId}/cmd</td>
</tr>
</tbody>
</table>

**Request application/json**

```
{
  "value": 0,
  "channel": “3”
}
```

**Response  application/json**

```
{
	"success": true
}
```

#### Jobs

Jobs is an API that allows consumers to create scheduled events with an action and/or notification to a user.

**Data Parameter Objects and Arrays**

| Job Object	| Description |	Type |
|--------------------|--------------------|---|
| \_id      | Unique Job id  | String UUID |
| updated_at      | Date and time in which Job was last updated  | Date Object |
| created_at      | Date and time in which Job was created  | Date Object |
| title      | Title of the Job  | String |
| account_id      | Account Id in which the Job was created under<br/>Retrieved from JWT authentication  | String |
| next_runtime      | Date and time in which Job will execute next (**UTC Time**)  | Date Object |
| \_\_v      |   | Int |
| **config** \*      | Job scheduling configuration  | Object |
| **notifications**      | Collection of Job notifications  | Object Array |
| **http_push**      | Collection of Job HTTP executions  | Object Array |
| **actions**      | Collection of Job actions to perform on specified thing  | Object Array |
| active      | Indicates if Job is active, default true  | Boolean |

| Config Object	| Description |	Type |
|--------------------|--------------------|---|
| interval      | Indicates how often Job will repeat if interval type  | Int |
| start_date      | Date and time for Job’s first execution (**UTC Time**)  | Date Object |
| tz      | The scheduled Job’s timezone  | String |
| type      | Indicates if Job repeats or executes once (interval or date)  | String |
| unit      | Indicates interval unit type (minute, hour, day, month, year)  | String |

| Notifications	| Description |	Type |
|--------------------|--------------------|---|
| \_id      | Unique Job id  | String UUID |
| Method      | Type of notification Job will execute  | String |
| Value      | Indicates who will receive the job notification  | String |

| HTTP Collections	| Description |	Type |
|--------------------|--------------------|---|
| \_id      | Unique Job id  | String UUID |
| url      | URL for REST call  | String |
| method      | REST method  | String |
| headers      | Headers for REST call  | Object |
| payload      | Payload for REST call  | Object |

| Actions Collections	| Description |	Type |
|--------------------|--------------------|---|
| \_id      | Unique Job id  | String UUID |
| thing_id      | Unique thing id  | String UUID |
| sensor_id      | Unique sensor id  | String UUID |
| unit      | Sensor unit type  | String |
| value      | Sensor value received upon Job’s execution  | String |
| channel      | Sensor’s channel  | String |

\* *required for POST/PUT calls*

##### Create a Job

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/v1.1/jobs</td>
</tr>
</tbody>
</table>

**Request**

```
{
	“title”: “My Event”,

	“config”: {
		“interval”: 1,
		“start_date”: “2017-04-28 04:16”,
		“tz”: “America/Los_Angeles”,
		“type”: “interval”,
		“unit”: “hour”
	},
	“notifications”: [
		{
			“method”: “email”,
			“value”: “event@event.com” 
		},
		{
			“method”: “sms”,
			“value”: “3101234567
		}
	],
	“http_push”: [
		{ 
			"url": "http://random.api.com/job",
			“method”: “POST”,
			“headers”: {
				“Content-Type”: “application/json”
			},
			“payload”: {
				“variable”: 1,
				“sample”: 2
			}
		}
	],
	“actions”: [{ 
		“thing_id”: “12345678-0000-0000-0000-000000000000”,
		“sensor_id”: “987654321-0000-0000-0000-000000000000”,
		“unit”: “float”,
		“value”: “25”,
		“channel”: “0”
	}],
}
```

**Response** 200 (application/json)

##### List Jobs

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/v1.1/jobs</td>
</tr>
</tbody>
</table>

**Response**

```
{
	“_id”: “String”,
	“updated_at”: Date,
	“created_at”: Date,
	“title”: “String”,
	“account_id”: “String”,
	“next_runtime”: Date,
	“__v”: int,
	“config”: {
		“interval”: int,
		“start_date”: “String”,
		“tz”: “String”,
		“type”: “String”,
		“unit”: “String”
	},
	“notifications”: [{ Collection of Notifications }],
	“http_push”: [{ Collection of HTTP Events }],
	“actions”: [{ Collection of Actions }],
	“active”: true
},
{ Job 1 },
..
..
{ Job n }
```

##### List a Single Job

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/v1.1/jobs/{jobId}</td>
</tr>
</tbody>
</table>

| URL Parameter	| Description |	Type |
|--------------------|--------------------|---|
| jobId      | Unique Job id  | String UUID |

**Response**

```
{
	“_id”: “String”,
	“updated_at”: Date,
	“created_at”: Date,
	“title”: “String”,
	“account_id”: “String”,
	“next_runtime”: Date,
	“__v”: int,
	“config”: {
		“interval”: int,
		“start_date”: “String”,
		“tz”: “String”,
		“type”: “String”,
		“unit”: “String”
	},
	“notifications”: [{ Collection of Notifications }],
	“http_push”: [{ Collection of HTTP Events }],
	“actions”: [{ Collection of Actions }],
	“active”: true
}
```

##### Update an Existing Job

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #d17e14; color: #ffffff;"><b>PUT</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #fce5cd; color: #000000;">/v1.1/jobs/{jobId}</td>
</tr>
</tbody>
</table>

| URL Parameter	| Description |	Type |
|--------------------|--------------------|---|
| jobId      | Unique Job id  | UUID |

**Request**

```
{
	“title”: “String”,

	“config”: {
		“interval”: int,
		“start_date”: “String”,
		“tz”: “String”,
		“type”: “String”,
		“unit”: “String”
	},
	“notifications”: [{ Collection of Notifications }],
	“http_push”: [{ Collection of HTTP Events }],
	“actions”: [{ Collection of Actions }],
}
```

##### Delete a Job

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #cc0000; color: #ffffff;"><b>DELETE</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #f4cccc; color: #000000;">/v1.1/jobs/{jobId}</td>
</tr>
</tbody>
</table>

| URL Parameter	| Description |	Type |
|--------------------|--------------------|---|
| jobId      | Unique Job id  | UUID |

**Response** Response 200 (application/json)

#### Rules

Rules is a simple API allowing consumers to get rules and update them.

Rules Collection [/v1.1/rules]

##### Create a New Rule

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #79ae3d; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #d9ead3; color: #000000;">/v1.1/rules</td>
</tr>
</tbody>
</table>


You may create your own rules using this action. It takes a JSON object containing a rule and certain fields.
If an account is not available in token it can be provided in payload by “account_id”.

| Parameter	| Description |	Type |
|--------------------|--------------------|---|
| title      | rule name  | String |
| account_id      | Account that rule belongs to  | String |
| enabled      | Rule should run or not  | Boolean |
| triggers      | JSON object of device properties and operators. Currently supported just one.  | Objects Array |
| actions      | Execution to other things actions. Currently supported just one.  | Objects Array |
| notifications      | Email, sms and (not yet available) push notifications  | Objects Array |
| http_push      | Http push to 3rd party services  | Objects Array |

**Request**

```
{
  "enabled": true,
  "account_id": "163200",	
  "title": "My first rule",
  "triggers": [
	{
		"conditions" : [
			{
				"value" : "15",
				"operator" : "gt"
			},
			{
				"value" : "30",
				"operator" : "lt"
			}
		],
		"geofence" : false,
		"channel" : "101",
		"unit" : "c",
		"id" : "23ebc530-52e2-11e7-ab9c-b78f223d8c0b"
	}
  ],
  "actions": [
    {
      "id": "parent_device_id",
      "channel": "some_channel_id",
      "unit": "std",
      "value": 0
    }
  ],
  "notifications": [
    {
      "method": "sms",
      "value": "+10213543213",
	  "body": "Some sms body"
    }
  ],
  "http_push": [
    {
      "url": "string",
      "method": "POST",
      "payload": {},
      "headers": {}
    }
  ]
}
```

Allowed notifications methods are: sms and email.
Http push is pending for support.

**Response** 200 (application/json)

\+ Body

```
{
	"id": "590667539f234af837fabcf9"
}
```

##### List All Rules

Retrieves all rules from associated to an account. 
If an account is not available in token it can be provided in query parameters by “account_id”.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/v1.1/rules</td>
</tr>
</tbody>
</table>

**Response** 200 (application/json)

##### List a Rule

List a rule by id. 
If an account is not available in token it can be provided in query parameters by “account_id”.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>GET</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">/v1.1/rules/{rule_id}</td>
</tr>
</tbody>
</table>

**Response** 200 (application/json)

```
{
  "enabled": true,
  "title": "My first rule",
  "account_id": "163200",
  "triggers": [
	{
		"conditions" : [
			{
				"value" : "15",
				"operator" : "gt"
			},
			{
				"value" : "30",
				"operator" : "lt"
			}
		],
		"geofence" : false,
		"channel" : "101",
		"unit" : "c",
		"id" : "23ebc530-52e2-11e7-ab9c-b78f223d8c0b"
	}
  ],
  "actions": [
    {
      "id": "parent_device_id",
      "channel": "some_channel_id",
      "unit": "std",
      "value": 0
    }
  ],
  "notifications": [
    {
      "method": "sms",
      "value": "+10213543213",
	  "body": "Some sms body"
    }
  ],
  "http_push": [
    {
      "url": "string",
      "method": "POST",
      "payload": {},
      "headers": {}
    }
  ]
}
```

##### Update a Rule

Updates an existing rule by id.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #d17e14; color: #ffffff;"><b>PUT</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #fce5cd; color: #000000;">/v1.1/rules/{rule_id}</td>
</tr>
</tbody>
</table>

**Request** (application/json). Account_id is optional only for management applications.

```
{
	    "title":"TEST3",
		"triggers": [
			{
				"conditions" : [
					{
						"value" : "15",
						"operator" : "gt"
					},
					{
						"value" : "30",
						"operator" : "lt"
					}
				],
				"geofence" : false,
				"channel" : "101",
				"unit" : "c",
				"id" : "23ebc530-52e2-11e7-ab9c-b78f223d8c0b"
			}
		]
}
```

**Response** 200 (application/json)

```
{
	"success": true
}
```

##### Delete a Rule

Delete existing rule by id.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #cc0000; color: #ffffff;"><b>DELETE</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #f4cccc; color: #000000;">/v1.1/rules/{rule_id}</td>
</tr>
</tbody>
</table>

**Parameters:** account_id is optional for management applications

**Response** 200 (application/json)

```
{
	"success": true
}
```

## iOS SDK Reference

The Cayenne iOS SDK is the easiest way to connect your custom iOS app to Cayenne using the Cayenne Cloud API. In this section you will find information on obtaining the SDK, getting setup to use it, and links to additional resources that will help you in using it in your product.

### Using the iOS SDK

#### Downloading the SDK

#### Configure Xcode IDE

In this section we will walk you through configuring the **Xcode** IDE to utilize the Cayenne Cloud API.

```
Here we would walk the user through configuring the Xcode IDE so that the user is ready to use the iOS SDK with their project.

Brent & Tim to work together to create this info.
```

### iOS SDK on GitHub

```
Here we would have the SDK Reference. If we are going to include each function (as we do with the HTTP API Reference section), this is where it would go. But it sounds like Tim is documenting the source and we could just link to that on our GitHub. For now, I've written some generic text and this can serve as the text for this section unless something changes.

Brent & Tim to update this section based on whatever is finalized for iOS Reference documentation.
```

The Cayenne iOS SDK contains code documentation for each function. You can refer to the documentation included with the SDK. For ease of reference, you can find find a hosted version of this [documentation on our github](TODO: link to external source).

As the Cayenne mobile app SDKs are wrappers around the Cayenne Cloud API, you may also wish to refer to the raw [Cayenne Cloud API documentation](#cayenne-cloud-api-using-the-cayenne-api), and in particular to the [API reference section](#cayenne-cloud-api-using-the-cayenne-http-api-api-reference) which covers each function available in the API.

## Android SDK Reference

```
This would be similar info as for iOS. For now it will either not be included or will have a Coming Soon note.
```

*Coming Soon!*

### Using the Android SDK
#### Downloading the SDK
### Android SDK on GitHub
