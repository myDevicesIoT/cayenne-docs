# Cayenne MQTT API

<p id="apis-2-2" class="anchor-link"></p>

## Overview

The Cayenne MQTT API is used to connect any device that you have with the Cayenne Cloud. After connecting your device you can send data from your device to the Cayenne dashboard and display it using widgets. You may also receive commands from Cayenne, allowing remote control and automation of your devices.

### About MQTT

MQTT is a lightweight messaging protocol designed to be used on top of TCP/IP. It uses an event and message (*publish-subscribe*) methodology that was designed especially for connections where small footprints, unreliable and/or limited bandwidth connections are found. This type of pattern is especially suited for IoT devices that get deployed in the field and often run on battery power and on constrained networks. With MQTT, the publish-subscribe pattern makes use of a broker that is responsible for distributing messages to clients. [Clients](#bring-your-own-thing-api-mqtt-clients) can subscribe to varying levels of messages, depending upon how much or what kind of data they are interested.


### Using MQTT with Cayenne

MQTT is the preferred transport and API for sending data to the Cayenne Cloud, or for devices that receive commands from Cayenne. The Cayenne Cloud acts as a broker, managing the various sensor and actuator client devices that wish to send and receive data using the Cayenne Cloud.

Cayenne MQTT is straightforward and easy to use, offering several different ways of connecting your data to Cayenne.

#### Option 1: Use the Cayenne MQTT Libraries

Using one of our libraries is the easiest way to get started using MQTT with Cayenne. The Cayenne libraries bundle an [MQTT client](#bring-your-own-thing-api-mqtt-clients) and all of the code examples you'll need to get your board connected and using MQTT with Cayenne.

We have prepared walkthroughs and libraries for some of the most common toolchain/IDE combinations to help get you up and running as quickly as possible. If you would like to use [one of our libraries](#cayenne-mqtt-api-libraries), the easiest way to get started is to jump to a section below and read through the information and guides provided there.

+ [Arduino MQTT Library](#cayenne-mqtt-api-using-arduino-mqtt) - For Beginner users. This is the easiest way to get started with using Arduino MQTT in your project. This section covers installing and configuring the popular Arduino IDE to use Cayenne's Arduino MQTT library. It also includes a walkthrough of setting up an Arduino board, sending sensor data to Cayenne and controlling an actuator from the Cayenne dashboard.

+ [mbed MQTT Library](#cayenne-mqtt-api-using-mbed-mqtt) - For Intermediate users. This section walks you through using the mbed C++ MQTT Library in your project that uses the mbed IDE. It includes an example of connecting a Nucleo board to Cayenne, writing code to send sensor data as well as control an onboard LED from the Cayenne dashboard.

+ [C++ MQTT Library](#cayenne-mqtt-api-using-c) - For Advanced users. This section discusses the steps needed to make use of the Cayenne C++ MQTT library in your code. It also includes advice from the Cayenne team as to which areas of the code need to be updated/customized in order to implement support for new boards in a Cayenne library.

+ [Embedded C MQTT Library](#cayenne-mqtt-api-using-embedded-c) - For Advanced users. This section discusses the steps needed to make use of the Embedded C MQTT library in your code. It also includes advice from the Cayenne team as to which areas of the code need to be updated/customized in order to implement support for new boards in a Cayenne library.

#### Option 2: Use raw MQTT API functions

If you are integrating Cayenne into your existing or custom program, you may wish to only use raw MQTT calls for interacting with Cayenne. Typically you will have already chosen your own MQTT client, will already have implemented your own networking code, and you just need the *Publish-Subscribe* details for Cayenne’s MQTT API.

If you fall into this camp, you can jump straight to the [MQTT Messaging Topics](#cayenne-mqtt-api-mqtt-messaging-topics) section where you’ll find the details for Cayenne's MQTT calls. We have also prepared a tutorial for using an MQTT client to manually publish and subscribe data so that you can test out using MQTT with Cayenne.

+ [Manually Publishing / Subscribing](#cayenne-mqtt-api-manually-publishing-subscribing) - This will walk you through using the MQTT.fx client to manually publish and subscribe to Cayenne. This can help you test out using MQTT with Cayenne without having to connect an actual board or sensors. This is a great way to become familiar with the fundamentals of using MQTT with Cayenne.

## MQTT Clients
To interact with an MQTT broker you’ll need an MQTT client. Here’s a quick list of MQTT clients and resources:

<a href="http://www.eclipse.org/paho/" target="_blank">Paho</a>: The Eclipse Paho project provides open-source MQTT clients for C/C++, Python, Java, Javascript, Go and C#. If you are using one of [Cayenne’s libraries](#cayenne-mqtt-api-libraries), the Paho client is bundled in the library to make using MQTT with Cayenne easy.

<a href="http://www.mqttfx.org/" target="_blank">MQTT.fx</a>: A JavaFX based MQTT Client.

<a href="https://chrome.google.com/webstore/detail/mqttlens/" target="_blank">MQTT Lens</a>: A Google Chrome extension that connects to an MQTT broker and is able to publish and subscribe to MQTT topics.

<a href="https://github.com/ckrey/MQTTInspector" target="_blank">MQTT Inspector</a>: A general MQTT testing app for iOS (iPhone and iPad).

## Libraries

Using one of our libraries is the easiest way to get started using MQTT with Cayenne. The Cayenne libraries bundle an [MQTT client](#cayenne-mqtt-api-mqtt-clients) and all of the code examples you'll need to get your board connected and using MQTT with Cayenne.

**Cayenne Arduino MQTT**

Includes everything you need for using Cayenne and MQTT in your Arduino IDE based project.

   + The Arduino MQTT Library is available directly through the Arduino IDE *Library Manager*. This is the recommended way of obtaining this library. See [Add MQTT Library to Arduino IDE](#cayenne-mqtt-api-using-arduino-mqtt-add-mqtt-library-to-arduino-ide) for a walkthrough of performing this.
      + You may also find the library in our <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino" target="_blank">Arduino MQTT Github</a> repository.

   + [Documentation](#cayenne-mqtt-api-using-arduino-mqtt) - Covers installing and configuring the popular Arduino IDE to use Cayenne's Arduino MQTT library. It also includes a walkthrough of setting up an Arduino board and sending sensor data to Cayenne.

**Cayenne mbed MQTT**

Includes everything you need for using Cayenne and MQTT in your mbed IDE based project.

   + Refer to the README located in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-mbed" target="_blank">mbed MQTT Github</a> for information on using & obtaining mbed library versions.
   + [Documentation](#cayenne-mqtt-api-using-c) - Walks you through using the mbed C++ MQTT Library in your project that uses the mbed IDE. It includes an example of connecting a Nucleo board to Cayenne, writing code to send sensor data as well as control an onboard LED from the Cayenne dashboard.

**Cayenne C++ MQTT**

Includes everything you need for using Cayenne and MQTT in your project that uses the C++ language.

   + Refer to the README located in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP" target="_blank">C++ Github</a> for information on using & obtaining C++ library versions.
   + [Documentation](#cayenne-mqtt-api-using-c) - Discusses the steps needed to make use of the Cayenne C++ MQTT library in your code. It also includes advice from the Cayenne team as to which areas of the code need to be updated/customized in order to implement support for new boards in a Cayenne library.

**Cayenne Embedded C MQTT**

Includes everything you need for using Cayenne and MQTT in your project that uses the C language.

   + Refer to the README located in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C" target="_blank">Embedded C Github</a> for information on using & obtaining C++ library versions.
   + [Documentation](#cayenne-mqtt-api-using-embedded-c) - Discusses the steps needed to make use of the Embedded C MQTT library in your code. It also includes advice from the Cayenne team as to which areas of the code need to be updated/customized in order to implement support for new boards in a Cayenne library.

## Using the MQTT Libraries

**Create a Cayenne account**

In order to use the Cayenne MQTT API, you will need to first create a Cayenne account. Visit the <a href="http://www.cayenne-mydevices.com/" target="_blank">Cayenne website</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/get-started-for-free.png" width="660" height="438" alt="get started for free"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/account-sign-up.png" width="660" height="438" alt="account sign up"><br/><br/></p>

After creating your account, Cayenne will ask you which type of device you wish to add to your project. To add a device using the API, select **Bring Your Own Thing** from the list of devices presented. You will then be taken to a screen with details needed to help you connect your board to Cayenne.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/step-1-choose-device-category-2.png" width="660" height="395" alt="Step 1 - Select device category"><br/><br/></p>

## Using Arduino MQTT

The Cayenne Arduino MQTT library gives you everything you need to quickly get your board connected with Cayenne using MQTT and the Arduino IDE. Using the Arduino IDE is a fast and easy way to program your Arduino board. In this section we will walk you through setting up the Arduino IDE software so that you can write code that uses the Arduino MQTT library. We will then walk through an example of using the library, setting up and connecting an [Arduino Uno board](#supported-hardware-microcontrollers-arduino-arduino-uno), adding a [TMP36 Temperature Sensor](#supported-hardware-sensors-temperature-tmp36).

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/3kCD5S7N6zE" frameborder="0" allowfullscreen></iframe></p>

### Install Arduino IDE

To use the Cayenne Arduino MQTT Library, the Arduino IDE software should be installed. Go to https://www.arduino.cc/en/Main/Software to download and install the Arduino IDE software if you need it. Arduino IDE can be installed on Windows, Mac or Linux computers.

### Add MQTT Library to Arduino IDE

The Cayenne Arduino MQTT Library is a collection of code, known as sketch files, that makes it easy for you to connect and send data to and from sensors, actuators and devices connected to Arduino boards using MQTT. Cayenne sketch files can be [combined with other sketch files](#sketch-files-using-sketch-files-combining-sketch-files) for your IoT projects.

The Cayenne Arduino MQTT Library is available directly from the Arduino IDE Libraries list. To install the library, select **Sketch** > **Include library** > **Manage Libraries**. The *Library Manager* dialog will appear. From here, search for the **Cayenne MQTT** library and install it.
 
<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-manage-libraries.png" width="660" height="552" alt="arduino-ide-manage-libraries"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-add-mqtt-library.png" width="660" height="552" alt="arduino-ide-add-mqtt-library"><br/><br/></p>

 
The Cayenne MQTT library has now been expanded in the libraries folder in your Arduino sketches directory. You can verify this by going to the **Sketch** > **Include Library** menu where you should now see the Cayenne MQTT library at the bottom of the drop-down menu under *Contributed Libraries*. The Cayenne MQTT library is now ready to be used in your project.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-mqtt-library-menu.png" width="660" height="553" alt="arduino-ide-mqtt-library-menu"><br/><br/></p>

### Configure Arduino IDE

In order to successfully program your Arduino board, you will need to verify that the appropriate **Board** and **Port** are selected in the Arduino IDE.
 
First, verify that the correct **Board** is selected in the **Tools** > **Board** menu. Be sure to select the board type that you will be programming.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Arduino-IDE-board-selection.png" width="660" height="552" alt="Arduino IDE board selection"><br/><br/></p>
 
Then, verify that you have the correct **Port** selected for communicating with your Arduino. Pick the correct port based upon how you are connecting your Arduino to your PC/Mac.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Arduino-IDE-port-selection.png" width="660" height="552" alt="Arduino IDE port selection"><br/><br/></p>

### Load the example sketch file

After setting up your PC/Mac computer with the Arduino IDE and the Cayenne MQTT Library, you are ready to proceed with programming your board to connect with Cayenne. The Cayenne MQTT Library comes with several different examples, depending upon which type of connection your Arduino board will use to connect to the Internet. To proceed, we need to load the correct example file for our board.

Open the **File** > **Examples** > **CayenneMQTT** > **Connections** menu and select the appropriate sketch file example for the connection type you will be using. In our case, we’ll be using the W5100 shield, so we select the **EthernetShieldW5100** example. Once selected, the example sketch file will open in the Arduino IDE.

*TIP: If you aren’t sure which connection type you have, you can refer to [Arduino Ethernet and WiFi Shields](#supported-hardware-microcontrollers-arduino-arduino-ethernet-wifi-shield) for more information.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-connect-example-loaded.png" width="660" height="596" alt="arduino-ide-connect-example-loaded"><br/><br/></p>

### Add MQTT Credentials

The example sketch file includes everything we need to connect to Cayenne and publish our first set of test data, but it is missing our unique MQTT credentials that will allow us to connect this device into our account. Let’s add those now.

All of the required information we need can be found on the Cayenne dashboard’s *Choose SDK and connect your device* screen. Refer to this screen and copy & paste your **MQTT Username**, **MQTT Password** and **Client ID** into the sketch file. The example sketch file includes placeholders for these values, so we just need to update them with the values provided to us on our dashboard.

*TIP: The credentials shown here are unique for your account and the current device being added. When programming new devices, always be sure to copy & paste from the Cayenne dashboard screen so that the correct values are used for your device.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Step-2-BYOT-Choose-SDK.png" width="660" height="394" alt="Choose SDK and Connect screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-example-filled-in.png" width="660" height="552" alt="arduino-ide-example-filled-in"><br/><br/></p>

### Connect board to Cayenne

Once you have double-checked the sketch file, select **Sketch** > **Upload** to upload the sketch file to your device. As soon as your Arduino device comes online and connects to Cayenne, your device’s dashboard will appear.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-1stExperienceB.png" width="660" height="392" alt="dashboard-1stexperienceb"><br/><br/></p>

**Congrats! Your hardware is now connected to the Cayenne Cloud!**

### Send sensor data

Once our board is connected to our Cayenne dashboard, we can send some sensor data and get our very first widget added. For this example, we’ll be using a [TMP36 Temperature Sensor](#supported-hardware-sensors-temperature-tmp36). Begin by making sure that your TMP36 sensor is connected to the Arduino board. If you need help connecting this sensor, you can refer to the [TMP36 Arduino Tutorial](#supported-hardware-sensors-temperature-tmp36-arduino-tutorial). As in the tutorial, our TMP36 sensor will be connected to the Arduino’s Analog Pin 0.

*TIP: You can refer to this <a href="https://github.com/myDevicesIoT/cayenne-docs/blob/staging/examples/MQTT_EthernetShieldW5100_with_TMP36/MQTT_EthernetShieldW5100_with_TMP36.ino" target="_blank">example file</a> that includes all of the code used in our example for reading and sending our sensor’s data to Cayenne.*

#### Reading the TMP36 sensor data

The first step in handling our TMP36 sensor is to write some code to read the sensor’s current value. The TMP36 sensor doesn’t give us a Temperature reading, it will give us an output that is related to voltage. We’d prefer to show a temperature in Celsius on our dashboard, so we also need to convert the reading into a usable temperature. We start by adding the code to read and convert the TMP36 from Analog Pin 0 into celsius temperature.

*Tip: Refer to the documentation for whatever sensor you are using in order to determine what kind of code needs to be written to read its sensor data.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-tmp36-read-and-convert-sensor.png" width="660" height="553" alt="arduino-ide-tmp36-read-and-convert-sensor"><br/><br/></p>

#### Send Temperature reading to Cayenne

Now let’s send our TMP36 temperature data up to Cayenne. This is easily accomplished, requiring only a single line of code. In this case, we’ll send the data to Cayenne using MQTT Channel 0.

*TIP: There are many ways to read and send sensor data. Depending upon what device you are using and what goals you have in mind, you may choose a different way.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-tmp36-send-sensor-data.png" width="660" height="553" alt="arduino-ide-tmp36-send-sensor-data"><br/><br/></p>

Once you have double-checked the sketch file, select **Sketch** > **Upload** to upload the sketch file to your device. Shortly after our board comes online, it will read the current temperature of our TMP36 sensor and send the reading to Cayenne. Cayenne will receive this data and automatically add a widget for it! Cayenne will do this automatically for any new MQTT data that you send it. Widgets created in this way are temporary by default, giving you an easy way to test sending new data to Cayenne. If you want to keep this widget permanently, simply click on the widget tile and it will become a permanent widget in your dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-With-Temp-added.png" width="660" height="395" alt="dashboard-with-temp-added"><br/><br/></p>

**Congrats! Your hardware is now sending sensor data to the Cayenne Cloud!**


## Using mbed MQTT

The Cayenne mbed library will give you everything you need to quickly get your board connected with Cayenne using MQTT and the <a href="https://www.mbed.com/en/" target="_blank">mbed online IDE</a>, a free online code editor and compiler in which the code is written and compiled within a web browser, and compiled on the cloud using the ARMCC C/C++ compiler.

**Example: using the library**

In this section we will walk through setting up and connecting a <a href="https://developer.mbed.org/platforms/ST-Nucleo-F446RE/" target="_blank">Nucleo board with WiFi shield</a>. After writing code to connect our board, we will demonstrate sending sensor data to our dashboard by sending values from a connected [TMP36 Temperature sensor](#supported-hardware-sensors-temperature-tmp36). Finally, we will write code to allow us to control the state of the Nucleo's onboard LED from our dashboard.

To accomplish this goal, we will cover the following topics:

+ [Connect the board](#cayenne-mqtt-api-using-mbed-mqtt-connect-the-board)
+ [Create an mbed account](#cayenne-mqtt-api-using-mbed-mqtt-create-mbed-account)
+ [Setup an mbed platform](#cayenne-mqtt-api-using-mbed-mqtt-setup-mbed-platform)
+ [Import the Cayenne C++ library](#cayenne-mqtt-api-using-mbed-mqtt-import-mbed-library)
+ [Add WiFI & MQTT Credentials to our code](#cayenne-mqtt-api-using-mbed-mqtt-add-wifi-mqtt-credentials)
+ [Connect the board to Cayenne](#cayenne-mqtt-api-using-mbed-mqtt-connect-board-to-cayenne)
+ [Send Temperature sensor data to Cayenne](#cayenne-mqtt-api-using-mbed-mqtt-send-sensor-data)
+ [Control a Light actuator](#cayenne-mqtt-api-using-mbed-mqtt-control-a-light-actuator)

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/zlQd2RoEQb8" frameborder="0" allowfullscreen></iframe></p>

*TIP: You can also refer to this <a href="https://developer.mbed.org/teams/myDevicesIoT/code/Cayenne-X-NUCLEO-IDW01M1-TMP36/" target="_blank">example project on mbed</a> that includes the code covered in this section for Sending sensor data and Controlling an actuator.*

### Connect the board

Before you program your board, make sure to connect your board to your computer. Since we are using the Nucleo board, we connect the board to our computer using a USB cable. On Windows, this will automatically download all required drivers and open a shared folder. We will use that shared folder later to upload our compiled binary generated using mbed.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/nucleo-shared-folder.png" width="660" height="356" alt="nucleo-shared-folder"><br/><br/></p>

### Create mbed account

In order to use the mbed IDE you will need to have an account. To get started, visit <a href="http://developer.mbed.org" target="_blank">developer.mbed.org</a> and sign into your account. If you do not already have an account, click on the <a href="https://developer.mbed.org/account/login/?next=/account/signup/" target="_blank">Log in/Signup link</a> and create an account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-signup.png" width="660" height="395" alt="mbed-signup"><br/><br/></p>

Once your device is setup and you have your mbed account ready to be used, you may proceed with adding the Cayenne C++ library into mbed.

### Setup mbed platform

Before you can program your board, you need setup mbed for the **platform** that you will be using. If your platform is not already setup, you must do so now.

*TIP: If you have been using the mbed IDE for a while, you may already have several platforms setup. Make sure that the correct platform is selected before continuing.*

Let’s walk through adding the **Nucleo-F446RE** to mbed. To begin, visit <a href="https://developer.mbed.org/platforms/" target="_blank">mbed’s platforms page</a> and select the Nucleo-F446RE there.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Add-plaftorm-1.png" width="660" height="395" alt="mbed-add-plaftorm-1"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Add-plaftorm-2-select-Nucleo.png" width="660" height="395" alt="mbed-add-plaftorm-2-select-nucleo"><br/><br/></p>

After selecting your platform, the platform page will appear. Select **Add to your mbed Compiler** to add this platform. You will see a confirmation that the platform has been added and the mbed IDE will now show this platform available. You can now proceed with Importing the Cayenne C++ library into mbed.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Add-plaftorm-3.png" width="660" height="394" alt="mbed-add-plaftorm-3"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Add-plaftorm-4.png" width="660" height="395" alt="mbed-add-plaftorm-4"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Add-plaftorm-5-Nucleo-platform-added.png" width="660" height="396" alt="mbed-add-plaftorm-5-nucleo-platform-added"><br/><br/></p>

### Import mbed library

The Cayenne mbed Library is a collection of code, support libraries, an MQTT client and example code files designed to help you quickly connect your board to Cayenne using MQTT. There are several versions of the mbed library available and you should select the most appropriate version based upon the board you are using. In our example we’ll be programming a <a href="https://developer.mbed.org/platforms/ST-Nucleo-F446RE/" target="_blank">Nucleo board with WiFi shield (F446RE)</a> with the mbed IDE. Cayenne offers an mbed library that supports this board in the mbed IDE, so we will use that library here.

*TIP: If Cayenne does not currently your board, toolchain/IDE, or you want more advanced guidance on customizing the Cayenne library, you might wish to check out the [Using C++](#cayenne-mqtt-api-using-c) and [Using Embedded C](#cayenne-mqtt-api-using-embedded-c) sections which cover more on these topics.*


To begin using this library, visit the <a href="https://developer.mbed.org/teams/myDevicesIoT/" target="_blank">Cayenne mbed repository</a> which contains a list of the various Cayenne MQTT mbed projects available. For our Nucleo board, we select the **Cayenne-X-NUCLEO-IDW01M1** library from the list. This will open a page on mbed from which we can import it into our compiler.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Cayenne-MQTT-mbed-libraries.png" width="660" height="395" alt="cayenne-mqtt-mbed-libraries"><br/><br/></p>

From the Nucleo library page, click on the **Import into Compiler** button. The Import Program dialog will appear. From this dialog you can give your program a name. We’ll accept the defaults and just click **Import** to continue.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Import-Cayenne-library.png" width="660" height="394" alt="mbed-import-cayenne-library"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Import-Cayenne-library2.png" width="660" height="395" alt="mbed-import-cayenne-library2"><br/><br/></p>

The Arduino MQTT library has now been imported and mbed has created a new program in our workspace. We can now proceed with examining Cayenne’s example code and customizing it with our WiFi and MQTT Credentials so that we can connect our board to Cayenne.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-library-imported-to-new-program.png" width="660" height="395" alt="mbed-library-imported-to-new-program"><br/><br/></p>

### Add WiFi & MQTT Credentials

With the Arduino MQTT library imported into mbed, we can now examine the example source code and customize it. Since our Nucleo board will connect using WiFi, we will need to specify the WiFi information. We will also need to enter in the required MQTT Credentials that will identify this board and allow it to be connected into our Cayenne account. Without this information, our board will not successfully connect to Cayenne.

Expand the program tree in your mbed workspace and find the example file, **main.cpp**. Click to open this file in the mbed editor. For our example, the only code that we need to examine & customize is located in this file.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-example-file.png" width="434" height="706" alt="mbed-example-file"><br/><br/></p>

#### Fill in the Wireless network information

The Nucleo board we’ve chosen includes a WiFi network connection, so we will need to program our board so that it can connect to our wireless network. Without this information, our board will be unable to establish proper Internet connectivity and will be unable to communicate with the Cayenne cloud. Refer to the **main.cpp** file and fill in the **SSID** and **WIFI Password** for your wireless connection. The example code includes placeholders for these values, so we just need to update them with the correct information for our wireless network.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-customize-example-code-file-wifi.png" width="660" height="395" alt="mbed-customize-example-code-file-wifi"><br/><br/></p>

#### Fill in the MQTT Credentials

After filling in the network information, we will need to fill in the required MQTT Credentials for our account and this board. Refer to the *Choose SDK and connect your device* screen on your Cayenne dashboard, copying & pasting your **MQTT Username**, **MQTT Password** and **Client ID** into the example code. The example code includes placeholders for these values as well, so we just need to update them with the values provided to us on our dashboard.

*TIP: The credentials shown here are unique for your account and the current device being added. When programming new devices, always be sure to copy & paste from the Cayenne dashboard screen so that the correct values are used for your device.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Step-2-BYOT-Choose-SDK.png" width="660" height="394" alt="Choose SDK and Connect screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-customize-example-code-file-mqtt-creds.png" width="660" height="395" alt="mbed-customize-example-code-file-mqtt-creds"><br/><br/></p>

Once our program has now been customized, it is ready to be compiled and uploaded to the device so that it can connect to Cayenne.

### Connect board to Cayenne

After customizing the example file with the required connection and MQTT Credentials, we can now proceed with compiling our program, uploading it to our board and connecting it to the Cayenne cloud.

To compile our program, click on the **Compile** button in mbed. Your program will be compiled and mbed will automatically download the compiled binary to your computer. Drag & drop this binary file to your board’s shared folder to upload it to the board.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-compile-complete.png" width="660" height="346" alt="mbed-compile-complete"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-drag-n-drop-binary.png" width="660" height="353" alt="mbed-drag-n-drop-binary"><br/><br/></p>

After you drag & drop the binary into the device, the Nucleo board will automatically run it. As soon as your device comes online and connects to Cayenne, your device’s dashboard will appear.

*TIP: Not all boards will automatically run the binary file. Be sure to read the documentation for your board to see if additional actions are necessary.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-1stExperienceB.png" width="660" height="392" alt="dashboard-1stexperienceb"><br/><br/></p>

**Congrats! Your hardware is now connected to the Cayenne Cloud!**

### Send sensor data

Once our board is connected to our Cayenne dashboard, we can send some sensor data and get our very first widget added. For this example, we’ll be using a [TMP36 Temperature Sensor](#supported-hardware-sensors-temperature-tmp36). Begin by making sure that your sensor is connected to the board.

*TIP: There are many ways to read and send sensor data, we’re only showing you one such example here. Depending upon what device you are using and what goals you have in mind, you may choose a very different way. As a reminder, you can refer to this <a href="https://developer.mbed.org/teams/myDevicesIoT/code/Cayenne-X-NUCLEO-IDW01M1-TMP36/" target="_blank">example project on mbed</a> that includes the code mentioned in this section.*

#### Import the TMP36 library

In order to use a TMP36 sensor with mbed, we will import a library that will support reading data from this sensor and converting its readings into temperature readings. There are many such options for sensor libraries in mbed, you may choose a different library than we do for this example.

To import our sensor library, click on the **Import** button in mbed. From the Libraries screen that appears, you can use the **Search** field to find appropriate libraries.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-import-sensor-library.png" width="660" height="395" alt="mbed-import-sensor-library"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-import-library-search.png" width="660" height="395" alt="mbed-import-library-search"><br/><br/></p>

*TIP: the mbed site (outside of the compiler screen) also includes a search function that can be used to find libraries. One advantage of using this search is that you can also find more information and discussions on using libraries. You may wish to combine both searches to find what you’re looking for!*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-search.png" width="660" height="396" alt="mbed-search"><br/><br/></p>

To save time, you may use the following <a href="https://developer.mbed.org/users/zchen311/code/TMP36/" target="_blank">direct link</a> to the TMP36 library we'll be using. Clicking on the library link will open a direct page for the library where you can then click **Import into Compiler** button which will import the TMP36 library and its code into your program’s workspace. Once you have the library imported, you can continue with writing code that makes use of this library to read your sensor’s data.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-import-tmp36-library-completed.png" width="660" height="395" alt="mbed-import-tmp36-library-completed"><br/><br/></p>

#### Reading the TMP36 sensor data

Now that we have a library that we can use with our sensor, we can write some code that will read its value using that library. We will write this code in the **main.cpp** file. If you use a different library, or different sensors, be sure to refer to the instructions that come with them for details, including what code you must include for reading data from the sensor.

At a high level, for the library we'll be using, we implement the following tasks in our code for reading from our sensors:

1. Include the TMP36 header for our library.

   <p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Sensor-step-1-zoom.png" width="660" height="472" alt="mbed-sensor-step-1"><br/><br/></p>

2. Initialize a TMP36 object from our library with the correct Pin information based on how we connected our sensor.

   The TMP36 library that we're using provides a TMP36 class that includes easy to use functions for reading from our sensor. We create an instance by telling it which pin our sensor is connected to. For this example, our sensor is connected to Pin 5.

   <p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Sensor-step-2-zoom.png" width="660" height="428" alt="mbed-sensor-step-2"><br/><br/></p>

3. Read the sensor's value using the TMP36 object.

   The TMP36 library makes reading our sensors value very easy. With a single call, the library will read the sensor's value and convert it into a temperature in Celsius for us.

   <p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-import-tmp36-read-sensor-value-zoom.png" width="660" height="428" alt="tmp 36 read sensor value"><br/><br/></p>

*TIP: To get more of a background on how Publishing sensor data to Cayenne works, you may wish to check out the [Manually Publishing / Subscribing](#cayenne-mqtt-api-manually-publishing-subscribing) section which covers this topic in detail.*

#### Send Temperature reading to Cayenne

Once we’ve implemented reading our sensor’s value in our code, we can continue with sending our sensor’s data up to Cayenne. This is easily accomplished with a single publish function call provided by the library. Since our sensor is connected to Pin 5, we'll publish the data to MQTT on Channel 5.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-import-tmp36-send-sensor-value-zoom.png" width="660" height="422" alt="send sensor value"><br/><br/></p>

Once you have written code to handle the TMP36, click on the **Compile** button and download the binary file from mbed. Drag & drop the updated binary file to your device’s folder. Even though we already have a binary file in place in our Nucleo board’s folder, that won’t matter. The Nucleo board will use the newest binary, removing the old file already there. Shortly after placing the updated binary in the shared folder, the Nucleo board will run the program.

Once our board comes online, it will read the current sensor data from our TMP36 sensor and send the readings to Cayenne. Cayenne will receive this data and automatically add a widget for it! Cayenne will do this automatically for any new MQTT data that you send it. Widgets created in this way are temporary by default, giving you an easy way to test sending new data to Cayenne. If you want to keep this widget permanently, simply click on the widget tile and it will become a permanent widget in your dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/CWalkthrough-Dashboard-with-temp-widget.png" width="660" height="395" alt="cwalkthrough-dashboard-with-temp-widget"><br/><br/></p>

**Congrats! Your hardware is now sending sensor data to the Cayenne Cloud!**

### Control a Light actuator

Now that we have our board connected to Cayenne and it has successfully sent test data to our dashboard, let’s take a look at how easy it is to add an actuator. The Nucleo board includes an onboard LED already. Let’s make use of this and create a Button widget on our dashboard that will let us turn this light ON/OFF.

*TIP: Although we’ll be using the Nucleo’s onboard light, the method of adding an additional external actuator is the same as what’s shown here for our Nucleo board. Every board type is different however. Refer to the documentation and code examples for your specific board to see how to program specifically for it.*

In order for Cayenne to be able to control the Nucleo’s onboard light, we must perform the following tasks:

1. Create a dashboard widget that can be used to change its state (e.g. ON/OFF).
2. Write code so that our actuator changes state when Cayenne tells us it was changed from the dashboard.

*TIP: To get more of a background on how Subscribing to actuator data on Cayenne works, you may wish to check out the [Manually Publishing / Subscribing](#cayenne-mqtt-api-manually-publishing-subscribing) section which covers this topic in detail.*

#### Add dashboard widget

Click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/AddNew.jpg" width="266" height="258" alt="Add New menu"><br/><br/></p>

1. Choose **Custom Widget** > **Button**.
2. Give your actuator a name, for example enter “Light” into the **Name** field.
3. We’ll be adding this actuator to our new Arduino device, so make sure your device is selected in the **Device** field.
4. On the Nucleo board, the onboard LED1 is controlled using Pin 0, so select 0 from the **Channel** field. We would want to make sure the Channel we use here matches what we put in our code later - in the case of the first onboard LED (LED1), this choice is made for us (it’s always pin 0).

   *TIP: Be sure to refer to the code that you write to make sure that the Channel you select for your widget matches what you use in code.*

5. We can specify an **Icon** for our actuator. We’re using it to control a Light, so let’s select a Light icon here.
6. Click the **Step 2: Add Actuator** button. The light widget will then be added to our dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-add-Actuator.png" width="660" height="395" alt="dashboard-add-actuator"><br/><br/></p>

#### Write code for the actuator

Cayenne is now setup to send *COMMAND* events to our actuator, but nobody is listening. We now need to write code so that our board will listen for Cayenne to inform us when the actuator’s state was changed on the dashboard, and to appropriate change its state.

At a high level, we must implement the following coding tasks:

1. Add an LED1 object to our code so that we can control it.
   <p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Actuator-step-1-zoom.png" width="650" height="598" alt="mbed-actuator-step-1"><br/><br/></p>

2. Subscribe to the COMMAND messages that Cayenne sends to our LED.

   *TIP: Using the Nucleo library, this task is automatically handled for us! There’s no need for us to subscribe to Command topics.*

3. Change the LED’s state based on what Cayenne tells us the new state is.

   <p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Actuator-set-LED-state-zoom.png" width="639" height="598" alt="set LED state"><br/><br/></p>

4. Publish the updated LED state to Cayenne dashboard.

  **Note:** This ensures that the correct state for our actuator is reflected on the dashboard.

   <p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Actuator-inform-dashboard-of-LED-state-zoom.png" width="660" height="396" alt="mbed-actuator-inform-dashboard-of-led-state-zoom"><br/><br/></p>

5. Inform Cayenne that the actuator state change has been handled without errors.

   <p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/mbed-Actuator-publish-response-zoom.png" width="660" height="430" alt="mbed-actuator-publish-response-zoom"><br/><br/></p>

*TIP: As a reminder, you can refer to this <a href="https://developer.mbed.org/teams/myDevicesIoT/code/Cayenne-X-NUCLEO-IDW01M1-TMP36/" target="_blank">example project on mbed</a> that includes the code mentioned in this section.*

Once you have written code to handle the actuator, click on the Compile button and download the binary file from mbed. Drag & drop the updated binary file to your device’s folder. Even though we already have a binary file in place in our Nucleo board’s folder, that won’t matter. The Nucleo board will use the newest binary, removing the old file already there. Shortly after placing the updated binary in the shared folder, the Nucleo board will run the program. As soon as your board comes online, you can use the dashboard to interact with your actuator.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-with-test-widgets.png" width="660" height="395" alt="dashboard-with-test-widgets"><br/><br/></p>

**Congrats! You can now use the button to control the status of the onboard LED.**


## Using C++

The Cayenne C++ library will give you everything you need to quickly get your board connected with Cayenne using MQTT and the C++ language. You can find this library and the example code presented in this section in our <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP" target="_blank">Cayenne C++ Github</a> repository.

**NOTE:** There are many different ways to implement your project using the C++ library. The details of this section are written for a more advanced user who is looking for examples on how to extend one of the Cayenne base libraries to support their board. You may also wish to also review the [mbed MQTT Library](#cayenne-mqtt-api-using-mbed-mqtt) example which provides additional specifics by implementing some of the concepts provided here with specific hardware.

**Example: using the library**

In this section we will walk through setting up and connecting a [Raspberry Pi 3 Model B](#supported-hardware-single-board-computers-raspberry-pi-model-b) to Cayenne using MQTT. Since this is a Raspberry Pi device that uses the Linux OS, we will make use of a Linux-based compiler. We will cover topics related to extending the C++ library to support our board on Linux. After covering supporting and connecting our board to our Cayenne dashboard, we will demonstrate sending example sensor data to our dashboard. Finally, we will examine code that handles reacting to a user changing the status of an example Light actuator widget on our dashboard.

To accomplish this goal, we will cover the following topics:

+ [Connect the board](#cayenne-mqtt-api-using-c-connect-the-board)
+ [Install compiler](#cayenne-mqtt-api-using-c-install-compiler)
+ [Install C++ library](#cayenne-mqtt-api-using-c-install-c-library)
+ [Writing code to support your board/platform](#cayenne-mqtt-api-using-c-writing-code-to-support-your-boardplatform)
    + [Implement support for your platform/board](#cayenne-mqtt-api-using-c-writing-code-to-support-your-boardplatform-implement-support-for-your-platformboard)
    + [Implementing Networking code](#cayenne-mqtt-api-using-c-writing-code-to-support-your-boardplatform-implementing-networking-code)
    + [Implementing Timer code](#cayenne-mqtt-api-using-c-writing-code-to-support-your-boardplatform-implementing-timer-code)
+ [Code examples](#cayenne-mqtt-api-using-c-code-examples)
  + [Connect board to Cayenne](#cayenne-mqtt-api-using-c-code-examples-connect-board-to-cayenne)
  + [Send sensor data to Cayenne](#cayenne-mqtt-api-using-c-code-examples-send-sensor-data-to-cayenne)
  + [Respond to actuator commands](#cayenne-mqtt-api-using-c-code-examples-respond-to-actuator-commands)


### Connect the board

For our example we will use a Raspberry Pi 3. We recommend that you install the <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank">Raspbian OS</a> onto your Pi. Raspbian comes with the GNU compiler, making it easy for us to write code for our project.

1. Power on your Raspberry Pi. Connect the power adapter to your Raspberry Pi.
2. Connect the Pi to the Internet. Connect your Raspberry Pi to the Internet using an Ethernet cable. Or, if you have a Wi-Fi dongle setup already, this works too.
3. Make sure the Raspbian operating system is installed. Cayenne works with Jessie OS versions of Raspbian. Please make sure one of these is pre-installed to the sd card. If you need to install the Raspbian operating system, <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank">click here</a>.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160128155812/raspberry-pi-actual.png" width="600" height="610" alt="Raspberry Pi"></p>


### Install compiler

If you are using the recommended Raspbian OS, the GNU compiler will already be installed. You can verify this by checking the version.
```
gcc -v
```

If your compiler is not yet installed and you are using a Debian distribution, you can easily get all the packages you need by installing the *build-essential* package.
```
apt-get install build-essential
```
After verifying that your compiler is ready to be used, you can move on to installing the Cayenne C++ library.

### Install C++ library

The Cayenne C++ library and its examples can be found on our <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP" target="_blank">Github repository</a>. To make use of the library, make a clone of the library repository in your project workspace.

For example, to clone the C++ library into a new project called *CayenneMQTTTest*:
```
mkdir CayenneMQTTTest
cd CayenneMQTTTest
git clone https://github.com/myDevicesIoT/Cayenne-MQTT-CPP.git
```

### Writing code to support your board/platform

The C++ library bundles all of the basic code needed to connect to Cayenne using MQTT, including the <a href="http://www.eclipse.org/paho/" target="_blank">Eclipse Paho MQTT client</a>. In order to operate successfully, the MQTT code requires an implementation of **Timer** and **Networking** code that will work for your platform. In addition, you may find it necessary to account for the idiosyncrasies of the specific board that you need to support. This section will help guide you in writing code to support your platform/board.

#### Implement support for your platform/board

At a mimimum, you must implement the needed **Timer** and **Networking** functions that are used by Cayenne's MQTT code. Without these implemented for your platform, networking will not work and the library code will not be able to *Publish* or *Subscribe* data to the Cayenne Cloud.

**Linux Example**

Currently, the C++ library includes a working example for the Linux Operating System. You can find this implementation under the **<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/tree/master/src/Platform/Linux" target="_blank">Platform/Linux</a>** subfolder in the library files. If you are using a Linux based device, you can use the Linux code we've provided as-is.

**Supporting other platforms**

Although the Cayenne library includes some working implementation for certain platforms, the library may not include support for the platform that you wish to use. In such instances, you will need to accomplish the following tasks to support your platform:

1. Implement Networking code, used by the library for connectivity.
2. Implement Timer code, used by the library for countdown timing.
3. Pass your Networking & Timer classes as template parameters to the MQTTClient class.

*TIP: Even if you may not be using one of the platforms included as examples with the library, you can use the examples as reference when implementing support for your platform. For the remainder of this documentation we will refer back to the Linux example files included with the library as we discuss what the Cayenne team implemented in order to support this platform.*

#### Implementing Networking code

In order for the C++ library and its MQTT client to have proper connectivity, you will need to provide a Network implementation that can be used. This code is needed, for example, to create a tcp connection and provide read/write functions so that the code can connect to the Cayenne Cloud. Because the code needed for this is platform dependent, you will need to provide a working implementation for your platform. We have documented this process in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/CayenneMQTTClient/NetworkInterface.h" target="_blank">NetworkInterface include file</a>. In addition, you can refer to the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/tree/master/src/Platform/Linux" target="_blank">example Linux implementation</a> included with the library.

After implementing your network code, be sure to pass your Network class to the MQTT Client as a templated paramater. You can find an example of this in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/tree/master/src/Platform/Linux/examples" target="_blank">Linux platform examples</a>. The MQTT client used by the library will not function without a working networking implementation for your platform.

#### Implementing Timer code

In order for the C++ library and its MQTT client to handle countdown timing, you will need to provide a Timer implementation that can be used. For example, this code is used for countdown timers, e.g. when to ping, when to timeout of a call. Because the code needed for this is platform dependent, you will need to provide a working implementation for your platform. We have documented this process in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/CayenneMQTTClient/TimerInterface.h" target="_blank">NetworkInterface include file</a>. In addition, you can refer to the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/tree/master/src/Platform/Linux" target="_blank">example Linux implementation</a> included with the library.

After implementing your timer code, be sure to pass your Timer class to the MQTT Client as a templated paramater. You can find an example of this in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/tree/master/src/Platform/Linux/examples" target="_blank">Linux platform examples</a>. The MQTT client used by the library will not function without a working timer implementation for your platform.

### Code examples

If you are using a Linux-based board, the C++ library includes working examples for connecting your board, publishing data and subscribing to data from Cayenne. In the next few sections we will discuss these examples and give you some details on how the code uses MQTT to accomplish these tasks.

**Exploring the examples**

The C++ library includes three helpful examples located in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/tree/master/src/Platform/Linux/examples" target="_blank">Platform/Linux examples</a> folder. In the next few sections we will walk through portions of these examples and use them to cover the following concepts:

+ [Connecting your board to Cayenne](#cayenne-mqtt-api-using-c-code-examples-connect-board-to-cayenne) so that your device shows up in your dashboard.
+ [Sending sensor data to Cayenne](#cayenne-mqtt-api-using-c-code-examples-send-sensor-data-to-cayenne) so that your dashboard is populated with widgets.
+ [Responding to actuator commands](#cayenne-mqtt-api-using-c-code-examples-respond-to-actuator-commands) where we add a Button on our dashboard and tell our board to change the state of an actuator.

*Examples included in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/tree/master/src/Platform/Linux/examples" target="_blank">Linux platform code</a>:*

+ **<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/Platform/Linux/examples/SimplePublish.cpp" target="_blank">SimplePublish</a>** - Provides an example of connecting to Cayenne and Publishing dummy sensor data. Cayenne will automatically create dashboard Widgets for sensor data received in this manner.
+ **<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/Platform/Linux/examples/SimpleSubscribe.cpp" target="_blank">SimpleSubscribe</a>** - Provides an example of Subscribing to MQTT topics, demonstrating how to listen for changes to your connected devices issued from the Cayenne dashboard.
+ **<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/Platform/Linux/examples/CayenneClient.cpp" target="_blank">CayenneClient</a>** - An all inclusive example that performs both sending and receiving example data using the Cayenne Cloud.

*TIP: To get more of a background on the raw MQTT calls that the libraries use for interacting with Cayenne, as well as a walkthrough of performing each step manually via an MQTT client, you may wish to check out the [Manually Publishing / Subscribing](#cayenne-mqtt-api-manually-publishing-subscribing) section which covers this topic in detail.*

#### Connect board to Cayenne

The first step in verifying that your board is communicating and working with Cayenne is to establish a connection. The *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/Platform/Linux/examples/SimplePublish.cpp" target="_blank">SimplePublish</a>* example provides the easiest example of doing so. You can find this example in **Platform/Linux/Examples** folder included with the library. It includes a complete example of connecting to the Cayenne Cloud and sending some simple test data to verify the connection is working. We will use this example for demonstrating connecting your board to Cayenne.

**Adding your MQTT Credentials**

In order for your MQTT connection to be successful, you must fill in the required MQTT Credentials for our account and this board. Refer to the *Choose SDK and connect your device* screen on your Cayenne dashboard, copying & pasting your **MQTT Username**, **MQTT Password** and **Client ID** into the example code provided in *SimplePublish.cpp*. The example code includes placeholders for these values as well, so we just need to update them with the values provided to us on our dashboard.

*TIP: The credentials shown here are unique for your account and the current device being added. When programming new devices, always be sure to copy & paste values from your dashboard so that the correct values are used for your device.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Step-2-BYOT-Choose-SDK.png" width="660" height="394" alt="Choose SDK and Connect screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Cpp-code-mqtt-credentials2.png" width="660" height="484" alt="Add your MQTT credentials"><br/><br/></p>

**Compile, Upload and connect to Cayenne**

After filling in your MQTT credentials into the code example, we are ready to run the *SimplePublish* example. The C++ library includes a Makefile for building the examples. To use the Makefile, navigate to this file in source and run the *make* command. You can then run the *SimplePublish* program. As soon as your device comes online and connects to Cayenne, the *Choose SDK and connect your device* screen will switch automatically to display your device's dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-1stExperienceB.png" width="660" height="392" alt="dashboard-1stexperienceb"><br/><br/></p>

**Congrats! Your hardware is now connected to the Cayenne Cloud!**

#### Send sensor data to Cayenne

Once our board is connected to our Cayenne dashboard, we can send some test data and get our very first widget added. For this example, we can continue to refer to the *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/Platform/Linux/examples/SimplePublish.cpp" target="_blank">SimplePublish</a>* example. In addition to connecting to our dashboard, this example also includes two examples of publishing test data to our dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Cpp-code-publish-data2.png" width="660" height="312" alt="publish data"><br/><br/></p>

Once our board comes online, it will send two test data points to our dashboard, a temperature value and a luminosity value. As soon as Cayenne receives this data, it will automatically add widgets for them! Cayenne will do this automatically for any new MQTT data that you send it. Widgets created in this way are temporary by default, giving you an easy way to test sending new data to Cayenne. If you want to keep this widget permanently, simply click on the widget tile and it will become a permanent widget in your dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-dashboard-simple-publish.png" width="660" height="460" alt="embedded-c-dashboard-simple-publish"><br/><br/></p>

**Congrats! Your hardware is now sending sensor data to the Cayenne Cloud!**

#### Respond to actuator commands

Now that we have our board connected to Cayenne and it has successfully sent test data to our dashboard, let’s take a look at how easy it is to add an actuator. When users change the state of actuators using the dashboard widgets, Cayenne publishes *COMMAND* messages. By subscring to these messages, we will be informed when our actuator's state was changed. We can then take action in response, such as telling a connected Light to turn on or off.

For this example, we will setup a [Button widget](#custom-widgets-button) on our dashboard and use it to send actuator commands to an imaginary actuator connected to our board. We will then take a look at the *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/Platform/Linux/examples/SimpleSubscribe.cpp" target="_blank">SimpleSubscribe</a>* code example that subscribes to data from Cayenne so that we know when our actuator's state was changed on the dashboard.

##### Add dashboard widget

Let's start by adding a Button widget on the dashboard. From the Cayenne dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/AddNew.jpg" width="266" height="258" alt="Add New menu"><br/><br/></p>

1. Choose **Custom Widget** > **Button**.
2. Give your actuator a name, for example enter “Light” into the **Name** field.
3. We’ll be adding this actuator to our custom device, so make sure your device is selected in the **Device** field.
4. Select 0 from the **Channel** field.

  **Note:** The *SimpleSubscribe* code doesn't care what channel our device is connected to, but normally we would want to make sure the Channel selected here matches up with the channel that our code uses later when watching for *COMMAND* messages sent from Cayenne. Our recommendation is to stick to using *Channel == the Pin your actuator is connected to*.

5. We can specify an **Icon** for our actuator. Say we’re using it to control a Light, so let’s select a Light icon here.
6. Click the **Step 2: Add Actuator** button. The light widget will then be added to our dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-add-Actuator.png" width="660" height="395" alt="Dashboard settings - add actuator"><br/><br/></p>


##### Write code for the actuator

To properly handle actuator commands with Cayenne, it first helps to understand a bit about how Cayenne expects a well behaved client to react to actuator commands. Cayenne expects a client to:

1. Subscribe to *COMMAND* messages from Cayenne.
2. When a new *COMMAND* arrives, handle changing the status of the actuator connected to the board.

   **Note:** Cayenne will inform the listener which Channel was effected as well as what the new state is.

3. After changing (or attempting) to change the actuator state, inform Cayenne what the current status now is.

   **Note:** It's very important to inform Cayenne what the correct state is. This ensures that the dashboard properly reflects the correct current state of the device.

4. Inform Cayenne whether the event was handled OK or had an Error.

   **Note:** If there was an error, Cayenne will handle showing the error to the user so that they're aware of it.

With that background in place, let's discuss how to implement these tasks in code. The *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/Platform/Linux/examples/SimpleSubscribe.cpp" target="_blank">SimpleSubscribe</a>* example provides provides an example of dealing with *COMMAND* messages from Cayenne. You can find this example in **Platform/Linux/Examples** folder included with the library. It includes code to listen and react to all *COMMAND* messages received from Cayenne, making it easy for us to quickly test an example of controlling an actuator with the dashboard.

**Note:** The *SimpleSubscribe* example handles messages received from Cayenne by simplying responding back that the state was successfully changed. In order to be useful in your program, you will want to also make sure your code makes changes to your actuator's physical state. The code for accomplishing this is left for you to write for your device, just be sure to do so!

*TIP: If you want more details beyond the sample code provided with the library, the [Manually Publishing / Subscribing - Actuator's section](#cayenne-mqtt-api-manually-publishing-subscribing-control-a-light-actuator-testing-the-actuator) also covers these steps in more detail.*

**Adding your MQTT Credentials**

As before with the *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-CPP/blob/master/src/Platform/Linux/examples/SimplePublish.cpp" target="_blank">SimplePublish</a>* example, we need to fill in our MQTT Credentials into the code for the *SimpleSubscribe* example code. If we fail to do so, our device will not be able to connect to our account.

*TIP: If you ever need to refer to the MQTT Credentials needed for operations such as this, you can refer back to the Configuration screen for your board. To do so, select the __cogwheel__ menu for your board and then the __Configure__ option. In the configuration screen that appears, you'll find the values that you need.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/API-Configure-menu.png" width="660" height="394" alt="api-configure-menu"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/API-Configure-screen.png" width="660" height="394" alt="api-configure-screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-code-mqtt-credentials2.png" width="660" height="420" alt="Add your MQTT credentials"><br/><br/></p>

**Compile, Upload and connect to Cayenne**

After filling in your MQTT credentials into the code example, we are ready to run the *SimpleSubscribe* example. The C++ library includes a Makefile for building the examples. To use the Makefile, navigate to this file in source and run the *make* command. You can then run the *SimpleSubscribe* program. As soon as your device comes online and connects to Cayenne, you can use the Button widget on the dashboard, triggering actuator *COMMAND* messages to be sent to your board. The *SimpleSubscribe* code will handle these messages by replying back to our dashboard that the actuator was successfully changed and our dashboard will update to show the changed state.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-dashboard-simple-subscribe.png" width="660" height="460" alt="embedded-c-dashboard-simple-subscribe"><br/><br/></p>

**Congrats! You can now use the button to send actuator commands to your board.**


## Using Embedded C

The Cayenne Embedded C library will give you everything you need to quickly get your board connected with Cayenne using MQTT and the C language. You can find this library and the example code presented in this section in our <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C" target="_blank">Cayenne Embedded C Github</a> repository.

**NOTE:** There are many different ways to implement your project using the C library. The details of this section are written for a more advanced user who is looking for examples on how to extend one of the Cayenne base libraries to support their board. You may also wish to also review the [mbed MQTT Library](#cayenne-mqtt-api-using-mbed-mqtt) example which provides additional specifics by implementing some of the concepts provided here with specific hardware.


**Example: using the library**

In this section we will walk through setting up and connecting a [Raspberry Pi 3 Model B](#supported-hardware-single-board-computers-raspberry-pi-model-b) to Cayenne using MQTT. Since this is a Raspberry Pi device that uses the Linux OS, we will make use of a Linux-based compiler. We will cover topics related to extending the Embedded C library to support our board on Linux. After covering supporting and connecting our board to our Cayenne dashboard, we will demonstrate sending example sensor data to our dashboard. Finally, we will examine code that handles reacting to a user changing the status of an example Light actuator widget on our dashboard.

To accomplish this goal, we will cover the following topics:

+ [Connect the board](#cayenne-mqtt-api-using-embedded-c-connect-the-board)
+ [Install compiler](#cayenne-mqtt-api-using-embedded-c-install-compiler)
+ [Install Embedded C library](#cayenne-mqtt-api-using-embedded-c-install-embedded-c-library)
+ [Writing code to support your board/platform](#cayenne-mqtt-api-using-embedded-c-writing-code-to-support-your-boardplatform)
    + [Implement support for your platform/board](#cayenne-mqtt-api-using-embedded-c-writing-code-to-support-your-boardplatform-implement-support-for-your-platformboard)
    + [Implementing Networking code](#cayenne-mqtt-api-using-embedded-c-writing-code-to-support-your-boardplatform-implementing-networking-code)
    + [Implementing Timer code](#cayenne-mqtt-api-using-embedded-c-writing-code-to-support-your-boardplatform-implementing-timer-code)
+ [Code examples](#cayenne-mqtt-api-using-embedded-c-code-examples)
  + [Connect board to Cayenne](#cayenne-mqtt-api-using-embedded-c-code-examples-connect-board-to-cayenne)
  + [Send sensor data to Cayenne](#cayenne-mqtt-api-using-embedded-c-code-examples-send-sensor-data-to-cayenne)
  + [Respond to actuator commands](#cayenne-mqtt-api-using-embedded-c-code-examples-respond-to-actuator-commands)

### Connect the board

For our example we will use a Raspberry Pi 3. We recommend that you install the <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank">Raspbian OS</a> onto your Pi. Raspbian comes with the GNU compiler, making it easy for us to write code for our project.

1. Power on your Raspberry Pi. Connect the power adapter to your Raspberry Pi.
2. Connect the Pi to the Internet. Connect your Raspberry Pi to the Internet using an Ethernet cable. Or, if you have a Wi-Fi dongle setup already, this works too.
3. Make sure the Raspbian operating system is installed. Cayenne works with Jessie OS versions of Raspbian. Please make sure one of these is pre-installed to the sd card. If you need to install the Raspbian operating system, <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank">click here</a>.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160128155812/raspberry-pi-actual.png" width="600" height="610" alt="Raspberry Pi"></p>


### Install compiler

If you are using the recommended Raspbian OS, the GNU compiler will already be installed. You can verify this by checking the version.
```
gcc -v
```

If your compiler is not yet installed and you are using a Debian distribution, you can easily get all the packages you need by installing the *build-essential* package.
```
apt-get install build-essential
```
After verifying that your compiler is ready to be used, you can move on to installing the Cayenne Embedded C library.

### Install Embedded C library

The Cayenne Embedded C library and its examples can be found on our <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C" target="_blank">Github repository</a>. To make use of the library, make a clone of the library repository in your project workspace.

For example, to clone the C library into a new project called *CayenneMQTTTest*:
```
mkdir CayenneMQTTTest
cd CayenneMQTTTest
git clone https://github.com/myDevicesIoT/Cayenne-MQTT-C.git
```

### Writing code to support your board/platform

The Embedded C library bundles all of the basic code needed to connect to Cayenne using MQTT, including the <a href="http://www.eclipse.org/paho/" target="_blank">Eclipse Paho MQTT client</a>. In order to operate successfully, the MQTT code requires an implementation of **Timer** and **Networking** code that will work for your platform. In addition, you may find it necessary to account for the idiosyncrasies of the specific board that you need to support. This section will help guide you in writing code to support your platform/board.

#### Implement support for your platform/board

At a mimimum, you must implement the needed **Timer** and **Networking** functions that are used by Cayenne's MQTT code. Without these implemented for your platform, networking will not work and the library code will not be able to *Publish* or *Subscribe* data to the Cayenne Cloud.

**Linux Example**

Currently, the Embedded C library includes a working example for the Linux Operating System. You can find this implementation under the **<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/tree/master/src/Platform/Linux" target="_blank">Platform/Linux</a>** subfolder in the library files. If you are using a Linux based device, you can use the Linux code we've provided as-is.

**Supporting other platforms**

Although the Cayenne library includes some working implementation for certain platforms, the library may not include support for the platform that you wish to use. In such instances, you will need to accomplish the following tasks to support your platform:

1. Implement Networking code, used by the library for connectivity.
2. Implement Timer code, used by the library for countdown timing.
3. Update the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/CayenneMQTTClient/PlatformHeader.h" target="_blank">CayenneMQTTClient/PlatformHeader.h</a> to reference your new Timer, Networking implementation.

*TIP: Even if you may not be using one of the platforms included as examples with the library, you can use the examples as reference when implementing support for your platform. For the remainder of this documentation we will refer back to the Linux example files included with the library as we discuss what the Cayenne team implemented in order to support this platform.*

#### Implementing Networking code

In order for the Embedded C library and its MQTT client to have proper connectivity, you will need to provide a Network implementation that can be used. This code is needed, for example, to create a tcp connection and provide read/write functions so that the code can connect to the Cayenne Cloud. Because the code needed for this is platform dependent, you will need to provide a working implementation for your platform. We have documented this process in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/CayenneMQTTClient/PlatformHeader.h" target="_blank">PlatformHeader include file</a>. In addition, you can refer to the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/tree/master/src/Platform/Linux" target="_blank">Linux</a> implementation included with the library.

After implementing your timer code, be sure to then include a link to your file(s) in <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/CayenneMQTTClient/PlatformHeader.h" target="_blank">PlatformHeader.h</a>. The MQTT client used by the library will not function without a working networking implementation for your platform.


#### Implementing Timer code

In order for the Embedded C library and its MQTT client to have proper connectivity, you will need to provide a Timer implementation that can be used. For example, this code is used for countdown timers, e.g. when to ping, when to timeout of a call. We have documented this process in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/CayenneMQTTClient/PlatformHeader.h" target="_blank">PlatformHeader include file</a>. In addition, you can refer to the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/tree/master/src/Platform/Linux" target="_blank">Linux</a> implementation included with the library.

After implementing your timer code, be sure to then include a link to your file(s) in <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/CayenneMQTTClient/PlatformHeader.h" target="_blank">PlatformHeader.h</a>. The MQTT client used by the library will not function without a working timer implementation for your platform.

### Code examples

If you are using a Linux-based board, the Embedded C library includes working examples for connecting your board, publishing data and subscribing to data from Cayenne. In the next few sections we will discuss these examples and give you some details on how the code uses MQTT to accomplish these tasks.

**Exploring the examples**
The Embedded C library includes three helpful examples located in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/tree/master/src/Platform/Linux/examples" target="_blank">Platform/Linux examples</a> folder. In the next few sections we will walk through portions of these examples and use them to cover the following concepts:

+ [Connecting your board to Cayenne](#cayenne-mqtt-api-using-embedded-c-code-examples-connect-board-to-cayenne) so that your device shows up in your dashboard.
+ [Sending sensor data to Cayenne](#cayenne-mqtt-api-using-embedded-c-code-examples-send-sensor-data-to-cayenne) so that your dashboard is populated with widgets.
+ [Responding to actuator commands](#cayenne-mqtt-api-using-embedded-c-code-examples-respond-to-actuator-commands) where we add a Button on our dashboard and tell our board to change the state of an actuator.

*Examples included in the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/tree/master/src/Platform/Linux/examples" target="_blank">Linux platform code</a>:*

+ **<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/Platform/Linux/examples/SimplePublish.c" target="_blank">SimplePublish</a>** - Provides an example of connecting to Cayenne and Publishing dummy sensor data. Cayenne will automatically create dashboard Widgets for sensor data received in this manner.
+ **<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/Platform/Linux/examples/SimpleSubscribe.c" target="_blank">SimpleSubscribe</a>** - Provides an example of Subscribing to MQTT topics, demonstrating how to listen for changes to your connected devices issued from the Cayenne dashboard.
+ **<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/Platform/Linux/examples/CayenneClient.c" target="_blank">CayenneClient</a>** - An all inclusive example that performs both sending and receiving example data using the Cayenne Cloud.

*TIP: To get more of a background on the raw MQTT calls that the libraries use for interacting with Cayenne, as well as a walkthrough of performing each step manually via an MQTT client, you may wish to check out the [Manually Publishing / Subscribing](#cayenne-mqtt-api-manually-publishing-subscribing) section which covers this topic in detail.*

#### Connect board to Cayenne

The first step in verifying that your board is communicating and working with Cayenne is to establish a connection. The *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/Platform/Linux/examples/SimplePublish.c" target="_blank">SimplePublish</a>* example provides the easiest example of doing so. You can find this example in **Platform/Linux/Examples** folder included with the library. It includes a complete example of connecting to the Cayenne Cloud and sending some simple test data to verify the connection is working. We will use this example for demonstrating connecting your board to Cayenne.

**Adding your MQTT Credentials**

In order for your MQTT connection to be successful, you must fill in the required MQTT Credentials for our account and this board. Refer to the *Choose SDK and connect your device* screen on your Cayenne dashboard, copying & pasting your **MQTT Username**, **MQTT Password** and **Client ID** into the example code provided in *SimplePublish.c*. The example code includes placeholders for these values as well, so we just need to update them with the values provided to us on our dashboard.

*TIP: The credentials shown here are unique for your account and the current device being added. When programming new devices, always be sure to copy & paste from the dashboard so that the correct values are used for your device.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Step-2-BYOT-Choose-SDK.png" width="660" height="394" alt="Choose SDK and Connect screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-code-mqtt-credentials2.png" width="660" height="420" alt="Add your MQTT credentials"><br/><br/></p>

**Compile, Upload and connect to Cayenne**

After filling in your MQTT credentials into the code example, we are ready to run the *SimplePublish* example. The Embedded C library includes a Makefile for building the examples. To use the Makefile, navigate to this file in source and run the *make* command. You can then run the *SimplePublish* program. As soon as your device comes online and connects to Cayenne, the *Choose SDK and connect your device* screen will switch automatically to display your device's dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-1stExperienceB.png" width="660" height="392" alt="dashboard-1stexperienceb"><br/><br/></p>

**Congrats! Your hardware is now connected to the Cayenne Cloud!**

#### Send sensor data to Cayenne

Once our board is connected to our Cayenne dashboard, we can send some test data and get our very first widget added. For this example, we can continue to refer to the *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/Platform/Linux/examples/SimplePublish.c" target="_blank">SimplePublish</a>* example. In addition to connecting to our dashboard, this example also includes two examples of publishing test data to our dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-code-publish-data.png" width="660" height="329" alt="embedded-c-code-publish-data"><br/><br/></p>

Once our board comes online, it will send two test data points to our dashboard, a temperature value and a luminosity value. As soon as Cayenne receives this data, it will automatically add widgets for them! Cayenne will do this automatically for any new MQTT data that you send it. Widgets created in this way are temporary by default, giving you an easy way to test sending new data to Cayenne. If you want to keep this widget permanently, simply click on the widget tile and it will become a permanent widget in your dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-dashboard-simple-publish.png" width="660" height="460" alt="embedded-c-dashboard-simple-publish"><br/><br/></p>

**Congrats! Your hardware is now sending sensor data to the Cayenne Cloud!**

#### Respond to actuator commands

Now that we have our board connected to Cayenne and it has successfully sent test data to our dashboard, let’s take a look at how easy it is to add an actuator. When users change the state of actuators using the dashboard widgets, Cayenne publishes *COMMAND* messages. By subscring to these messages, we will be informed when our actuator's state was changed. We can then take action in response, such as telling a connected Light to turn on or off.

For this example, we will setup a [Button widget](#custom-widgets-button) on our dashboard and use it to send actuator commands to an imaginary actuator connected to our board. We will then take a look at the *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/Platform/Linux/examples/SimpleSubscribe.c" target="_blank">SimpleSubscribe</a>* code example that subscribes to data from Cayenne so that we know when our actuator's state was changed on the dashboard.

##### Add dashboard widget

Let's start by adding a Button widget on the dashboard. From the Cayenne dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/AddNew.jpg" width="266" height="258" alt="Add New menu"><br/><br/></p>

1. Choose **Custom Widget** > **Button**.
2. Give your actuator a name, for example enter “Light” into the **Name** field.
3. We’ll be adding this actuator to our custom device, so make sure your device is selected in the **Device** field.
4. Select 0 from the **Channel** field.

  **Note:** The *SimpleSubscribe* code doesn't care what channel our device is connected to, but normally we would want to make sure the Channel selected here matches up with the channel that our code uses later when watching for *COMMAND* messages sent from Cayenne. Our recommendation is to stick to using *Channel == the Pin your actuator is connected to*.

5. We can specify an **Icon** for our actuator. Say we’re using it to control a Light, so let’s select a Light icon here.
6. Click the **Step 2: Add Actuator** button. The light widget will then be added to our dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-add-Actuator.png" width="660" height="395" alt="Dashboard settings - add actuator"><br/><br/></p>


##### Write code for the actuator

To properly handle actuator commands with Cayenne, it first helps to understand a bit about how Cayenne expects a well behaved client to react to actuator commands. Cayenne expects a client to:

1. Subscribe to *COMMAND* messages from Cayenne.
2. When a new *COMMAND* arrives, handle changing the status of the actuator connected to the board.

   **Note:** Cayenne will inform the listener which Channel was effected as well as what the new state is.

3. After changing (or attempting) to change the actuator state, inform Cayenne what the current status now is.

   **Note:** It's very important to inform Cayenne what the correct state is. This ensures that the dashboard properly reflects the correct current state of the device.

4. Inform Cayenne whether the event was handled OK or had an Error.

   **Note:** If there was an error, Cayenne will handle showing the error to the user so that they're aware of it.

With that background in place, let's discuss how to implement these tasks in code. The *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/Platform/Linux/examples/SimpleSubscribe.c" target="_blank">SimpleSubscribe</a>* example provides an example of dealing with *COMMAND* messages from Cayenne. You can find this example in **Platform/Linux/Examples** folder included with the library. It includes code to listen and react to all *COMMAND* messages received from Cayenne, making it easy for us to quickly test an example of controlling an actuator with the dashboard.

**Note:** The *SimpleSubscribe* example handles messages received from Cayenne by simplying responding back that the state was successfully changed. In order to be useful in your program, you will want to also make sure your code makes changes to your actuator's physical state. The code for accomplishing this is left for you to write for your device, just be sure to do so!

*TIP: If you want more details beyond the sample code provided with the library, the [Manually Publishing / Subscribing - Actuator's section](#cayenne-mqtt-api-manually-publishing-subscribing-control-a-light-actuator-testing-the-actuator) also covers these steps in more detail.*

**Adding your MQTT Credentials**

As before with the *<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-C/blob/master/src/Platform/Linux/examples/SimplePublish.c" target="_blank">SimplePublish</a>* example, we need to fill in our MQTT Credentials into the code for the *SimpleSubscribe* example code. If we fail to do so, our device will not be able to connect to our account.

*TIP: If you ever need to refer to the MQTT Credentials needed for operations such as this, you can refer back to the Configuration screen for your board. To do so, select the __cogwheel__ menu for your board and then the __Configure__ option. In the configuration screen that appears, you'll find the values that you need.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/API-Configure-menu.png" width="660" height="394" alt="api-configure-menu"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/API-Configure-screen.png" width="660" height="394" alt="api-configure-screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-code-mqtt-credentials2.png" width="660" height="420" alt="Add your MQTT credentials"><br/><br/></p>

**Compile, Upload and connect to Cayenne**

After filling in your MQTT credentials into the code example, we are ready to run the *SimpleSubscribe* example. The Embedded C library includes a Makefile for building the examples. To use the Makefile, navigate to this file in source and run the *make* command. You can then run the *SimpleSubscribe* program. As soon as your device comes online and connects to Cayenne, you can use the Button widget on the dashboard, triggering actuator *COMMAND* messages to be sent to your board. The *SimpleSubscribe* code will handle these messages by replying back to our dashboard that the actuator was successfully changed and our dashboard will update to show the changed state.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-dashboard-simple-subscribe.png" width="660" height="460" alt="embedded-c-dashboard-simple-subscribe"><br/><br/></p>

**Congrats! You can now use the button to send actuator commands to your board.**


## Manually Publishing / Subscribing

This section will walk you through using raw MQTT calls to manually publish and subscribe to the Cayenne Cloud. This can help you test out using MQTT with Cayenne. We will walk through an example of faking a board connecting to Cayenne, publishing temperature data to our dashboard and finally by adding a Light actuator and subscribing to its messages sent by our Cayenne dashboard.

For the purposes of our example we will make use of <a href="http://www.mqttfx.org/" target="_blank">MQTT.fx</a>, a JavaFX based MQTT client.

### Install MQTT.fx

To begin using MQTT.fx, we must download and install it. Doing so is easy and straight forward. Simply visit the <a href="http://mqttfx.jensd.de/index.php/download" target="_blank">MQTT.fx download page</a>. Download and install the correct version for the Operating System that you are using. Once installed, launch the MQTT.fx client to get started.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-1-initial-launch.png" width="660" height="500" alt="mqtt-fx-1-initial-launch"><br/><br/></p>

### Add Connection Profile

In order to connect to the Cayenne Cloud, you will need to setup a **Connection Profile** in MQTT.fx. To do so, click on the **cogwheel** icon or select **Extras** > **Edit Connection Profiles** from the menu. The *Edit Connection Profiles* screen appears. From this screen you can enter in all the required information needed to complete a profile for connecting to Cayenne.

*TIP: All of the required information we need can be found on the Cayenne dashboard’s 'Choose SDK and connect your device' screen. Refer to this screen and the informaiton below to complete creating your connection profile to Cayenne.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Step-2-BYOT-Choose-SDK.png" width="660" height="394" alt="Choose SDK and Connect screen"><br/><br/></p>

1. Give the profile a name, such as CayenneMQTT, in the **Profile Name** field.
2. Copy & paste the **MQTT Server** URL from the dashboard into the **Broker Address** field.
3. Leave the **Broker Port** at its default of 1883.
4. Copy & paste the **CLIENT ID** field from the dashboard into the **Client ID** field.
5. On the *User Credentials* tab, copy & paste **MQTT Username** from the dashboard into the **User Name** field.
6. Also on the *User Credentials* tab, copy & paste **MQTT Password** from the dashboard into the **Password** field.
7. The default values for fields in the other tabs are OK to leave as-is. Click the **OK** button to save our profile.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-2-Connection-Profile.png" width="660" height="483" alt="mqtt-fx-2-connection-profile"><br/><br/></p>

We can now make use of our profile to connect to the Cayenne MQTT server and test out publishing and subscribing to data.

### Connect board to Cayenne

Now that our profile is setup, we can connect to Cayenne. To do so, click on the **Connect** button. This will establish a connection to Cayenne and it will also mimic our board coming online. Switching back to examining our browser, you'll find that the *Choose SDK and connect your device* screen will disappear and the default dashboard for our device will appear.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-3-profile-created.png" width="660" height="499" alt="mqtt-fx-3-profile-created"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-5-device-dashboard.png" width="660" height="395" alt="mqtt-fx-5-device-dashboard"><br/><br/></p>

**Congrats! You are now connected to the Cayenne cloud using MQTT.**

### Send sensor data to Cayenne

Now that we have a connection to the Cayenne MQTT server, let's put our connection to use by simulating sending sensor data to our dashboard. For our example, we will simulate having a Temperature sensor connected by publishing a sensor reading up to our dashboard. To do this, switch to MQTT.fx and make sure the *Publish* tab is selected. From here we can enter in the MQTT details to publish sample  sensor data to Cayenne.

To publish sensor data to Cayenne using MQTT, we refer to the [MQTT Messaging Topics - Send sensor data](#cayenne-mqtt-api-mqtt-messaging-topics-send-sensor-data) section of the docs. There, we find the details on which MQTT call to make. According to the docs, Sending sensor data expects:

```
v1/username/things/clientID/data/channel
```

We then substitute in the values for our account, board and sensor.

+ Replace **username** with the **MQTT Username** for your account.
+ Replace **clientID** with the **Client ID** for your board.
+ Replace **channel** with the appropriate channel that this sensor is connected to. For this example, we'll assume that we have a temperature sensor connected and using Channel 0.

*TIP: If you ever need to refer to the MQTT Credentials needed for operations such as this, you can refer back to the Configuration screen for your board. To do so, select the __cogwheel__ menu for your board and then the __Configure__ option. In the configuration screen that appears, you'll find the values that you need.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/API-Configure-menu.png" width="660" height="394" alt="api-configure-menu"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/API-Configure-screen.png" width="660" height="394" alt="api-configure-screen"><br/><br/></p>


Next, we need to send some actual data. According to the documentation, we need to send this in the following form:

```
type,unit=value
```

The Cayenne documentation provides a complete list of [Supported Data Types](#cayenne-mqtt-api-supported-data-types) that can be referred to when you need to know what details to put here. We want to send Temperature data, so we find **Temperature** in the supported data types section. For our example, let's assume that we want to send our temperature in Celsius. We'll use a sample sensor value, say 20.7 Celsius to be sent to Cayenne. With this in mind, and after examining the chart for the Temperature data type, we determine the following values should be used:

+ **Type (Temperature):** temp
+ **Unit (Celsius):** c
+ **Value:** 20.7

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-8-send-temp-sensor-data.png" width="660" height="498" alt="mqtt-fx-8-send-temp-sensor-data"><br/><br/></p>

*TIP: If you want the Cayenne Cloud to retain the last published value for a sensor, be sure to click on the __Retained__ button in MQTT.fx. Without this, you may find that your widget disappears when you refresh the page.*

After entering in the MQTT details for publishing our sample sensor data, click on the **Publish** button to send the data to Cayenne. Cayenne will receive this data and automatically add a widget for it! Cayenne will do this automatically for any new MQTT data that you send it. Widgets created in this way are temporary by default, giving you an easy way to test sending new data to Cayenne. If you want to keep this widget permanently, simply click on the widget tile and it will become a permanent widget in your dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-9-temp-widget-created.png" width="660" height="395" alt="mqtt-fx-9-temp-widget-created"><br/><br/></p>

**Congrats! You are now sending data to the Cayenne Cloud!**

### Control a Light actuator

Now that we have our connection to Cayenne and  successfully sent test data to our dashboard, let’s take a look at how easy it is to add an actuator. When users change the state of actuators using the dashboard widgets, Cayenne publishes *COMMAND* messages. By subscring to these messages, you will be informed when our actuator's state was changed.

For this example, we will setup a [Button widget](#custom-widgets-button) on our dashboard and use it to send actuator commands to an imaginary actuator connected to our board. In doing so, we will also cover the steps that Cayenne expects well behaved clients to perform when interacting with actuators via MQTT.

#### Add dashboard widget

Let's start by adding a Button widget on the dashboard. From the Cayenne dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/AddNew.jpg" width="266" height="258" alt="Add New menu"><br/><br/></p>

1. Choose **Custom Widget** > **Button**.
2. Give your actuator a name, for example enter “Test Light” into the **Name** field.
3. We’ll be adding this actuator to our custom device, so make sure your device is selected in the **Device** field.
4. Select 1 from the **Channel** field.
5. We can specify an **Icon** for our actuator. Say we’re using it to control a Light, so let’s select a Light icon here.
6. Click the **Step 2: Add Actuator** button. The light widget will then be added to our dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-10-actuator-settings.png" width="660" height="395" alt="mqtt-fx-10-actuator-settings"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/API-actuator-off.png" width="660" height="395" alt="actuator off"><br/><br/></p>

#### Testing the actuator

In order to test out our actuator, it first helps to understand a bit about how Cayenne expects a well behaved client to react to actuator commands. Cayenne expects a client to:

1. Subscribe to *COMMAND* messages from Cayenne.
2. When a new *COMMAND* arrives, handle changing the status of the actuator connected to the board.

   **Note:** Cayenne will inform the listener which Channel was effected as well as what the new state is.
3. After changing (or attempting) to change the actuator state, inform Cayenne what the current status now is.

   **Note:** It's very important to inform Cayenne what the correct state is. This ensures that the dashboard properly reflects the correct current state of the device.

4. Inform Cayenne whether the event was handled OK or had an Error.

   **Note:** If there was an error, Cayenne will handle showing the error to the user so that they're aware of it.

With that background in place, let's go over performing each of these steps using MQTT.fx.

##### Receive Actuator command

In order to receive the *COMMAND* messages that Cayenne sends for changes to our actuator, we must first Subscribe to them. To subscribe to actuator command messages, we refer to the [MQTT Messaging Topics - Receive actuator command](#cayenne-mqtt-api-mqtt-messaging-topics-receive-actuator-command) section of the docs. There, we find the details on what MQTT call to make. According to the docs, Subscribing to actuator commands expects:

```
v1/username/things/clientID/cmd/channel
```

We then substitute in the values for our account, board and actuator.

+ Replace **username** with the **MQTT Username** for your account.
+ Replace **clientID** with the **Client ID** for your board.
+ Replace **channel** with the appropriate channel that this actuator is connected to. For this example, we've already chosen Channel **1** when our Light actuator widget was setup.

*TIP: For the purposes of testing with MQTT, you could also use the wildcard __#__ which would subscribe to all channels. Cayenne supports all of the usually filtering and control from MQTT that you'd expect. But since we know the specific Channel that we want to subscribe to in our example, we'll use that.*

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-11-subscribe-command-messages.png" width="660" height="499" alt="mqtt-fx-11-subscribe-command-messages"><br/><br/></p>

After entering in the details needed to subscribe to the Command messages for our actuator, click on the **Publish** button in MQTT.fx. We are now subscribed to the *COMMAND* messages that Cayenne sends when our actuator state is changed.

##### Send Actuator Updated Value

Now that we'll be notified when our actuator's state is changed on the dashboard, let's try it out. Using the Cayenne dashboard, click on the Button for your Light actuator. Cayenne publishes a *COMMAND* message and the dashboard widget will enter a *Waiting* state as it awaits confirmation that the actuator's state was changed.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/API-actuator-waiting.png" width="660" height="395" alt="actuator waiting"><br/><br/></p>

Examining MQTT.fx, we can see the Command message arrive from Cayenne. The message from Cayenne includes two parts:

1. A **Sequence** identifier. This is a randomly generated string that is used by the Cayenne Cloud to tie which widget this command is associated with. Keep this value in mind for now as we will need this identifier in the next step when we send a command response back to Cayenne.

2. A **Value**. This indicates what the new value of the actuator should be. In the case of our Light actuator, Cayenne is informing us that the new state should be 1 - "On".

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-12b-command-message-from-cayenne.png" width="660" height="499" alt="mqtt-fx-12b-command-message-from-cayenne"><br/><br/></p>

**Note:** Normally, at this point we would handle actually changing the state of our actuator. For example, our code would interact with the actuator and change its state. Since we're just faking some data, there's nothing for us to actually change, but we do need to inform Cayenne that the actuator's state was changed. We do so by sending a value to Cayenne for what the new state is. Cayenne wanted us to turn on the Light, so let's simply tell Cayenne that's what happened.

To tell Cayenne what the updated value is, we refer to the [Send Actuator Updated Value](#cayenne-mqtt-api-mqtt-messaging-topics-send-actuator-updated-value) section of the docs. There, we find the details on what MQTT call to make. According to the docs, Cayenne expects:

```
v1/username/things/clientID/data/channel
```

Once again, we then substitute in the values for our account, board and actuator.

+ Replace **username** with the **MQTT Username** for your account.
+ Replace **clientID** with the **Client ID** for your board.
+ Replace **channel** with the appropriate channel that this actuator is connected to. For this example, we chose Channel 1 for our Light actuator.

Next, we need to inform Cayenne what the actual value for our actuator is. Cayenne asked for the new status to be 1 (meaning On), so we'll give it the value of **1**.

**Note:** Be sure to inform Cayenne what the **actual** status of the actuator is. For example, if changing the actuator state failed, be sure to tell Cayenne what the correct current value is. Cayenne needs to receive the current value so that the dashboard correctly informs the user what the actual state of their device is.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-13-inform-cayenne-actuator-state.png" width="660" height="499" alt="mqtt-fx-13-inform-cayenne-actuator-state"><br/><br/></p>

Once the dashboard receives an updated value for the widget, our Light actuator switches out of the *Waiting* state and now reflects the fact that our Light is On.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/API-actuator-on.png" width="660" height="395" alt="actuator on"><br/><br/></p>

##### Send command response

The final step in completing our actuator change is to inform Cayenne as to whether the actuator state change was handled OK, or if there was a problem. This gives Cayenne an opportunity to display an error message to the user if needed. To send this to Cayenne, we use the [Send Command response](#cayenne-mqtt-api-mqtt-messaging-topics-send-command-response) call. Examining the docs for this call, we see Cayenne expects:

```
v1/username/things/clientID/response
```

Once again, we then substitute in the values for our account and board.

+ Replace **username** with the **MQTT Username** for your account.
+ Replace **clientID** with the **Client ID** for your board.

Next, we need to tell Cayenne if there was an error or if things were handled OK. According to the docs, we need to send this in one of the following forms (depending on OK vs Error):

```
ok,seq
error,seq=message
```

We're using a make believe actuator, so changing our actuator's state can't fail. So in this case let's just tell Cayenene that everything was handled without incident. We need to provide the following two pieces of information for this:

1. The string **Value** "ok". This lets Cayenne know things were handled OK, no errors to display to the user on the dashboard.

2. The **Sequence** identifier. If you'll recall, this value was provided to us when we received the *COMMAND* message from Cayenne. We provide it here so that Cayenne knows what we're responding to.

Click on the **Publish** button to send the command response to Cayenne. If you send an error message, Cayenne will display it in the dashboard.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/MQTT.fx-14-response-to-cayenne.png" width="660" height="497" alt="mqtt-fx-14-response-to-cayenne"><br/><br/></p>

**Congrats! You can now handle actuator messages sent by the Cayenne Cloud!**

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
<td><span>Analog Actuator</span></td>
<td><span>ANALOG_ACTUATOR</span></td>
<td><span>analog_actuator</span></td>
<td><span>Analog</span></td>
<td><span>ANALOG</span></td>
<td><span>null</span></td>
<td><a href="#slider-control">Slider</a></td>
</tr>
<tr>
<td><span>Digital Actuator</span></td>
<td><span>DIGITAL_ACTUATOR</span></td>
<td><span>digital_actuator</span></td>
<td><span>Digital (0/1)</span></td>
<td><span>DIGITAL</span></td>
<td><span>null</span></td>
<td><a href="#button-control">Button</a></td>
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
<td><span>\* Celsius</span></td>
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
<td><span>\* Off/On</span></td>
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
<td><span>\* % (0 to 100)</span></td>
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
<td><span>\* Off/On</span></td>
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
<td><span>\* Off/On</span></td>
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
<td><span>\* Off/On</span></td>
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
<td><span>\* Off/On</span></td>
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
<td><span>Digital Sensor</span></td>
<td><span>DIGITAL_SENSOR</span></td>
<td><span>digital_sensor</span></td>
<td><span>Digital (0/1)</span></td>
<td><span>DIGITAL</span></td>
<td><span>d</span></td>
<td><span><a href="#2-state-display">2 State</a></span></td>
</tr>
<tr>
<td><span>Analog Sensor</span></td>
<td><span>ANALOG_SENSOR</span></td>
<td><span>analog_sensor</span></td>
<td><span>Analog</span></td>
<td><span>ANALOG</span></td>
<td><span>null</span></td>
<td><span><a href="#value-display">Value</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a></span></td>
</tr>
<tr>
<td><span>Absolute Humidity</span></td>
<td><span>ABSOLUTE_HUMIDITY</span></td>
<td><span>abs_hum</span></td>
<td><span>Grams per cubic meter</span></td>
<td><span>GRAMS_PER_METER3</span></td>
<td><span>gm3</span></td>
<td><span><a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Absorbed Radiation</span></td>
<td rowspan="2"><span>ABSORBED_RADIATION</span></td>
<td rowspan="2"><span>absrb_rad</span></td>
<td><span>\* Rad</span></td>
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
<td><span>\* Meters above sea level</span></td>
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
<td><span>\* Hecto Pascal</span></td>
<td><span>HECTOPASCAL</span></td>
<td><span>hpa</span></td>
</tr>
<tr>
<td rowspan="3"><span>Battery</span></td>
<td rowspan="3"><span>BATTERY</span></td>
<td rowspan="3"><span>batt</span></td>
<td><span>\* % (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td rowspan="3"><span><a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Ratio</span></td>
<td><span>RATIO</span></td>
<td><span>r</span></td>
</tr>
<tr>
<td><span>Volts</span></td>
<td><span>VOLTS</span></td>
<td><span>v</span></td>
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
<td><span>\* Cells by cubic millimeter</span></td>
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
<td rowspan="6"><span><a href="#value-display">Value</a>, <a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a></span></td>
</tr>
<tr>
<td><span>\* Bytes</span></td>
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
<td><span>\* Parts per milliion</span></td>
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
<td><span>\* Milligrams/deciliter</span></td>
<td><span>MG_DL</span></td>
<td><span>mgdl</span></td>
</tr>
<tr>
<td rowspan="3"><span>Color</span></td>
<td rowspan="3"><span>COLOR</span></td>
<td rowspan="3"><span>color</span></td>
<td><span>\* RGB</span></td>
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
<td><span>Counter</span></td>
<td><span>COUNTER</span></td>
<td><span>counter</span></td>
<td><span>Analog</span></td>
<td><span>ANALOG</span></td>
<td><span>null</span></td>
<td><span><a href="#value-display">Value</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a></span></td>
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
<td rowspan="3"><span>Energy</span></td>
<td rowspan="3"><span>ENERGY</span></td>
<td rowspan="3"><span>energy</span></td>
<td><span>Killowatts per hour</span></td>
<td><span>KW_PER_H</span></td>
<td><span>kwh</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>External Waterleak</span></td>
<td rowspan="3"><span>EXT_WATERLEAK</span></td>
<td rowspan="3"><span>ext_wleak</span></td>
<td><span>Analog</span></td>
<td><span>ANALOG</span></td>
<td><span>null</span></td>
<td><span><a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Force</span></td>
<td rowspan="2"><span>FORCE</span></td>
<td rowspan="2"><span>force</span></td>
<td><span>\* Newtons</span></td>
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
<td><span>\* Pascal</span></td>
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
<td><span>\* Milligrams/deciliter</span></td>
<td><span>MG_DL</span></td>
<td><span>mgdl</span></td>
</tr>
<tr>
<td rowspan="2"><span>GPS</span></td>
<td rowspan="2"><span>GPS</span></td>
<td rowspan="2"><span>gps</span></td>
<td><span>\* Global Positioning System</span></td>
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
<td><span>\* Meters per second squared</span></td>
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
<td><span>\* Meters per second squared</span></td>
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
<td><span>\* Meters per second squared</span></td>
<td><span>METER_PER_SEC_SQ</span></td>
<td><span>ms2</span></td>
</tr>
<tr>
<td rowspan="2"><span>Gyroscope.rate of rotation around x axis</span></td>
<td rowspan="2"><span>GYRO_X</span></td>
<td rowspan="2"><span>gyro_x</span></td>
<td><span>\* Rotation speed</span></td>
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
<td><span>\* Rotation speed</span></td>
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
<td><span>\* Rotation speed</span></td>
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
<td><span>\* Electron Volts</span></td>
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
<td><span>\* Meter</span></td>
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
<td><span>\* Lux</span></td>
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
<td><span>\* Liter</span></td>
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
<td><span>\* Lux</span></td>
<td><span>LUX</span></td>
<td><span>lux</span></td>
<td rowspan="4"><span><a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
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
<td><span>\* Megabytes</span></td>
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
<td><span>\* gallon</span></td>
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
<td><span>\* Pascal</span></td>
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
<td rowspan="3"><span>Proximity</span></td>
<td rowspan="3"><span>PROXIMITY</span></td>
<td rowspan="3"><span>prox</span></td>
<td><span>\* Centimeter</span></td>
<td><span>CENTIMETER</span></td>
<td><span>cm</span></td>
<td rowspan="3"><span><a href="#proximity-widget">Proximity (coming soon)</a>, <a href="#value-display">Value</a>, <a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a></span></td>
</tr>
<tr>
<td><span>Meter</span></td>
<td><span>METER</span></td>
<td><span>m</span></td>
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
<td><span>\* Curie</span></td>
<td><span>CURIE</span></td>
<td><span>ci</span></td>
</tr>
<tr>
<td rowspan="2"><span>Radiation Exposure</span></td>
<td rowspan="2"><span>EXPOSURE_RADIATION</span></td>
<td rowspan="2"><span>expo_rad</span></td>
<td><span>\* Roentgen</span></td>
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
<td rowspan="2"><span>Rain Level</span></td>
<td rowspan="2"><span>RAIN_LEVEL</span></td>
<td rowspan="2"><span>rain_level</span></td>
<td><span>Centimeter</span></td>
<td><span>CENTIMETER</span></td>
<td><span>cm</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>\* Millimeter</span></td>
<td><span>MILLIMETER</span></td>
<td><span>mm</span></td>
</tr>
<tr>
<td rowspan="2"><span>Relative Humidity</span></td>
<td rowspan="2"><span>RELATIVE_HUMIDITY</span></td>
<td rowspan="2"><span>rel_hum</span></td>
<td><span>\* % (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td rowspan="2"><span><a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Ratio</span></td>
<td><span>RATIO</span></td>
<td><span>r</span></td>
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
<td><span>\* Revolutions per second</span></td>
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
<td><span>X \* sin (0/2)</span></td>
<td><span>ROT_X</span></td>
<td><span>null</span></td>
<td><span>Rotation Vector (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Rotation Vector.y axis</span></td>
<td><span>ROTATION_Y</span></td>
<td><span>rot_y</span></td>
<td><span>Y \* sin (0/2)</span></td>
<td><span>ROT_Y</span></td>
<td><span>null</span></td>
<td><span>Rotation Vector (coming soon), <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Rotation Vector.z axis</span></td>
<td><span>ROTATION_Z</span></td>
<td><span>rot_z</span></td>
<td><span>Z \* sin (0/2)</span></td>
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
<td><span>\* Volts</span></td>
<td><span>VOLTS</span></td>
<td><span>v</span></td>
</tr>
<tr>
<td><span>Spectral Amplitude</span></td>
<td><span>cm/hertz</span></td>
<td><span>cmhz</span></td>
</tr>
<tr>
<td><span>Signal Noise Ratio</span></td>
<td><span>SNR</span></td>
<td><span>snr</span></td>
<td><span>Decibels</span></td>
<td><span>DB</span></td>
<td><span>db</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
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
<td><span>\* Kiloelectron Volts</span></td>
<td><span>KILOELEC_VOLT</span></td>
<td><span>kev</span></td>
</tr>
<tr>
<td><span>Soil Moisture</span></td>
<td><span>SOIL_MOISTURE</span></td>
<td><span>soil_moist</span></td>
<td><span>% (0 to 100)</span></td>
<td><span>PERCENT</span></td>
<td><span>p</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Soil pH</span></td>
<td><span>SOIL_PH</span></td>
<td><span>soil_ph</span></td>
<td><span>Analog</span></td>
<td><span>ANALOG</span></td>
<td><span>null</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="2"><span>Soil Water Tension</span></td>
<td rowspan="2"><span>SOIL_WATER_TENSION</span></td>
<td rowspan="2"><span>soil_w_ten</span></td>
<td><span>\* Kilopascal</span></td>
<td><span>KILOPASCAL</span></td>
<td><span>kpa</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Pascal</span></td>
<td><span>PASCAL</span></td>
<td><span>pa</span></td>
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
<td><span>\* Miles per hour</span></td>
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
<td><span>\* Megabytes</span></td>
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
<td><span>\* Hecto Pascal</span></td>
<td><span>HECTOPASCAL</span></td>
<td><span>hpa</span></td>
</tr>
<tr>
<td><span>Pounds per square inch</span></td>
<td><span>PSI</span></td>
<td><span>psi</span></td>
</tr>
<tr>
<td><span>Tank Level</span></td>
<td><span>TANK_LEVEL</span></td>
<td><span>tl</span></td>
<td><span>Analog</span></td>
<td><span>ANALOG</span></td>
<td><span>null</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td rowspan="3"><span>Temperature</span></td>
<td rowspan="3"><span>TEMPERATURE</span></td>
<td rowspan="3"><span>temp</span></td>
<td><span>Fahrenheit</span></td>
<td><span>FAHRENHEIT</span></td>
<td><span>f</span></td>
<td rowspan="3"><span><a href="#value-display">Value</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a></span></td>
</tr>
<tr>
<td><span>\* Celsius</span></td>
<td><span>CELSIUS</span></td>
<td><span>c</span></td>
</tr>
<tr>
<td><span>Kelvin</span></td>
<td><span>KELVIN</span></td>
<td><span>k</span></td>
</tr>
<tr>
<td rowspan="7"><span>Time</span></td>
<td rowspan="7"><span>TIME</span></td>
<td rowspan="7"><span>time</span></td>
<td><span>\* Second</span></td>
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
<td><span>\* Newton-meter</span></td>
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
<td><span>\* Formazin Turbidity Unit</span></td>
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
<td rowspan="2"><span>Voltage</span></td>
<td rowspan="2"><span>VOLTAGE</span></td>
<td rowspan="2"><span>voltage</span></td>
<td><span>\* Volts</span></td>
<td><span>VOLTS</span></td>
<td><span>v</span></td>
<td rowspan="2"><span><a href="#gauge-display">Gauge</a>, <a href="#line-chart-display">Line Chart</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Millivolts</span></td>
<td><span>MILLIVOLTS</span></td>
<td><span>mv</span></td>
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
<td><span>\* Gallons per minute</span></td>
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
<td><span>\* Pounds</span></td>
<td><span>POUND</span></td>
<td><span>lbs</span></td>
<td rowspan="2"><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
<tr>
<td><span>Kilogram</span></td>
<td><span>KILOGRAM</span></td>
<td><span>kg</span></td>
</tr>
<tr>
<td><span>Received signal strength indicator</span></td>
<td><span>RSSI</span></td>
<td><span>rssi</span></td>
<td><span>RSSI</span></td>
<td><span>DBM</span></td>
<td><span>dbm</span></td>
<td><span><a href="#line-chart-display">Line Chart</a></span></td>
</tr>
<tr>
<td><span>Wind Speed</span></td>
<td><span>WIND_SPEED</span></td>
<td><span>wind_speed</span></td>
<td><span>Kilometer per hour</span></td>
<td><span>KM_PER_H</span></td>
<td><span>kmh</span></td>
<td><span><a href="#line-chart-display">Line Chart</a>, <a href="#gauge-display">Gauge</a>, <a href="#value-display">Value</a></span></td>
</tr>
</tbody>
</table>

\* Denotes default value for Unit.

## MQTT Messaging Topics

**Using MQTT with Cayenne**

MQTT is the preferred API protocol to send and receive data to and from Cayenne’s dashboard. Payloads are plain text based, and topics follow a tree composed of a Username, a Client ID and a Channel ID, allowing for fine filtration and control. Therefore, MQTT does not require the use of a provisioning API. Data that is published to a backend topic can also be subscribed to by a user’s third party application.  

### Send System info

System information is very basic information that may change very rarely over the lifetime of a device.

| Topic	| PUB |	SUB |
|-------|-------------------------------------------|---|---|
| v1/**username**/things/**clientID**/sys/model     |	X |	X |
| v1/**username**/things/**clientID**/sys/version   |	X |	X |
| v1/**username**/things/**clientID**/sys/cpu/model |	X |	X |
| v1/**username**/things/**clientID**/sys/cpu/speed |	X |	X |

A string payload for each topic is expected:

+ (string) Device Model, eg. “Arduino Uno”
+ (string) Device Version, eg. “1.0”
+ (string) Device CPU Model, eg. “ATMega328”
+	(string) Device CPU Speed, eg. “72000000000” for 72Mhz

### Send Sensor data

In order to send data, the channel ID needs to be appended to the data topic.

| Topic	| PUB |	SUB |
|-------|-------------------------------------------|---|---|
| v1/**username**/things/**clientID**/data/**channel**     |	X |	X |

The data type and/or unit can be added to prefix the value, allowing the backend to process and display data without the need of configuring the data channel from the dashboard:

+	(string) type,unit=value

### Receive Actuator command

In order to receive a command for a given data channel, the device must subscribe to the “cmd” topic.

| Topic	| PUB |	SUB |
|-------|-------------------------------------------|---|---|
| v1/**username**/things/**clientID**/cmd/**channel**     |	&nbsp;  |	X |

Payload will contain a command sequence number followed by the value. The Developer is responsible for managing the value format.

+	(string) seq,value

### Send Actuator Updated Value

In order to let the dashboard know of the current status of an actuator, the device must publish that value to the corresponding channel.  This will ensure that the widget state (on/off) remains consistent with the state of the actuator.

| Topic	| PUB |	SUB |
|-------|-------------------------------------------|---|---|
| v1/**username**/things/**clientID**/data/channel | X | &nbsp; |

Payload must contain simply the true binary value of a digital actuator (1/0) or numerical value for analog actuators.

+ (string) 1
+ (string) 0.8

### Send command response

In order to let the system know of an actuator command, the device must publish a response on a common response topic.

| Topic	| PUB |	SUB |
|-------|-------------------------------------------|---|---|
| v1/**username**/things/**clientID**/response     |	X |	&nbsp;  |

Payload must contain the status “ok” or “error”, as well as the command sequence number and an optional message that will be displayed to the user in case of error.

+	(string) ok,seq
+	(string) error,seq=message

### Examples

**Send Sensor Data to Channel 2**

⇒ PUB v1/A1234B5678C/things/0123-4567-89AB-CDEF/data/2

temp,c=20.7

**Receive Actuator Command on Channel 3**

⇒ SUB v1/A1234B5678C/things/0123-4567-89AB-CDEF/cmd/3

⇐ 2otoExGxnMJz0Jn,0

**Send updated Actuator value on Channel 3**

⇒ PUB v1/A1234B5678C/things/0123-4567-89AB-CDEF/digital/3

1

**Send a Command Response - OK**

⇒ PUB v1/A1234B5678C/things/0123-4567-89AB-CDEF/response

ok,2otoExGxnMJz0Jn

**Send a Command Response - Error**

⇒ PUB v1/A1234B5678C/things/0123-4567-89AB-CDEF/response 

error,2otoExGxn=ERROR MESSAGE  

<p id="faqs-api" class="anchor-link"></p>

## FAQs

*Coming Soon!*
