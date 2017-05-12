# Cayenne API

## Overview

```
We need to add a brief introduction to what the Cayenne API is and what 
it allows the user to do. This should be a brief general overview and 
we can save any topics related to Mobile SDK or HTTP API details to dedicated 
sections below that also include Overview sections there.

Will need Dev to provide this (or jump on a call with me to talk through) 
and I can help word-smith from there.
```

## Preparing to use the API

```
This section covers how to prepare to using the API. It contains generic info on creating the account, obtaining the key and then some jumping off point for how to read the rest of the documentation (based on whether the user proceeds with using the HTTP API or perhaps one of our mobile app SDKs.

Brent to do this section, with input as needed from Devs.
```

### Create a Cayenne account

In order to use the Cayenne API, you will need to first create a Cayenne account. Visit the <a href="http://www.cayenne-mydevices.com/" target="_blank">Cayenne website</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/get-started-for-free.png" width="660" height="438" alt="get started for free"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/account-sign-up.png" width="660" height="438" alt="account sign up"><br/><br/></p>

### Obtain your Cayenne API Key

Before you can use the Cayenne API you will need to obtain your **Cayenne API Key**. This key will be unique at the **Account** level and you will obtain a different key for each **Application** that you create. In order for your custom application to successfully connect with Cayenne you will need to specify the API Key for that app when using the various Cayenne API function calls.

*TIP: For more information how this key is used, see the [Authentication section](#cayenne-api-using-the-cayenne-http-api-authentication) of the HTTP API documentation.*

To obtain this key, log into your account and go to X. Every application that you create in Cayenne will have its own unique API Key... 

```
[As soon as this UX exists, I can fill this section in by taking 
screens and telling the user how to go about this.]
```

### Example Walkthrough

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

### Sample

## HTTP API Reference

```
This section will cover the API function calls specifically for the HTTP API. I suggest we cover the following:

0. Any Overview info on the HTTP API and how it is arranged that the user needs to know.
1. If the user needs to do any prep work to use specifically the HTTP API, cover it first. Examples here might be Authentication and Initalization?
2. List every functon call that we have in the Public API.
  A. Requirement: Group calls by "feature". E.g. Company, Location, Contacts, Gateways, Devices (Sensors, Actuators), Sensor Map, Reports, Automation, etc.
  B. List functions available, parameters and an example for each.
  C. Note that these will be referenced in the next major section, where we talk the user through each concept using the Monitor & Control solution as an example.
  
Note: I put in the list of groups & function calls that Spring already has in their API documentation. This seemed like a good base and it already kind of has the organization that Product wants to see it in. http://restaurant-springteam.mydevices.com:8082/documentation

Dev to complete this section and all documentation located here, using the layout provided here as a base.
```

### Using the HTTP API

#### Authenticating
```
Dev to add documenting the Authentication calls needed.
```
#### Initialization
```
Dev to add documenting any Initialization required.
```

#### Accounts
##### Create account
##### Log into account
##### Remove account
##### etc
#### Devices
#### Alerts
#### Scheduling
#### Multi-tenant
#### History


## iOS SDK Reference

```
This section would describe how to access the iOS SDK, how to prepare it for use and how to reference it's specific documentation.

I have added some basic info for now and this can evolved as needed.
```

The Cayenne iOS SDK is the easiest way to connect your custom iOS app to Cayenne using the Cayenne API. In this section we will walk you through configuring the **Xcode** IDE to utilize the Cayenne API. We will then walk through several examples of common tasks using the API.

*TIP: The walk through present here will only cover some of the common tasks and thus will not cover every function available in the mobile app SDK. You may also wish to refer to the [Cayenne iOS SDK reference documentation](#cayenne-api-using-the-cayenne-ios-sdk-sdk-reference) for additional reference on available functionality found in the SDK.*

### Using the iOS SDK

#### Configure Xcode IDE

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
### Android SDK on GitHub
