#Bring Your Own Thing API

<p id="apis-2-2" class="anchor-link"></p>

##Overview

The Cayenne MQTT API is used to connect any device that you have with the Cayenne Cloud. After connecting your device you can send data from your device to the Cayenne dashboard and display it using widgets. You may also receive commands from Cayenne, allowing remote control and automation of your devices.

###About MQTT

MQTT is a lightweight messaging protocol designed to be used on top of TCP/IP. It uses an event and message (*publish-subscribe*) methodology that was designed especially for connections where small footprints, unreliable and/or limited bandwidth connections are found. This type of pattern is especially suited for IoT devices that get deployed in the field and often run on battery power and on constrained networks. With MQTT, the publish-subscribe pattern makes use of a broker that is responsible for distributing messages to clients. [Clients](#bring-your-own-thing-api-mqtt-clients) can subscribe to varying levels of messages, depending upon how much or what kind of data they are interested.


###Using MQTT with Cayenne

MQTT is the preferred transport and API for sending data to the Cayenne Cloud, or for devices that receive commands from Cayenne. The Cayenne Cloud acts as a broker, managing the various sensor and actuator client devices that wish to send and receive data using the Cayenne Cloud.

Cayenne MQTT is straightforward and easy to use, offering several different ways of connecting your data to Cayenne.

####Option 1: Use the Cayenne MQTT Libraries
This is the easiest way to get started with using MQTT with Cayenne. We have implemented various MQTT libraries that bundle an [MQTT client](#bring-your-own-thing-api-mqtt-clients) and support libraries for supporting MQTT. Using these, you’ll have access to all of the libraries and code examples you’ll need to quickly program and connect your board to Cayenne.

We have prepared walkthroughs and libraries for some of the most common toolchain/IDE combinations to help get you up and running as quickly as possible. If you would like to use our libraries, the easiest way to get started is to jump to a section below and follow the guided walkthrough provided there.
+ [Arduino MQTT Walkthrough](#bring-your-own-thing-api-using-arduino-mqtt) - For Beginner users. This is the easiest way to get started with using Cayenne MQTT in your project. This will walk you through connecting an Arduino board using the Arduino IDE, adding a Temperature sensor as well as a Light actuator.
+ [C++ Walkthrough](#bring-your-own-thing-api-using-c) - For Intermediate users. This will walk you through connecting a Nucleo board using the mbed IDE, with widgets automatically populated on the dashboard and then adding a Light actuator.
+ [Embedded C Walkthrough](#bring-your-own-thing-api-using-embedded-c) - For Advanced users. This will discuss importing the Cayenne Embedded C library into your mbed IDE and provides guidance from there as to which code areas of the code need to be updated/customized in order to implement support for your board.

####Option 2: Use raw MQTT API functions
If you are integrating Cayenne into your existing or custom program, you may wish to only use the raw Cayenne BYOT API functions for interacting with Cayenne. Typically you will have already chosen your own MQTT client, will already have implemented your own networking calls, and you just need the *Publish-Subscribe* details for Cayenne’s BYOT API.

If you fall into this camp, you can jump straight to the [MQTT Messaging Topics](#bring-your-own-thing-api-mqtt-messaging-topics) section where you’ll find the API details for MQTT, including the raw MQTT details on topics and behavior. We have also prepared a tutorial for using an MQTT client to manually publish and subscribe data so that you can test out using MQTT with Cayenne.

+ [Manually Sending / Verifying data](#bring-your-own-thing-api-manually-sending-verifying-data) - This will walk you through using the MQTT.fx client to manually publish and subscribe to Cayenne. This can help you test out using MQTT with Cayenne.

##MQTT Clients
To interact with an MQTT broker you’ll need an MQTT client. Here’s a quick list of MQTT clients and resources:

<a href="http://www.eclipse.org/paho/" target="_blank">Paho</a>: The Eclipse Paho project provides open-source MQTT clients for C/C++, Python, Java, Javascript, Go and C#. If you are using one of [Cayenne’s libraries](#bring-your-own-thing-api-libraries), the Paho client is bundled in the library to make using MQTT with Cayenne easy.

<a href="http://www.mqttfx.org/" target="_blank">MQTT.fx</a>: A JavaFX based MQTT Client.

<a href="https://chrome.google.com/webstore/detail/mqttlens/" target="_blank">MQTT Lens</a>: A Google Chrome extension that connects to an MQTT broker and is able to publish and subscribe to MQTT topics.

<a href="https://github.com/ckrey/MQTTInspector" target="_blank">MQTT Inspector</a>: A general MQTT testing app for iOS (iPhone and iPad).

##Libraries

**TODO: All of these need links**

**Arduino MQTT**
<a href="" target="_blank">Github link</a>
[Walkthrough](#bring-your-own-thing-api-using-arduino-mqtt)

**C++**
<a href="" target="_blank">Github link</a>
[Walkthrough](#bring-your-own-thing-api-using-c)

**Embedded C**
<a href="" target="_blank">Github link</a>
[Walkthrough](#bring-your-own-thing-api-using-embedded-c)

##Using the MQTT Libraries

**Create a Cayenne account**

In order to use the Cayenne MQTT API, you will need to first create a Cayenne account. Visit the <a href="http://www.cayenne-mydevices.com/" target="_blank">Cayenne website</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/get-started-for-free.png" width="660" height="438" alt="get started for free"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/account-sign-up.png" width="660" height="438" alt="account sign up"><br/><br/></p>

After creating your account, Cayenne will ask you which type of device you wish to add to your project. To add a device using the API, select Bring Your Own Thing from the list of devices presented. You will then be taken to a screen with details needed to help you connect your board to Cayenne.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/step-1-choose-device-category-2.png" width="660" height="395" alt="Step 1 - Select device category"><br/><br/></p>

##Using Arduino MQTT

The Cayenne Arduino MQTT library that will give you everything you need to quickly get your board connected with Cayenne using MQTT and the Arduino IDE. Using the Arduino IDE is a fast and easy way to program your Arduino board.

For our example we will  walk through setting up and connecting an [Arduino Uno board](#supported-hardware-microcontrollers-arduino-arduino-uno) to see how easy it is. We first need to setup and configure the Arduino IDE software. We will then program our board and connect it to the Cayenne dashboard. Later, we will walk through adding a [TMP36 Temperature Sensor](#supported-hardware-sensors-temperature-tmp36) and send its sensor data to our dashboard. Finally, we will add a Light actuator to our board and control it using our dashboard.

**TODO: Walk through video here**

###Install Arduino IDE

To use the Cayenne Arduino MQTT Library, the Arduino IDE software should be installed. Go to https://www.arduino.cc/en/Main/Software to download and install the Arduino IDE software if you need it. Arduino IDE can be installed on Windows, Mac or Linux computers.

###Add MQTT Library to Arduino IDE

The Cayenne Arduino MQTT Library is a collection of code, known as sketch files, that makes it easy for you to connect and send data to and from sensors, actuators and devices connected to Arduino boards using MQTT. Cayenne sketch files can be combined with other sketch files for your IoT projects.

<a href="" target="_blank">Download the Cayenne Arduino MQTT Library</a>**TODO: Need public link**
 
The Cayenne Arduino MQTT Library is available directly from the Arduino IDE Libraries list. To install the library, select **Sketch** > **Include library** > **Manage Libraries**. The *Library Manager* dialog will appear. From here, search for the **Cayenne MQTT** library and install it.
 
<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/arduino-ide-manage-libraries.png" width="660" height="552" alt="arduino-ide-manage-libraries"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/arduino-ide-add-mqtt-library.png" width="660" height="552" alt="arduino-ide-add-mqtt-library"><br/><br/></p>

 
The Cayenne MQTT library has now been expanded in the libraries folder in your Arduino sketches directory. You can verify this by going to the **Sketch** > **Include Library** menu where you should now see the Cayenne MQTT library at the bottom of the drop-down menu under *Contributed Libraries*. The Cayenne MQTT library is now ready to be used in your project.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/arduino-ide-mqtt-library-menu.png" width="660" height="553" alt="arduino-ide-mqtt-library-menu"><br/><br/></p>

###Configure Arduino IDE

In order to successfully program your Arduino board, you will need to verify that the appropriate Board and Port are selected in the Arduino IDE.
 
First, verify that the correct Board is selected in the Tools menu. Select the board type that you will be programming.
 
<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Arduino-IDE-board-selection.png" width="660" height="552" alt="Arduino IDE board selection"><br/><br/></p>
 
Then, verify that you have the correct Port selected for communicating with your Arduino. Pick the correct port based upon how you are connecting your Arduino to your PC/Mac.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Arduino-IDE-port-selection.png" width="660" height="552" alt="Arduino IDE port selection"><br/><br/></p>

###Load the example sketch file

After setting up your PC/Mac computer with the Arduino IDE and the Cayenne MQTT Library, you are ready to proceed with programming your board to connect with Cayenne. The Cayenne MQTT Library comes with several different examples, depending upon which type of connection your Arduino board will use to connect to the Internet. To proceed, we need to load the correct example file for our board.

Open the **File** > **Examples** > **CayenneMQTT** > **Connections** menu and select the appropriate sketch file example for the connection type you will be using. In our case, we’ll be using the W5100 shield, so we select the **EthernetShieldW5100** example.

*TIP: If you aren’t sure which connection type you have, you can refer to [Arduino Ethernet and WiFi Shields](#supported-hardware-microcontrollers-arduino-arduino-ethernet-wifi-shield) for more information.*

###Add MQTT Credentials

Once selected, the example sketch file will open in the Arduino IDE. This example sketch file includes everything we need to connect to Cayenne and publish our first set of test data, but it is missing our unique MQTT credentials that will allow us to connect this device into our account. Let’s add those now.

All of the required information we need can be found on the Cayenne dashboard’s Connect screen. Refer to the Connect screen and copy & paste your **MQTT Username**, **MQTT Password** and **Client ID** into the sketch file. The example sketch file includes placeholders for these values, so we just need to update them with the values provided to us on the Connect screen.

*TIP: The credentials shown here are unique for your account and the current device being added. When programming new devices, always be sure to copy & paste from the Connect screen so that the correct values are used for your device.*

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Cayenne-dashboard-Connect-screen.png" width="660" height="395" alt="cayenne-dashboard-connect-screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/arduino-ide-example-filled-in.png" width="660" height="552" alt="arduino-ide-example-filled-in"><br/><br/></p>

###Connect board to Cayenne

Once you have double-checked the sketch file, select **Sketch** > **Upload** to upload the sketch file to your device. As soon as your Arduino device comes online and connects to Cayenne, your device’s dashboard will appear.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Dashboard-1stExperienceB.png" width="660" height="392" alt="dashboard-1stexperienceb"><br/><br/></p>

**Congrats! Your hardware is now connected to the Cayenne Cloud!**

###Send sensor data

Once our board is connected to our Cayenne dashboard, we can send some sensor data and get our very first widget added. For this example, we’ll be using a [TMP36 Temperature Sensor](#supported-hardware-sensors-temperature-tmp36). Begin by making sure that your TMP36 sensor is connected to the Arduino board. If you need help connecting this sensor, you can refer to the [TMP36 Arduino Tutorial](#supported-hardware-sensors-temperature-tmp36-arduino-tutorial). As in the tutorial, our TMP36 sensor will be connected to the Arduino’s Analog Pin 0.

*TIP: You can refer to this <a href="" target="_blank">example file</a> that includes all of the code shown below for reading and sending our sensor’s data to Cayenne.*
**TODO: need public link**

####Reading the TMP36 sensor data

The first step in handling our TMP36 sensor is to write some code to read the sensor’s current value. The TMP36 sensor doesn’t give us a Temperature reading, it will give us an output that is related to voltage. We’d prefer to show a temperature in Celsius on our dashboard, so we also need to convert the reading into a usable temperature. We start by adding the code to read and convert the TMP36 from Analog Pin 0 into celsius temperature.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/arduino-ide-tmp36-read-and-convert-sensor.png" width="WIDTH" height="HEIGHT" alt="arduino-ide-tmp36-read-and-convert-sensor"><br/><br/></p>

####Send Temperature reading to Cayenne

Now let’s send our TMP36 temperature data up to Cayenne. This is easily accomplished, requiring only a single line of code. In this case, we’ll send the data to Cyanne using MQTT Channel 0.

*TIP: There are many ways to read and send sensor data. Depending upon what device you are using and what goals you have in mind, you may choose a different way. You can refer to the [MQTT Messaging Topics](#bring-your-own-thing-api-mqtt-messaging-topics) section for additional guidance on coding for the Cayenne MQTT libraries.*

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/arduino-ide-send-test-data.png" width="660" height="554" alt="arduino-ide-send-test-data"><br/><br/></p>

Once you have double-checked the sketch file, select **Sketch** > **Upload** to upload the sketch file to your device. Shortly after our board comes online, it will read the current temperature of our TMP36 sensor and send the reading to Cayenne. Cayenne will receive this data and automatically add a widget for it! Cayenne will do this automatically for any new MQTT data that you send it. Widgets created in this way are temporary by default, giving you an easy way to test sending new data to Cayenne. If you want to keep this widget permanently, simply click on the widget tile and it will become a permanent widget in your dashboard.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Dashboard-With-Temp-added.png" width="660" height="395" alt="dashboard-with-temp-added"><br/><br/></p>

**Congrats! Your hardware is now sending sensor data to the Cayenne Cloud!**

###Control a Light actuator

Now that we have our board connected to Cayenne and it has successfully sent test data to our dashboard, let’s take a look at how easy it is to add an actuator. For this example, attach a LED to a PWM-enabled Pin on your Arduino Uno. Let’s use Digital Pin 6 in this example.

*TIP: If you need help with wiring up a test LED, you can refer to the [Luminosity hardware tutorial](#arduino-luminosity).*

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Arduino-Luminosity-Step-2.png" width="660" height="338" alt="Arduino-Luminosity-Step-2"><br/><br/></p>

Click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/AddNew.jpg" width="266" height="258" alt="Add New menu"><br/><br/></p>
 
1. Choose **Actuator** > **Light** > **Luminosity**.
2. Give your actuator a name, for example enter “Light” into the **Name** field.
3. We’ll be adding this actuator to our new Arduino device, so make sure your device is selected in the **Device** field.
4. Our actuator is connected to Pin 6, so select 6 from the **Channel** field.

   *TIP: The Arduino IDE library makes connecting your actuator really easy, without the need for you to write any code for actuators! Communication to and from your actuator will use an MQTT Channel equal to the pin number your actuator is connected on. So in this example pin D6 will be routed to MQTT Channel 6 automatically by the library. Thus, we select Channel 6 in the Channel field and the library will take care of everything else.*

5. Click the **Step 2: Add Actuator** button. The light widget will then be added to our dashboard.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Settings-Light-Slider.png" width="660" height="395" alt="settings-light-slider"><br/><br/></p>

Your actuator will be added to your dashboard and we can now use it to control our light, no coding needed when using the Arduino MQTT library!

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Dashboard-With-Temp-added-and-Light.png" width="660" height="395" alt="dashboard-with-temp-added-and-light"><br/><br/></p>

**Congrats! You can now use the slider to control the brightness of the light.**

##Using C++

The Cayenne C++ library will give you everything you need to quickly get your board connected with Cayenne using MQTT and the C++ language. There are many different ways to implement your project using the C++ library, in this section we’ll take you through a complete example. For more versions of this library and help with using those versions of the library, check out the <a href="" target="_blank">Cayenne C++ Github</a>.**TODO: Replace with public link**

For our example we will  walk through setting up and connecting a <a href="https://developer.mbed.org/platforms/ST-Nucleo-F446RE/" target="_blank">Nucleo board with WiFi shield</a>. We will use the <a href="https://www.mbed.com/en/" target="_blank">mbed online IDE</a>, a free online code editor and compiler in which the code is written and compiled within a web browser, and compiled on the cloud using the ARMCC C/C++ compiler. We first need to setup and configure mbed for our project. We will then program our board and connect it to the Cayenne dashboard. Later, we will walk through adding a [BMP180 Temperature & Pressure Sensor](#supported-hardware-sensors-temperature-bmp180) and send its sensor data to our dashboard. Finally, we will add a Light actuator to our board and control it using our dashboard.

**TODO: Walk through video here**

###Connect the board

Before you program your board, make sure to connect your board to your computer. Since we are using the Nucleo board, we connect the board to our computer using a USB cable. On Windows, this will automatically download all required drivers and open a shared folder. We will use that shared folder later to upload our compiled binary generated using mbed.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/nucleo-shared-folder.png" width="660" height="356" alt="nucleo-shared-folder"><br/><br/></p>

###Create mbed account

In order to use the mbed IDE you will need to have an account. To get started, visit <a href="http://developer.mbed.org" target="_blank">developer.mbed.org</a> and sign into your account. If you do not already have an account, click on the <a href="https://developer.mbed.org/account/login/?next=/account/signup/" target="_blank">Log in/Signup link</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-signup.png" width="660" height="395" alt="mbed-signup"><br/><br/></p>

Once your device is setup and you have your mbed account ready to be used, you may proceed with adding the Cayenne C++ library into mbed.

###Setup platform

Before you can program your board, you need setup mbed for the **platform** that you will be using. If your platform is not already setup, you must do so now.

*TIP: If you have been using the mbed IDE for a while, you may already have several platforms setup. Make sure that the correct platform is selected before continuing.*

Let’s walk through adding the **Nucleo-F446RE** to mbed. To begin, visit <a href="https://developer.mbed.org/platforms/" target="_blank">mbed’s platforms page</a> and select the Nucleo-F446RE there.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-Add-plaftorm-1.png" width="660" height="395" alt="mbed-add-plaftorm-1"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-Add-plaftorm-2-select-Nucleo.png" width="660" height="395" alt="mbed-add-plaftorm-2-select-nucleo"><br/><br/></p>

After selecting your platform, the platform page will appear. Select **Add to your mbed Compiler** to add this platform. You will see a confirmation that the platform has been added and the mbed IDE will now show this platform available. You can now proceed with Importing the Cayenne C++ library into mbed.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-Add-plaftorm-3.png" width="660" height="394" alt="mbed-add-plaftorm-3"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-Add-plaftorm-4.png" width="660" height="395" alt="mbed-add-plaftorm-4"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-Add-plaftorm-5-Nucleo-platform-added.png" width="660" height="396" alt="mbed-add-plaftorm-5-nucleo-platform-added"><br/><br/></p>

###Import Cayenne C++ library

The Cayenne C++ Library is a collection of code, support libraries, an MQTT client and example code files designed to help you quickly connect your board to Cayenne using MQTT. There are several versions of the C++ library available and you should select the most appropriate version based upon the board and toolchain/IDE you are using. In our example we’ll be programming a <a href="https://developer.mbed.org/platforms/ST-Nucleo-F446RE/" target="_blank">Nucleo board with WiFi shield (F446RE)</a> with the mbed IDE. Cayenne offers a C++ library that supports this board in the mbed IDE, so we will use that library here.

*TIP: If Cayenne does not currently your board, toolchain/IDE, or you want more advanced guidance on customizing the Cayenne library, see the [Using Embedded C walkthrough](#bring-your-own-thing-api-using-embedded-c) which covers more on these topics.*


**TODO: replace mbed repo link with public link once ready**

To begin using this library, visit the <a href="https://developer.mbed.org/teams/myDevicesIoT/" target="_blank">Cayenne mbed repository</a> which contains a list of the various Cayenne MQTT mbed libraries available. For our Nucleo board, we select the **Cayenne-X-NUCLEO-IDW01M1** library from the list. This will open a page on this library, from which we can import the library.

**DEV TODO Reminder: The Connect screen repo link needs to direct the user to a generic C++ repo that has links to all of these library variants + the Readme should guide the user. So in this instance, the Readme needs to have a section with link to the mbed repository since it is hosted external to our repo.**

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Cayenne-MQTT-mbed-libraries.png" width="660" height="395" alt="cayenne-mqtt-mbed-libraries"><br/><br/></p>

From the Nucleo library page, click on the **Import into Compiler** button. The Import Program dialog will appear. From this dialog you can give your program a name. We’ll accept the defaults and just click **Import** to continue.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-Import-Cayenne-library.png" width="660" height="394" alt="mbed-import-cayenne-library"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-Import-Cayenne-library2.png" width="660" height="395" alt="mbed-import-cayenne-library2"><br/><br/></p>

The Arduino MQTT library has now been imported and mbed has created a new program in our workspace. We can now proceed with examining Cayenne’s example code and customizing it with our WiFi and MQTT Credentials so that we can connect our board to Cayenne.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-library-imported-to-new-program.png" width="660" height="395" alt="mbed-library-imported-to-new-program"><br/><br/></p>

###Add MQTT Credentials

With the Arduino MQTT library imported into mbed, we can now examine the example source code and customize it. Since our Nucleo board will connect using WiFi, we will need to specify the WiFi information. We will also need to enter in the required MQTT Credentials that will identify this board and allow it to be connected into our Cayenne account. Without this information, our board will not successfully connect to Cayenne.

Expand the program tree in your mbed workspace and find the example file, **main.cpp**. Click to open this file in the mbed editor. Next, we will customize this file by filling in the required information for our board’s connection.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-example-file.png" width="434" height="706" alt="mbed-example-file"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-customize-example-code-file.png" width="660" height="395" alt="mbed-customize-example-code-file"><br/><br/></p>

####Fill in the Wireless network information

The Nucleo board we’ve chosen includes a WiFi network connection, so we will need to program our board so that it can connect to our wireless network. Without this information, our board will be unable to establish proper Internet connectivity and will be unable to communicate with the Cayenne cloud. Refer to the **main.cpp** file and fill in the **SSID** and **WIFI Password** for your wireless connection. The example sketch file includes placeholders for these values, so we just need to update them with the correct information for our wireless network.

####Fill in the MQTT Credentials

After filling in the network information, we will need to fill in the required MQTT Credentials for our account and this board. Refer to the Connect screen on your Cayenne dashboard, copying & pasting your **MQTT Username**, **MQTT Password** and **Client ID** into the example file. The example sketch file includes placeholders for these values as well, so we just need to update them with the values provided to us on the Connect screen.

*TIP: The credentials shown here are unique for your account and the current device being added. When programming new devices, always be sure to copy & paste from the Connect screen so that the correct values are used for your device.*

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Cayenne-dashboard-Connect-screen.png" width="660" height="395" alt="cayenne-dashboard-connect-screen"><br/><br/></p>

Our program has now been customized and is ready to be compiled and uploaded to the device so that it can connect to Cayenne.

###Connect board to Cayenne

After customizing the example file with the required connection and MQTT Credentials, we can now proceed with compiling our program, uploading it to our board and connecting it to the Cayenne cloud.

To compile our program, click on the **Compile** button in mbed. Your program will be compiled and mbed will automatically download the compiled binary to your computer. Drag & drop this binary file to your board’s shared folder to upload it to the board.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-compile-complete.png" width="660" height="346" alt="mbed-compile-complete"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-drag-n-drop-binary.png" width="660" height="353" alt="mbed-drag-n-drop-binary"><br/><br/></p>

After you drag & drop the binary into the device, the Nucleo board will automatically run it. As soon as your device comes online and connects to Cayenne, your device’s dashboard will appear.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Dashboard-1stExperienceB.png" width="660" height="392" alt="dashboard-1stexperienceb"><br/><br/></p>

**Congrats! Your hardware is now connected to the Cayenne Cloud!**

###Send sensor data

Once our board is connected to our Cayenne dashboard, we can send some sensor data and get our very first widget added. For this example, we’ll be using a [BMP180 Temperature & Pressure Sensor](#supported-hardware-sensors-temperature-bmp180). Begin by making sure that your sensor is connected to the board.

####Import the BMP180 library

In order to use the BMP180 sensor with mbed, we must import a library that supports this sensor. There are many such options for sensor libraries in mbed, you may choose a different library than we do for this example.

To import our sensor library, click on the **Import** button in mbed. From the Libraries screen that appears, you can use the **Search** field to find appropriate libraries.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-import-sensor-library.png" width="660" height="395" alt="mbed-import-sensor-library"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-import-library-search.png" width="660" height="395" alt="mbed-import-library-search"><br/><br/></p>

*TIP: the mbed site (outside of the compiler screen) also includes a search function that can be used to find libraries. One advantage of using this search is that you can also find more information and discussions on using libraries. You may wish to combine both searches to find what you’re looking for!*

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-search.png" width="660" height="396" alt="mbed-search"><br/><br/></p>

In this example, we’ve chose the **??? library**. To save time, you may use the following <a href="" target="_blank">direct link</a> to this library. This will open the library page directly and you can click **Import into Compiler** button. The BMP180 will then be imported into our program and will appear in our program’s workspace. We can now continue with our coding by making use of this library to read our sensor’s data.

**TODO: REplace above links / info**

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/mbed-bmp180-library-imported.png" width="660" height="395" alt="mbed-bmp180-library-imported"><br/><br/></p>

####Reading the BMP180 sensor data

Now that we have a library that we can use with our BMP180 sensor, we can write some code that will read our sensor’s values. We will write this code in the **main.cpp** file. Refer to the instructions that come with the library you’re using for details on how to make use of the library, including what code you must import or implement for reading data from the sensor.

*TIP: You can refer to this <a href="" target="_blank">example file</a> that includes our example code reading and sending our sensor’s data to Cayenne. Note also that there are many ways to read and send sensor data, we’re only showing you one such example here. Depending upon what device you are using and what goals you have in mind, you may choose a very different way. You can refer to the [MQTT Messaging Topics](#bring-your-own-thing-api-mqtt-messaging-topics) section for additional guidance on coding for the Cayenne MQTT libraries.*

At a high level, in order to use the library that we’ve chosen, we must implement the following tasks in our code:
XXXXX
YYYYY
ZZZZZ

**TODO: Image of mbed code for reading BMP180 sensor**

####Send Temperature reading to Cayenne

Once we’ve implemented reading our sensor’s value in our code, we can continue with sending our sensor’s data up to Cayenne. We do this by **???**.

**TODO: Image of mbed code for sending BMP180 sensor data**

Once you have written code to handle the BMP180, click on the **Compile** button and download the binary file from mbed. Drag & drop the updated binary file to your device’s folder. Even though we already have a binary file in place in our Nucleo board’s folder, that won’t matter. The Nucleo board will use the newest binary, removing the old file already there. Shortly after placing the updated binary in the shared folder, the Nucleo board will run the program.

Once our board comes online, it will read the current sensor data from our BMP180 sensor and send the readings to Cayenne. Cayenne will receive this data and automatically add widgets for it! Cayenne will do this automatically for any new MQTT data that you send it. Widgets created in this way are temporary by default, giving you an easy way to test sending new data to Cayenne. If you want to keep this widget permanently, simply click on the widget tile and it will become a permanent widget in your dashboard.

**TODO: Image showing BMP180 Temperature, Pressure widgets added to dashboard**

**Congrats! Your hardware is now sending sensor data to the Cayenne Cloud!**

###Control a Light actuator

Now that we have our board connected to Cayenne and it has successfully sent test data to our dashboard, let’s take a look at how easy it is to add an actuator. The Nucleo board includes an onboard LED already. Let’s make use of this and create a Button widget on our dashboard that will let us turn this light ON/OFF.

*TIP: Although we’ll be using the Nucleo’s onboard light, the method of adding an additional external digital actuator is the same as what’s shown here for our Nucleo board. Every board type is different however. Refer to the documentation and code examples for your specific board to see how to program specifically for it.*

In order for Cayenne to be able to control the Nucleo’s onboard light, we must perform the following tasks:
1. Create a dashboard widget that can be used to change its state (e.g. ON/OFF).
2. Write code so that our actuator changes state when Cayenne tells us it was changed from the dashboard.

####Add dashboard widget

Click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/AddNew.jpg" width="266" height="258" alt="Add New menu"><br/><br/></p>

1. Choose **Custom Widget** > **Button**.
2. Give your actuator a name, for example enter “Light” into the **Name** field.
3. We’ll be adding this actuator to our new Arduino device, so make sure your device is selected in the **Device** field.
4. On the Nucleo board, the onboard LED is controlled using Digital Pin 0, so select 0 from the **Channel** field. We would want to make sure the Channel we use here matches what we put in our code later - in the case of the onboard LED, this choice is made for us (it’s always pin 0, Channel 0).

   *TIP: Be sure to refer to the code that you write to make sure that the Channel you select for your widget matches what you use in code.*

5. We can specify an **Icon** for our actuator. We’re using it to control a Light, so let’s select a Light icon here.
6. Click the **Step 2: Add Actuator** button. The light widget will then be added to our dashboard.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Dashboard-add-Actuator.png" width="660" height="395" alt="dashboard-add-actuator"><br/><br/></p>

####Write code for the actuator

Cayenne is now setup to send *COMMAND* events to our actuator, but nobody is listening. We now need to write code so that our board will listen for Cayenne to inform us when the actuator’s state was changed on the dashboard, and to appropriate change its state.

At a high level, we must implement the following coding tasks:
1. Add an LED object to our code so that we can control it.
2. Subscribe to the COMMAND messages that Cayenne sends to our LED.

   TIP: Using the Nucleo library, this task is automatically handled. There’s no need for us to subscribe to Command topics. If you want additional information on MQTT Publish and Subscribe related topics, you may wish to refer to the [MQTT Messaging Topics](#bring-your-own-thing-api-mqtt-messaging-topics) section.

3. Change the LED’s state based on what Cayenne tells us the new state is.
4. Inform Cayenne that the actuator state change has been handled, so that it can properly reflect the status on its dashboard.

*TIP: You can refer to the <a href="" target="_blank">example2 file</a> that includes our example code for controlling this LED actuator on our Nucleo board.*

**TODO: Image of mbed code for controlling actuator**

Once you have written code to handle the actuator, click on the Compile button and download the binary file from mbed. Drag & drop the updated binary file to your device’s folder. Even though we already have a binary file in place in our Nucleo board’s folder, that won’t matter. The Nucleo board will use the newest binary, removing the old file already there. Shortly after placing the updated binary in the shared folder, the Nucleo board will run the program. As soon as your board comes online, you can use the dashboard to interact with your actuator.

**TODO: Image of Nucleo board’s dashboard with Light Button present**

**Congrats! You can now use the button to control the status of the onboard LED.**

##Using Embedded C

**TODO: walkthrough info for this library - example TBD with Camrin**

Variation of C++ library walkthrough, still using mbed IDE. Board type here is not important, it won’t be a full walkthrough (too much coding involved).

Instead of choosing the C++ library, the user will select the generic C library and import it into mbed (same process as C++ example).

We will then cover code areas that need to be customized/updated in our library to support the user’s chosen board. This will be helpful hints and information, such as discussing the Timer & Networking code and general info on what needs to change there. It will not be a line-by-line walkthrough of code. Basically, we’ll be discussing a high level of the Cayenne team had to do to get our mbed Nucleo library coded up.

If this is too advanced for the user, they can refer back to the C++ walkthrough. For the advanced user, this is what they’ll need and then we can also end with a reference to the MQTT Messaging Topics section and its API reference.

##Manually Sending / Verifying data

**TODO: walkthrough info for manually sending/verifying data with MQTT.fx program**

##Supported Data Types

**TODO: Import Dev doc for API reference**

##MQTT Messaging Topics

**TODO**

##FAQs

*Coming Soon!*
