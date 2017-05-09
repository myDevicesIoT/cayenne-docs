# Cayenne API

## Overview

**TODO:**
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

To obtain this key, log into your account and go to X. Every application that you create in Cayenne will have its own unique API Key... **TODO:**
```
[As soon as this UX exists, I can fill this section in by taking 
screens and telling the user how to go about this.]
```

### Start using the API

The Cayenne API is straightforward and easy to use, offering several different ways of connecting your custom application to Cayenne.

#### Option 1: Use raw HTTP API calls

If you are integrating Cayenne into your existing or custom program, you may wish to simply use the raw API calls for interacting with Cayenne.

In the [Using the Cayenne HTTP API section](#cayenne-api-using-the-cayenne-http-api) you will find a reference for the APIs available and several examples of the most common tasks to help get you started with the API.

#### Option 2: Use a Mobile App SDK

You may also use one of our available mobile app SDKs. If you are developing a mobile app that connects with Cayenne this is the easiest way to make use of the Cayenne API.

We have prepared walkthroughs and SDKs for common mobile platforms and toolchain/IDE combinations to help get you up and running as quickly as possible. If you would like to use one of our mobile app SDKs, the easiest way to get started is to jump to a section below and read through the information and guides provided there.

**Cayenne-SDK-iOS**

Using the Cayenne iOS SDK to utilize the Cayenne API in your iOS app.

- Refer to the README located in the [Cayenne iOS SDK Github]() **TODO: Need this public link to fill in.** for information on using and obtaining iOS SDK.
- [Documentation](#cayenne-api-using-the-cayenne-ios-sdk) - Walks you through setting up the Xcode IDE to work with the Cayenne iOS SDK and covers several common examples to help get you started using the Cayenne API in your iOS app.

**Cayenne-SDK-Android**

*Coming Soon!* Use the Cayenne Android SDK to utilize the Cayenne API in your Android app.


## Cayenne API Reference

```
This section will cover the API function calls available. In here you will find sections for the HTTP API, and each of the mobile app SDKs.
```
### HTTP API Reference

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

#### Preparing to use the API

##### Authenticating
##### Initialization

#### Companies
##### Add a company
##### Remove a company
##### Edit/Update a company
##### Get company
##### Get contacts for company
##### Add a contact
##### Update a contact for company
##### Delete a contact for company
##### Add a contact with location
##### Delete a contact from location
##### Add a location
##### Get locations for company
##### Update locations for company
##### Get specified location
##### Delete location for company
##### Get contacts for location
##### Add Gateway to location
##### Get things added to location
##### Add sensor to location
##### Get sensor data history

#### Locations
##### Link contact with Location
##### Get gateways

#### Things
##### Add sensor to location
##### Delete a sensor
##### Get sensor settings
##### Edit sensor settings

#### Users
##### Log in to the system
##### Forgot password
##### Reset password
##### Get Companies for user

### iOS SDK Reference

```
This section would describe how to access the iOS SDK, how to prepare it for use and how to reference it's specific documentation.

I have added some basic info for now and this can evolved as needed.
```

The Cayenne iOS SDK is the easiest way to connect your custom iOS app to Cayenne using the Cayenne API. In this section we will walk you through configuring the **Xcode** IDE to utilize the Cayenne API. We will then walk through several examples of common tasks using the API.

*TIP: The walk through present here will only cover some of the common tasks and thus will not cover every function available in the mobile app SDK. You may also wish to refer to the [Cayenne iOS SDK reference documentation](#cayenne-api-using-the-cayenne-ios-sdk-sdk-reference) for additional reference on available functionality found in the SDK.*

#### Configure Xcode IDE

```
Here we would walk the user through configuring the Xcode IDE so that the user is ready to use the iOS SDK with their project.

Brent & Tim to work together to create this info.
```

#### SDK Reference

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


## Example usage: Monitor & Control

```
This section would cover putting the HTTP API into use by guiding the user through the Monitor & Control's major screens and for each we would tell the user how we used the API to accomplish each feature.

Brent would write the descriptive intro text and attach screens for each portion here.
Devs would add in example code blurbs that accomplish each task highlighted by Brent.
```

### Monitor & Control Overview

```
Brief description of what the Monitor & Control solution is - to give the user some perspective if they aren’t familiar with the solution and what they’ll be seeing in the examples shown here.

Brent would write this text.
```

### Sign Up

```
This section would start out story narrative by having the user Create an account and log into the account.

Brent to write intro brlub for this.
```

#### Create an account 

```
Start our story by walking the user through creating an account using the API.

Brent to add blurb & screenshot of the M&C Create account screens.
```

```
Devs to provide source code example for creating a fake test account that will be used for the rest of the narrative.

{
Example code
To accomplish this task
Here
}
```

#### Log into the account

```
Continue our story by having the user log into our newly created account.

Brent to add blurb & screenshot of the M&C Create account screens.
```

```
Devs to provide source code example for logging into our fake account example.

{
Example code
To accomplish this task
Here
}
```

#### Manage Company, Location

```
Now that we have an acccount to use, we continue our story by walking the user through Adding, editing and removing company, location and contacts via the Company/Location screen. Our example would walk them through creating a specific test company, location and contact(s). These would be used for the rest of our example stories.

Brent to create intro blurb and screens from M&C for the Company/Location screens found below.
```

```
Devs to provide source code examples for creating a test Company to be used in rest of the examples.

{
Example code
To accomplish this task
Here
}
```

```
Devs to provide source code examples for creating a Contact for our test Company to be used in rest of the examples.

{
Example code
To accomplish this task
Here
}
```

```
Devs to provide source code examples for creating a Location for our test Company which will be used in the rest of our examples.

{
Example code
To accomplish this task
Here
}
```

```
Devs to provide source code examples for creating the following Location Contact scenarios:

A. Create a new contact for this Location.
B. Attach an existing Company contact to this Location.

{
Example code
To accomplish these tasks
Here
}
```

#### Add Gateway

```
Now that we have a Company, we continue our example by showing the user how to Add a Gateway using the Add Gateway screen. So this continues our story example where we add a gateway that will be used for the rest of our example.

Brent to provide intro blurb & screens for this.
```

```
Devs to provide source code examples for adding a Gateway that will be used for the rest of the examples.

{
Example code
To accomplish this task
Here
}
```

#### Add Sensor device

```
Now that we have a Gateway, we walk the user through the process of adding a Sensor device. We will then continue the M&C 1st experience which allows the user to jump over to creating an Alert for the new sensor. We would choose an example Temperature sensor and create a temp alert for it. That way there is specifically a device type example we can show the user.

Brent to add intro blurb & screens for this.
```

##### Add Temperature Sensor

```
Brent to add description and M&C screen from Add Device screen, showing Temperature device.
```

```
Devs to provide source code examples for adding a specific Temperature sensor device.

{
Example code
To accomplish this task
Here
}
```

##### Create Temperature Alert

```
Brent to add description and M&C screen from Create Alert, showing Temperature Alert.
```

```
Devs to provide source code examples for creating an Alert.

A. Should be an alert for our newly created sensor.
B. Should be of type 'Temperature'. Work with Brent to finalize what Conditions to trigger on.

{
Example code
To accomplish this task
Here
}
```

#### Add Actuator device

```
Here we follow the same thing we just did for Sensors, but this time we demonstrate how to cover an Actuator device. It is important that we demonstrate both to the user.

Brent to add intro blurb & screens for this.
```

##### Add Door lock

```
Brent to add description and M&C screen from Add Device screen, showing Door Lock device.
```

```
Devs to provide source code examples for adding a specific Door Lock actuator device.

{
Example code
To accomplish this task
Here
}
```

##### Create Lock Alert

```
Brent to add description and M&C screen from Create Alert, showing Lock/Unlock Alert.
```

```
Devs to provide source code examples for creating an Alert.

A. Should be an alert for our newly created Door actuator.
B. Should be of type 'Locked/Unlocked'. Work with Brent to finalize what Conditions to trigger on.

{
Example code
To accomplish this task
Here
}
```

#### Manage Locations / Devices

```
In this section we would describe the Manage screen and its display of the overall status of Locations. We will show the user each feature of the Manage screen and show them how we accomplished what we did with Monitor & Control.

Brent to add intro blurb & screens.
```

##### View Location status

```
Brent to add blurb and M&C screen for showing the default collapsed view in Manage (where it shows overall status for our test Company's locations.
```

```
Devs to provide source code examples for how we get the information used to populate the collapsed view.

E.g. 
A. How we get the list of Companies (consisting of our test company).
B. How we get the list of Locations for our test company.
C. How we get the overall status for each Locations so that it can be displayed, how we know to display the Acknowledge All button.

{
Example code
To accomplish these tasks
Here
}
```

##### View Device details

```
After describing the collapsed Manage view, we tell them how the user can tap to expand the list and then they can view Device details.

Brent to add intro text and M&C screen showing expanded Manage screen, displaying all devices located under our test Location.
```

```
Devs to provide source code examples for how we show device details here on the Manage screen.

E.g. 
A. How to get list of all devices under our test Location.
B. How to get overall status of each device, how do we know to display the Acknowledge button, etc.
C. How we know Gateways vs Sensors, etc.

{
Example code
To accomplish this task
Here
}
```

##### Interact with actuator devices

```
Once expanded the user can interact with Actuator devices directly from this Manage screen. We should tell the user how to do this.

Brent to add intro text & screen highlights from M&C.
```

```
Devs to provide source code examples for updating the status of an actuator device from here. E.g. for change of slider, toggle directly from here.

{
Example code
To accomplish this task
Here
}
```

##### View alert status

```
M&C allows the user to click on the alert icon located next to Devices in the Manage list. This produces a popup showing status details. Here we walk the user through how we get this data for display.

Brent to add into blurb, M&C screen highlights.
```

```
Devs to provide source code examples for how to fetch the alert status details for a device that we use to populate this dialog.

{
Example code
To accomplish this task
Here
}
```

##### Viewing Device history

```
After covering the display of devices on the Manage screen, we continue our example by telling the user how they can click on a device in M&C and it will take the user to the Device details/history screens (which has multiple tabs). We will walk the user through each of these tabs so that they know how we populated & control the data displayed.

Brent to write into blurb and add screens as needed here.
```

##### View Device History
##### View Notifications
##### View Chart
##### View Settings

#### Manage Alerts

```
In this section we would cover the Alerts screen and how to create alerts, view history, etc.
```

##### View Location Alerts
##### View Alert History
##### View Alert Notifications
##### View Alert Chart
##### View Alert Settings
