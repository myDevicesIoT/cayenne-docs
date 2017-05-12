# Cayenne API

## Overview

The Cayenne API allows for interacting and creating applications using the myDevices IoT RESTful API.  REST is a lightweight, stateless web service standard that myDevices IoT provides to partners and customers. Our REST API is secured with OAuth2 standard, which offers increased security by using JWT access tokens. In addition to Authorization and Authentication mechanism, we encrypt all transport communications with TLS/SSL endpoints.

## Preparing to use the API

### Create a Cayenne account

In order to use the Cayenne API, you will need to first create a Cayenne account. Visit the <a href="http://www.cayenne-mydevices.com/" target="_blank">Cayenne website</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/get-started-for-free.png" width="660" height="438" alt="get started for free"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/account-sign-up.png" width="660" height="438" alt="account sign up"><br/><br/></p>

### Obtain your Cayenne API Key

Before you can use the Cayenne API you will need to obtain your **Cayenne API Key**. This key will be unique at the **Account** level and you will obtain a different key for each **Application** that you create. In order for your custom application to successfully connect with Cayenne you will need to specify the API Key for that app when using the various Cayenne API function calls.

*TIP: For more information how this key is used, see the [Authentication section](#cayenne-api-using-the-cayenne-http-api-authentication) of the HTTP API documentation.*

To obtain this key, log into your account and go to X. Every application that you create in Cayenne will have its own unique API Key... 

```
[As soon as this UX exists, Brent will fill in this section in by taking 
screens and telling the user how to go about this.]
```

## Using the API

In this section you will find examples of how to put the Cayenne API into use.

- Example Walkthrough: Guides you through using each feature of the API, covering real examples found in our Sample App, the Cayenne product as well as other real-world solutions.
- Samples: Links to additional sample solutions found on our GitHub.

In addition to the examples provided, you will find additional code snippets and notes throughout the API References. You may also wish to refer to the appropriate reference information for the API or SDK that you are using in our project.

- Cayenne HTTP API Reference
- Mobile App SDK Reference
   - iOS
   - Android

### Example Walkthrough

In this section we will cover practical examples of putting the Cayenne API into use. We will demonstrate each feature found in the Cayenne API, showing you images and code from examples such as our Sample App, the Cayenne product and other real-world solutions.

#### Creating an account
#### Logging into account
#### Forgot Password
#### Provisioning a Device
#### Activating a Device
#### Getting Real-Time Device Data
#### Remote Control
#### Getting Device History
##### Monitor & Control Sensor History example
##### Cayenne Asset Tracking example
#### Creating a Trigger & Alert
#### Creating a Scheduled event
#### Multi-Tenant

### Samples

The Cayenne API repo on GitHub includes a number of samples illustrating the use of the Cayenne API in your product.

```
Dev to provide GitHub repo for Samples and a list of samples that should be linked here in docs.
```

- Example link 1: Short description of what the sample provides.
- Example link 2: Short description of what the sample provides.

### Best practices

```
Optional - If Dev has some tips and best practices, they can go here. If not, this section can be removed.

Dev to provide this information.
```

## HTTP API Reference

```
This section will cover the API function calls specifically for the HTTP API. We should cover:

0. Any Overview info on the HTTP API and how it is arranged that the user needs to know.
1. If the user needs to do any prep work to use specifically the HTTP API, cover it first. Examples here might be Authentication and Initalization?
2. List every functon call that we have in the Public API.
  A. Requirement: Group calls by feature/concept. I have stubbed out the groups here already. What's left is just to put in a list of functions underneath them.
  B. List functions available, parameters and a examples of input/output for each. Our goal for this is to match the example of documentation provide by doc sources such as particle.io
  
Dev to complete this section and all documentation located here, using the layout provided here as a base. You guys have control over what is shown here, but please synch up with Brent to verify any changes in layout.
```

### Using the HTTP API

```
Starts with discussing any topics a developer needs to know to use the web API.
```

At a glance, we have a sandbox service that provide interactivity with the API to enhance and speed development while building applications. Before using the API users or applications need to authenticate to our authentication service to obtain a token. 

#### Authenticating
```
Dev to add documenting the Authentication topics/calls needed.
```
#### Initialization
```
Dev to add documenting any Initialization topics/calls required.
```

#### Accounts
```
Dev to add list of related public API functions and informatoin for each.
```
##### Create account
```
Example of function to be documented here.
```
##### Log into account
```
Example of function to be documented here.
```
##### Remove account
```
Example of function to be documented here.
```
##### etc
```
And so forth as needed in each category of functions.
```
#### Devices
```
Dev to add list of related public API functions and information for each.
```
#### Alerts
```
Dev to add list of related public API functions and information for each.
```
#### Scheduling
```
Dev to add list of related public API functions and information for each.
```
#### Multi-tenant
```
Dev to add list of related public API functions and information for each.
```
#### History
```
Dev to add list of related public API functions and information for each.
```

## iOS SDK Reference

The Cayenne iOS SDK is the easiest way to connect your custom iOS app to Cayenne using the Cayenne API. In this section you will find information on obtaining the SDK, getting setup to use it, and links to additional resources that will help you in using it in your product.

### Using the iOS SDK

#### Downloading the SDK

#### Configure Xcode IDE

In this section we will walk you through configuring the **Xcode** IDE to utilize the Cayenne API.

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

As the Cayenne mobile app SDKs are wrappers around the Cayenne API, you may also wish to refer to the raw [Cayenne API documentation](#cayenne-api-using-the-cayenne-api), and in particular to the [API reference section](#cayenne-api-using-the-cayenne-http-api-api-reference) which covers each function available in the API.

### Android SDK Reference

```
This would be similar info as for iOS. For now it will either not be included or will have a Coming Soon note.
```

*Coming Soon!*

### Using the Android SDK
#### Downloading the SDK
### Android SDK on GitHub
