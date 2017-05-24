# Cayenne API

## Overview

The Cayenne API allows for interacting and creating applications using the myDevices IoT RESTful API.  REST is a lightweight, stateless web service standard that myDevices IoT provides to partners and customers. Our REST API is secured with OAuth2 standard, which offers increased security by using JWT access tokens. In addition to Authorization and Authentication mechanism, we encrypt all transport communications with TLS/SSL endpoints.

## Preparing to use the API

### Create a Cayenne account

In order to use the Cayenne API, you will need to first create a Cayenne account. Visit the <a href="http://www.cayenne-mydevices.com/" target="_blank">Cayenne website</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/get-started-for-free.png" width="660" height="438" alt="get started for free"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/account-sign-up.png" width="660" height="438" alt="account sign up"><br/><br/></p>

### Obtain your Cayenne API Key

Before you can use the Cayenne API you will need to obtain your **App Key** and **App Secret**. In order for your custom application to successfully connect with Cayenne you will need to provide these keys when using the Cayenne API.

*TIP: For more information how these keys are used, see the [Authentication section](#cayenne-api-http-api-reference-using-the-http-api-authenticating) of the HTTP API documentation.*

To obtain your keys, log into your account and select **Create App**. The *App Credentials* page that appears contains your keys. Copy & paste the **App Key** and **App Secret** into your code.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524085816/Caynne-API-Create-App.png" width="660" height="415" alt="Create App example"><br/><br/></p>

## Using the API

In this section you will find examples of how to put the Cayenne API into use.

- [Example Walkthrough](#cayenne-api-using-the-api-example-walkthrough): Guides you through using each feature of the API, covering a real example found in our Tank Monitoring Sample App.
- [Samples](#cayenne-api-using-the-api-samples): Links to additional sample solutions found on our GitHub.

In addition to the examples provided, you will find additional code snippets and notes throughout the API References. You may also wish to refer to the appropriate reference information for the API or SDK that you are using in our project.

- [Cayenne HTTP API Reference](#cayenne-api-http-api-reference)
- Mobile App SDKs
   - [iOS SDK Reference](#cayenne-api-ios-sdk-reference)
   - [Android SDK Reference](#cayenne-api-android-sdk-reference)

### Example Walkthrough

In this section we will cover practical examples of putting the Cayenne API into use. We will demonstrate each feature found in the Cayenne API, showing you images and code from examples found in our Tank Monitoring sample app.

```
In this section we will cover all the features of the Cayenne public API. We can use the Sample App by default for most items.

The goal here is to have Brent provide basic Text covering what we're showing, Images of the Sample App and then code snippets provided by Dev that demonstrate actual usage of the API. This mixture provides the most useful experience and makes it easy to read and follow.
```

#### Creating an account

Let's take a look at the Sample App and how we can use the Cayenne API to create a new account. To begin, the user is asked to provide the necessary account information used to create the new account.

**TODO: Image of Sample App, account creation screen**

Once we have the information from the user, we can use the Cayenne API to create the new account. If the account creation is successful, we can proceed with logging the user into their account.

```
Dev to provide Sample App - account creation code example code to be put here.

0. Example code for creating an account using fake info supplied by a user.
1. Example output of successful account creation.
```

If the account creaiton fails, we can then take action such as displaying an error to the user for correction.

```
Dev to provide additional output showing error during account creation - Please use 'account already exists' so that in our next tutorial we can guide the user through resetting their password.
```

**TODO: Image of Sample App, account creation error 'account already exists' message shown**

#### Reset Password

In the event that a user has forgotten their password or needs to change it, we can use the Cayenne API to reset the password. Let's take a look at the Sample App once again and examine how it deals with this scenario. The process begins with the Sample App requesting the user's existing account credentials. We will need this information to proceed.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524083818/Restaurant-iPhone_LogIn-1-3.png" width="346" height="615" alt="Sample App Forgot password screen"><br/><br/></p>

```
Dev to provide example code showing a call using the account info provided by the user from the Sample App - Forgot Password screen to reset their password.
```

#### Logging into account

Once the user has a valid account, they will need to be logged in to continue. Let's take a look at how this is accomplishd with the Sample App.

##### Logging in after account creation

The Sample App automatically logs a user into their account after having just created the user's account. This is a common user experience given that the user has already supplied their account credentials to the app. Let's build upon the [Create account](#cayenne-api-using-the-api-example-walkthrough-creating-an-account) example done earlier and see how the Cayenne API can be used to automatically log the user in.

```
Dev to provide example code that builds upon the previous 'Create Account' example and logs the user into their account.
```

##### Logging into existing account

In the event that a returning user is logging into an existing account, they can also use the Cayenne API to log into their account. Let's take a look at the Sample App and how it asks the user for their account credentails. We will then take a look at how the Cayenne API logs the user into their account using this information.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084310/Restaurant-iPhone_LogIn-1-2.png" width="346" height="615" alt="Sample App Login screen"><br/><br/></p>

```
Dev to provide example code showing a call using the account info provided by the user from the Sample App - Login screen to log into their account.
```

#### Provisioning Devices

Before a device can be [activated](#cayenne-api-using-the-api-example-walkthrough-activating-a-device) in Cayenne, it must first be provisioned. In this section we'll examine some common scenarios for provisioning devices.

*Note: Provisioning of devices is done in the Cayenne backend services and as such this step of the process does not get exposed to the end user. That said, the __Hardware IDs__ generated from this provisioning step do get entered into fields by the user later during the [Activating a Device](#cayenne-api-using-the-api-example-walkthrough-activating-a-device) step.*

##### Provision single Devices

Devices can be provisioned one at a time, allowing for tasks such as one-off or on demand provisioning of devices. Let's provision several devices which we will continue to use throughout the rest of our examples.

```
Dev to provide example code that demonstrates how to provision a single device using the API. We should show multiple examples here (even if they are the same call but generating different output Hardware IDs). These will be used later in examples of device activation, device data history, etc.

0. Example in/out for a sample Gateway Device.
1. Example in/out for Temperature Sensor.
2. Example in/out for Door Lock Actuator.
```

##### Bulk Provisioning Devices

If you have multiple devices that need to be provisioned, the Cayenne API allows you to batch or bulk provision the devices. Let's provision the same devices as seen in the [Single Device](#cayenne-api-using-the-api-example-walkthrough-provisioning-a-device-provision-single-devices) example, only this time we'll provision them all at once.

**Note: There is a limit of 500 devices that can be provisioned at a time.**

```
Dev to provide example code that demonstrates how to bulk provision devices using the Cayenne API. The example shown here should bulk provision the same 3 devices used in the preceeding 'Single device' example. That way the user can see how to do them one a time or all in one, but it will be the same Hardware IDs generated for use in the examples that follow.
```

#### Activating a Device

Once our devices have been provisioned, they can then be activated and become available for users to use. Let's examine the Sample App and see how it asks the user for the required device information and then take a look at the Cayenne API to see how device activation is accomplished.

*NOTE: Notice how the user is asked for the __Gateway ID__ or __Sensor ID__ during the activation process. This ID is the __Hardware ID__ generated earlier during the device provisioning step.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084436/Restaurant-iPhone_AddGateway-1-2.png" width="346" height="615" alt="Sample App Add Gateway screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084522/Restaurant-iPhone_AddSensor-1-2.png" width="346" height="615" alt="Sample App Add Sensor screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524104638/Restaurant-iPhone_AddSensor-1-1.png" width="346" height="615" alt="Sample App Add Sensor screen2"><br/><br/></p>

```
Dev to provide example code that demonstrates activating the same 3 devices previously provisioned using the API.

0. Gateway example.
1. Temperature Sensor example.
2. Door Lock Actuator example.
```

#### Getting Real-Time Device Data

After devices are activated and transmitting data to Cayenne, we can then query Cayenne for real-time data on our device. Let's take a look at the Sample App and see how it fetches and displays the current status of devices on the *Status* screen.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084637/Restaurant-iPhone_Dashboard-1-4.png" width="346" height="615" alt="Sample App Status screen"><br/><br/></p>

```
Dev to provide example code that demonstratse how to use the API to get the current device data from our example devices that were previously provisioned and activated.

E.g.
0. Gateway example.
1. Temperature Sensor example.
2. Door Lock Actuator example.
```

#### Remote Control

Certain devices, such as Actuators can be remotely controlled. For example, we can change the state of our example **Door Lock** and remotely *Lock* or *Unlock* the device. Let's take a look at the Sample App and the Cayenne API to see how this is accomplished.

**TODO: Image of Sample App - Manage screen with Door Actuator toggle and maybe Light Dimmer slider highlighted**

```
Dev to provide example code that demonstrates how to use the API to remotely change the state of our example Door Lock Actuator.
```

#### Getting Device History

Cayenne maintains historical information on data received for devices. Let's examine using the Cayenne API to get historical data for our example devices and some examples of how this type of data can be displayed to users.

##### Sensor History example

Tapping on a device from the Sample App's *Status* screen opens a *Device History* screen which displays historical device data. Let's explore how this is accomplished using the Cayenne API.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084752/Restaurant-iPhone_Sensor-1-1.png" width="346" height="615" alt="Sample App Device History screen"><br/><br/></p>

```
Dev to provide example code for how the Monitor & Control Device history tab uses the Cayenne API to fetch the historical data for devices. We should have an example for both our exmaple sensor & actuator used so far in our examples.

0. Example for Temperatue Sensor history.
1. Example for Door Lock Actuator history.
```

##### Asset Tracking example

The Sample App's *Map* screen provides another great example of using historical device data in a unique way. In this case, for display of device location and status on a map. Let's take a look at the Asset Tracking feature and how the Cayenne API is used to accomplish this.

**Displaying device location on a map**

On the *Map* screen in the Sample app, the user can see the location and movement of their devices on a map. This unique presentation makes use of current and historical device information provided in the Cayenne API to visualize device location data.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524091320/Restaurant-iPhone_SensorMap-1-13.png" width="660" height="371" alt="Sample App rotated map screen"><br/><br/></p>

```
Dev to provide example code for how to the Sampe App fetches the current and past location data so that the map view can be shown to the user.

Note from Brent: How does our API make use of the Google Maps API for the map? Should we be detailing how to make use of the Google Map API in our API as well? I didn't know if this was exposed to the user, or if it is something that our API does not yet provide.
```

**Displaying historical device data on a map**

In addition to visualizing the location of the device on a map, a user can tap on a device marker to pull up additional information. Within the popup dialog that appears, the historical information on the device is used to display the status of the device and its sensors at that point in time.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524091339/Restaurant-iPhone_SensorMap-1-9.png" width="346" height="615" alt="Sample App Map screen"><br/><br/></p>

```
Dev to provide example code for how the Sampe App fetches historical device status, sensor status, etc as shown in popup opened for marker.
```

#### Alerts

Alerts allow you to receive notifications when certain conditions are met. Let's take a look at the Sample app and see how the user can create an Alert and manage existing alerts.

**Creating an Alert**

To create a new Alert, the user must specify information on what conditions should be met and who should be notified. After obtaining the information from the user, a new Alert can be created.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524100109/Restaurant-iPhone_Alert-1-4.png" width="346" height="615" alt="Sample App create alert screen"><br/><br/></p>

```
Dev to provide example code for how to create an Alert using the information obtained from the user in the Sample App.
```

**Managing Alerts**

After setting up alerts, users will want to be able to manage them. Let's take a look at the Sample App's *Alerts* screen. From this screen the user can see a list of existing alerts, information on each alert, and they can manage the alerts.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524100107/Restaurant-iPhone_Alert-1-2.png" width="346" height="615" alt="Sample App Alerts screen"><br/><br/></p>

```
Dev to provide example code for how to manange existing alerts.

0. Example code for fetching information on current status (# times run, ON/OFF, name, etc) for display on Alerts screen in Sample App.
1. Maybe example code for how to toggle an Alert on/off?
2. Maybe example code for how to update existing Alert information? E.g. user edits and saves changes.
```

#### Multi-Tenant

```
Demonstration of the multi-tenant features provided in the API. Most likely using the Monitoring & Control solution as an example?
```

### Samples

The Cayenne API repo on GitHub includes a number of samples illustrating the use of the Cayenne API in your product.

```
Dev to provide GitHub repo for Samples and a list of samples that should be linked here in docs.
```

- Sample App: We should describe and link to our sample app as the first example.
- Another Example link: Short description of what the sample provides.

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
##### Forgot password
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
##### Provision a device
```
Example of function to be documented here.
```
##### Activating a device
```
Example of function to be documented here.
```
##### Get real-time device data
```
Example of function to be documented here.
```
##### Remote Control
```
Example of function to be documented here.
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

## Android SDK Reference

```
This would be similar info as for iOS. For now it will either not be included or will have a Coming Soon note.
```

*Coming Soon!*

### Using the Android SDK
#### Downloading the SDK
### Android SDK on GitHub
