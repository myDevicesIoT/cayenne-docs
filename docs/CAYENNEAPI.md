# Cayenne API

## Overview

**TODO:** Brief introduction to what it is, what it allows you to do. E.g. Cayenne API is a RESTful API that allows you to connect your custom app to Cayenne. [Need help with this blurb. WHat else should we say?]

Example overview section content from existing docs: [BYOT (MQTT) Overview](#bring-your-own-thing-api-overview), [Cayenne LPP Overview](#lora-cayenne-low-power-payload-overview)

## Preparing to use the API

### Create a Cayenne account

In order to use the Cayenne API, you will need to first create a Cayenne account. Visit the <a href="http://www.cayenne-mydevices.com/" target="_blank">Cayenne website</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/get-started-for-free.png" width="660" height="438" alt="get started for free"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/account-sign-up.png" width="660" height="438" alt="account sign up"><br/><br/></p>

### Obtain your Cayenne API Key

Before you can use the Cayenne API you will need to obtain your **Cayenne API Key**. This key will be unique at the **Account** level and you will obtain a different key for each **Application** that you create. In order for your custom application to successfully connect with Cayenne you will need to specify the API Key for that app when using the various Cayenne API function calls.

To obtain this key, log into your account and go to X. Every application that you create in Cayenne will have its own unique API Key... **[TODO: need this info / UI to be added here]**

### Start using the API

The Cayenne API is straightforward and easy to use, offering several different ways of connecting your custom application to Cayenne.

#### Option 1: Use raw API calls

If you are integrating Cayenne into your existing or custom program, you may wish to simply use the raw API calls for interacting with Cayenne.

In the [Using the Cayenne API section](#cayenne-api-using-the-cayenne-api) you will find a reference for the APIs available and several examples of the most common tasks to help get you started with the API.

#### Option 2: Use a Mobile App SDK

You may also use one of our available mobile app SDKs. If you are developing a mobile app that connects with Cayenne this is the easiest way to make use of the Cayenne API.

We have prepared walkthroughs and SDKs for common mobile platforms and toolchain/IDE combinations to help get you up and running as quickly as possible. If you would like to use one of our mobile app SDKs, the easiest way to get started is to jump to a section below and read through the information and guides provided there.

**Cayenne-SDK-iOS**

Using the Cayenne iOS SDK to utilize the Cayenne API in your iOS app.

Refer to the README located in the [Cayenne iOS SDK Github]() **TODO: link** for information on using and obtaining iOS SDK.
Documentation - Walks you through setting up the Xcode IDE to work with the Cayenne iOS SDK and covers several common examples to help get you started using the Cayenne API in your iOS app.

**Cayenne-SDK-Android**

*Coming Soon!* Use the Cayenne Android SDK to utilize the Cayenne API in your Android app.

## Using the Cayenne API

When implementing your custom application you may wish to use the raw Cayenne API calls directly. In this section we will discuss the API function calls and walk you through some of the most common examples to help get you started.

**TODO: [Sounds like there are several versions or sub-APIs here (things like Devices, Accounts, etc) so we should update our blurb here to spell out this info to the user.] E.g.**

The Cayenne API consists of two parts:

- **Device HTTP API**
 - Send data to Cayenne
 - Receive data from Cayenne

- **Platform HTTP Restful API**
 - Manage Users
 - Manage Devices
 - Setup Rules
 - Setup Scheduling Jobs
 - Device Provisioning

*TIP: If you already know how to use the Cayenne API, you may wish to jump directly to the full list of [available Cayenne API functions](#cayenne-api-using-the-cayenne-api-api-reference).*

Below items are common tasks user would perform to use the API. I suggest we show them how to Initialize / setup for use and then walk through common tasks. Ideally, we’d show the same set of tasks for the public API and the mobile SDK examples. Feel free to suggest different examples. Within each we would very briefly mention whatever they need to know to accomplish the task and/or include code to accomplish the task. The example can refer to more info found in the Public API reference section if you want to just put more detail in that section instead.

### Initializing the API

**TODO**
E.g. Setup stuff for using the API in all subsequent examples?
Include example code section that can be shown to user.

### Log in to account

**TODO**
E.g. Cover what calls to make to successfully log in to an existing account using the API.
Include example code section that can be shown to user.

### Send sensor data

#### Add sensor

**TODO**
E.g. Cover adding a sample sensor (such as TMP36) to an account.

#### Retrieve sensor data

**TODO**
E.g. Cover retrieving sensor data from our newly added sensor.

#### Publish sensor data

**TODO**
E.g. Cover sending sensor data to Cayenne.

### Control a Light actuator

#### Add actuator

**TODO**
E.g. Cover adding a Button widget to control a Light switch.

#### Change actuator state

**TODO**
E.g. Cover sending a command to the actuator.

### API Reference

**TODO**
Here we would put in the full API reference. In the previous sections we covered some of the common examples, but here we would put in all of the calls, their expected parameters and whatever else you want the user to know for what is available publicly. I put them here grouped under their respective sub-APIs but it doesn’t have to be that way if you think it’s better another way.

#### Device HTTP API

**TODO**
Functions, examples and info you want the user to know for each API call available in the Device HTTP API.

#### Platform HTTP API

**TODO**
Functions, examples and info you want the user to know for each API call available in the Platform HTTP API.


## Using the Cayenne iOS SDK

The Cayenne iOS SDK is the easiest way to connect your custom iOS app to Cayenne using the Cayenne API. In this section we will walk you through configuring the **Xcode** IDE to utilize the Cayenne API. We will then walk through several examples of common tasks using the API.

*TIP: The walk through present here will only cover some of the common tasks and thus will not cover every function available in the mobile app SDK. You may also wish to refer to the [Cayenne iOS SDK reference documentation](#cayenne-api-using-the-cayenne-ios-sdk-sdk-reference) for additional reference on available functionality found in the SDK.*

**TODO**
As with Public API section, below items are common tasks user would perform to use the SDK. I suggest we show them how to Initialize / setup SDK and IDE for use and then walk through common tasks. Ideally, we’d show the same set of tasks for the public API and the mobile SDK examples. Feel free to suggest different examples. Within each we would very briefly mention whatever they need to know to accomplish the task and include code to accomplish the task. The mobile examples can also refer back to the Public API reference section and the (external?) iOS SDK docs if desired.

### Configure Xcode IDE

**TODO**
E.g. How does the user configure the Xcode IDE to work with the SDK?

### Initializing the SDK

**TODO**
E.g. Setup stuff for using the SDK in all subsequent examples?
Include example code section that can be shown to user.

### Log in to account

**TODO**
E.g. Cover what calls to make to successfully log in to an existing account using the SDK.
Include example code section that can be shown to user.

### Send sensor data

#### Add sensor

**TODO**
E.g. Cover adding a sample sensor (such as TMP36) to an account.

#### Retrieve sensor data

**TODO**
E.g. Cover retrieving sensor data from our newly added sensor.

#### Publish sensor data

**TODO**
E.g. Cover sending sensor data to Cayenne. Is this common for mobile app SDK? If not, skip it since we’ll publish data below when we cover Actuators.

### Control a Light actuator

#### Add actuator

**TODO**
E.g. Cover adding a Button widget to control a Light switch.

#### Change actuator state

**TODO**
E.g. Cover sending a command to the actuator.

### SDK Reference

**TODO**
Here I’m just linking to external iOS reference since the code is fully documented and this will be hosted externally.

The Cayenne iOS SDK contains code documentation for each function. You can refer to the documentation included with the SDK. For ease of reference, you can find find a hosted version of this [documentation on our github](TODO: link to external source).

As the Cayenne mobile app SDKs are wrappers around the Cayenne API, you may also wish to refer to the raw [Cayenne API documentation](#cayenne-api-using-the-cayenne-api), and in particular to the [API reference section](#cayenne-api-using-the-cayenne-api-api-reference) which covers each function available in the API.

## Using the Cayenne Android SDK

*Coming Soon!*
