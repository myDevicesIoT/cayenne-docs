# Cayenne API

## Overview

**TODO:**
```
We need to add a brief introduction to what the Cayenne API is and what it allows the user to do. This should be a brief general overview and we can save any topics related to Mobile SDK or HTTP API details to dedicated sections below that also include Overview sections there.

Will need Dev to provide this (or jump on a call with me to talk through) and I can help word-smith from there.
```

## Preparing to use the API

### Create a Cayenne account

In order to use the Cayenne API, you will need to first create a Cayenne account. Visit the <a href="http://www.cayenne-mydevices.com/" target="_blank">Cayenne website</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/get-started-for-free.png" width="660" height="438" alt="get started for free"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/account-sign-up.png" width="660" height="438" alt="account sign up"><br/><br/></p>

### Obtain your Cayenne API Key

Before you can use the Cayenne API you will need to obtain your **Cayenne API Key**. This key will be unique at the **Account** level and you will obtain a different key for each **Application** that you create. In order for your custom application to successfully connect with Cayenne you will need to specify the API Key for that app when using the various Cayenne API function calls.

*TIP: For more information how this key is used, see the [Authentication section](#cayenne-api-using-the-cayenne-http-api-authentication) of the HTTP API documentation.*

To obtain this key, log into your account and go to X. Every application that you create in Cayenne will have its own unique API Key... **TODO:**
```
[As soon as this UX exists, I can fill this section in by taking screens and telling the user how to go about this.]
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

## Using the Cayenne HTTP API

**TODO:**
```
Here we would briefly mention the steps to use, starting with Authentication. This is just an overview of the process, we should leave any examples or in-depth information to subsequent sections that cover them in more detail. For example, we jump right into Authentication in the first section covered.

Will need Dev to provide this (or jump on a call with me to talk through) and I can help word-smith as needed.
```

When implementing your custom application you may wish to use the raw Cayenne HTTP API calls directly. In this section we will discuss the HTTP API function calls and walk you through some of the most common examples to help get you started.

*TIP: If you already know how to use the Cayenne HTTP API, you may wish to jump directly to the full list of [available HTTP API functions](#cayenne-api-using-the-cayenne-http-api-api-reference).*

### Authentication

**TODO**
```
Discuss about Authentication and related items that need to be done in the HTTP API versus the mobile app SDKs.

Ideally, this section would start a running story of a walk through showing an end to end example of a user getting started to use the API, getting everything they need to use it, and then following through with using it on the most common examples we can come up with. We can leave the other topics to the dedicated API Reference section at the end that just lists out functions/parameters/etc.

Will need Dev to provide this and I can help word-smith as desired.
```

### Device Provisioning

**TODO**
```
This section continue our story example by explaining to the user how to provison a device. How to create a device, how do you get device credentials, etc.

Will need Dev to provide this and I can help word-smith as desired.
```

### Initializing the API

**TODO**
```
Just a potential example of what we could do next in our story? Here we would initialize the API and set things up for all the other examples that follow which make use of the API.

Will need Dev to provide this and I can help word-smith as desired.
```

### Log in to account

**TODO**
```
E.g. Continue our story by covering what calls to make to successfully log in to an existing account using the API?

Will need Dev to provide this and I can help word-smith as desired.
```

### Example 1 of using API

**TODO**
```
E.g. Continue our story by starting to put the HTTP API into use by covering a common task. Not sure what this should be - this can be dictate by Dev team. Whataver you think it makes the most sense to cover.

Will need Dev to provide all these examples.
```

### Example 2 of using API

**TODO**
```
Continue our story by discussing another example of using the API.
```

### Last Example of using API

**TODO**
```
Last story discussing an example of using the API. We can have as many examples as you want, but I would limit it to just the major ones. Leave the API Reference to cover the rest.
```

### API Reference

**TODO:**

```
Here we would put in the full API reference. In the previous sections we covered some of the common examples, but here we would put in all of the calls, their expected parameters and whatever else you want the user to know for what is available publicly. The focus wouldn't be on examples for this section, but more of a dump of the technical details of each call.

For example, this could be the content from the Google doc Dev created on the Cayenne API.

Dev would need to provide this, we will simply put in the info here. Similar to the BYOT docs we did, this reference section would just be imported (formatted as markdown ideally).
```

## Using the Cayenne iOS SDK

The Cayenne iOS SDK is the easiest way to connect your custom iOS app to Cayenne using the Cayenne API. In this section we will walk you through configuring the **Xcode** IDE to utilize the Cayenne API. We will then walk through several examples of common tasks using the API.

*TIP: The walk through present here will only cover some of the common tasks and thus will not cover every function available in the mobile app SDK. You may also wish to refer to the [Cayenne iOS SDK reference documentation](#cayenne-api-using-the-cayenne-ios-sdk-sdk-reference) for additional reference on available functionality found in the SDK.*

**TODO:**

```
In this section we cover using the iOS SDK.

I suggest we follow essentially the same layout as the HTTP API section, which I've duplicated below. The only difference will be that Tim indicated we need to help the user configure the Xcode IDE. Otherwise, I suggest we show similar examples as shown in the HTTP API section on how to use the API - albiet with the example code shown being the iOS SDK code. We then wrap it up with a link to the iOS SDK reference (which it sounds like from Tim could be hosted externally on github).
```

### Configure Xcode IDE

**TODO**
```
We being our story example by helping hte user configure the Xcode IDE to work with the SDK.

Will need Tim to provide this. I can help word-smith with him on call if needed.
```

### Initializing the SDK

**TODO**
```
Continue our iOS story with same example of Initializing the SDK, but this time the code shown will be related to iOS/Xcode.

Will need Tim to provide this.
```

### Log in to account

**TODO**
```
Continue our iOS story with same example of Logging into account, but this time the code shown will be related to iOS/Xcode.

Will need Tim to provide this.
```

### Example 1 of using API

**TODO**
```
E.g. Maybe cover the same examples used in the HTTP API section, but of course this time showing code covering Xcode/iOS.

Will need Tim to provide content for all these examples.
```

### Example 2 of using API

**TODO**
```
Continue our story by discussing another example of using the API and Xcode/iOS.
```

### Last Example of using API

**TODO**
```
Last story discussing an example of using the API and Xcode/iOS.
```

### SDK Reference

**TODO**

```
Here I’m just linking to external iOS reference since it seems like the iOS code is fully documented and this will be hosted externally? If so, I'd recommend just leaving general information here and a link to the GitHub repositories for the remainder. I've put in a generic blurb and link back to the HTTP API, which the user can also reference. This is probably enough detail for the final version, unless we want to mention something specific in the iOS API Reference section (or if it isn't hosted externally as I currently think it might be).
```

The Cayenne iOS SDK contains code documentation for each function. You can refer to the documentation included with the SDK. For ease of reference, you can find find a hosted version of this [documentation on our github](TODO: link to external source).

As the Cayenne mobile app SDKs are wrappers around the Cayenne API, you may also wish to refer to the raw [Cayenne API documentation](#cayenne-api-using-the-cayenne-api), and in particular to the [API reference section](#cayenne-api-using-the-cayenne-http-api-api-reference) which covers each function available in the API.

## Using the Cayenne Android SDK

*Coming Soon!*
