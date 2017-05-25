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

- [Example Walkthrough](#cayenne-api-using-the-api-example-walkthrough): Guides you through using each feature of the API, covering an example found in our Tank Monitoring Sample App.
- [Samples](#cayenne-api-using-the-api-samples): Links to additional sample solutions found on our GitHub.

In addition to the examples provided, you will find additional code snippets and notes throughout the API References. You may also wish to refer to the appropriate reference information for the API or SDK that you are using in our project.

- [Cayenne HTTP API Reference](#cayenne-api-http-api-reference)
- Mobile App SDKs
   - [iOS SDK Reference](#cayenne-api-ios-sdk-reference)
   - [Android SDK Reference](#cayenne-api-android-sdk-reference)

### Example Walkthrough

In this section we will cover practical examples of putting the Cayenne API into use.

The example walkthrough shown here is arranged as a narrative that walks you through the various API-related topics required to implement each screen found in the **Tank Monitoring sample app**. After covering the sample app, we will discuss some additional API features.

1. **[Creating an account](#cayenne-api-using-the-api-example-walkthrough-creating-an-account)** - Creating a new account.
2. **[Logging into an account](#cayenne-api-using-the-api-example-walkthrough-logging-into-account)** - Log into our account.
3. **[Resetting password](#cayenne-api-using-the-api-example-walkthrough-reset-password)** - Resetting the account password.
4. **[Provisioning devices](#cayenne-api-using-the-api-example-walkthrough-provisioning-devices)** - Provisioning a device so that it can be later activated.
5. **[Activating devices](#cayenne-api-using-the-api-example-walkthrough-activating-a-device)** - Activating devices.
6. **[Get real-time device data](#cayenne-api-using-the-api-example-walkthrough-getting-real-time-device-data)** - Fetching device status and current device data.
7. **[Remote control](#cayenne-api-using-the-api-example-walkthrough-remote-control)** - Controlling devices remotely.
8. **[Device History](#cayenne-api-using-the-api-example-walkthrough-getting-device-history)** - Fetching historical device data.
9. **[Alerts](#cayenne-api-using-the-api-example-walkthrough-alerts)** - Creating and managing Alerts.
10. **[Multi-Tenant](#cayenne-api-using-the-api-example-walkthrough-multi-tenant)** - Creating and managing Users.

#### Creating an account

In order to use the Tank Monitoring sample app, users are reqired to have an account. If they do not already have an account, they can create one directly from the app. To begin, the user is asked to provide the necessary account information used to create the new account.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524163604/Tank-Monitoring-Create-account2.png" width="346" height="615" alt="Sample App Create Account 1"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524163607/Tank-Monitoring-Create-account3.png" width="346" height="615" alt="Sample App Create Account 2"><br/><br/></p>

Once we have the information from the user, we can use the Cayenne API to create a new account. If the account creation is successful, we can proceed with logging the user into their account.

```
Dev to provide Sample App - account creation code example code to be put here.

0. Example code for creating an account using fake info supplied by a user.
1. Example output of successful account creation.
```

#### Logging into account

Once the user has a valid account, they will need to be logged in to continue. This is handled in the sample app in one of two ways:

1. **[Log in after account creation](#cayenne-api-using-the-api-example-walkthrough-logging-into-account-logging-in-after-account-creation)** - How to log in automatically after account creation.
2. **[Log in to existing account](#cayenne-api-using-the-api-example-walkthrough-logging-into-account-logging-into-existing-account)** - Log in to a returning users account.

##### Logging in after account creation

The Tank Monitoring sample app automatically logs a user into their account after having just created the user's account. After being logged in, the user remains logged in until they log out of the app. This is a common user experience given that the user has already supplied their account credentials to the app. Let's build upon the [Create account](#cayenne-api-using-the-api-example-walkthrough-creating-an-account) example done earlier and see how the Cayenne API can be used to automatically log the user in.

```
Dev to provide example code that builds upon the previous 'Create Account' example and logs the user into their account.
```

##### Logging into existing account

After logging out of the app, returning users will want to log into their existing account. Let's take a look at how the Tank Monitoring sample app and asks the user for their account credentails. We will then examine how the Cayenne API can be used to log the user into their existing account using the information provided.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084310/Restaurant-iPhone_LogIn-1-2.png" width="346" height="615" alt="Sample App Login screen"><br/><br/></p>

```
Dev to provide example code showing a call using the account info provided by the user from the Sample App - Login screen to log into their account.
```

#### Reset Password

In the event that a user has forgotten their password, the Cayenne API can be used to reset the password. Let's take a look at the Tank Monitoring sample app and examine how it deals with this scenario.

**Generate password reset email**

In order to reset the user's password, we first need to know the users login information. After providing this information, we can use the Cayenne API to generate and send an email containing a password reset link.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524083818/Restaurant-iPhone_LogIn-1-3.png" width="346" height="615" alt="Sample App Forgot password screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524164225/Tank-Monitoring-Reset-Password.png" width="346" height="615" alt="Sample App Password reset email confirmation"><br/><br/></p>

```
Dev to provide example code showing a call using the account info provided by the user from the Sample App - Forgot Password screen to generate this link/email.
```

**Changing the password**

The password reset email that the user receives includes a link that they can use to reset their password. Following this link takes the user to a screen where they can create a new password. Let's take a look at how the Cayenne API uses the password reset link and the user's desired new password to change the password.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524164522/Tank-Monitoring-Change-password-web.png" width="256" height="210" alt="Example new password creation web page"><br/><br/></p>

```
Dev to provide example code showing Cayenne API call to change the user's password.
```

#### Provisioning Devices

Before a device can be activated using the Cayenne API, it must first be provisioned. Provisioning a device prepares the Cayenne backend to activate the device and generates the **Hardware IDs** that are required during the [Device Activation](#cayenne-api-using-the-api-example-walkthrough-activating-a-device) process.

Let's provision an example Gateway, Sensor and Actuator which we will continue to use throughout the rest of our examples. The Cayenne API provides different ways for us to provision these devices.

- **[Provision devices one at a time](#cayenne-api-using-the-api-example-walkthrough-provisioning-devices-provision-single-devices)** - How to provision devices one at a time.
- **[Bulk provision the devices](#cayenne-api-using-the-api-example-walkthrough-provisioning-devices-bulk-provisioning-devices)** - How to provision multiple devices at once.

##### Provision single Devices

Devices can be provisioned one at a time, allowing for tasks such as one-off or on demand provisioning of devices. Let's examine using the Cayenne API to provision our example devices, one at a time.

```
Dev to provide example code that demonstrates how to provision a single device using the API. We should show multiple examples here (even if they are the same call but generating different output Hardware IDs). These will be used later in examples of device activation, device data history, etc.

0. Example in/out for a sample Gateway Device.
1. Example in/out for Tank Level Sensor.
2. Example in/out for an Door ("Gate") Lock Actuator.
```

##### Bulk Provisioning Devices

If you have multiple devices that need to be provisioned, the Cayenne API allows you to batch or bulk provision the devices. Let's provision the same devices as seen in the [Single Device](#cayenne-api-using-the-api-example-walkthrough-provisioning-a-device-provision-single-devices) example, only this time we'll see how they can be provisioned all at once.

**Note: There is a limit of 500 devices that can be provisioned at a time.**

```
Dev to provide example code that demonstrates how to bulk provision devices using the Cayenne API. The example shown here should bulk provision the same 3 devices used in the preceeding 'Single device' example. That way the user can see how to do them one a time or all in once. Please be sure that the example in/out uses those same devices as the other example.
```

#### Activating a Device

Once a device has been provisioned, it can then be activated and added to the user's account. Let's build upon the [provisioning example](/#cayenne-api-using-the-api-example-walkthrough-provisioning-devices) and examine how the user can activate the example devices using the Tank Monitoring sample app and the Cayenne API.

Let's begin by seeing how a Gateway device is activated. After selecting to add a Gateway device, the user is asked for device information needed to activate the gateway. After entering in the information, the Cayenne API can be used to activate the device.

*NOTE: Notice how the user is asked for the __Gateway ID__ during the activation process. This ID is the __Hardware ID__ generated earlier during the device provisioning step.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084436/Restaurant-iPhone_AddGateway-1-2.png" width="346" height="615" alt="Sample App Add Gateway screen"><br/><br/></p>

```
Dev to provide example of activating the example Gateway device. The example in/out should match the provisioned device information from our provisioning example covered earlier.
```

After adding a Gateway device, we can then add sensors and actuators that will communicate with the gateway. Let's activate the sensor and actuator example devices that we previously provisioned. After selecting to add a Device, the user is asked for device information needed to activate the sensor or actuator. After entering in the information, the Cayenne API can be used to activate the device.

*NOTE: Notice how the user is asked for the __ID__ during the activation process. This ID is the __Hardware ID__ generated earlier during the device provisioning step.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084522/Restaurant-iPhone_AddSensor-1-2.png" width="346" height="615" alt="Sample App Add Sensor screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524104638/Restaurant-iPhone_AddSensor-1-1.png" width="346" height="615" alt="Sample App Add Sensor screen2"><br/><br/></p>

```
Dev to provide example of activating the example Sensor & Actuator device (only one example is OK as long as there is no difference between the in/out from activation call). The example in/out should match the provisioned device information from our provisioning example covered earlier.
```

#### Getting Real-Time Device Data

After devices are activated and begin transmitting data to Cayenne, the Cayenne API can be used to query real-time data on the device. Let's take a look at the Tank Monitoring sample app and see how it uses the Cayenne API to fetch current device status so that it can be displayed on the *Status* screen.

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

In addition to monitoring Sensor devices, the Cayenne API also supports Actuators. Actuators devices allow you to not only monitor the status of the actuator, but also to remotely control their state. For example, you can remotely lock or unlock a Door Lock, or change the brightness of a Light. The Tank Monitoring sample app includes an example of a Door Lock that we can exmaine. From the *Status* screen we see that there is a toggle shown next to the **Gate Lock** device. The user is able to tap on this button to switch the current lock state of the device. Let's take a look at how this is accomplish using the Cayenne API.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525074533/Tank-Monitoring-Status-screen-actuator-highlight.png" width="492" height="615" alt="Sample App Device History screen"><br/><br/></p>

```
Dev to provide example code that demonstrates how to use the API to remotely change the state of our example Door ("Gate") Lock Actuator.
```

#### Getting Device History

Cayenne maintains historical information on data received from connected devices. Let's examine using the Cayenne API to query historical data for our example devices and see some very different examples of how the Tank Monitoring sample app uses this data to display the information to the user.

##### Sensor History example

Tapping on a device from the Tank Monitoring sample app's *Status* screen opens the *Device History* screen which displays historical device data. The user can use this table view to filter and examine data. Let's explore how this is accomplished using the Cayenne API.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524084752/Restaurant-iPhone_Sensor-1-1.png" width="346" height="615" alt="Sample App Device History screen"><br/><br/></p>

```
Dev to provide example code for how the Sample app history details screen uses the Cayenne API to fetch the historical data for display. 

IF the Actuator and Temperature in/out differ, we should document both examples in code.
```

##### Asset Tracking example

The Tank Monitoring sample app's *Map* screen provides another great example of using historical device data in a unique way. In this case, for display of device location and status on a map. Let's take a look at this *Asset Tracking* feature and how the Cayenne API is used to accomplish this.

**Displaying device location on a map**

On the *Map* screen in the Tank Monitoring sample app, the user can see the location and movement of their devices on a map. This unique presentation makes use of current and historical device information provided in the Cayenne API to visualize device location data.

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

Alerts allow you to receive notifications when certain conditions are met. Let's take a look at the Tank Monitoring sample app and see how the user can create an Alert and manage existing alerts using the Cayenne API.

##### Creating an Alert

To create a new Alert, the user must specify information on what conditions should be met and who should be notified. After obtaining the information from the user, a new Alert can be created.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524100109/Restaurant-iPhone_Alert-1-4.png" width="346" height="615" alt="Sample App create alert screen"><br/><br/></p>

```
Dev to provide example code for how to create an Alert using the information obtained from the user in the Sample App.
```

##### Managing Alerts

After setting up alerts, users will want to be able to manage them. Let's take a look at the Tank Monitoring sample app's *Alerts* screen. From this screen the user can see a list of existing alerts, information on each alert, and they can manage the alerts. Let's see how these tasks are accomplished using the Cayenne API.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170524100107/Restaurant-iPhone_Alert-1-2.png" width="346" height="615" alt="Sample App Alerts screen"><br/><br/></p>

```
Dev to provide example code for how to manange existing alerts.

0. Example code for fetching information on current status (# times run, ON/OFF, name, etc) for display on Alerts screen in Sample App.
1. Maybe example code for how to toggle an Alert on/off?
2. Maybe example code for how to update existing Alert information? E.g. user edits and saves changes.
```

#### Multi-Tenant

In addition to manging Accounts and Devices, the Cayenne API also provides functionality to help create and manage Users. Using the Multi-Tenant features found in the Cayenne API, you can create Users and assign Roles and permissions. Let's take a look at an example which demonstrates these features.

##### Creating Users, assigning Roles & Permissions

Before you can manage users and assign permission, a new User must be created. As an example, this can be done from an *Add User* screen. In order to get started with creating a new user, we must first get some basic information on the user.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525090358/Multi-Tenant-2.png" width="660" height="483" alt="Multi tenant Add User 1"><br/><br/></p>

After capturing the basic user information, we then select the **Role** and **Permissions** available to the user. By adjusting the user's role and permissions, we can control what access the user has within the account. Setting the user's **Role** will determine certain default **Permissions** available. If you want, you can override the default permissions by specifying what the user should have on a per-feature basis.

- **View:** Allows the User to view this feature. Without this permission, the feature will not be visible to the user.
- **Add/Edit:** Allows the User to modify items within this feature. For example, to Add device or Edit/Update information.
- **Delete:** Allows the User to delete items within this feature. For example, to remove devices.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525090412/Multi-Tenant-3.png" width="660" height="483" alt="Multi tenant Add User 2"><br/><br/></p>

After gathering the information required to create a new User, we can then use the Cayenne API to create a new user. Let's examine how this is accomplished.

```
Dev to provide example of creating a new User and assigning permissions using Cayenne API.
```

##### Managing existing users

After creating some Users, we need to be able to manage them. Let’s take a look at an example *Users* screen. From this screen you can see a list of existing users and we can manage the existing user from here. Let's see how these tasks are accomplished using the Cayenne API.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170525090259/Multi-Tenant-1.png" width="660" height="290" alt="Multi tenant manage Users screen"><br/><br/></p>

```
Dev to provide example code for how to manange existing users.

0. Example code for fetching information on the user so that it can be displayed such as on an example Users screen.
1. Maybe example code for how to update existing User information? E.g. user edits and saves changes.
```

### Samples

The Cayenne API repo on GitHub includes a number of additional samples that illustrate the use of the Cayenne API.

```
Dev to provide GitHub repo for Samples and a list of samples that should be linked here in docs.
```

- Tank Monitoring Sample App: A sample app that demonstrates the Cayenne API features. This is the sample app used throughout the [Example walkthrough section](#cayenne-api-using-the-api-example-walkthrough).
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
