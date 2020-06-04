# Sketch Files

<p id="about-sketch" class="anchor-link"></p>


## About
Programs written using Arduino Software IDE for installing on Arduino and similar microcontrollers are called sketch files. These sketches are written in the text editor and are saved with the file extension .ino. The editor has features for cutting/pasting and for searching/replacing text. The message area gives feedback while saving and exporting and also displays errors. The console displays text output by the Arduino Software (IDE), including complete error messages and other information. The bottom righthand corner of the window displays the configured board and serial port. The toolbar buttons allow you to verify and upload programs, create, open, and save sketches, and open the serial monitor.

<a href="https://www.arduino.cc/en/Guide/Environment#toc1" target="_blank">Learn more about writing Sketch files</a>

<p id="what-is-the-cayenne-library" class="anchor-link"></p>


## Cayenne Arduino Library
The Cayenne Arduino library is a collection of example sketch files and libraries for connecting and sending data to and from your Arduino hardware. <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino" target="_blank">View Cayenne Arduino Library</a>

<p id="using-sketch-files-arduino" class="anchor-link"></p>


## Using Sketch Files
Cayenne sketch files will help you get your hardware online quickly, adding sensors, actuators, custom widgets and using major features. You can access the Cayenne sketch files from a few different ways. 

**Through the Cayenne dashboard**

The easiest way to get the sketch files you need is to use the **Sketch File** button found when adding your widget from the Cayenne dashboard. When you open the sketch file from the dashboard, Cayenne will create a personalized version of the sketch file just for you; automatically filling in details such as your **authentication token** and some of the Pin values based upon fields you selected on screen.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160617151040/Add-Device-Arduino-TMP36-Sketch-file2.png" width="600" height="388" alt="Using Sketch Files"><br/><br/></p>

**Through Cayenne GitHub**

You can find and browse the complete list of example sketch files located on the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/tree/master/examples" target="_blank">Cayenne GitHub</a>.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160617160351/Github-root.png" width="600" height="300" alt="Using Sketch Files"><br/><br/></p>

**Through Arduino IDE**

After adding the Cayenne library to Arduino IDE, you can open example Cayenne sketch files from the **File -> Examples** menu.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601124630/CayenneExampleSketchFiles.jpg" width="600" height="587" alt="Using Sketch Files"><br/><br/></p>

<p id="customizing-sketch-files" class="anchor-link"></p>


### Customizing Sketch Files

After locating the example sketch file that you need for your Arduino board or connected device, you will need to copy & paste the content into the Arduino IDE. After copying & pasting the example sketch files, you will want to double check that the content of the sketch file is correct.

**Verify your authentication token**

The authentication token is the unique identifier that connects your Arduino board to the Cayenne Cloud and enables interactions to and from Cayenne and your hardware.  An Auth token is generated each time you add a new Arduino board.

If you use an example sketch file from Cayenne, you will want to make sure that your authentication token is present. To verify this, check for the following line in your sketch file:<br/>
 
```
char token[] = "AuthenticationToken";
```
 
Make sure to update this line in the sketch file to include your Arduino board’s unique authentication token. It should look similar to this:<br/>

```
char token[] = "a5cpbk9k1w";
```

If you need help, refer to [Finding your authentication token](#sketch-files-finding-auth-token).<br/><br/>


**Verify pin assignments**

Many sketch files will include default pin assignments for those pins used when reading/writing to the device. If you have connected your device in a different manner than mentioned in the example, you will need to customize these lines. You will find helpful information on using the example file within each sketch file.
 
For example, let’s look at the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Actuators/Luminosity/Luminosity.ino" target="_blank">**Luminosity** sketch file</a>. The sketch file begings with the following code:<br/>

```
#define CAYENNE_PRINT Serial // Comment this out to disable prints and save space
#include <CayenneEthernet.h>
#define LED_VIRTUAL_PIN 1
#define LED_DIGITAL_PIN 3
```

The code assumes that you have your actuator connected to the Arduino’s **Digital Pin 3**. It also assumes that you will be using **Virtual Pin 1** when adding the Luminosity widget in the Cayenne dashboard.

Let’s assume that you didn’t attach your Luminosity actuator to Digital Pin 3, but instead you used **Digital Pin 6**. You will need to update the sketch file to correct the pin. Update the **LED_DIGITAL_PIN** definition so that it points at pin 6.

```
#define LED_DIGITAL_PIN 6
```

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160617151924/Arduino-Luminosity-in-Arduino-IDE.png" width="600" height="554" alt="Using Sketch Files"><br/><br/></p>

Once you’ve looked over your sketch file and updated all values, use **Sketch -> Upload** in Arduino IDE to upload the sketch file to your device.

<p id="combining-sketch-files" class="anchor-link"></p>


### Combining Sketch Files

Cayenne provides various example sketch files for [supported hardware](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-microcontrollers). These sketch files give you a working example of how to get that device up and running quickly. These examples only outline the addition of a single sensor, actuator or widget. You will almost certainly want to include support for multiple sensors in your sketch file. To do so, you will need to properly merge two or more sketch files together.

Let’s start by taking a look at the example sketch file for connecting a TMP36 temperature sensor and go over each section to get a better understanding of what goes on in an typical Cayenne sketch file.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160629103643/SketchFileMerge1.png" width="600" height="554" alt="Combining Sketch Files"><br/><br/></p>

**Comments** <br/>
Each Cayenne example sketch file comes with some helpful tips on using it. When merging sketch files you should first read through the comments and get an understanding of what the example is doing. You do not need to keep any comments when combining sketch files, but if you find any notes useful, feel free to keep them in.

*TIP: Comments generally start with // or are found in blocks beginning with /* and ending with */.*

Example:<br/>

```
/*
Cayenne Analog Distance Sensor Example
*/
```
<br/>

**Includes**<br/>
In order to support a sensor or connection, you may find certain libraries need to be included. When combining sketch files you will need to keep all of the include sections, however you only need a single instance of each include. In order to minimize the chances of problems occurring during the Verify step, or during operation, make sure that you look over all includes to make sure that only a single instance of each is in your sketch file. Leave all of the includes at the top of your sketch file as they are in the examples.

Example:<br/>

```
#include <CayenneEthernet.h>
```
<br/>


**Constants and Pin Numbers** <br/>
In most sketch files, you will find certain constants defined so that they can be later referred to in various functions used to read or control the device. For example, you will always need to have your unique authentication token present in the sketch file. It will also be common to see pin assignments included, so that the code knows which pins you used when wiring your device to the Arduino.

When combining sketch files, you will need to include all the constants and pin assignments from both sketch files. Be sure that non-generic defines and constants, such as for pin assignments, are included and are unique; include both statements and then rename one or both.

*TIP: You must always make sure that your authentication token is included in the sketch file. Your Arduino will not be able to successfully connect with Cayenne otherwise.*

*TIP: The CAYENNE_PRINT statement is only needed once in your sketch file.*

Example:<br/>

```
// Cayenne authentication token. This should be obtained from the Cayenne Dashboard.
char token[] = "6ruapz6zx1";
// Virtual Pin of the TMP36 widget.

#define VIRTUAL_PIN V1
```
<br/>

**Objects** <br/>
Some example sketch files may define objects that are then used later in the setup, loop or additional functions. When combining sketch files, you will need all of the objects from both sketch files.

*TIP: If you combine two sketch files and find the same object name included in both, you will need to include both and rename one of them so that they are unique. For example, if you add multiple of the same type of sensor, you will need to give the objects for each sensor a unique name so that you can be sure to refer to the correct sensor in the code.*

Example:

```
TMP36 tmpSensor(tmpPin, voltage);
```
<br/>

**Setup** <br/>
The Setup function is run once and is used to setup the objects and get everything ready when the Arduino starts to execute the sketch file code. If a sketch file includes setup for a component, make sure you incorporate that code into this section. Generic statements such as the “Serial.begin” and “Cayenne.begin” are only needed once. If a sensor or actuator requires setup, be sure to incorporate it here. If you have multiple of the same sensor, make sure that each unique sensor object gets setup.

*TIP: In order for Cayenne to work, you will always need a single “Cayenne.begin” in the setup function.*

Example:<br/>

```
void setup()
{
Serial.begin(9600);
Cayenne.begin(token);
}
```
<br/>

**Loop** <br/>
After setup, the Loop function gets called. It is here that the various code for reading/controlling your devices occurs. When combining sketch files, make sure to incorporate the code from both loop functions into this section. However, be careful when merging items here as the order of code matters. If you change the sequence things are run in, things may no longer work as expected. None of the Cayenne example sketches have complex code in the loop function, so this makes it trivial to merge example sketches. But if you start to merge sketch files from other sources, this step can get non-trivial. Be sure to read through and understand what the sketch file is doing so that you make sure the logic of what it does remains intact.

*TIP: In order for Cayenne to work, you will always need a single Cayenne.run() in the loop function.*

*TIP: Be sure to avoid putting delays or code that takes a while to process in the loop since that can block Cayenne.run from executing events properly.*

Example:<br/>
```
void loop()
{
Cayenne.run();
}
```
<br/>

**Additional Functions**<br/>
Some sketch files may include additional functions that get called once your Arduino’s loop function is running. For example, many of the Cayenne example sketch files read values from a sensor and then write that value to one of the Virtual pins that defined earlier in the sketch file. When combining sketch files, you will need all of the functions from both sketch files.

Example:<br/>
```
// This function is called when the Cayenne widget requests data for the Virtual Pin.
CAYENNE_OUT(VIRTUAL_PIN)
{
// This command writes the temperature in Celsius to the Virtual Pin.
Cayenne.celsiusWrite(VIRTUAL_PIN, tmpSensor.getCelsius());
}
```
<br/><br/>


#### Example: Combining multiple sketch files

Let’s walk through combing several Cayenne example sketch files. For the purposes of this tutorial we will:

1. Start with an example sketch file for an Arduino board connecting to Cayenne with [W5500 ethernet shield](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-microcontrollers-arduino-arduino-ethernet-wifi-shield).
2. We will then add an [Analog distance sensor](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-sensors-proximitydistance-analog-distance-arduino-tutorial).
3. And then we will add a [TMP36 temperature sensor](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-sensors-temperature-tmp36-arduino-tutorial).
4. Finally, we will add yet another TMP36 so that you can see how combining multiple objects/functions works.

**Arduino board + W5500 Ethernet Shield**

When adding our Arduino board to Cayenne, you will flash your Arduino device with the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/EthernetShieldW5500/EthernetShieldW5500.ino" target="_blank">W5500 example sketch file</a>.

Your sketch file will start out looking similar to this:

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160629141643/SketchFileMerge2-W5500.png" width="600" height="658" alt="Sketch File"><br/><br/></p>

**W5500 + Analog Distance Sensor**

Now let’s add an Analog Distance sensor using the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/AnalogDistanceSensor/AnalogDistanceSensor.ino" target="_blank">Analog Distance sensor sketch file</a>. Comparing these sketch files, we see some things to merge.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160629141902/SketchFileMerge3-W5500-vs-AnalogDistance.png" width="600" height="400" alt="Sketch File"><br/><br/></p>

1. We will ignore the top comments in both files since they simply explain how to use the example. We won’t merge any comments.
 
2. There is a CAYENNE_DEBUG line that is commented out. This optional line enables debug messages. You can choose to keep or ignore this line.
	
	```
//#define CAYENNE_DEBUG         // Uncomment to show debug messages
```

3. That just leaves a difference in the Include section to examine.

	```
 #include <CayenneEthernet.h>
```
 
	The example sketch files include a generic connection example, but we already know that we’re using the W5500 shield. In this case, we want to keep the W5500 line that reads:
	
	```
#include <CayenneEthernetW5500.h>
```
	
	From now on, we’ll ignore the connection include that’s found in any new sketch files we examine as we already know we have our sketch file setup properly to use the W5500 shield.<br/>

Here is our updated sketch file for supporting a W5500 + an Analog Distance sensor. As you can see, we didn’t really need to make any changes at all to support the Analog Distance sensor! Some devices will be like that – Cayenne will immediately support them without any additional work on your part.


<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160629142506/SketchFileMerge4-W5500-AnalogDistance.png" width="600" height="658" alt="Sketch File"><br/><br/></p>


**W5500 + Analog Distance Sensor + TMP36** <br/>
Now let’s add a TMP36 temperature sensor. We will use the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/TMP36/TMP36.ino" target="_blank">TMP36 example sketch file</a>. When we compare our sketch file against the TMP36 one, we see a lot more differences that we need to examine.

1. The TMP36 requires a temperature library to work. We need to merge that library into our sketch file. Copy the following line to our sketch file:
   ```
   #include <CayenneTemperature.h>
   ```

2. We see some constants and definitions from the TMP36. In order for the TMP36 to code to work, we will need to merge these into our sketch file.

	1. This line sets which Virtual pin our TMP36 widget will use to receive the temperature data. Per the instructions in the TMP36 sketch file, this should match the value you used during the Add Device process to add your widget to the dashboard. Let’s assume that Virtual Pin 1 is correct.<br/>
    
		<pre><code>#define VIRTUAL_PIN V1</code></pre>

    2. This line sets which Analog pin the TMP36 sensor is connected to on our Arduino board. Let’s assume that Analog Pin 0 is correct.
 	
		```
const int tmpPin = 0;
		```
	
	3. This line let’s Cayenne know what voltage the TMP36 sensor is using. In the case of the TMP36 sensor, this is needed so that the temperature value can be correctly converted from the sensor reading. Let’s assume that our sensor is wired to 5 volts.
 
		``` 
const float voltage = 5.0;
		```
		
	4. This line creates a TMP36 object. This object will be used in the sketch file code to actually read the sensor. Since we have no other objects with this name, we can simply include the line as is.
	
		```
TMP36 tmpSensor(tmpPin, voltage);
		```

3. Finally, we see that the TMP36 sketch file includes a Function used to read the TMP36 sensor and write it out to our Virtual pin. This function gives us a chance to change the temperature units sent to Cayenne. For now, let’s simply include the helper function as is.

	```
CAYENNE_OUT(VIRTUAL_PIN)
{
// This command writes the temperature in Celsius to the Virtual Pin.
Cayenne.celsiusWrite(VIRTUAL_PIN, tmpSensor.getCelsius());
// To send the temperature in Fahrenheit or Kelvin use the corresponding code below.
//Cayenne.fahrenheitWrite(VIRTUAL_PIN, tmpSensor.getFahrenheit());
//Cayenne.kelvinWrite(VIRTUAL_PIN, tmpSensor.getKelvin());
}
``` 
<br/>

Here is our updated sketch file for supporting a W5500 + an Analog Distance sensor + a TMP36 temperature sensor.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160629145127/SketchFileMerge6-W5500-AnalogDistance-TMP36.png" width="600" height="658" alt="Sketch File"><br/><br/></p>


**W5500 + Analog Distance Sensor + TMP36 x 2**<br/>
Now let’s see what happens if we want to add another TMP36 sensor. Because the TMP36 sketch file includes some constants and objects used by the code, we have to make some changes so that the sketch file code will work for two instances of the TMP36 sensor.

1. We need to make sure that we have two instances of both the Virtual and Analog pin assignments, one for each of our sensors.
2. We will need two TMP36 objects so that we can refer to either of the TMP36 sensors in the code.
3. We will need two CAYENNE_OUT functions, one each to read from the appropriate sensor.

Let’s take a look at a comparison of our sketch file so far and a version that includes all of the above changes. We will then go through each change in detail.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160629145811/SketchFileMerge7-W5500-AnalogDistance-TMP36-vs-adding-another-TMP36.png" width="600" height="430" alt="Sketch File"><br/><br/></p>

We now have two copies of the VIRTUAL_PIN statement and we’ve renamed them both so that it’s easier to refer to them later in the code. In this case, one of our sensors will be using pin V1 and the other V2.

```
// Virtual Pins of our TMP36 widgets (there are 2).
#define VIRTUAL_PIN_SENSOR1 V1
#define VIRTUAL_PIN_SENSOR2 V2
```

We also have two statements defining which analog pin each sensor is connected to. Once again, we’ve named them appropriately so that we can easily refer to them later. In this case, one of our sensors is wired to pin A0 and the other to A5.

```
// Analog pins the TMP36 are connected to.
const int tmpPin1 = 0;
const int tmpPin2 = 5;
```

We’ve left the voltage for both sensors at 5v. If one of the sensors was wired to 3.3V instead, we could have duplicated the voltage statement and updated the names in the same manner as the pin assignments above.
 
```
// Voltage to the TMP36. For 3v3 Arduinos use 3.3.
const float voltage = 5.0; 
```

Because we now have two sensors, we need to have two TMP36 objects as well. Here we rename the existing TMP36 object and add an additional one. When we create each object we make sure to refer to the appropriate analog pin definition and voltage value as discussed above.
 
```
TMP36 tmpSensor1(tmpPin1, voltage);
TMP36 tmpSensor2(tmpPin2, voltage);
```
 
The TMP36 sketch file needs to include a CAYENNE_OUT function for sending the temperature data of our sensor to the correct virtual pin. In this case, this function will be for our first sensor and we make sure to update the name of the CAYENNE_OUT function declaration as well as the both the pin name and TMP36 object names so that they refer to our sensor.
 
```
CAYENNE_OUT(VIRTUAL_PIN_SENSOR1)
{
Cayenne.celsiusWrite(VIRTUAL_PIN_SENSOR1, tmpSensor1.getCelsius());
}
```
 
For our second sensor, we create another copy of the CAYENNE_OUT function and change the name of the function and references in the code to match our second sensor. In this case, we’ll also change the function so that it writes the temperature in Fahrenheit instead of Celsius.
 
```
CAYENNE_OUT(VIRTUAL_PIN_SENSOR2)
{
Cayenne.fahrenheitWrite(VIRTUAL_PIN_SENSOR2, tmpSensor2.getFahrenheit());
}
```

Here is our final sketch file, supporting our W5500 connection, an Analog Distance sensor, and two TMP36 temperature sensors. Our sketch file is now ready to be uploaded to our board.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160629145816/SketchFileMerge8-W5500-AnalogDistance-TMP36-another-TMP36.png" width="600" height="707" alt="Sketch File"><br/><br/></p>

<p id="finding-auth-token" class="anchor-link"></p>


## Finding Auth Token

If you ever need to find your Auth Token again, click on the **cogwheel icon** next to your Arduino board name and click **Configure**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601130027/Configure.jpg" width="232" height="184" alt="Finding Auth Token"><br/><br/></p>

Your Auth Token can be found on this settings screen.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601130044/ArduinoConfigure-e1464901755145.jpg" width="600" height="340" alt="Finding Auth Token"><br/><br/></p>

<p id="code-examples-sketch" class="anchor-link"></p>


## Code examples (Sketch)

**<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/tree/master/examples/Actuators" target="_blank">Actuators</a>**

* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Actuators/GenericDigitalOutput/GenericDigitalOutput.ino" target="_blank">GenericDigitalOutput</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Actuators/GenericPWMOutput/GenericPWMOutput.ino" target="_blank">GenericPWMOutput</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Actuators/LightSwitch/LightSwitch.ino" target="_blank">LightSwitch</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Actuators/Luminosity/Luminosity.ino" target="_blank">Luminosity</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Actuators/MotorSwitch/MotorSwitch.ino" target="_blank">MotorSwitch</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Actuators/RelaySwitch/RelaySwitch.ino" target="_blank">RelaySwitch</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Actuators/ServoMotor/ServoMotor.ino" target="_blank">ServoMotor</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Actuators/ValveSwitch/ValveSwitch.ino" target="_blank">ValveSwitch</a>
<br/><br/>

**<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/tree/master/examples/Basics" target="_blank">Basics</a>**

* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Basics/ReceiveData/ReceiveData.ino" target="_blank">ReceiveData</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Basics/SendData/SendData.ino" target="_blank">SendData</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Basics/SendDataOnTimer/SendDataOnTimer.ino" target="_blank">SendDataOnTimer</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Basics/SendDataOnTrigger/SendDataOnTrigger.ino" target="_blank">SendDataOnTrigger</a>
<br/><br/>

**<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/tree/master/examples/Connections" target="_blank">Connections</a>**

* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/EthernetShieldW5100/EthernetShieldW5100.ino" target="_blank">ArduinoEthernetShieldW5100</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/ManualConnection/ManualConnection.ino" target="_blank">ManualConnection</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/EthernetShieldW5200/EthernetShieldW5200.ino" target="_blank">ArduinoEthernetW5200</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/EthernetShieldW5500/EthernetShieldW5500.ino" target="_blank">ArduinoEthernetW5500</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/SerialUSBConnection/SerialUSBConnection.ino" target="_blank">ArduinoSerialUSB</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/WiFiShield/WiFiShield.ino" target="_blank">ArduinoWiFiShield</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/WiFi101Shield/WiFi101Shield.ino" target="_blank">ArduinoWiFi101</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/ArduinoYun/ArduinoYun.ino" target="_blank">ArduinoYun</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/ArduinoYun/ArduinoYun.ino" target="_blank">ArduinoYun</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/ESP32/ESP32.ino" target="_blank">ESP32</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/ESP8266/ESP8266.ino" target="_blank">ESP8266</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/ESP8266Shield/ESP8266Shield.ino" target="_blank">ESP8266Shield</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/GSM/GSM.ino" target="_blank">GSM</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/MKR1000/MKR1000.ino" target="_blank">MKR1000</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/MKR1010/MKR1010.ino" target="_blank">MKR1010</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Connections/UnoWifiRev2/UnoWifiRev2.ino" target="_blank">UnoWifiRev2</a>
<br/><br/>

**<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/tree/master/examples/CustomWidgets" target="_blank">Custom Widgets</a>**

* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/TwoStateWidget/TwoStateWidget.ino" target="_blank">2StateWidget</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/ButtonWidget/ButtonWidget.ino" target="_blank">ButtonWidget</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/GaugeWidget/GaugeWidget.ino" target="_blank">GaugeWidget</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/LineChartWidget/LineChartWidget.ino" target="_blank">LineChartWidget</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/SliderWidget/SliderWidget.ino" target="_blank">SliderWidget</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/ValueWidget/ValueWidget.ino" target="_blank">ValueWidget</a>
<br/><br/>

**<a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/tree/master/examples/Sensors" target="_blank">Sensors</a>**

* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/AnalogDistanceSensor/AnalogDistanceSensor.ino" target="_blank">AnalogDistanceSensor</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/AnalogLoadPressureSensor/AnalogLoadPressureSensor.ino" target="_blank">AnalogLoadPressureSensor</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/BMP180/BMP180.ino" target="_blank">BMP180</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/DS18B20/DS18B20.ino" target="_blank">DS18B20</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/DigitalMotionSensor/DigitalMotionSensor.ino" target="_blank">DigitalMotionSensor</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/GenericDigitalInput/GenericDigitalInput.ino" target="_blank">GenericAnalogInput</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/GenericAnalogInput/GenericAnalogInput.ino" target="_blank">GenericDigitalInput</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/Photoresistor/Photoresistor.ino" target="_blank">Photoresistor</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/TMP102/TMP102.ino" target="_blank">TMP102</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/TMP36/TMP36.ino" target="_blank">TMP36</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/TSL2561/TSL2561.ino" target="_blank">TSL2561</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/Thermistor/Thermistor.ino" target="_blank">Thermistor</a>
* <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/Sensors/VCNL4000/VCNL4000.ino" target="_blank">VCNL4000</a>

<p id="using-analog-vs-virtual-pins" class="anchor-link"></p>


## Using Analog vs. Virtual pins

**Arduino analog data** <br/>
When reading Analog devices with the Arduino microcontroller, the Arduino’s built in analog to digital converter (ADC) will be used. The value returned by the ADC is a 10-bit value (0 – 1023) that is proportional to the amount of voltage being applied to the pin. It is important to keep this in mind when examining the data returned by your device. For example, if you connect a Temperature sensor to an analog pin, it will not automatically return a temperature reading as you may expect. Instead, additional formulas would be needed to convert the voltage reading returned from the ADC into meaningful temperature data for the sensor.

**NOTE:** If you use Cayenne’s built-in library of devices, this conversion can be performed automatically!
[View list of supported sensors](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-sensors)

**Arduino Virtual pins** <br/>
If you wish convert your analog reading to a more meaningful data point, or you wish to change the way your data is formatted, you can instead use a Virtual pin.

Using a Virtual pin, you have complete control over the data is returned to Cayenne. You can apply whatever formatting or data conversions are needed and when viewing the data in Cayenne, it will be in the exact format that you’ve specified. For example, you can perform an Analog read of your temperature sensor, convert the data to a Temperature value in Celsius, and return the data to Cayenne. Now when you view your sensor in Cayenne, you will see Temperature data reported exactly as you expected.

In order to use Virtual pins, you will need to include some code in your sketch file to handle reading and formatting for your sensor. Cayenne makes this easy by providing various example sketch files and information that you can use to get started.
[View sketch file information](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files)

<p id="virtual-pins-microcontrollers" class="anchor-link"></p>


## Virtual Pins

Virtual pins are different than Digital and Analog Input/Output (I/O) pins. Cayenne lets you control any hardware connected to Digital and Analog pins without having to write any additional code.

Virtual pins enable some very powerful customizations for your IoT projects because they allow you to interface with any device library. We use Virtual pins to display and send any data from your microcontroller to the Cayenne web dashboard. You can think about Virtual pins as channels for sending various types of data from your microcontroller to Cayenne. Remember, Virtual pins have no physical properties.

<p id="virtual-pin-data-types" class="anchor-link"></p>


## Virtual Pin Data Types

Currently, Cayenne supports sending data as an integer or float format. We plan to support additional data types such as strings and arrays in the future.

**Cayenne.virtualWrite(vPin, value)**<br/>
You can send various formats of data to Virtual Pins

Send an integer value to a virtual pin:

```
Cayenne.virtualWrite(V1, 123)
```
<br/>

Send a float value to a virtual pin:<br/>
```
Cayenne.virtualWrite(V1, 12.34)
```
<br/>

**CAYENNE_IN(vPIN)**
CAYENNE_IN defines a function that is called when the device receives an updated Virtual pin value from the Cayenne server.

```
CAYENNE_IN(V1)
{
int value = getValue.asInt(); // Get value as integer
}
``` 
<br/>

**CAYENNE_OUT(vPIN)**
CAYENNE_OUT defines a function that is called when the device is request to send it’s current value of Virtual pin to the Cayenne server. Normally, this function contains some Cayenne.virtualWrite calls.

```
CAYENNE_OUT(V1)
{
Cayenne.virtualWrite(V1, newValue);
}
```
<br/>

**CAYENNE_CONNECTED()**
This function is called every time Cayenne connects to the server. It’s convenient to call sync functions here.

```
CAYENNE_CONNECTED() {
// Your code here
}
``` 
<br/>

**Cayenne.syncAll()**
Request the Cayenne server to send the most recent values for all widgets. All analog/digital pin states will be restored and every virtual pin will generate CAYENNE_IN event.

```
CAYENNE_CONNECTED() {
  if (isFirstConnect) {
   Cayenne.syncAll();
 }
}
``` 
<br/>

**Cayenne.syncVirtual(vPin)**
Requests a single virtual pin value update. The corresponding CAYENNE_IN handler is called as a result.

```
Cayenne.syncVirtual(V1);
```
<br/>

<p id="ide-sketch" class="anchor-link"></p>


## Using IDE

To use Cayenne’s library of sketch files, we recommend using Arduino IDE or similar IDE for installing on your Arduinio hardware. [View using Cayenne Arduino Library](https://developers.mydevices.com/cayenne/docs/getting-started/#getting-started-arduino-arduino-setup-using-cayenne-arduino-library)
