# Getting Started

<p id="create-cayenne-account" class="anchor-link"></p>

## Create Cayenne Account
You can create an account from [Mobile](#downloads-mobile-apps) or online. Mobile is the easiest and fastest way, but instructions for online set up are below:

On the <a href="https://cayenne.mydevices.com/cayenne/signup?_ga=1.165612799.1524412540.1457034675" target="_blank">Sign Up page</a>, enter your Name, Email and create a Password.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170202160222/Cayenne-Sign-Up-page.png" width="600" height="386" alt="Sign up for Cayenne"></p>

<p id="choose-device" class="anchor-link"></p>


## Choose Device
Cayenne currently supports Raspberry Pi, Arduino, ESP8266 and LoRa devices. Select the device you would like to get started with in your IoT project.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/step-1-choose-device-category-2.png" width="600" height="359" alt="Choose device category"><br/><br/></p>

The next section covers getting started with a Raspberry Pi device. If you’re using an Arduino device to get started, [click here](#getting-started-arduino). If you're using an ESP8266 board, [click here](#getting-started-esp8266). If you’re using a LoRa device to get started, [click here](#getting-started-lora).

<p id="raspberry-pi" class="anchor-link"></p>


## Raspberry Pi

<p id="rpi-get-started-in-minutes" class="anchor-link"></p>


### Getting started in minutes!

1. Power on your Raspberry Pi. Connect the power adapter to your Raspberry Pi.
2. Connect the Pi to the Internet. Connect your Raspberry Pi to the Internet using an Ethernet cable. Or, if you have a Wi-Fi dongle setup already this works too.
3. Make sure the Raspbian operating system is installed. Please make sure one of these is pre-installed to the sd card. If you need to install the Raspbian operating system, <a href="https://www.raspberrypi.org/downloads/raspbian/" target="_blank">click here</a>.

   **Note:** You do not need to make any configuration changes to the Pi device. Cayenne automatically handles setting up and configuring your Pi for use. However, it is recommended that you expand the filesystem on the flash card if necessary. Please refer to raspi-config if you need additional information on performing this step.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160128155812/raspberry-pi-actual.png" width="600" height="610" alt="Raspberry Pi"></p>

<p id="installing-cayenne" class="anchor-link"></p>


### Installing Cayenne

**Installing from the Mobile App**

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/J9zqvGWB5tM" frameborder="0" allowfullscreen></iframe></p>

Before you can manage your Raspberry Pi device using the mobile app, you must install the Cayenne app onto your mobile device. Installing and using the mobile app is the easiest way to get started with Cayenne. If you need additional help on this step, refer to the video tutorial above.

Visit the [Mobile App download page](#downloads-mobile-apps) to find the appropriate app store link for your device.

After installing the Cayenne app onto your mobile device, you will be guided through finding and installing Cayenne on all of your Raspberry Pi devices.

**Installing from the Web**

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/Qx0IHv-UR-0" frameborder="0" allowfullscreen></iframe></p>

**1. Before you can manage your Raspberry Pi device using the online dashboard, you must install Cayenne onto the device.**

After verifying your Raspberry Pi is setup and powered on, you can continue with connecting your device to Cayenne.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616133028/1st-Experience-RPI-Step-2-setup-rpi.png" width="600" height="382" alt="Raspberry Pi Step 2"></p>

The instructions for installing Cayenne onto your device are displayed on screen. Follow the on screen instructions to start the installation process. If you need additional help on this step, refer to the video tutorial above.

_**NOTE:** The commands displayed on screen will be customized uniquely for the device being added and for your account. Do not share or re-use the installer downloaded from these commands - If you need to install additional devices, or reinstall onto this same device, you should follow the installation process again for each device._

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616133821/1st-Experience-RPI-Step-3-connect-rpi.png" width="600" height="382" alt="Raspberry Pi Step 3"></p>

**2. As soon as the installation process starts, the Installing screen automatically appears. From here you can check on the installation process as it completes.**

Cayenne installs on your Raspberry Pi in 4 steps:

- **Step 1**: Installing libraries
- **Step 2**: Installing agent
- **Step 3**: Installing software
- **Step 4**: Installing drivers

__This may take up to 10 minutes. Please be patient.__

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160205134947/Screenshot-123.png" width="600" height="382" alt="Installing Cayenne"></p>

**3. As soon as the installation process completes, the Online Dashboard will automatically appear. Your Raspberry Pi is now ready to use!**

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601102506/RaspberryPi-1stExperience.jpg" width="600" height="382" alt="Cayenne First Experience"></p>

<p id="sensors-raspberry-pi" class="anchor-link"></p>


### Sensors
Cayenne works with temperature, luminosity, pressure/distance, motion and generic sensors connected to your Raspberry Pi devices. [View supported sensors](#supported-hardware-sensors)

**EXAMPLE**: Let’s add a BMP180 temperature and pressure sensor to see how easy it is to get started.

Connect the BMP180 as shown here. [View BMP180 tutorial](#supported-hardware-sensors-wiring-tutorials-temperature-bmp180-rpi-tutorial)

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601121157/RPI-BMP180-Step-4.png" width="600" height="193" alt="Cayenne Step 4"></p>


Click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"></p>

1. Select **Sensors, Temperature,** then **BMP180**.
2. Click **Add Sensor**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160617103039/Add-Device-RPI-BMP180.png" width="600" height="365" alt="Add Sensor"></p>


**Read your Sensor**

The BMP180 temperature and pressure widgets are added to your dashboard.

Let’s try it out! Place your hand on the BMP180 sensor. The temperature value updates as soon as a change in temperature is received.

You can check the current status of your sensor at any time by visiting the dashboard.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122628/BMP180-RPIAdded.jpg" width="600" height="365" alt="Added Sensor"></p>

<p id="actuators-raspberry-pi" class="anchor-link"></p>


### Actuators

Cayenne works with light, motor, valve, relay and generic actuators that are connected to your Raspberry Pi devices. [View supported actuators](#supported-hardware-actuators)

**EXAMPLE**: We will switch on an LED connected to your Raspberry Pi using Cayenne.

Connect an LED to Channel 23 as shown here. [View LED tutorial](#supported-hardware-actuators-wiring-tutorials-generic-digital-output-rpi-tutorial)

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601121207/RPI-Digital-Out-Led-Step-2.png" width="600" height="193" alt="LED Step 2"></p>

Click **Add New > Device / Widget**.


<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"></p>

1. Select **Actuators**, then **Light**, then **Light Switch**.
2. Enter “LED” in **Name** field.
3. Choose channel 23.
4. Click **Add Actuator**.


<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160617103241/Add-Device-RPI-Lightswitch.jpg" width="600" height="365" alt="Light Switch"></p>

The LED widget has been added to your dashboard. Click the LED button in the dashboard to turn the LED on and off.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601123646/LightSwitch-RPI-todashboard.jpg" width="600" height="365" alt="Light Switch to Dashboard"></p>

<p id="extensions-raspberry-pi" class="anchor-link"></p>


### Extensions

You can add analog, digital and PWM extensions to your Raspberry Pi. This allows you to add more sensors and actuators to your Raspberry Pi. [View supported extensions](#supported-hardware-extensions)

<p id="arduino-arduino" class="anchor-link"></p>


## Arduino

<p id="arduino-get-started-in-minutes" class="anchor-link"></p>


### Get started in minutes!
<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/hmIGRrvevCA" frameborder="0" allowfullscreen></iframe></p>

Before you can manage your Arduino device using the online dashboard, you must setup your device and install the Cayenne Arduino Library onto the device.

<p id="arduino-setup" class="anchor-link"></p>


### Arduino Setup

Begin by verifying that your Arduino board and PC/Mac are correctly set up before continuing.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/1st-Experience-Arduino-Step-2-setup-arduino2.png" width="600" height="374" alt="Step 2 Arduino"></p>


#### Connect the Arduino to the Internet

Make sure your Arduino is connected to the Internet. On most Arduino boards, you will need to connect an [Ethernet or Wi-Fi shield](#supported-hardware-microcontrollers-using-arduino-ethernet-wifi-shield) in order to connect your board to the Internet. Verify that you have a shield supported by Cayenne installed and working.
   
#### Connect the Arduino to a PC/Mac

Power on your Arduino by connecting your Arduino with a USB cable (or FTDI connector if you’re using an Arduino pro). You should see the power LED lit on your board.

*TIP: If you will have more than a couple of sensors attached to your Arduino, it may be a good idea to also supply power to the Arduino using the external power jack. This will ensure that after your board is programmed and running, it has sufficient power for all your connected devices.*

<p id="using-cayenne-library" class="anchor-link"></p>

#### Using Cayenne Arduino Library

The Cayenne MQTT Library gives you everything you need to quickly get your board connected with Cayenne using MQTT and the Arduino IDE. Using the Arduino IDE is a fast and easy way to program your Arduino board. In this section we will walk you through installing and configuring the Arduino IDE to use the library.

**Note:** The walkthrough presented in this section has been updated to show you how to get up and running quickly using the new _Arduino MQTT Library_. Going forward, Cayenne's Arduino support will be switched over exclusively to this new MQTT usage. If you are not already familiar with using MQTT, see [About MQTT](#cayenne-mqtt-api-overview-about-mqtt).

<p id="installing-library-arduino-ide" class="anchor-link"></p>

##### Installing Arduino IDE Software

To use the Cayenne MQTT Library, the Arduino IDE software should be installed. Go to https://www.arduino.cc/en/Main/Software to download and install the Arduino IDE software if you need it. Arduino IDE can be installed on Windows, Mac or Linux computers.

##### Add Cayenne Library to Arduino IDE

The Cayenne MQTT Library is a collection of code, known as sketch files, that makes it easy for you to connect and send data to and from sensors, actuators and devices connected to Arduino boards using MQTT. Cayenne sketch files can be [combined with other sketch files](#sketch-files-using-sketch-files-combining-sketch-files) for your IoT projects.

The Cayenne MQTT Library is available directly from the Arduino IDE Libraries list. To install the library, select **Sketch** > **Include library** > **Manage Libraries**. The *Library Manager* dialog will appear. From here, search for the **Cayenne MQTT** library and install it.

**Note:** You may find a _Cayenne_ and a _Cayenne MQTT_ library in the library manager. Be sure to select the **Cayenne MQTT** library so that you are using the new MQTT version.
 
<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-manage-libraries.png" width="660" height="552" alt="arduino-ide-manage-libraries"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-add-mqtt-library.png" width="660" height="552" alt="arduino-ide-add-mqtt-library"><br/><br/></p>
 
The Cayenne MQTT library has now been expanded in the libraries folder in your Arduino sketches directory. You can verify this by going to the **Sketch** > **Include Library** menu where you should now see the Cayenne MQTT library at the bottom of the drop-down menu under *Contributed Libraries*. The Cayenne MQTT library is now ready to be used in your project.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-mqtt-library-menu.png" width="660" height="553" alt="arduino-ide-mqtt-library-menu"><br/><br/></p>

#### Configure Arduino IDE

In order to successfully program your Arduino board, you will need to verify that the appropriate **Board** and **Port** are selected in the Arduino IDE.
 
First, verify that the correct **Board** is selected in the **Tools** > **Board** menu. Be sure to select the board type that you will be programming.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Arduino-IDE-board-selection.png" width="660" height="552" alt="Arduino IDE board selection"><br/><br/></p>
 
Then, verify that you have the correct **Port** selected for communicating with your Arduino. Pick the correct port based upon how you are connecting your Arduino to your PC/Mac.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Arduino-IDE-port-selection.png" width="660" height="552" alt="Arduino IDE port selection"><br/><br/></p>

<p id="connect-your-arduino" class="anchor-link"></p>

#### Connect your Arduino to Cayenne

After setting up your PC/Mac computer with the Arduino IDE and the Cayenne Library, you are ready to install Cayenne onto your device. Continue to Step 3 of the Arduino installation, where you will connect your board with Cayenne.

On this screen, select the Arduino board that you are using from the list of [supported boards](#supported-hardware-microcontrollers). As you select your Arduino board, a list of connections appears below the board name. Select the connection type that you are using.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/1st-Experience-Arduino-Step-3-board-expanded2.png" width="600" height="336" alt="Arduino Step 3"></p>

Click on the Sketch button next to the connection you will be using and a popup will appear with the sketch file you will need when flashing your Arduino device. The sketch file will contain everything you need to connect your device to Cayenne, including the **Username**, **Password** and **Client** ID credentials needed to connect via MQTT.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616135934/1st-Experience-Arduino-Step-3-connection-example.png" width="600" height="385" alt="Arduino Step 3 Connection Example"></p>

Copy & paste the sketch file contents into Arduino IDE and select **Sketch** > **Upload** to upload the sketch file to your device.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616151042/Arduino-IDE-paste-example-sketch-for-connection.png" width="600" height="555" alt="Arduino IDE paste example sketch"></p>

As soon as your Arduino device comes online and connects to Cayenne, your device’s dashboard will appear.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-1stExperienceB.png" width="660" height="392" alt="dashboard-1stexperienceb"><br/><br/></p>

**Congrats! Your hardware is now connected to the Cayenne Cloud!**

If you run into any troubles, see [Troubleshooting](#getting-started-arduino-troubleshooting) for things to check.

<p id="sensors-arduino" class="anchor-link"></p>

### Sensors

Cayenne works with any sensor that is connected to an Arduino. We’ve created <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/tree/master/examples" target="_blank">sketch files</a> for the various temperature, luminosity, pressure, proximity, motion and generic sensor models.

**EXAMPLE:** Let’s add a TMP36 Temperature Sensor to see how easy it is.

Connect the TMP36 Temperature Sensor as shown here. [View TMP36 tutorial](#supported-hardware-sensors-wiring-tutorials-temperature-tmp36-arduino-tutorial)

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601121144/Arduino_TMP36_step3_bb.png" width="600" height="380" alt="Arduino TMP36 Step 3"></p>

**Dashboard widget & example code**

Click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"></p>

1. Choose **Sensor** > **Temperature** > **TMP36**.
2. Choose **Virtual** from the I/O field.
3. We will use Virtual Pin 1 for this example. Choose **V1** from the **Pin** field.
4. Click the **Step 1: Sketch File** button. A popup will appear showing the TMP36 example sketch file.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160617103706/Add-Device-Arduino-TMP361.png" width="600" height="365" alt="Arduino Add Device TMP361"></p>

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/Arduino-TMP36-GettingStarted-Popup.png" width="600" height="386" alt="Arduino Add Device TMP361 Sketch File"></p>

**Note:** This sketch file contains a working example of how to use the TMP36 sensor, but we don't want to lose our working sketch file created earlier. Instead, we can use the example TMP36 sketch file to give us an idea of what code needs to be merged into our working sketch file created earlier. Copy & Paste these differences into your sketch file in the Arduino IDE. [Read more about combining sketch files](#sketch-files-using-sketch-files-combining-sketch-files)

*TIP: If you would like more information on the code that goes into the TMP36 example, you may wish to review the [Arduino MQTT](#cayenne-mqtt-api-using-arduino-mqtt-send-sensor-data) example that walks through adding this code manually to a sketch file.*

**Customize the example code for our device**

*TIP: The example sketch file code may not always use the same pin assignments as you used when connecting your device. Be sure to always double check and correct any differences when importing example code.*

In this case, our sensor is connected to Analog Pin 0 (A0) and we are using the Virtual Pin 1 which matches what the example sketch file has defined, so the sketch file should be OK to use as is. After verifying the sketch file looks good, select **Sketch** > **Upload** to upload the sketch file to your device.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/Arduino-TMP36-GettingStarted-Sketch.png" width="600" height="464" alt="Arduino IDE TMP36"></p>

In the Cayenne dashboard, you can now click the **Step 2: Add Sensor** button and the TMP36 widget will be added to your dashboard.

*TIP: You don't actually need to first add Sensor widgets to your dashboard - Cayenne will automatically create widgets for MQTT sensor data it receives! The sketch files shown in the _Add Device / Widget_ popups are merely examples that will help you get started with coding & sending your device data to Cayenne. If you already know how to read the data for your device, you can use the Cayenne MQTT library and write code that will send your data to Cayenne without first creating a dashboard widget. Once Cayenne receives the data, it will create the appropriate widgets in your dashboard automatically.*

**Compile, Upload and connect to Cayenne**

Once you have double-checked the sketch file, select **Sketch** > **Upload** to upload the sketch file to your device. Shortly after our board comes online, it will read the current temperature of our TMP36 sensor and send the reading to Cayenne. Cayenne will display this data in the temperature widget.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601131032/Arduino-TMP36.jpg" width="600" height="336" alt="Arduino IDE TMP361"></p>

**Congrats! Your hardware is now sending sensor data to the Cayenne Cloud!**

<p id="actuators-arduino" class="anchor-link"></p>

### Actuators

Now that we have our board connected to Cayenne and it has successfully sent sensor data to our dashboard, let’s take a look at how easy it is to add an actuator. This will allow us to remotely control a device connected to our board through the Cayenne dashboard.

**EXAMPLE**: Let's add a Luminosity actuator widget that will allow us to control a LED connected to our board.

For this example, attach a LED to a PWM-enabled Pin on your board. Let’s use D6 in this example. [View Luminosity tutorial](#supported-hardware-actuators-wiring-tutorials-light-luminosity-arduino-tutorial)

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601112652/Arduino-Luminosity-Step-2.png" width="600" height="307" alt="Arduino Luminosity Step 2"></p>

**Dashboard widget & example code**

Let's start by the actuator widget on the dashboard. From the Cayenne dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"></p>

1. Choose **Actuator** > **Light** > **Luminosity**.
2. Choose **Virtual** from the I/O field.
3. We will use Virtual Pin 6 for this example. Choose **V6** from the **Channel** field.

  *TIP: The Channel selected here determines which MQTT channel Cayenne will notify when our actuator's state changes. You can use any unused channel, but our recommendation is to stick to using the same channel as the pin that the device is connected on.*

4. Click the **Step 1: Sketch File** button. A popup will appear showing example code for using the Luminosty widget.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/Arduino-Luminosity-GettingStarted-Dashboard.png" width="600" height="396" alt="Arduino Luminosity Add Device"></p>

**Note:** This sketch file contains a basic example of how to use the Luminosity actuator, but we don't want to lose our working sketch file created earlier that supports our TMP36 sensor. Instead, we can use the code shown in the Luminosity example sketch to give us an idea of what code needs to be merged into our working sketch file in order to support our actuator. Copy & Paste these differences into your sketch file in the Arduino IDE. [Read more about combining sketch files](#sketch-files-using-sketch-files-combining-sketch-files).

*TIP: If you would like more information on how to write code for responding to actuator commands, you may wish to review the [Arduino MQTT](#cayenne-mqtt-api-using-arduino-mqtt-respond-to-actuator-commands) example that walks through adding Button actuator code manually to a sketch file.*

**Customize the example code for our device**

After merging in the required code for handling a Luminosity actuator, we need to customize it to fit how our LED is connected to our board.

*TIP: The example sketch file code may not always use the same pin assignments as you used when connecting your device. Be sure to always double check and correct any differences when importing example code.*

In this case, the example Luminosity code assumes that our light is connected on **Digital Pin 3** and that Cayenne will notify us of changes to this actuator on **Virtual Pin 1**. We need to update the code to correct these values, since they are not correct for our setup. In addition, our sketch file already uses the **VIRTUAL_CHANNEL** define for use with our TMP36 sensor. When we import the sketch code to support the Luminosity actuator, we must customize these values to fit our setup.

<a href="../examples/arduino_getting_started_tmp36_luminosity/arduino_getting_started_tmp36_luminosity.ino" target="_blank">Here is a link</a> to a sketch file showing an example of combining the TMP36 & Luminosity into a single sketch file. Within it, you'll find the following changes:

1. Import the defines for the Luminosity, but customize them so that they are unique in our sketch file and correct for our setup.
2. Import the CAYENNE_IN function for handling our actuator, but customize the virtual channel define it so that it refers to our luminosity actuator.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/Arduino-TMP36-Luminosity-example-changes.png" width="600" height="462" alt="Arduino Luminosity and TMP36 Arduino IDE"></p>

**Finish adding the actuator widget**

Now that we have the code for our actuator, we need to complete adding the actuator widget to our dashboard. Switch back to the Cayenne dashboard and click the **Step 2: Add Actuator** button. The Luminosity widget will then be added to our dashboard.

Our code and actuator widget are ready, we can now upload our code to our board using Arduino IDE.

**Compile, Upload and connect to Cayenne**

Once you have double-checked the sketch file contents are correct, select **Sketch** > **Upload** to upload the sketch file to your device. As soon as your device comes online and connects to Cayenne, you can use the actuator widget on the dashboard, which will then trigger actuator *COMMAND* messages that your board will receive. The Luminosity actuator code will handle these messages by changing the state of our connected LED and the Cayenne library will automatically respond back to our dashboard to make sure the LED widget is updated as well.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-dashboard-simple-subscribe.png" width="660" height="460" alt="embedded-c-dashboard-simple-subscribe"><br/><br/></p>

**Congrats! You can now use the actuator to send actuator commands to your LED.**

### Troubleshooting

If you don’t see your Arduino device connected to Cayenne, or if you’re running into trouble successfully programming your Arduino with the Arduino IDE, here are a few things to check.

1. **Make sure your Arduino is connected to the Internet**

   On most Arduino boards, you will need to connect an Ethernet or Wi-Fi shield in order to connect your board to the Internet. Verify that you have [a shield supported by Cayenne](#supported-hardware-microcontrollers-using-arduino-ethernet-wifi-shield) installed and working.

   *TIP: Double check that the Cayenne MQTT include appears in your sketch file. If this line is not present, your board will fail to connect to Cayenne.*
      
   ```
   #include <CayenneMQTTEthernet.h>
  
   ```
   <br/>
2. **Make sure your Arduino is connected to a PC/Mac via the USB cable**

   Power on your Arduino by connecting your Arduino with a USB cable (or FTDI connector if you’re using an Arduino pro). You should see the power LED lit on your board.

3. **Configure the Arduino IDE**

   First, verify that you have the <a href="https://www.arduino.cc/en/Main/Software" target="_blank">Arduino IDE</a> installed.

   Open the Arduino IDE program and verify that the correct **Board** is selected.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616113931/Arduino-IDE-board-selection.png" width="600" height="501" alt="Arduino IDE Board Selection"></p>

   Next, verify that you have the correct **Port** selected for communicating with your Arduino. Pick the correct port based upon how you are connecting your Arduino to your PC/Mac.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616114005/Arduino-IDE-port-selection.png" width="600" height="501" alt="Arduino IDE Port Selection"></p>

4. **Verify that you have the Cayenne Arduino Library installed**

   Verify that you see the Cayenne MQTT Library installed under **File** > **Examples** > **CayenneMQTT**. If you do not, make sure to add it to your Library. For more help on this, see [Add Cayenne Arduino Library to Arduino IDE](#getting-started-arduino-arduino-setup-using-cayenne-arduino-library-add-cayenne-library-to-arduino-ide).

   <p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/arduino-ide-mqtt-library-menu.png" width="660" height="553" alt="arduino-ide-mqtt-library-menu"><br/><br/></p>

5. **Verify that your Arduino is connected with Cayenne**

   You can use the Serial Monitor tool in the Arduino IDE to view some connection information. After uploading your sketch file to the Arduino device, open the **Serial Monitor** and look for the Cayenne connection.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616114750/Arduino-Serial-Monitor-option.png" width="600" height="487" alt="Arduino Serial Monitor"></p>

   In the output of the Serial Monitor, you should see something like this:

   ```
   Getting IP...
   My IP: 192.168.0.10
   Connecting to arduino.mydevices.com:8442
   Ready (ping: 109ms).
   ```
   If you don’t, this means your board is not connected to the Internet to send data to the Cayenne cloud. You will need to verify that your Arduino is connected to the Internet. If you don’t see any outptut in the Serial Monitor, leave it open and Reset your Arduino board.


## ESP8266

### Get started in minutes!

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/6YAnqHTm7_o" frameborder="0" allowfullscreen></iframe></p>

Before you can manage your Arduino device using the online dashboard, you must setup your device and install the Cayenne Arduino Library onto the device. Begin by selecting which type of ESP8266 board you will be adding.

In the Cayenne dashboard, select the **All Devices** option. From the *Device* list that appears, select the **MicroControllers** category and then select the type of **ESP8266** board that you will be adding.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/ESP8266-Step-1.png" width="600" height="355" alt="Step 1 ESP8266"></p>

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/ESP8266-Step-2.png" width="600" height="356" alt="Step 2 ESP8266"></p>

You can then proceed with connecting and setting up your ESP8266 board for use.

### ESP8266 Setup

Begin by verifying that your ESP8266 board and PC/Mac are correctly set up before continuing.

#### Install USB driver on computer

Before you can program your ESP8266, you must install the required USB driver on your computer.

<a href="https://mydevices.com/link/generic-esp8266-getting-started" target="_blank">Show me how</a>.

#### Connect the ESP8266 to your PC/Mac

Connect the ESP8266 to your PC/Mac via data-capable USB cable.

#### Using Cayenne ESP Library

The Cayenne MQTT ESP Library gives you everything you need to quickly get your board connected with Cayenne using MQTT and the Arduino IDE. Using the Arduino IDE is a fast and easy way to program your ESP8266 board.

##### Installing Arduino IDE Software

To use the Cayenne MQTT ESP Library, the Arduino IDE software should be installed. Go to https://www.arduino.cc/en/Main/Software to download and install the Arduino IDE software if you need it. Arduino IDE can be installed on Windows, Mac or Linux computers.

##### Install the ESP8266 board package

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/RVSCjCpZ_nQ" frameborder="0" allowfullscreen></iframe></p>

1. Under **File -> Preferences** add ``http://arduino.esp8266.com/stable/package_esp8266com_index.json`` to the **Additional Boards Manager URLs** field.
2. Install the **esp8266** platform from **Tools -> Board -> Boards Manager**.

##### Add Cayenne MQTT ESP Library

1. Download the Cayenne MQTT ESP library <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-ESP8266/archive/master.zip" target="_blank">from GitHub</a>.
2. Go to **Sketch** > **Include Library** > **Add .ZIP Library** and install the Cayenne MQTT ESP library from the downloaded archive.
3. The Cayenne MQTT ESP library has now been expanded in the libraries folder in your Arduino sketches directory. You can verify this by going to the **Sketch** > **Include Library** menu where you should now see the Cayenne-MQTT-ESP8266 library under *Contributed Libraries*. The Cayenne MQTT ESP library is now ready to be used in your project.

   <p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/ESP8266-Arduino-IDE-Include-lib.png" width="660" height="478" alt="arduino-ide-add-mqtt-esp-library"><br/><br/></p>

##### Configure Arduino IDE

In order to successfully program your ES8266, you will need to verify that the appropriate **Board** and **Port** are selected in the Arduino IDE.
 
First, verify that the correct **Board** is selected in the **Tools** > **Board** menu. Be sure to select the board type that you will be programming.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Arduino-IDE-board-selection.png" width="660" height="552" alt="Arduino IDE board selection"><br/><br/></p>
 
Then, verify that you have the correct **Port** selected for communicating with your ES8266. Pick the correct port based upon how you are connecting your ES8266 to your PC/Mac.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Arduino-IDE-port-selection.png" width="660" height="552" alt="Arduino IDE port selection"><br/><br/></p>

### Connect your ES8266 to Cayenne

After setting up your PC/Mac computer with the Arduino IDE and the Cayenne MQTT ESP Library, you are ready to install Cayenne onto your device. Continue with Step 3 of the ESP8266 installation, where you will connect your board to Cayenne.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/ESP8266-Step-3-Connect.png" width="600" height="354" alt="ESP8266 Step 3 Connect"></p>

Open the included sketch file example for connecting your board to Cayenne. You can obtain this example from Arduino IDE by clicking on **File -> Examples -> Cayenne-MQTT-ESP**. Alternatively, you can open the GitHub repository by clicking on the GitHub button next to the board you will be using on the *Connect* screen.

**Add Network & MQTT Credentials**

The example sketch file includes everything we need to connect to Cayenne and publish our first set of test data, but it is missing our WiFi SSID, Password and unique MQTT credentials that will allow us to connect this device into our account. Let’s add those now.

All of the required account information we need can be found on the *Connect* screen. Refer to this screen and copy & paste your **MQTT Username**, **MQTT Password** and **Client ID** into the sketch file. The example sketch file includes placeholders for these values, so we just need to update them with the values provided to us on our dashboard.

*TIP: The credentials shown here are unique for your account and the current device being added. When programming new devices, always be sure to copy & paste from the Cayenne dashboard screen so that the correct values are used for your device.*

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/ESP8266-Arduino-IDE-sketch.png" width="600" height="462" alt="ESP8266 Step 3 Sketch Example"></p>

**Connect board to Cayenne**

Once you have double-checked the sketch file, select **Sketch** > **Upload** to upload the sketch file to your device. As soon as your ESP8266 board comes online and connects to Cayenne, your device’s dashboard will appear.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Dashboard-1stExperienceB.png" width="660" height="392" alt="dashboard-1stexperienceb"><br/><br/></p>

**Congrats! Your hardware is now connected to the Cayenne Cloud!**

If you run into any troubles, see [Troubleshooting](#getting-started-esp8266-troubleshooting) for things to check.

### Sensors

Cayenne works with any sensor that is connected to an ESP8266 board. We’ve created <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/tree/master/examples" target="_blank">sketch files</a> for the various temperature, luminosity, pressure, proximity, motion and generic sensor models.

**EXAMPLE:** Let’s add a TMP36 Temperature Sensor to see how easy it is.

Connect the TMP36 Temperature Sensor as shown here. [View TMP36 tutorial](#supported-hardware-sensors-wiring-tutorials-temperature-tmp36-arduino-tutorial)

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601121144/Arduino_TMP36_step3_bb.png" width="600" height="380" alt="Arduino TMP36 Step 3"></p>

**Dashboard widget & example code**

Click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"></p>

1. Choose **Sensor** > **Temperature** > **TMP36**.
2. Choose **Virtual** from the I/O field.
3. We will use Virtual Pin 1 for this example. Choose **V1** from the **Pin** field.
4. Click the **Step 1: Sketch File** button. A popup will appear showing the TMP36 example sketch file.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160617103706/Add-Device-Arduino-TMP361.png" width="600" height="365" alt="Arduino Add Device TMP361"></p>

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/Arduino-TMP36-GettingStarted-Popup.png" width="600" height="386" alt="Arduino Add Device TMP361 Sketch File"></p>

**Note:** This sketch file contains a working example of how to use the TMP36 sensor, but we don't want to lose our working sketch file created earlier. Instead, we can use the example TMP36 sketch file to give us an idea of what code needs to be merged into our working sketch file created earlier. Copy & Paste these differences into your sketch file in the Arduino IDE. [Read more about combining sketch files](#sketch-files-using-sketch-files-combining-sketch-files)

*TIP: If you would like more information on the code that goes into the TMP36 example, you may wish to review the [Arduino MQTT](#cayenne-mqtt-api-using-arduino-mqtt-send-sensor-data) example that walks through adding this code manually to a sketch file.*

**Customize the example code for our device**

*TIP: The example sketch file code may not always use the same pin assignments as you used when connecting your device. Be sure to always double check and correct any differences when importing example code.*

In this case, our sensor is connected to Analog Pin 0 (A0) and we are using the Virtual Pin 1 which matches what the example sketch file has defined, so the sketch file should be OK to use as is. After verifying the sketch file looks good, select **Sketch** > **Upload** to upload the sketch file to your device.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/Arduino-TMP36-GettingStarted-Sketch.png" width="600" height="464" alt="Arduino IDE TMP36"></p>

In the Cayenne dashboard, you can now click the **Step 2: Add Sensor** button and the TMP36 widget will be added to your dashboard.

*TIP: You don't actually need to first add Sensor widgets to your dashboard - Cayenne will automatically create widgets for MQTT sensor data it receives! The sketch files shown in the _Add Device / Widget_ popups are merely examples that will help you get started with coding & sending your device data to Cayenne. If you already know how to read the data for your device, you can use the Cayenne MQTT library and write code that will send your data to Cayenne without first creating a dashboard widget. Once Cayenne receives the data, it will create the appropriate widgets in your dashboard automatically.*

**Compile, Upload and connect to Cayenne**

Once you have double-checked the sketch file, select **Sketch** > **Upload** to upload the sketch file to your device. Shortly after our board comes online, it will read the current temperature of our TMP36 sensor and send the reading to Cayenne. Cayenne will display this data in the temperature widget.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601131032/Arduino-TMP36.jpg" width="600" height="336" alt="Arduino IDE TMP361"></p>

**Congrats! Your hardware is now sending sensor data to the Cayenne Cloud!**

### Actuators

Now that we have our board connected to Cayenne and it has successfully sent sensor data to our dashboard, let’s take a look at how easy it is to add an actuator. This will allow us to remotely control a device connected to our board through the Cayenne dashboard.

**EXAMPLE**: Let's add a Luminosity actuator widget that will allow us to control a LED connected to our board.

For this example, attach a LED to a PWM-enabled Pin on your board. Let’s use D6 in this example. [View Luminosity tutorial](#supported-hardware-actuators-wiring-tutorials-light-luminosity-arduino-tutorial)

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601112652/Arduino-Luminosity-Step-2.png" width="600" height="307" alt="Arduino Luminosity Step 2"></p>

**Dashboard widget & example code**

Let's start by the actuator widget on the dashboard. From the Cayenne dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"></p>

1. Choose **Actuator** > **Light** > **Luminosity**.
2. Choose **Virtual** from the I/O field.
3. We will use Virtual Pin 6 for this example. Choose **V6** from the **Channel** field.

  *TIP: The Channel selected here determines which MQTT channel Cayenne will notify when our actuator's state changes. You can use any unused channel, but our recommendation is to stick to using the same channel as the pin that the device is connected on.*

4. Click the **Step 1: Sketch File** button. A popup will appear showing example code for using the Luminosty widget.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/Arduino-Luminosity-GettingStarted-Dashboard.png" width="600" height="396" alt="Arduino Luminosity Add Device"></p>

**Note:** This sketch file contains a basic example of how to use the Luminosity actuator, but we don't want to lose our working sketch file created earlier that supports our TMP36 sensor. Instead, we can use the code shown in the Luminosity example sketch to give us an idea of what code needs to be merged into our working sketch file in order to support our actuator. Copy & Paste these differences into your sketch file in the Arduino IDE. [Read more about combining sketch files](#sketch-files-using-sketch-files-combining-sketch-files).

*TIP: If you would like more information on how to write code for responding to actuator commands, you may wish to review the [Arduino MQTT](#cayenne-mqtt-api-using-arduino-mqtt-respond-to-actuator-commands) example that walks through adding Button actuator code manually to a sketch file.*

**Customize the example code for our device**

After merging in the required code for handling a Luminosity actuator, we need to customize it to fit how our LED is connected to our board.

*TIP: The example sketch file code may not always use the same pin assignments as you used when connecting your device. Be sure to always double check and correct any differences when importing example code.*

In this case, the example Luminosity code assumes that our light is connected on **Digital Pin 3** and that Cayenne will notify us of changes to this actuator on **Virtual Pin 1**. We need to update the code to correct these values, since they are not correct for our setup. In addition, our sketch file already uses the **VIRTUAL_CHANNEL** define for use with our TMP36 sensor. When we import the sketch code to support the Luminosity actuator, we must customize these values to fit our setup.

<a href="../examples/arduino_getting_started_tmp36_luminosity/arduino_getting_started_tmp36_luminosity.ino" target="_blank">Here is a link</a> to a sketch file showing an example of combining the TMP36 & Luminosity into a single sketch file. Within it, you'll find the following changes:

1. Import the defines for the Luminosity, but customize them so that they are unique in our sketch file and correct for our setup.
2. Import the CAYENNE_IN function for handling our actuator, but customize the virtual channel define it so that it refers to our luminosity actuator.

<p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/Arduino-TMP36-Luminosity-example-changes.png" width="600" height="462" alt="Arduino Luminosity and TMP36 Arduino IDE"></p>

**Finish adding the actuator widget**

Now that we have the code for our actuator, we need to complete adding the actuator widget to our dashboard. Switch back to the Cayenne dashboard and click the **Step 2: Add Actuator** button. The Luminosity widget will then be added to our dashboard.

Our code and actuator widget are ready, we can now upload our code to our board using Arduino IDE.

**Compile, Upload and connect to Cayenne**

Once you have double-checked the sketch file contents are correct, select **Sketch** > **Upload** to upload the sketch file to your device. As soon as your device comes online and connects to Cayenne, you can use the actuator widget on the dashboard, which will then trigger actuator *COMMAND* messages that your board will receive. The Luminosity actuator code will handle these messages by changing the state of our connected LED and the Cayenne library will automatically respond back to our dashboard to make sure the LED widget is updated as well.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Embedded-C-dashboard-simple-subscribe.png" width="660" height="460" alt="embedded-c-dashboard-simple-subscribe"><br/><br/></p>

**Congrats! You can now use the actuator to send actuator commands to your LED.**

### Troubleshooting

If you don’t see your ESP8266 device connected to Cayenne, or if you’re running into trouble successfully programming your board with the Arduino IDE, here are a few things to check.

1. **Make sure your ESP8266 is connected to the Internet**

   The example sketch file for connecting your ESP8266 includes placeholders for the WiFi **SSID** and **Password**. Double check that these are correct for your network and that the device can connect to the Internet successfully.

2. **Make sure your ESP8266 is connected to a PC/Mac via the USB cable**

   Power on your board by connecting your ESP8266 with a data-capable USB cable. You should see the power LED lit on your board.

3. **Configure the Arduino IDE**

   First, verify that you have the <a href="https://www.arduino.cc/en/Main/Software" target="_blank">Arduino IDE</a> installed.

   Open the Arduino IDE program and verify that the correct **Board** is selected.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616113931/Arduino-IDE-board-selection.png" width="600" height="501" alt="Arduino IDE Board Selection"></p>

   Next, verify that you have the correct **Port** selected for communicating with your Arduino. Pick the correct port based upon how you are connecting your Arduino to your PC/Mac.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616114005/Arduino-IDE-port-selection.png" width="600" height="501" alt="Arduino IDE Port Selection"></p>

4. **Verify that you have the Cayenne-MQTT-ESP8266 Library installed**

   Verify that you see the Cayenne-MQTT-ESP8266 Library installed by going to the **Sketch** > **Include Library** menu where you should now see the Cayenne-MQTT-ESP8266 library under *Contributed Libraries*. If you do not, make sure to add it to your Library. For more help on this, see [Add Cayenne MQTT ESP Library to Arduino IDE](#getting-started-esp8266-esp8266-setup-using-cayenne-esp-library-add-cayenne-mqtt-esp-library).

   <p style="text-align:center"><br/><img src="https://mydevices.com/wp-content/uploads/2017/12/ESP8266-Arduino-IDE-Include-lib.png" width="660" height="478" alt="arduino-ide-add-mqtt-esp-library"><br/><br/></p>

5. **Verify that your ESP8266 is connected with Cayenne**

   You can use the Serial Monitor tool in the Arduino IDE to view some connection information. After uploading your sketch file to the Arduino device, open the **Serial Monitor** and look for the Cayenne connection.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160616114750/Arduino-Serial-Monitor-option.png" width="600" height="487" alt="Arduino Serial Monitor"></p>

   In the output of the Serial Monitor, you should see something like this:

   ```
   Getting IP...
   My IP: 192.168.0.10
   Connecting to arduino.mydevices.com:8442
   Ready (ping: 109ms).
   ```
   If you don’t, this means your board is not connected to the Internet to send data to the Cayenne cloud. You will need to verify that your ESP8266 is connected to the Internet. If you don’t see any outptut in the Serial Monitor, leave it open and Reset your ESP8266 board.


## LoRa®

Before you can manage your LoRa technology device using the online dashboard, you must make sure your device is setup and add it to your Cayenne dashboard.

### LoRaWAN™ setup

Begin by verifying that you have your LoRa network provider account and device information handy, and verify that the hardware is connected to a LoRaWAN gateway in case you are using a private LoRa network (not needed for public LoRaWAN network).

**1\. Make sure your device is powered on and connected**

Your LoRa devices will need to already be connected to either a public or private LoRaWAN network. Contact your network provider if you need help verifying your connection status.

In case of public LoRaWAN network, make sure your devices are powered on and the LoRaWAN coverage of your public network provider is available where you want to use your devices. If you are using a private network, make sure the gateway you will be using is configured and your devices are powered on.

Need a gateway? Here are some helpful links to purchasing and configuring a gateway based on which network you’ll be using.

*   [Setup gateway with Actility](#lora-actility-setup-gateway-device)
*   [Setup gateway with Everynet](#lora-everynet-network-setup-gateway-device)
*   [Setup gateway with Kerlink](#lora-kerlink-network-setup-gateway-device)
*   [Setup gateway with Loriot](#lora-loriot-network-setup-gateway-device)
*   [Setup gateway with OrbiWise](#lora-orbiwise-network-setup-gateway-device)
*   [Setup gateway with Senet](#lora-senet-network-setup-gateway-device)
*   [Setup gateway with Stream](#lora-stream-network-setup-gateway-device)
*   [Setup gateway with The Things Network](#lora-the-things-network-setup-gateway-device)

**2\. Make sure you have your LoRaWAN account information**

If your device has not been previously registered with your LoRaWAN network provider, you will need to provide your account information for the chosen LoRa network. You will only need to enter this information once for each network provider used.

Need an account? Here are some helpful links to creating an account based on which network you’ll be using.

*   [Creating Actility account](#lora-actility-create-account)
*   [Creating Everynet account](#lora-everynet-network-create-account)
*   [Creating Loriot account](#lora-loriot-network-create-account)
*   [Creating OrbiWise account](#lora-orbiwise-network-create-account)
*   [Creating Senet account](#lora-senet-network-create-account)
*   [Creating Stream account](#lora-stream-network-create-account)
*   [Creating The Things Network account](#lora-the-things-network-create-account)

**3\. Make sure you have the information on your devices being connected**

In order to connect Cayenne to your LoRa technology device, you will need to know the DEVEUI for your device. [What’s this?](#lora-about-deveuis)

In addition to adding previously activated devices, Cayenne is capable of activating new devices on some LoRaWAN provider networks. If you will be activating your device on the network for the first time, you will also need additional information for the activation process, such as your Appkey or AppEUI. The information required will depend upon which activation mode you select for your device and which network you will be using.

### Add LoRa technology device

To begin the process of adding a LoRa device to Cayenne, select the LoRa option from the list of devices. A list of LoRaWAN Networks and supported devices will appear.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/step-1-choose-device-category-2.png" width="600" height="359" alt="step-1-choose-device-category"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-Choose-Network-and-Device.png" width="600" height="363" alt="Add LoRa Device"></p>

After selecting the LoRaWAN Network and Device that you want to add, you will then enter in the required settings for adding and activating the LoRa device. Once completed, your dashboard will automatically appear and Cayenne will automatically add widgets for all sensors on your device.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-Choose-Network-and-Device.png" width="600" height="363" alt="Add LoRa Device"></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-dashboard-1.png" width="600" height="363" alt="Add LoRa Device"></p>


**Guided walkthrough**

When adding the LoRa device, the settings, supported activation modes and account information required will depend upon which network is selected. Click on the appropriate link below to jump to the section on your network, each of which contains a detailed walkthrough that will help you add your LoRa device to Cayenne.

*   [Using the Actility Network](#lora-actility)
*   [Using the Everynet Network](#lora-everynet-network)
*   [Using the Kerlink Network](#lora-kerlink-network)
*   [Using the Loriot Network](#lora-loriot-network)
*   [Using the machineQ Network](#lora-machineq-network)
*   [Using the OrbiWise Network](#lora-orbiwise-network)
*   [Using the Senet Network](#lora-senet-network)
*   [Using the Stream Network](#lora-stream-network)
*   [Using the The Things Network](#lora-the-things-network)
