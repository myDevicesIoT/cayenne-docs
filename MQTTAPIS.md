#MQTT API

<p id="apis-2-2" class="anchor-link"></p>

##Overview

The Cayenne MQTT API is used to connect any device that you have with the Cayenne Cloud. After connecting your device you can send data from your device to the Cayenne dashboard and display it using widgets. You may also receive commands from Cayenne, allowing remote control and automation of your devices.

**About MQTT**

MQTT is a lightweight messaging protocol designed to be used on top of TCP/IP. It uses an event and message (publish-subscribe) methodology that was designed especially for connections where small footprints, unreliable and/or limited bandwidth connections are found. This type of pattern is especially suited for IoT devices that get deployed in the field and often run on battery power and on constrained networks. With MQTT, the publish-subscribe pattern makes use of a broker that is responsible for distributing messages to clients. Clients can subscribe to varying levels of messages, depending upon how much or what kind of data they are interested.


**Using MQTT with Cayenne**

MQTT is the preferred transport and API for sending data to the Cayenne Cloud, or for devices that receive commands from Cayenne. The Cayenne Cloud acts as a broker, managing the various sensor and actuator client devices that wish to send and receive data using the Cayenne Cloud.

Cayenne MQTT is straight forward and easy to use. If you are integrating Cayenne into your existing or fully custom program, you can use the raw Cayenne MQTT API functions to implement everything you need for your custom program to interface with the Cayenne Cloud. Cayenne also offers an Embedded C SDK that bundles the Eclipse Paho MQTT C/C++ client and arduino-mqtt libraries for MQTT support. Using the Cayenne Embedded C SDK is the easiest way to get started with using MQTT with Cayenne.

You can jump straight to the [MQTT Messaging](#mqtt-messaging-api-2-2) section to use the MQTT API, or continue reading below for a guided walkthrough of using the SDK to connect your device with Cayenne.<br/><br/>

<p id="preparing-to-use-the-cayenne-sdk-api" class="anchor-link"></p>

##Get started in minutes!

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/hmIGRrvevCA" frameborder="0" allowfullscreen></iframe></p>

Before you use the Cayenne MQTT API to connect your device or send data, you need to create a Cayenne account, have a tool chain or IDE installed and the Cayenne Embedded C SDK downloaded. <br/><br/>


##Using the MQTT API

**Create a Cayenne account**

You can jump straight to the [MQTT Messaging](#mqtt-messaging-api-2-2) section to use the MQTT API, or continue reading below for a guided walkthrough of using the SDK to connect your device with Cayenne.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160816143848/get-started-for-free.png" width="600" height="400" alt="Get Started for Free"><br/></p>

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160816143903/account-sign-up.png" width="600" height="400" alt="Get Started for Free"><br/></p>

After creating your account, Cayenne will ask you which type of device you wish to add to your project. To add a device using the API, select **Bring Your Own Thing** from the list of devices presented. You will then be taken to a screen with details needed to help you connect your board to Cayenne.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20161006135855/step-1-choose-device-category1.png" width="600" height="362" alt="Get Started for Free"><br/></p>


##Connecting your board

After selecting the **Cayenne API / Bring Your Own Thing** option, the Connect your Device screen appears. From here, you’ll find all the information you need to program your board to communicate with Cayenne.

*   **MQTT connection information**: In order to use the MQTT API, you’ll need various credentials for your connection. Here you’ll find all the MQTT information that you need, making it easy to copy & paste these values directly into your code.
*   **Sample Code**: Here you’ll find example source code that you can refer to when programming your board with the Embedded C SDK. Even if you aren’t using the SDK, you’ll still find these code examples a useful reference.
*   **Information & Help links**: We’ve included some helpful tips, reminders and links to additional resources that you’ll find useful when programming your board.
*   **Tutorial videos**: Need more help? We’ve created a video to help walk you through the information found on this screen and how to use it.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20161007103408/Step-2-BYOT-Connect-your-device.png" width="600" height="363" alt="Connecting Your Board"><br/></p>

Before you can proceed with programming your board, you must know how your board will connect with Cayenne. Will this device communicate directly with Cayenne, or will it act as a node device, connecting to Cayenne through another device / gateway? In the next section, we’ll walk through the process of connecting your board directly to Cayenne. If you are connecting a node device, you may wish to jump directly to the [Connecting through another device / gateway](#connecting-board-gateway) section.


###Directly with Cayenne

You’ll find all the information you need to program your device to communicate directly with Cayenne on the Connect screen. Let’s walk through the process of connecting your board to communicate directly with Cayenne.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20161007103408/Step-2-BYOT-Connect-your-device.png" width="600" height="364" alt="Directly with Cayenne"><br/></p>

Before you can use the Cayenne MQTT API you will need to make sure that your device and toolchain/IDE are setup. Let’s go through making sure the device is setup and ready to be programmed.

**Make sure your device is powered on** <br/>
Begin by making sure that the board or device that you will be connecting is powered on and ready to be connected.

**Make sure your device has Internet connectivity** <br/>
Make sure your board or device is connected to the Internet. To minimize troubleshooting steps, verify your device has Internet connectivity prior to programming it to connect with Cayenne.

**Download and install the Cayenne Embedded C SDK** <br/>
In order to use the Cayenne API, you must download and add the Cayenne Embedded C SDK to your toolchain/IDE.

[Download Cayenne Embedded C SDK](http://www.cayenne-mydevices.com/)  
**TODO:** Update with link to SDK download

After downloading the SDK, extract it to a location where it can be used in your chosen toolchain/IDE. If you intend to use the example code for making board connections or sending & receiving data, you will need to make sure that the SDK paths are correct in your toolchain or IDE.

_TIP: Many of the Cayenne MQTT Embedded C SDK examples assume that you will be using a Linux based Operating System. If you are using a different OS or you will be using your own MQTT client, you can simply use the included examples as reference for writing your own code._

**Programming your board**

Once your device is setup and ready to use the Cayenne Embedded C SDK, you’re ready to program your device. Let’s walk through how this is done with an example using the **Embedded C** language. To begin, select the **Embedded C** code option from the list of supported languages. To view sample code for this language, select the **Code** button next to the language you will be using and a popup will appear. The Embedded C code example will contain everything you need to connect your device to Cayenne, including the _MQTT Username_, _MQTT Password_ and _Client ID_ that will be needed for publishing and sending data using MQTT.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20161007111956/Step-2-BYOT-Embedded-C-code-popup.png" width="600" height="363" alt="Connecting Your Board"><br/></p>

Copy & paste the code content into your IDE. This example code files give you a working example of how to get your board up and running quickly with Cayenne. Let’s start by taking a look at the example code file for connecting a board and go over some highlights to get a better understanding of what goes on in an typical MQTT connection with Cayenne.

**MQTT Authentication and Initializing**

In order to use the Cayenne MQTT API, you will need to have a few pieces of information used to authenticate the connection with Cayenne and publish or receive information using MQTT. All of this information is provided to you in the Cayenne dashboard when you add your board. When creating a new Cayenne MQTT Client in code, you will need to initialize the client with this information or your connection will fail.

*   **MQTT Username:** This is the master level API key, unique to your account, for using the API.
*   **MQTT Password:** This token will be used to authenticate communication with the device.
*   **Client ID:** This ID will be generated for your device and is used to uniquely identify the device you are adding.

_Example:_

```
// Cayenne authentication info. This should be obtained from the Cayenne Dashboard.
char* username = "......"; // MQTT Username
char* clientID = "......."; // Client ID
char* password = "........"; // MQTT Password
// Main function.
int main(int argc, char** argv)
{
...
// Initialize the Cayenne client.
CayenneMQTTClientInit(&mqttClient, &network, username, clientID, password, NULL);
...
}
```

**Connecting to Cayenne**

Once you’ve initialized a CayenneMQTTClient object, making a connection to Cayenne is easy. Use the CayenneMQTTConnect() function to make the connection. Once the connection is established, you can then use the client to publish or subscribe to MQTT topics.

_Example:_

```
if ((error = CayenneMQTTConnect(&mqttClient)) != SUCCESS) {
...
}
```

**Sending device info to Cayenne**

After connecting your board, you can then publish MQTT data to Cayenne. The example code includes a section on sending information on your board to Cayenne. It’s a good idea to send this data to Cayenne as it will help provide Cayenne with more information on your board and it will also help verify that your connection is working by allowing you to see the Cayenne dashboard receive some data from your board.

_Example:_

```
// Send Version & Model information to Cayenne
CayenneMQTTPublishData(&mqttClient, NULL, SYS_VERSION_TOPIC, NO_CHANNEL, NULL, NULL, CAYENNE_VERSION);
CayenneMQTTPublishData(&mqttClient, NULL, SYS_MODEL_TOPIC, NO_CHANNEL, NULL, NULL, "Linux");
```

**Compile & Upload**

After making any changes you wish to the example code, compile and upload the code to your device. As soon as your device comes online and sends data to Cayenne, your device dashboard will automatically appear.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160908141922/custom-device-device-dashboard-direct-connect.png" width="600" height="364" alt="Compile and Upload"><br/></p>


**Congrats! You are all set! Now your device is connected to the Cayenne Cloud!**

If you run into any troubles, take a look at the Data Stream widget in the device dashboard. You can use this widget to examine the data received by Cayenne from your device. As new data is received by your board, the Data Stream widget will update. Using this widget can help you verify at a glance that your board’s connection to Cayenne appears to be working.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160908142102/data-stream-widget1.png" width="400" height="389" alt="Compile and Upload"><br/></p>


## Sending data to Cayenne

Let’s see how easy it is to send data from your device to the Cayenne Cloud using MQTT and the Cayenne Embedded C SDK.


### Sending Sensor data

Let’s build upon the previous example of [Connecting a board to Cayenne](#connecting-a-board-to-cayenne-api) and see how easy it is to have Temperature sensor data sent to Cayenne. You can find the code file for this example on [Github](https://github.com/myDevicesIoT/ArduinoMQTTLibrary/blob/master/Linux/examples/CayenneMQTTSimplePublish.c). **TODO:** Replace with public facing Github link.

In order to have sensor data sent to Cayenne, we’ll need an appropriate place in our code to check the current status of our sensor and then we can send the data to Cayenne using MQTT. In the example code file, you’ll find a _loop()_ function that we will use to process MQTT events.

```
// Main function.
int main(int argc, char** argv)
{
...
// Connect to Cayenne.
if (connectClient() == CAYENNE_SUCCESS) {
// Run main loop.
loop();
}
else {
...
}
// Main loop where MQTT code is run.
void loop(void)
{
while (1) {
// Yield to allow MQTT message processing.
CayenneMQTTYield(&mqttClient, 1000);
}
}
```

**Sending the sensor data to Cayenne**

To send sensor data to Cayenne, we can use the appropriate _CayenneMQTTPublishData_ function. For our temperature example, let’s assume our sensor gives us a float value and we want to send it to Cayenne. We can use the _CayenneMQTTPublishDataFloat()_ function do so.

Here are some notes on the parameters required for the _CayenneMQTTPublishDataFloat()_ function:

*   **Topic:** All sensor data sent to Cayenne should go to the Data Topic.
*   **Channel:** For this example, we’ve selected Channel **0** for publishing data on this device. Cayenne supports up to 26 different Channels for identifying devices that will send/receive data on your device.
*   **Data:** Select an appropriate Data type from the list of [Supported Data Types](#data-types-byot-api-2-2). In our example, since this is a Temperature sensor, we’ve selected **Temperature**. Be sure to select the correct data type here or the data displayed on your dashboard will be displayed incorrectly.
*   **Units:** Select an appropriate type of Units for the Data Type your device will send. In this example, our temperature sensor provides its temperature in **Celsius**. Be sure to select the correct unit type here or the data displayed on your dashboard will be displayed incorrectly.

```
// Main loop where MQTT code is run.
void loop(void)
{
while (1) {
// Yield to allow MQTT message processing.
CayenneMQTTYield(&mqttClient, 1000);
// Publish our temperature data to Cayenne - current reading is 30.5 degrees Celsius. Note: this example 
// assumes we've already fetched the data from our sensor - we're just sending that data here.
CayenneMQTTPublishDataFloat(&mqttClient, NULL, DATA_TOPIC, 0, TEMPERATURE, CELSIUS, 30.5);
}
}
```

**Cayenne Dashboard widget**

That’s it! Compile and upload your code to the device. You do not need to add any widget for your sensor when using MQTT, Cayenne will automatically detect all necessary information from the MQTT payload! As soon as the Cayenne cloud receives the data from your sensor, it will automatically create a temporary widget for your Temperature sensor.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/API-Dashboard-with-Temp.png" width="600" height="363" alt="Cayenne Dashboard Widget"><br/></p>

Converting the temporary widgets created automatically by Cayenne is simple, just click on the widget tile. Cayenne will then convert the widget to a permanent widget that will remain on your dashboard and update as new data is received. You will then be able to access historical data and settings for the widget.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Temp-widget-highlight.png" width="154" height="150" alt="Cayenne Dashboard Widget"><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/API-Dashboard-with-Temp-widget-added.png" width="600" height="363" alt="Cayenne Dashboard Widget"><br/></p>


### Processing Actuator data

Receiving data from Cayenne is just as easy as [sending sensor data to Cayenne](#sending-sensor-data-api). Let’s see how easy it is by taking a look at an example of receiving a command from Cayenne that is destined for an Actuator connected to our device. You can find the code file for this example on [Github](https://github.com/myDevicesIoT/ArduinoMQTTLibrary/blob/master/Linux/examples/CayenneMQTTSimpleSubscribe.c). **TODO:** Replace with public facing Github link.

**Cayenne Dashboard widget**

Let’s start by adding a [Button widget](#value-display) to we can use to control the status of a Light.

Click **Add New > Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New"><br/></p>

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160906132241/Custom-Device-Add-Button-actuator.png" width="600" height="365" alt="Add New"><br/></p>

1.  Select **Custom Widgets**, then the **Button** Widget.
2.  Enter the following settings:  

    > **Widget Name**: Light  
    > **Device**: Select your custom board from the list of devices shown  
    > **Connectivity**: Virtual  
    > **Channel**: Select the virtual channel that you will use in your code to send or receive light commands to Cayenne. In our example we’ll use Channel 1\. Cayenne supports up to 26 different Channels for identifying devices that will send/receive data on your device.  
    > **Icon**: Light

3.  Click **Step 1: Code** to view example code.

A popup will appear showing sample code for sending data to your widget. You may refer to this example code for guidance, or copy & paste the code into your toolchain / IDE as a place to get started.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160617151040/Add-Device-Arduino-TMP36-Sketch-file2.png" width="600" height="386" alt="Example Code"><br/></p>

**Examining the example code**

Let’s walk through the code to see how easy it is to respond to actuator commands from Cayenne. We’ll start by examining how the example code subscribes to command messages sent to your device by Cayenne and then discusses how to respond to those received commands.

**Step 1: Listening for remote actuator changes**

When the state of an actuator is changed remotely via Cayenne, notification will be sent from Cayenne using the **Command** topic in MQTT. If we want to receive notice from Cayenne for our Actuator, the first step is to Subscribe to this topic. In the example code, this is accomplished in the _connectClient()_ function with a call to _CayenneMQTTSubscribe()_.

Here are some notes on the parameters for the _CayenneMQTTSubscribe()_ function:

*   **COMMAND_TOPIC:** We select the Command topic as this topic is used for receiving Actuator commands.
*   **Channel:** For this example, we’ve selected **ALL_CHANNELS** for receiving notifications on this device. This will notify us of any channel that receives a command message. If we wanted notice only for a specific actuator, the Channel of that actuator could be used here.
*   **Message Handler:** When our actuator receives messages from Cayenne, we’ll use a helper function to process the message. This is optional, the processing could also be done in the default message handler defined during the CayenneMQTTClient setup instead.

```
// Connect to the Cayenne server.
int connectClient(void)
{
...
CayenneMQTTSubscribe(&mqttClient, NULL, COMMAND_TOPIC, ALL_CHANNELS, commandArrived);
...
}
```


**Step 2: Responding to remote actuator changes**

Now that we are ready to receive actuator command messages from Cayenne, we need to take action when we receive them. In the above code we setup the messages to be received on a message handler function, _commandArrived()_. In this function, we can process the messages and take action, such as physically triggering the actuator state change on the device. Cayenne won’t know if the action was successful or not unless we tell it, so we let Cayenne know using _CayenneMQTTPublishResponse()_. Cayenne will use that response to show the correct status of the widget on the dashboard as well as process any additional events (such as Triggers and Alerts) that might occur in response.


```
// Handle command messages received from the Cayenne server.
void commandArrived(CayenneMessageData* message)
{
printf("Command message received on channel %dn", message->channel);
// Add code to process the command here. E.g. physically trigger the actuator state change.
// Since this is a command message, we publish a response. Here we are just sending a default 'OK' response.
// An error response should be sent if there are issues processing the message.
if (message->topic == COMMAND_TOPIC) {
CayenneMQTTPublishResponse(&mqttClient, message->channel, message->id, NULL);
}
}
```


*TIP: The example code shows you how to receive notification that a new command message has arrived from Cayenne, but it does not handle changing the state of your actuator. Be sure to include appropriate code to take action on your actuator based on the command.*


**Step 3: Compile & upload to your device**

In the Cayenne dashboard, you can now click the **Step 2: Add Widget** button and the Button widget will be added to your dashboard. You can review or change widget settings by clicking on the cogwheel icon in the top right corner of the Button widget. Compile and upload your code to the device. You can use the Cayenne dashboard to trigger a change in your actuator. Cayenne will publish a command to your device and your device can react to the command. Once your device has handled the command, it lets Cayenne know and the dashboard widget icon and status change to let you know the current state. If you run into any troubles, you can refer to the **Data Stream** widget to help make sure things are working properly.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20161010101257/Custom-Dash-with-Light.png" width="600" height="434" alt="Example Code"><br/></p>

<p id="data-types-mqtt-api" class="anchor-link"></p>


## Supported Data Types

In order to process data appropriately, Cayenne needs to know both data type and unit. This can be configured from the dashboard or directly set when sending data. Despite setting type and unit are optional when sending data, doing that will allow to automatically configure the dashboard as soon as data is received.


**Actuators**

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
</tbody><tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Data Type</b></td>
<td style="font-size: 15px; padding: 10px;" colspan="2"><b>Type Constant &amp; Value</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Unit</b></td>
<td style="font-size: 15px; padding: 10px;" colspan="2"><b>Unit Constant &amp; Value</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Widgets</b></td>
</tr>
<tr>
<td><span>HVAC.Change State</span></td>
<td><span>HVAC_CHANGE_STATE</span></td>
<td><span>hvac_state</span></td>
<td><span>State</span></td>
<td><span>User defined</span></td>
<td><span>null</span></td>
<td>HVAC (coming Soon), <a href="#slider-control">Slider</a></td>
</tr>
<tr>
<td rowspan="2"><span>HVAC.Change Temperature</span></td>
<td rowspan="2"><span>HVAC_CHANGE_TEMP</span></td>
<td rowspan="2"><span>hvac_temp</span></td>
<td><span>Fahrenheit</span></td>
<td><span>FAHRENHEIT</span></td>
<td><span>f</span></td>
<td rowspan="2">HVAC (coming Soon), <a href="#slider-control">Slider</a></td>
</tr>
<tr>
<td><span>* Celsius</span></td>
<td><span>CELSIUS</span></td>
<td><span>c</span></td>
</tr>
<tr>
<td><span>HVAC.Off/On</span></td>
<td><span>HVAC_OFF_ON</span></td>
<td><span>hvac_off_on</span></td>
<td><span>Off/On</span></td>
<td><span>OFF_ON</span></td>
<td><span>null</span></td>
<td>HVAC (coming Soon), <a href="#button-control">Button</a></td>
</tr>
<tr>
<td rowspan="3"><span>Light Switch</span></td>
<td rowspan="3"><span>LIGHT_SWITCH_ACT</span></td>
<td rowspan="3"><span>lt_switch_act</span></td>
<td><span>* Off/On</span></td>
<td><span>OFF_ON</span></td>
<td><span>null</span></td>
<td rowspan="3"><span><a href="#lighting-widget">Lighting (coming soon)</a>, <a href="#button-control">Button</a>, <a href="#switch-widget">Switch (coming soon)</a></span></td>
</tr>
<tr>
<td><span>Digital (0/1)</span></td>
<td><span>DIGITAL</span></td>
<td><span>d</span></td>
</tr>
<tr>
<td><span>Low/High</span></td>
<td><span>LOW_HIGH</span></td>
<td><span>null</span></td>
</tr>
<tr>
<td><span>Lighting.Color</span></td>
<td><span>LIGHTING_COLOR</span></td>
<td><span>lt_color</span></td>
<td><span>Hexadecimal</span></td>
<td><span>HEX</span></td>
<td><span>null</span></td>
<td><span><a href="#lighting-widget">Lighting (coming soon)</a>, <a href="#slider-control">Slider</a></span></td>
</tr>
<tr>
<td rowspan="4"><span>Lighting.Luminosity</span></td>
<td rowspan="4"><span>LIGHTING_LUMINOSITY</span></td>
<td rowspan="4"><span>lt_lum</span></td>
<td><span>* % (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td rowspan="4"><span><a href="#lighting-widget">Lighting (coming soon)</a>, <a href="#slider-control">Slider</a></span></td>
</tr>
<tr>
<td><span>Lux</span></td>
<td><span>LUX</span></td>
<td><span>lux</span></td>
</tr>
<tr>
<td><span>Volts</span></td>
<td><span>VOLTS</span></td>
<td><span>v</span></td>
</tr>
<tr>
<td><span>Ratio</span></td>
<td><span>RATIO</span></td>
<td><span>r</span></td>
</tr>
<tr>
<td rowspan="3"><span>Motor</span></td>
<td rowspan="3"><span>MOTOR</span></td>
<td rowspan="3"><span>motor</span></td>
<td><span>* Off/On</span></td>
<td><span>OFF_ON</span></td>
<td><span>null</span></td>
<td rowspan="3"><span><a href="#button-control">Button</a>, <a href="#slider-control">Slider</a>, <a href="#switch-widget">Switch (coming soon)</a></span></td>
</tr>
<tr>
<td><span>Low/High</span></td>
<td><span>LOW_HIGH</span></td>
<td><span>null</span></td>
</tr>
<tr>
<td><span>Degree Angle</span></td>
<td><span>DEGREE</span></td>
<td><span>deg</span></td>
</tr>
<tr>
<td rowspan="2"><span>Relay</span></td>
<td rowspan="2"><span>RELAY</span></td>
<td rowspan="2"><span>relay</span></td>
<td><span>* Off/On</span></td>
<td><span>OFF_ON</span></td>
<td><span>null</span></td>
<td rowspan="2"><span><a href="#button-control">Button</a></span></td>
</tr>
<tr>
<td><span>Low/High</span></td>
<td><span>LOW_HIGH</span></td>
<td><span>null</span></td>
</tr>
<tr>
<td rowspan="3"><span>Switch</span></td>
<td rowspan="3"><span>SWITCH</span></td>
<td rowspan="3"><span>switch</span></td>
<td><span>* Off/On</span></td>
<td><span>OFF_ON</span></td>
<td><span>null</span></td>
<td rowspan="3"><span><a href="#switch-widget">Switch (coming soon)</a>, <a href="#button-control">Button</a></span></td>
</tr>
<tr>
<td><span>Low/High</span></td>
<td><span>LOW_HIGH</span></td>
<td><span>null</span></td>
</tr>
<tr>
<td><span>Digital (0/1)</span></td>
<td><span>DIGITAL</span></td>
<td><span>d</span></td>
</tr>
<tr>
<td rowspan="3"><span>Valve</span></td>
<td rowspan="3"><span>VALVE</span></td>
<td rowspan="3"><span>valve</span></td>
<td><span>* Off/On</span></td>
<td><span>OFF_ON</span></td>
<td><span>null</span></td>
<td rowspan="3"><span><a href="#switch-widget">Switch (coming soon)</a>, <a href="#button-control">Button</a></span></td>
</tr>
<tr>
<td><span>Low/High</span></td>
<td><span>LOW_HIGH</span></td>
<td><span>null</span></td>
</tr>
<tr>
<td><span>Digital (0/1)</span></td>
<td><span>DIGITAL</span></td>
<td><span>d</span></td>
</tr>
</tbody>
</table>


**Sensors**

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
</tbody><tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Data Type</b></td>
<td style="font-size: 15px; padding: 10px;" colspan="2"><b>Type Constant &amp; Value</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Unit</b></td>
<td style="font-size: 15px; padding: 10px;" colspan="2"><b>Unit Constant &amp; Value</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Widgets</b></td>
</tr>
<tr>
<td><span>Absolute Humidity</span></td>
<td><span>ABSOLUTE_HUMIDITY</span></td>
<td><span>abs_hum</span></td>
<td><span>Kilograms per cubic meter</span></td>
<td><span>KGM3</span></td>
<td><span>kgm3</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Absorbed Radiation</span></td>
<td rowspan="2"><span>ABSORBED_RADIATION</span></td>
<td rowspan="2"><span>absrb_rad</span></td>
<td><span>* Rad</span></td>
<td><span>RAD</span></td>
<td><span>rad</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Gray</span></td>
<td><span>GRAY</span></td>
<td><span>gy</span></td>
</tr>
<tr>
<td><span>Acceleration.gx axis</span></td>
<td><span>ACCELERATION_GX</span></td>
<td><span>gx</span></td>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>ms2</span></td>
<td><span><a href="#accelerometer-widget">Accelerometer (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Acceleration.gy axis</span></td>
<td><span>ACCELERATION_GY</span></td>
<td><span>gy</span></td>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>ms2</span></td>
<td><span><a href="#accelerometer-widget">Accelerometer (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Acceleration.gz axis</span></td>
<td><span>ACCELERATION_GZ</span></td>
<td><span>gz</span></td>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>ms2</span></td>
<td><span><a href="#accelerometer-widget">Accelerometer (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Altitude</span></td>
<td rowspan="2"><span>ALTITUDE</span></td>
<td rowspan="2"><span>alt</span></td>
<td><span>* Meters above sea level</span></td>
<td><span>METER</span></td>
<td><span>m</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Feet above sea level</span></td>
<td><span>FEET</span></td>
<td><span>ft</span></td>
</tr>
<tr>
<td><span>Amount of substance</span></td>
<td><span>AMOUNT_SUBSTANCE</span></td>
<td><span>amount</span></td>
<td><span>Mole</span></td>
<td><span>MOLE</span></td>
<td><span>mol</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Area</span></td>
<td><span>AREA</span></td>
<td><span>area</span></td>
<td><span>Square meter</span></td>
<td><span>METER2</span></td>
<td><span>m2</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Barometric pressure</span></td>
<td rowspan="2"><span>BAROMETRIC_PRESSURE</span></td>
<td rowspan="2"><span>bp</span></td>
<td><span>Pascal</span></td>
<td><span>PASCAL</span></td>
<td><span>pa</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Hecto Pascal</span></td>
<td><span>HECTOPASCAL</span></td>
<td><span>hpa</span></td>
</tr>
<tr>
<td><span>Battery</span></td>
<td><span>BATTERY</span></td>
<td><span>batt</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td><span><a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Biometric</span></td>
<td><span>BIOMETRIC</span></td>
<td><span>bio</span></td>
<td><span>Byte Array</span></td>
<td><span>BYTE_ARRAY</span></td>
<td><span>null</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a>, <a href="#2-state-display">2 State</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Blood Count</span></td>
<td rowspan="2"><span>BLOOD</span></td>
<td rowspan="2"><span>blood</span></td>
<td><span>* Cells by cubic millimeter</span></td>
<td><span>CELLS_MM3</span></td>
<td><span>cmm</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
</tr>
<tr>
<td rowspan="6"><span>Bytes</span></td>
<td rowspan="6"><span>BYTES</span></td>
<td rowspan="6"><span>bytes</span></td>
<td><span>Bits</span></td>
<td><span>BIT</span></td>
<td><span>bit</span></td>
<td rowspan="6"><span><a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Bytes</span></td>
<td><span>BYTE</span></td>
<td><span>byte</span></td>
</tr>
<tr>
<td><span>Kilobytes</span></td>
<td><span>KB_BYTE</span></td>
<td><span>kb</span></td>
</tr>
<tr>
<td><span>Megabytes</span></td>
<td><span>MB_BYTE</span></td>
<td><span>mb</span></td>
</tr>
<tr>
<td><span>Gigabytes</span></td>
<td><span>GB_BYTE</span></td>
<td><span>gb</span></td>
</tr>
<tr>
<td><span>Terabytes</span></td>
<td><span>TB_BYTE</span></td>
<td><span>tb</span></td>
</tr>
<tr>
<td><span>Capacitance</span></td>
<td><span>CAPACITANCE</span></td>
<td><span>cap</span></td>
<td><span>Farad</span></td>
<td><span>FARAD</span></td>
<td><span>farad</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Carbon Dioxide</span></td>
<td rowspan="2"><span>CO2</span></td>
<td rowspan="2"><span>co2</span></td>
<td><span>* Parts per milliion</span></td>
<td><span>PPM</span></td>
<td><span>ppm</span></td>
<td rowspan="2"><span>CO2 Detector (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Units of Micromole</span></td>
<td><span>UNITS_MICROMOLE</span></td>
<td><span>wmoco2</span></td>
</tr>
<tr>
<td><span>Charge</span></td>
<td><span>CHARGE</span></td>
<td><span>charge</span></td>
<td><span>Coulomb</span></td>
<td><span>COULOMB</span></td>
<td><span>q</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Cholesterol</span></td>
<td rowspan="2"><span>CHOLESTEROL</span></td>
<td rowspan="2"><span>chol</span></td>
<td><span>Millimoles/liter</span></td>
<td><span>MMOL_L</span></td>
<td><span>mmol</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Milligrams/deciliter</span></td>
<td><span>MG_DL</span></td>
<td><span>mgdl</span></td>
</tr>
<tr>
<td rowspan="3"><span>Color</span></td>
<td rowspan="3"><span>COLOR</span></td>
<td rowspan="3"><span>color</span></td>
<td><span>* RGB</span></td>
<td><span>RGB</span></td>
<td><span>null</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>CYMK</span></td>
<td><span>CYMK</span></td>
<td><span>null</span></td>
</tr>
<tr>
<td><span>Hexadecimal</span></td>
<td><span>HEX</span></td>
<td><span>null</span></td>
</tr>
<tr>
<td><span>Conductance</span></td>
<td><span>CONDUCTANCE</span></td>
<td><span>conduct</span></td>
<td><span>Siemen</span></td>
<td><span>SIEMEN</span></td>
<td><span>s</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>CPU</span></td>
<td><span>CPU</span></td>
<td><span>cpu</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td><span><a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Current</span></td>
<td><span>CURRENT</span></td>
<td><span>current</span></td>
<td><span>Ampere</span></td>
<td><span>AMP</span></td>
<td><span>a</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Current density</span></td>
<td><span>CURRENT_DENSITY</span></td>
<td><span>current_density</span></td>
<td><span>Ampere per squre meter</span></td>
<td><span>AMP_2_METER</span></td>
<td><span>am2</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Density</span></td>
<td><span>DENSITY</span></td>
<td><span>density</span></td>
<td><span>Kilograms per cubic meter</span></td>
<td><span>KGM3</span></td>
<td><span>kgm3</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>Effective Radiation</span></td>
<td rowspan="3"><span>EFFECTIVE_RADATION</span></td>
<td rowspan="3"><span>eff_rad</span></td>
<td><span>Roentgen</span></td>
<td><span>ROENTGEN</span></td>
<td><span>roent</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Sievert</span></td>
<td><span>SIEVERT</span></td>
<td><span>sv</span></td>
</tr>
<tr>
<td><span>SieVert per Hour</span></td>
<td><span>SIEVERT_HOUR</span></td>
<td><span>svph</span></td>
</tr>
<tr>
<td rowspan="2"><span>Force</span></td>
<td rowspan="2"><span>FORCE</span></td>
<td rowspan="2"><span>force</span></td>
<td><span>* Newtons</span></td>
<td><span>NEWTON</span></td>
<td><span>null</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Metric</span></td>
<td><span>METRIC_FORCE</span></td>
<td><span>force</span></td>
</tr>
<tr>
<td><span>Frequency</span></td>
<td><span>FREQUENCY</span></td>
<td><span>freq</span></td>
<td><span>Hertz</span></td>
<td><span>HERTZ</span></td>
<td><span>hz</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>Gas</span></td>
<td rowspan="3"><span>GAS</span></td>
<td rowspan="3"><span>gas</span></td>
<td><span>* Pascal</span></td>
<td><span>PASCAL</span></td>
<td><span>pa</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Cubic meters</span></td>
<td><span>METER3</span></td>
<td><span>m3</span></td>
</tr>
<tr>
<td><span>Kilograms per cubic meter</span></td>
<td><span>KGM3</span></td>
<td><span>kgm3</span></td>
</tr>
<tr>
<td rowspan="2"><span>Glucose</span></td>
<td rowspan="2"><span>GLUCOSE</span></td>
<td rowspan="2"><span>glucose</span></td>
<td><span>Millimoles/liter</span></td>
<td><span>MMOL_L</span></td>
<td><span>mmol</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Milligrams/deciliter</span></td>
<td><span>MG_DL</span></td>
<td><span>mgdl</span></td>
</tr>
<tr>
<td rowspan="2"><span>GPS</span></td>
<td rowspan="2"><span>GPS</span></td>
<td rowspan="2"><span>gps</span></td>
<td><span>* Global Positioning System</span></td>
<td><span>GPS</span></td>
<td><span>gps</span></td>
<td rowspan="2"><span><a href="#map-widget">Map</a></span></td>
</tr>
<tr>
<td><span>Universal Transverse Mercator</span></td>
<td><span>UTM</span></td>
<td><span>utm</span></td>
</tr>
<tr>
<td rowspan="2"><span>Gravity.x axis</span></td>
<td rowspan="2"><span>GRAVITY_X</span></td>
<td rowspan="2"><span>grav_x</span></td>
<td><span>Newtons per kilogram</span></td>
<td><span>NEWTON_PER_KG</span></td>
<td><span>nkg</span></td>
<td rowspan="2">Gravity (coming soon), <a href="#donut-widget">Donut (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></td>
</tr>
<tr>
<td><span>* Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>ms2</span></td>
</tr>
<tr>
<td rowspan="2"><span>Gravity.y axis</span></td>
<td rowspan="2"><span>GRAVITY_Y</span></td>
<td rowspan="2"><span>grav_y</span></td>
<td><span>Newtons per kilogram</span></td>
<td><span>NEWTON_PER_KG</span></td>
<td><span>nkg</span></td>
<td rowspan="2">Gravity (coming soon), <a href="#donut-widget">Donut (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></td>
</tr>
<tr>
<td><span>* Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>ms2</span></td>
</tr>
<tr>
<td rowspan="2"><span>Gravity.z axis</span></td>
<td rowspan="2"><span>GRAVITY_Z</span></td>
<td rowspan="2"><span>grav_z</span></td>
<td><span>Newtons per kilogram</span></td>
<td><span>NEWTON_PER_KG</span></td>
<td><span>nkg</span></td>
<td rowspan="2"><span>Gravity (coming soon), <a href="#donut-widget">Donut (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>ms2</span></td>
</tr>
<tr>
<td rowspan="2"><span>Gyroscope.rate of rotation around x axis</span></td>
<td rowspan="2"><span>GYRO_X</span></td>
<td rowspan="2"><span>gyro_x</span></td>
<td><span>* Rotation speed</span></td>
<td><span>ROTATION</span></td>
<td><span>rot</span></td>
<td rowspan="2"><span><a href="#gyroscope-widget">Gyroscope (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>mps2</span></td>
</tr>
<tr>
<td rowspan="2"><span>Gyroscope.rate of rotation around y axis</span></td>
<td rowspan="2"><span>GYRO_Y</span></td>
<td rowspan="2"><span>gyro_y</span></td>
<td><span>* Rotation speed</span></td>
<td><span>ROTATION</span></td>
<td><span>rot</span></td>
<td rowspan="2"><span><a href="#gyroscope-widget">Gyroscope (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>mps2</span></td>
</tr>
<tr>
<td rowspan="2"><span>Gyroscope.rate of rotation around z axis</span></td>
<td rowspan="2"><span>GYRO_Z</span></td>
<td rowspan="2"><span>gyro_z</span></td>
<td><span>* Rotation speed</span></td>
<td><span>ROTATION</span></td>
<td><span>rot</span></td>
<td rowspan="2"><span><a href="#gyroscope-widget">Gyroscope (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>mps2</span></td>
</tr>
<tr>
<td><span>HVAC.Humdity</span></td>
<td><span>HVAC_HUMIDITY</span></td>
<td><span>hvac_hum</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td>HVAC (coming soon), <a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></td>
</tr>
<tr>
<td><span>Image</span></td>
<td><span>IMAGE</span></td>
<td><span>image</span></td>
<td><span>Byte Array</span></td>
<td><span>BYTE_ARRAY</span></td>
<td><span>null</span></td>
<td><span><a href="#camera-widget">Camera (Gallery)(coming soon)</a></span></td>
</tr>
<tr>
<td><span>Impedance</span></td>
<td><span>IMPEDANCE</span></td>
<td><span>imped</span></td>
<td><span>Ohm</span></td>
<td><span>OHM</span></td>
<td><span>ohm</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Inductance</span></td>
<td><span>INDUCTANCE</span></td>
<td><span>induct</span></td>
<td><span>Henry</span></td>
<td><span>HENRY</span></td>
<td><span>h</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Ink Levels.Black</span></td>
<td><span>INK_BLACK</span></td>
<td><span>ink_blk</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td><span>Ink Levels (coming soon), <a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Ink Levels.Cyan</span></td>
<td><span>INK_CYAN</span></td>
<td><span>ink_cya</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td><span>Ink Levels (coming soon), <a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Ink Levels.Magenta</span></td>
<td><span>INK_MEGENTA</span></td>
<td><span>ink_mag</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td><span>Ink Levels (coming soon), <a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Ink Levels.Yellow</span></td>
<td><span>INK_YELLOW</span></td>
<td><span>ink_yel</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td><span>Ink Levels (coming soon), <a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Intrusion</span></td>
<td><span>INTRUSION</span></td>
<td><span>intrusion</span></td>
<td><span>Digital (0/1)</span></td>
<td><span>DIGITAL</span></td>
<td><span>d</span></td>
<td><span><a href="#intrusion-widget">Intrusion (coming soon)</a>, <a href="#2-state-display">2 State</a>, <a href="#line-chart-display">Line Chart</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>Ionizing Radiation</span></td>
<td rowspan="3"><span>IONIZING_RADIATION</span></td>
<td rowspan="3"><span>ion_rad</span></td>
<td><span>* Electron Volts</span></td>
<td><span>ELECTRON_VOLT</span></td>
<td><span>ev</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Ergs</span></td>
<td><span>ERGS</span></td>
<td><span>erg</span></td>
</tr>
<tr>
<td><span>Joules</span></td>
<td><span>JOULE</span></td>
<td><span>j</span></td>
</tr>
<tr>
<td rowspan="3"><span>Length</span></td>
<td rowspan="3"><span>LENGTH</span></td>
<td rowspan="3"><span>len</span></td>
<td><span>* Meter</span></td>
<td><span>METER</span></td>
<td><span>m</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Digital (0/1)</span></td>
<td><span>DIGITAL</span></td>
<td><span>d</span></td>
</tr>
<tr>
<td><span>Low/High</span></td>
<td><span>LOW_HIGH</span></td>
<td><span>null</span></td>
</tr>
<tr>
<td rowspan="4"><span>Lighting</span></td>
<td rowspan="4"><span>LIGHTING_SENSE</span></td>
<td rowspan="4"><span>lighting_sense</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td rowspan="4"><span><a href="#lighting-widget">Lighting (coming soon)</a>, <a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Lux</span></td>
<td><span>LUX</span></td>
<td><span>lux</span></td>
</tr>
<tr>
<td><span>Volts</span></td>
<td><span>VOLTS</span></td>
<td><span>v</span></td>
</tr>
<tr>
<td><span>Ratio</span></td>
<td><span>RATIO</span></td>
<td><span>r</span></td>
</tr>
<tr>
<td><span>Linear Acceleration.x axis</span></td>
<td><span>LINEAR_ACCEL_X</span></td>
<td><span>lin_acc_x</span></td>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>mps2</span></td>
<td><span>Linear Acceleration (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Linear Acceleration.y axis</span></td>
<td><span>LINEAR_ACCEL_Y</span></td>
<td><span>lin_acc_y</span></td>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>mps2</span></td>
<td><span>Linear Acceleration (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Linear Acceleration.z axis</span></td>
<td><span>LINEAR_ACCEL_Z</span></td>
<td><span>lin_acc_z</span></td>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>mps2</span></td>
<td><span>Linear Acceleration (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="4"><span>Liquid</span></td>
<td rowspan="4"><span>LIQUID</span></td>
<td rowspan="4"><span>liquid</span></td>
<td><span>* Liter</span></td>
<td><span>LITER</span></td>
<td><span>l</span></td>
<td rowspan="4"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Gallon</span></td>
<td><span>GALLON</span></td>
<td><span>gal</span></td>
</tr>
<tr>
<td><span>Ounce</span></td>
<td><span>OUNCE</span></td>
<td><span>oz</span></td>
</tr>
<tr>
<td><span>Cubic centimeter</span></td>
<td><span>CUBIC_CENT</span></td>
<td><span>cc</span></td>
</tr>
<tr>
<td><span>Location.Latitude</span></td>
<td><span>LOCATION_LAT</span></td>
<td><span>loc_lat</span></td>
<td><span>Latitude</span></td>
<td><span>LATITUDE</span></td>
<td><span>lat</span></td>
<td><span><a href="#map-widget">Map</a></span></td>
</tr>
<tr>
<td><span>Location.Longitude</span></td>
<td><span>LOCATION_LONG</span></td>
<td><span>loc_lon</span></td>
<td><span>Longitude</span></td>
<td><span>LONGITUDE</span></td>
<td><span>long</span></td>
<td><span><a href="#map-widget">Map</a></span></td>
</tr>
<tr>
<td rowspan="4"><span>Luminosity</span></td>
<td rowspan="4"><span>LUMINOSITY</span></td>
<td rowspan="4"><span>lum</span></td>
<td><span>* Lux</span></td>
<td><span>LUX</span></td>
<td><span>lux</span></td>
<td rowspan="4"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Volts</span></td>
<td><span>VOLTS</span></td>
<td><span>v</span></td>
</tr>
<tr>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
</tr>
<tr>
<td><span>Ratio</span></td>
<td><span>RATIO</span></td>
<td><span>r</span></td>
</tr>
<tr>
<td><span>Magnetic field strength H</span></td>
<td><span>MAGNETIC_STRENGTH</span></td>
<td><span>mag_str</span></td>
<td><span>Amperes per meter</span></td>
<td><span>AMP_METER</span></td>
<td><span>ampm</span></td>
<td><span>Magnetic Field H &amp; B (coming soon), <a href="#magnetometer-widget">Magnetometer (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Magnetic field.x axis</span></td>
<td><span>MAGNETIC_AXIS_X</span></td>
<td><span>mag_x</span></td>
<td><span>Tesla</span></td>
<td><span>TESLA</span></td>
<td><span>tesla</span></td>
<td><span><a href="#magnetometer-widget">Magnetometer (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Magnetic field.y axis</span></td>
<td><span>MAGNETIC_AXIS_Y</span></td>
<td><span>mag_y</span></td>
<td><span>Tesla</span></td>
<td><span>TESLA</span></td>
<td><span>tesla</span></td>
<td><span><a href="#magnetometer-widget">Magnetometer (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Magnetic field.z axis</span></td>
<td><span>MAGNETIC_AXIS_Z</span></td>
<td><span>mag_z</span></td>
<td><span>Tesla</span></td>
<td><span>TESLA</span></td>
<td><span>tesla</span></td>
<td><span><a href="#magnetometer-widget">Magnetometer (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Magnetic flux density B</span></td>
<td><span>MAGNETIC_FLUX_DENSITY</span></td>
<td><span>mag_flux</span></td>
<td><span>Newton-meters per ampere</span></td>
<td><span>NEWTON_METERS_AMP</span></td>
<td><span>nma</span></td>
<td><span>Magnetic Field H &amp; B (coming soon), <a href="#magnetometer-widget">Magnetometer (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Mass</span></td>
<td><span>MASS</span></td>
<td><span>mass</span></td>
<td><span>Kilogram</span></td>
<td><span>KILOGRAM</span></td>
<td><span>kg</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>Memory</span></td>
<td rowspan="3"><span>MEMORY</span></td>
<td rowspan="3"><span>mem</span></td>
<td><span>Kilobytes</span></td>
<td><span>KB_BYTE</span></td>
<td><span>kb</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Megabytes</span></td>
<td><span>MB_BYTE</span></td>
<td><span>mb</span></td>
</tr>
<tr>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
</tr>
<tr>
<td><span>Motion</span></td>
<td><span>MOTION</span></td>
<td><span>motion</span></td>
<td><span>Digital (0/1)</span></td>
<td><span>DIGITAL</span></td>
<td><span>d</span></td>
<td><span><a href="#motion-widget">Motion (coming soon)</a>, <a href="#2-state-display">2 State</a>, <a href="#line-chart-display">Line Chart</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>Oil</span></td>
<td rowspan="3"><span>OIL</span></td>
<td rowspan="3"><span>oil</span></td>
<td><span>Oil Barrel</span></td>
<td><span>BARREL</span></td>
<td><span>bbl</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* gallon</span></td>
<td><span>GALLON</span></td>
<td><span>gal</span></td>
</tr>
<tr>
<td><span>liter</span></td>
<td><span>LITER</span></td>
<td><span>l</span></td>
</tr>
<tr>
<td><span>Orientation.Azimuth</span></td>
<td><span>ORIENT_AZIMUTH</span></td>
<td><span>ori_azim</span></td>
<td><span>Degree Angle</span></td>
<td><span>DEGREE</span></td>
<td><span>deg</span></td>
<td><span>Orientation (coming soon), <a href="#meter-widget">Meter (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Orientation.Pitch</span></td>
<td><span>ORIENT_PITCH</span></td>
<td><span>ori_pitch</span></td>
<td><span>Degree Angle</span></td>
<td><span>DEGREE</span></td>
<td><span>deg</span></td>
<td><span>Orientation (coming soon), <a href="#meter-widget">Meter (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Orientation.Roll</span></td>
<td><span>ORIENT_ROLL</span></td>
<td><span>ori_roll</span></td>
<td><span>Degree Angle</span></td>
<td><span>DEGREE</span></td>
<td><span>deg</span></td>
<td><span>Orientation (coming soon), <a href="#meter-widget">Meter (coming soon)</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>pH-Acidity</span></td>
<td><span>ACIDITY</span></td>
<td><span>acid</span></td>
<td><span>Acidity</span></td>
<td><span>ACIDITY</span></td>
<td><span>acid</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Power</span></td>
<td><span>POWER</span></td>
<td><span>pow</span></td>
<td><span>Watts</span></td>
<td><span>WATT</span></td>
<td><span>w</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Pollution.Nitrogen</span></td>
<td><span>POLLUTION_NO2</span></td>
<td><span>no2</span></td>
<td><span>Nitrogen dioxide</span></td>
<td><span>NO2</span></td>
<td><span>no2</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>,<a href="#gauge-display">Gauge</a>,<a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Pollution.Ozone</span></td>
<td><span>POLLUTION_O3</span></td>
<td><span>o3</span></td>
<td><span>Ozone</span></td>
<td><span>O3</span></td>
<td><span>o3</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>,<a href="#gauge-display">Gauge</a>,<a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="7"><span>Pressure</span></td>
<td rowspan="7"><span>PRESSURE</span></td>
<td rowspan="7"><span>press</span></td>
<td><span>* Pascal</span></td>
<td><span>PASCAL</span></td>
<td><span>pa</span></td>
<td rowspan="7"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Hecto Pascal</span></td>
<td><span>HECTOPASCAL</span></td>
<td><span>hpa</span></td>
</tr>
<tr>
<td><span>Bar</span></td>
<td><span>BAR</span></td>
<td><span>bar</span></td>
</tr>
<tr>
<td><span>Technical atmosphere</span></td>
<td><span>TECH_ATMO</span></td>
<td><span>at</span></td>
</tr>
<tr>
<td><span>Standard atmosphere</span></td>
<td><span>STD_ATMO</span></td>
<td><span>atm</span></td>
</tr>
<tr>
<td><span>Torr</span></td>
<td><span>TORR</span></td>
<td><span>torr</span></td>
</tr>
<tr>
<td><span>Pounds per square inch</span></td>
<td><span>PSI</span></td>
<td><span>psi</span></td>
</tr>
<tr>
<td rowspan="2"><span>Proximity</span></td>
<td rowspan="2"><span>PROXIMITY</span></td>
<td rowspan="2"><span>prox</span></td>
<td><span>* Centimeter</span></td>
<td><span>CENTIMETER</span></td>
<td><span>cm</span></td>
<td rowspan="2"><span><a href="#proximity-widget">Proximity (coming soon)</a>, <a href="#2-state-display">2 State</a>, <a href="#line-chart-display">Line Chart</a></span></td>
</tr>
<tr>
<td><span>Digital (0/1)</span></td>
<td><span>DIGITAL</span></td>
<td><span>d</span></td>
</tr>
<tr>
<td rowspan="2"><span>Radioactivity</span></td>
<td rowspan="2"><span>RADIOACTIVITY</span></td>
<td rowspan="2"><span>rad</span></td>
<td><span>Becquerel</span></td>
<td><span>BECQUEREL</span></td>
<td><span>bq</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Curie</span></td>
<td><span>CURIE</span></td>
<td><span>ci</span></td>
</tr>
<tr>
<td rowspan="2"><span>Radiation Exposure</span></td>
<td rowspan="2"><span>EXPOSURE_RADIATION</span></td>
<td rowspan="2"><span>expo_rad</span></td>
<td><span>* Roentgen</span></td>
<td><span>ROENTGEN</span></td>
<td><span>roent</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Coulomb/Kilogram</span></td>
<td><span>COULOMB_PER_KG</span></td>
<td><span>ckg</span></td>
</tr>
<tr>
<td><span>Relative Humidity</span></td>
<td><span>RELATIVE_HUMIDITY</span></td>
<td><span>rel_hum</span></td>
<td><span>Relative Humidity</span></td>
<td><span>REL_HUMIDITY</span></td>
<td><span>rel_hum</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Resistance</span></td>
<td><span>RESISTANCE</span></td>
<td><span>res</span></td>
<td><span>Ohm</span></td>
<td><span>OHM</span></td>
<td><span>ohm</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>Rotation</span></td>
<td rowspan="3"><span>ROTATION</span></td>
<td rowspan="3"><span>rot</span></td>
<td><span>Revolutions per minute</span></td>
<td><span>RPM</span></td>
<td><span>rpm</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Revolutions per second</span></td>
<td><span>RPMS</span></td>
<td><span>rpms</span></td>
</tr>
<tr>
<td><span>Radians per second</span></td>
<td><span>rad/s</span></td>
<td><span>radianps</span></td>
</tr>
<tr>
<td><span>Rotation Vector.scalar</span></td>
<td><span>ROTATION_SCALAR</span></td>
<td><span>rot_scal</span></td>
<td><span>Cos(0/2)</span></td>
<td><span>ROT_SCAL</span></td>
<td><span>null</span></td>
<td><span>Rotation Vector (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Rotation Vector.x axis</span></td>
<td><span>ROTATION_X</span></td>
<td><span>rot_x</span></td>
<td><span>X * sin (0/2)</span></td>
<td><span>ROT_X</span></td>
<td><span>null</span></td>
<td><span>Rotation Vector (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Rotation Vector.y axis</span></td>
<td><span>ROTATION_Y</span></td>
<td><span>rot_y</span></td>
<td><span>Y * sin (0/2)</span></td>
<td><span>ROT_Y</span></td>
<td><span>null</span></td>
<td><span>Rotation Vector (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Rotation Vector.z axis</span></td>
<td><span>ROTATION_Z</span></td>
<td><span>rot_z</span></td>
<td><span>Z * sin (0/2)</span></td>
<td><span>ROT_Z</span></td>
<td><span>null</span></td>
<td><span>Rotation Vector (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>Seismometer</span></td>
<td rowspan="3"><span>SEISMOMETER</span></td>
<td rowspan="3"><span>seis</span></td>
<td><span>Microns (micrometers) /second,</span></td>
<td><span>MICROS_PER_SEC</span></td>
<td><span>micps</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Volts</span></td>
<td><span>VOLTS</span></td>
<td><span>v</span></td>
</tr>
<tr>
<td><span>Spectral Amplitude</span></td>
<td><span>cm/hertz</span></td>
<td><span>cmhz</span></td>
</tr>
<tr>
<td><span>Signal Strength</span></td>
<td><span>SIGNAL_STRENGTH</span></td>
<td><span>sig_str</span></td>
<td><span>Decibels per milliwatt</span></td>
<td><span>DBM</span></td>
<td><span>dbm</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>Smoke</span></td>
<td rowspan="3"><span>SMOKE</span></td>
<td rowspan="3"><span>smoke</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td rowspan="3"><span>Smoke Detector (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Photodiode</span></td>
<td><span>PHOTODIODE</span></td>
<td><span>pz</span></td>
</tr>
<tr>
<td><span>* Kiloelectron Volts</span></td>
<td><span>KILOELEC_VOLT</span></td>
<td><span>kev</span></td>
</tr>
<tr>
<td><span>Solid Volume</span></td>
<td><span>SOLID_VOLUME</span></td>
<td><span>solid_vol</span></td>
<td><span>Cubic meter</span></td>
<td><span>CUBIC_METER</span></td>
<td><span>m3</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Sound</span></td>
<td><span>SOUND</span></td>
<td><span>sound</span></td>
<td><span>Decibels per milliwatt</span></td>
<td><span>DBM</span></td>
<td><span>dbm</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Specific Humidity</span></td>
<td><span>SPECIFIC_HUMIDITY</span></td>
<td><span>spec_hum</span></td>
<td><span>Grams/Kilograms</span></td>
<td><span>G_PER_KG</span></td>
<td><span>gkg</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Speed</span></td>
<td rowspan="2"><span>SPEED</span></td>
<td rowspan="2"><span>speed</span></td>
<td><span>Kilometer per hour</span></td>
<td><span>KM_PER_H</span></td>
<td><span>kmh</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Miles per hour</span></td>
<td><span>MPH</span></td>
<td><span>mph</span></td>
</tr>
<tr>
<td><span>Steps</span></td>
<td><span>STEPS</span></td>
<td><span>steps</span></td>
<td><span>Steps</span></td>
<td><span>STEPS</span></td>
<td><span>null</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="5"><span>Storage</span></td>
<td rowspan="5"><span>STORAGE</span></td>
<td rowspan="5"><span>storage</span></td>
<td><span>Bytes</span></td>
<td><span>BYTE</span></td>
<td><span>byte</span></td>
<td rowspan="5"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Kilobytes</span></td>
<td><span>KB_BYTE</span></td>
<td><span>kb</span></td>
</tr>
<tr>
<td><span>* Megabytes</span></td>
<td><span>MB_BYTE</span></td>
<td><span>mb</span></td>
</tr>
<tr>
<td><span>Gigabytes</span></td>
<td><span>GB_BYTE</span></td>
<td><span>gb</span></td>
</tr>
<tr>
<td><span>Terabytes</span></td>
<td><span>TB_BYTE</span></td>
<td><span>tb</span></td>
</tr>
<tr>
<td rowspan="3"><span>Stress</span></td>
<td rowspan="3"><span>STRESS</span></td>
<td rowspan="3"><span>stress</span></td>
<td><span>Pascal</span></td>
<td><span>PASCAL</span></td>
<td><span>pa</span></td>
<td rowspan="3"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Hecto Pascal</span></td>
<td><span>HECTOPASCAL</span></td>
<td><span>hpa</span></td>
</tr>
<tr>
<td><span>Pounds per square inch</span></td>
<td><span>PSI</span></td>
<td><span>psi</span></td>
</tr>
<tr>
<td rowspan="6"><span>Temperature</span></td>
<td rowspan="6"><span>TEMPERATURE</span></td>
<td rowspan="6"><span>temp</span></td>
<td><span>Fahrenheit</span></td>
<td><span>FAHRENHEIT</span></td>
<td><span>f</span></td>
<td rowspan="6"><span><a href="#value-display">Value</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a></span></td>
</tr>
<tr>
<td><span>* Celsius</span></td>
<td><span>CELSIUS</span></td>
<td><span>c</span></td>
</tr>
<tr>
<td><span>Kelvin</span></td>
<td><span>KELVIN</span></td>
<td><span>k</span></td>
</tr>
<tr>
<td><span>Volts</span></td>
<td><span>VOLTS</span></td>
<td><span>v</span></td>
</tr>
<tr>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
</tr>
<tr>
<td><span>Ratio</span></td>
<td><span>RATIO</span></td>
<td><span>r</span></td>
</tr>
<tr>
<td rowspan="7"><span>Time</span></td>
<td rowspan="7"><span>TIME</span></td>
<td rowspan="7"><span>time</span></td>
<td><span>* Second</span></td>
<td><span>s</span></td>
<td><span>sec</span></td>
<td rowspan="7"><span>Time (coming soon), <a href="#lcd-widget">LCD (coming soon)</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Milliseconds</span></td>
<td><span>ms</span></td>
<td><span>msec</span></td>
</tr>
<tr>
<td><span>minute</span></td>
<td><span>mb</span></td>
<td><span>min</span></td>
</tr>
<tr>
<td><span>hour</span></td>
<td><span>h</span></td>
<td><span>hour</span></td>
</tr>
<tr>
<td><span>day</span></td>
<td><span>d</span></td>
<td><span>day</span></td>
</tr>
<tr>
<td><span>month</span></td>
<td><span>m</span></td>
<td><span>month</span></td>
</tr>
<tr>
<td><span>year</span></td>
<td><span>y</span></td>
<td><span>year</span></td>
</tr>
<tr>
<td rowspan="2"><span>Torque</span></td>
<td rowspan="2"><span>TORQUE</span></td>
<td rowspan="2"><span>torq</span></td>
<td><span>* Newton-meter</span></td>
<td><span>nm</span></td>
<td><span>newtm</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Joule</span></td>
<td><span>j</span></td>
<td><span>j</span></td>
</tr>
<tr>
<td rowspan="2"><span>Turbidity</span></td>
<td rowspan="2"><span>TURBIDITY</span></td>
<td rowspan="2"><span>turb</span></td>
<td><span>Nephelometric Turbidity Unit</span></td>
<td><span>ntu</span></td>
<td><span>ntu</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>* Formazin Turbidity Unit</span></td>
<td><span>ftu</span></td>
<td><span>ftu</span></td>
</tr>
<tr>
<td><span>Ultrasonic</span></td>
<td><span>ULTRASONIC</span></td>
<td><span>ultra</span></td>
<td><span>Kilohertz</span></td>
<td><span>khz</span></td>
<td><span>khz</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Velocity</span></td>
<td><span>VELOCITY</span></td>
<td><span>velo</span></td>
<td><span>Meters per second squared</span></td>
<td><span>METER_PER_SEC</span></td>
<td><span>mps</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Viscosity</span></td>
<td><span>VISCOSITY</span></td>
<td><span>visco</span></td>
<td><span>Millipascal-second</span></td>
<td><span>MILLIPASCAL_SEC</span></td>
<td><span>mpas</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Voltage</span></td>
<td><span>VOLTAGE</span></td>
<td><span>voltage</span></td>
<td><span>Volts</span></td>
<td><span>VOLTS</span></td>
<td><span>v</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Volume</span></td>
<td><span>VOLUME</span></td>
<td><span>vol</span></td>
<td><span>Cubic meter</span></td>
<td><span>CUBIC_METER</span></td>
<td><span>m3</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Water</span></td>
<td rowspan="2"><span>WATER</span></td>
<td rowspan="2"><span>h20</span></td>
<td><span>* Gallons per minute</span></td>
<td><span>GPM</span></td>
<td><span>gpm</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Cubic feet per second</span></td>
<td><span>CUBIC_FEET_SEC</span></td>
<td><span>cfs</span></td>
</tr>
<tr>
<td><span>Wavelength</span></td>
<td><span>WAVELENGTH</span></td>
<td><span>wave</span></td>
<td><span>Meters</span></td>
<td><span>METER</span></td>
<td><span>m</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Weight</span></td>
<td rowspan="2"><span>WEIGHT</span></td>
<td rowspan="2"><span>weight</span></td>
<td><span>* Pounds</span></td>
<td><span>POUND</span></td>
<td><span>lbs</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Kilogram</span></td>
<td><span>KILOGRAM</span></td>
<td><span>kg</span></td>
</tr>
</tbody>
</table>

* Denotes default value for Unit.


## MQTT Messaging

**About MQTT**

MQTT is a lightweight messaging protocol designed to be used on top of TCP/IP. It uses an event and message (_publish-subscribe_) methodology that was designed especially for connections where small footprints, unreliable and/or limited bandwidth connections are found. This type of pattern is especially suited for IoT devices that get deployed in the field and often run on battery power and on constrained networks. With MQTT, the publish-subscribe pattern makes use of a _broker_ that is responsible for distributing messages to clients. Clients can subscribe to varying levels of messages, depending upon how much or what kind of data they are interested.

**Using MQTT with Cayenne**

MQTT is the preferred transport and API for sending data to the Cayenne Cloud, or for devices that receive commands from Cayenne. The Cayenne Cloud acts as a broker, managing the various sensor and actuator client devices that wish to send and receive data using the Cayenne Cloud.

Cayenne MQTT is straight forward and easy to use. MQTT payloads are text/plain based, and topics follow a simple to use topic chain, compose of your **Account API Key**, a **Device API Token**, a given **Device ID**, as well as **Channel ID**. This allows the finest possible filtering and access control for your data. Using MQTT, your custom devices can be easily integrated into Cayenne, publishing data for Cayenne to process, or allowing your devices to subscribe to Cayenne for use in your third party application.


### Send System info

System information are very basic information that may change very rarely over device lifetime.

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Topic</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Publish</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Subscribe</b></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/sys/model</span></td>
<td><span><b>✔</b></span></td>
<td><span><b>✔</b></span></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/sys/version</span></td>
<td><span><b>✔</b></span></td>
<td><span><b>✔</b></span></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/sys/cpu/model</span></td>
<td><span><b>✔</b></span></td>
<td><span><b>✔</b></span></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/sys/cpu/speed</span></td>
<td><span><b>✔</b></span></td>
<td><span><b>✔</b></span></td>
</tr>
</tbody>
</table>

A string payload for each topic is expected :

*   (string) Device Model, eg. “Arduino Uno”
*   (string) Device Version, eg. “1.0”
*   (string) Device CPU Model, eg. “ATMega328”
*   (string) Device CPU Speed, eg. “72000000000” for 72Mhz


### Send Sensor data

In order to send data, channel ID need to be appended to data topic.

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Topic</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Publish</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Subscribe</b></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/data/<b>channel</b></span></td>
<td><span><b>✔</b></span></td>
<td><span><b>✔</b></span></td>
</tr>
</tbody>
</table>

Data type, then unit can be added to prefix the value, allowing the backend to process and display data without the need of configuring data channel from the dashboard :

*   _(string)_ <span style="font-weight: 400;">value</span>
*   _(string)_ <span style="font-weight: 400;">type=value</span>
*   _(string)_ <span style="font-weight: 400;">type,unit=value</span>


### Send Digital Input data

If required, Cayenne provides and uses a specific Topic for digital based I/O to allow easy GPIO binding.

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Topic</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Publish</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Subscribe</b></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/digital/<b>channel</b></span></td>
<td><span><b>✔</b></span></td>
<td><span><b>✔</b></span></td>
</tr>
</tbody>
</table>

Digital I/O topics expect a single char boolean value :

*   (string) “0” or “1”


### Send Analog Input data

Similar to Digital topic, Cayenne provide analog based I/O for ADC/DAC/PWM binding.

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Topic</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Publish</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Subscribe</b></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/analog/<b>channel</b></span></td>
<td><span><b>✔</b></span></td>
<td><span><b>✔</b></span></td>
</tr>
</tbody>
</table>

Payload must contain raw analog value followed by the optional analog resolution

*   (string) value
*   (string) value,resolution


### Receive Actuator Command

In order to receive command for given data channel, device must subscribe to cmd topic.

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Topic</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Publish</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Subscribe</b></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/cmd/<b>channel</b></span></td>
<td></td>
<td><span><b>✔</b></span></td>
</tr>
</tbody>
</table>

Payload will contain a command sequence number followed by the value. Developer is responsible of managing the value format.

*   (*string*) seq,value


### Receive Digital Output

As a combination of command and digital data topic, Cayenne has digital specific topic for commands.

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Topic</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Publish</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Subscribe</b></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/digital-cmd/<b>channel</b></span></td>
<td></td>
<td><span><b>✔</b></span></td>
</tr>
</tbody>
</table>

Similar to regular commands, payload will contains a sequence number followed by the value, except the value is limited to “0” and “1”

*   (*string*) seq,value


### Receive Analog Output

Like the digital command, device can subscribe to analog command specific topics.

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Topic</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Publish</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Subscribe</b></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/analog-cmd/<b>channel</b></span></td>
<td></td>
<td><span><b>✔</b></span></td>
</tr>
</tbody>
</table>

Again, sequence number and value will be sent in the payload.

*   (*string*) seq,value


### Send device command response

In order to let the system know of regular/digital/analog command, device must publish response on a common response topic.

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Topic</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Publish</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Subscribe</b></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/response</span></td>
<td><span><b>✔</b></span></td>
<td></td>
</tr>
</tbody>
</table>

Payload must contains the status “ok” or “error”, as well as the command sequence number and an optional message, that will be displayed to the user in case of error.

*   (string) ok,seq
*   (string) error,seq=message


### Receive channel configuration

When adding a widget from the dashboard, backend will publish activation on the appropriate topic. This is useful for the developer to initialize I/O lookup and sending data. As the backend send configuration in retained mode, device will receive the last configuration right after subscribing.

<table style="width: 100%;" border="1" class="data-types-table">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Topic</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Publish</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Subscribe</b></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/conf/<b>channel</b></span></td>
<td></td>
<td><span><b>✔</b></span></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/digital-conf/<b>channel</b></span></td>
<td></td>
<td><span><b>✔</b></span></td>
</tr>
<tr>
<td><span><b>developerID/</b>devices/<b>deviceID</b>/analog-conf/<b>channel</b></span></td>
<td></td>
<td><span><b>✔</b></span></td>
</tr>
</tbody>
</table>

Payload will simply contain “on” or “off”


### Examples


**Send a Temperature data**

⇒ PUB user@domain/devices/0123-4567-89AB-CDEF/data/2       temp,c=20.7


**Send a Digital input data**

⇒ PUB user@domain/devices/0123-4567-89AB-CDEF/digital/3    1
 

**Receive a Digital command**

⇒ SUB user@domain/devices/0123-4567-89AB-CDEF/digital-cmd/3
⇐ 5,0
 

**Send a command response**

⇒ PUB user@domain/devices/0123-4567-89AB-CDEF/response     ok,5

<p id="faqs-api" class="anchor-link"></p>

## FAQs













