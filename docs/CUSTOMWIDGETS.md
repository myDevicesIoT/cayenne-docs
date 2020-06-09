# Custom Widgets

<p id="widgets" class="anchor-link"></p>

Widgets are used to control a device or are used to show the visualization of data coming from a device. Cayenne has a growing list of custom widgets available for IoT projects. Each widget has its own settings and configuration options.

<table class="widgets-table" style="text-align:center; width:100%; background-color: transparent;">
<tbody>
<tr>
<td height="150"><a href="#custom-widgets-2-state"><img class="aligncenter size-full wp-image-4602" style="border: 0 !important" src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081922/Tile-2StateWidget.png" alt="Tile-2StateWidget" width="120" height="150"></a></td>
<td height="150"><a href="#custom-widgets-button"><img class="aligncenter size-full wp-image-4603" style="border: 0 !important" src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081942/Tile-ButtonWidget.png" alt="Tile-ButtonWidget" width="120" height="150"></a></td>
<td height="150"><a href="#custom-widgets-gauge"><img class="aligncenter size-full wp-image-4601" style="border: 0 !important" src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081900/Tile-GaugeWidget.png" alt="Tile-GaugeWidget" width="120" height="150"></a></td>
   <td height="150"><a href="#custom-widgets-line-chart"><img class="aligncenter size-full wp-image-4600" style="border: 0 !important" src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081838/Tile-LineChartWidget.png" alt="Tile-LineChartWidget" width="120" height="150"></a></td>
</tr>
<tr>
<td height="150"><a href="#custom-widgets-motion"><img class="aligncenter size-full wp-image-4615" style="border: 0 !important" src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591642495/cayenne/Motion.png" alt="Tile-MotionWidget" width="120" height="150"></a></td>
<td height="150"><a href="#custom-widgets-proximity"><img class="aligncenter size-full wp-image-4614" style="border: 0 !important" src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591643960/cayenne/Proximity.png" alt="Tile-ProximityWidget" width="120" height="150"></a></td>
<td height="150"><a href="#custom-widgets-co2"><img class="aligncenter size-full wp-image-4614" style="border: 0 !important" src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591643960/cayenne/CO2.png" alt="Tile-Co2Widget" width="120" height="150"></a></td>
<td height="150"><a href="#custom-widgets-tank"><img class="aligncenter size-full wp-image-4614" style="border: 0 !important" src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591643960/cayenne/Tank.png" alt="Tile-TankWidget" width="120" height="150"></a></td>
</tr>
<tr>
<td height="150"><a href="#custom-widgets-slider"><img class="aligncenter size-full wp-image-4604" style="border: 0 !important" src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081959/Tile-SliderWidget.png" alt="Tile-SliderWidget" width="120" height="150"></a></td>
<td height="150"><a href="#custom-widgets-value"><img class="aligncenter size-full wp-image-4599" style="border: 0 !important" src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081807/Tile-ValueWidget.png" alt="Tile-ValueWidget" width="120" height="150"></a></td>
<td height="150"></td>
<td height="150"></td>
</tr>
</tbody>
</table>

<br><br>
<p id="2-state-display" class="anchor-link"></p>


### 2 State

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081922/Tile-2StateWidget.png" width="120" height="150" class="noborder" alt="2 State Widget"><br/><br/></p>

Displays the current status of a device as either 1 (being High) or 0 (being low). An optional icon can be displayed in the widget.

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591644318/cayenne/Custom_Widget_2_State_Example.png" width="702" height="601" alt="2 State Widget"><br/><br/></p>

<p id="2-state-display-2" class="anchor-link"></p>


#### 2 State Arduino Tutorial

This tutorial explains how to use the 2 State display widget to add a sensor connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your sensor.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591644318/cayenne/Custom_Widget_2_State_Dropdown.png" width="346" height="534" alt="2 State Widget"><br/><br/></p>

**Name** <br/>
Give your sensor a name. 

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type for your required 2 state widget.

**Unit** <br/>
Select the unit type for the widget. Here it Digital(0/1)

**Channel**
Add the channel number you want to add the custom 2 state widget.

**Icon** <br/>
Select an Icon to be used for the widget. For example, a temperature sensor could a thermometer Icon.

**Step 1: Sketch File** <br/>
If you haven’t already uploaded the 2 State code for this widget to your Arduino, click the **Sketch File** button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/TwoStateWidget/TwoStateWidget.ino" target="_blank">2 State Widget sketch file</a>. See [Using Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files) for more information on customizing and using sketch files.

**Step 2: Add Widget** <br/>
After filling in each of the fields for your widget, click the **Add Widget** button and the widget will be added to your dashboard.
<br/><br/>

<p id="button-control" class="anchor-link"></p>


### Button

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081942/Tile-ButtonWidget.png" width="120" height="150" alt="Button" class="noborder"><br/><br/></p>

Send values like LOW/HIGH and On/Off to change state. An optional icon can be shown in the button widget.

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591706145/cayenne/Custom_Widget_Button_Example.png" width="900" height="500" alt="Button"><br/><br/></p>

<p id="button-control-2" class="anchor-link"></p>

#### Button Arduino Tutorial

This tutorial explains how to use the Button controller widget to add an actuator connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your actuator.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591706145/cayenne/Custom_Widget_Button_Dropdown.png" width="346" height="539" alt="Widget Tutorial Form"><br/><br/></p>

**Name** <br/>
Give your actuator a name. 

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type as Digtal Actuator.

**Unit** <br/>
Select the unit type as Digital(0/1)

**Channel**
Add the channel number you want to add the custom Button widget.

**Icon** <br/>
Select an Icon to be used for the widget. For example, a light switch might have a light bulb icon.

**Step 1: Sketch File** <br/>
If you haven’t already uploaded the Button code for this widget to your Arduino, click the **Sketch File** button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/ButtonWidget/ButtonWidget.ino" target="_blank">Button Widget sketch file</a>. See [Using Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files) for more information on customizing and using sketch files.

**Step 2: Add Widget** <br/>
After filling in each of the fields for your widget, click the **Add Widget** button and the widget will be added to your dashboard.
<br/><br/>

<p id="gauge-widget" class="anchor-link"></p>


### Gauge

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081900/Tile-GaugeWidget.png" width="120" height="150" alt="Gauge" class="noborder"><br/><br/></p>

Displays the current value of a sensor within a given range of values. Good, warning and danger value ranges can be defined in settings.

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591704418/cayenne/Custom_Widget_Gauge_Example.png" width="900" height="500" alt="Gauge Widget"><br/></p>

<p id="gauge-widget-2" class="anchor-link"></p>


#### Gauge Arduino Tutorial

This tutorial explains how to use the Gauge display widget to add a sensor connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your sensor.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591704418/cayenne/Custom_Widget_Gauge_Dropdown.png" width="346" height="674" alt="Gauge Settings"><br/><br/></p>

**Name** <br/>
Give your sensor a name. 

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type for your required Gauge widget.

**Unit** <br/>
Select the unit type for the Gauge widget.

For example, a temperature monitor could have a Data type of temperature and Units of Celsius.

**Channel**
Add the channel number you want to add the custom Gauge widget.

**Minimum and Maximum Values (optional)**<br/>
Input the minimum and maximum values that you’d like the gauge widget to use when displaying the range of data for your sensor. This can help improve the visualization of your sensor data as it displays on the gauge widget.

**Step 1: Sketch File** <br/>
If you haven’t already uploaded the Gauge code for this widget to your Arduino, click the **Sketch File** button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/GaugeWidget/GaugeWidget.ino" target="_blank">Gauge Widget sketch file</a>. See [Using Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files) for more information on customizing and using sketch files.

**Step 2: Add Widget** <br/>
After filling in each of the fields for your widget, click **Add Widget** and the widget will be added to your dashboard.

<p id="line-chart-widget" class="anchor-link"></p>


### Line Chart

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081838/Tile-LineChartWidget.png" width="120" height="150" alt="Line Chart"><br/></p>

Displays live or historical data from the attached device. Historical data can be filtered by minute, hour, day, week, month, year or a custom date range. Additional details can be shown by opening an expanded chart view. Historical data can be easily downloaded for viewing or consumption.

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591706892/cayenne/Custom_Widget_Line_Chart_Example.png" width="900" height="500" alt="Line Chart Tutorial"><br/></p>

<p id="line-chart-widget-2" class="anchor-link"></p>


#### Line Chart Arduino Tutorial

This tutorial explains how to use the Line Chart display widget to add a sensor connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your sensor.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591706892/cayenne/Custom_Widget_Line_Chart_Dropdown.png" width="346" height="682" alt="Line Chart Tutorial"><br/><br/></p>

**Name** <br/>
Give your sensor a name. 

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type for your required Line Chart widget.

**Unit** <br/>
Select the unit type for the Line Chart widget.

For example, a temperature monitor could have a Data type of temperature and Units of Celsius.

**Channel**
Add the channel number you want to add the custom Line Chart widget.

**Min Scale Value & Max Scale Value (optional)** <br/>
Input the minimum and maximum values that you’d like the line graph widget to use when displaying the range of data for your sensor. This can help improve the visualization of your sensor data as it displays on the line graph.

**Step 1: Sketch File**
If you haven’t already uploaded the Line Chart code for this widget to your Arduino, click the **Sketch File** button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/LineChartWidget/LineChartWidget.ino" target="_blank">Line Chart Widget sketch file</a>. See [Using Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files) for more information on customizing and using sketch files.

**Step 2: Add Widget**
After filling in each of the fields for your widget, click the Add Widget button and the widget will be added to your dashboard.<br/><br/>

<p id="motion-widget" class="anchor-link"></p>


### Motion

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591642495/cayenne/Motion.png" width="120" height="150" alt="Motion"><br/></p>

This displays 2 states. When motion is detected by sensor, the widget animates with “On” state to show motion has occurred. When there is no motion, it is in the “Off” state.

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591707161/cayenne/Custom_Widget_Motion_Example.png" width="900" height="500" alt="Motion Tutorial"><br/></p>

<p id="motion-widget-2" class="anchor-link"></p>


#### Motion Arduino Tutorial

This tutorial explains how to use the Motion widget to add a motion sensor connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your sensor.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591706145/cayenne/Custom_Widget_Button_Dropdown.png" width="346" height="480" alt="Motion Tutorial"><br/><br/></p>

**Name** <br/>
Give your widget a name.

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type for your required Motion widget.

**Unit** <br/>
Select the unit type for the Motion widget.

For example, a Motion monitor could have a Data type of Digital Sensor and Units of Digital(0/1).

**Channel**
Add the channel number you want to add the custom Motion widget.

**Step 1: Sketch File** <br/>
If you haven’t already uploaded the Motion code for this widget to your Arduino, click the **Sketch File** button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/TwoStateWidget/TwoStateWidget.ino" target="_blank">(Coming Soon) Motion Widget sketch file</a>. See Using [Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files) for more information on customizing and using sketch files.

**Step 2: Add Widget** <br/>
After filling in each of the fields for your widget, click the **Add Widget** button and the widget will be added to your dashboard.<br/><br/>

<p id="proximity-widget" class="anchor-link"></p>


### Proximity

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591643960/cayenne/Proximity.png" width="120" height="150" alt="Proximity"><br/></p>

This displays 2 states. When proximity is detected by sensor, the widget animates with “On” state to show proximity has occurred. When there is no proximity, it is in the “Off” state.

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591707728/cayenne/Custom_Widget_Proximity_Example.png" width="900" height="500" alt="Proximity Tutorial"><br/></p>

<p id="proximity-widget-2" class="anchor-link"></p>


#### Proximity Arduino Tutorial

This tutorial explains how to use the Proximity widget to add a proximity sensor connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your sensor.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591707728/cayenne/Custom_Widget_Proximity_Dropdown.png" width="346" height="580" alt="Proximity Tutorial"><br/><br/></p>

**Name** <br/>
Give your widget a name.

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type for your required Proximity widget.

**Unit** <br/>
Select the unit type for the Proximity widget.

For example, a Proximity monitor could have a Data type of Digital Sensor and Units of Digital(0/1).

**Channel**
Add the channel number you want to add the custom Proximity widget.

**Step 1: Sketch File** <br/>
If you haven’t already uploaded the Motion code for this widget to your Arduino, click the **Sketch File** button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/TwoStateWidget/TwoStateWidget.ino" target="_blank">Proximity Widget sketch file</a>. See Using [Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files) for more information on customizing and using sketch files.

**Step 2: Add Widget** <br/>
After filling in each of the fields for your widget, click the **Add Widget** button and the widget will be added to your dashboard.<br/><br/>


<p id="slider-widget" class="anchor-link"></p>


### Slider

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081959/Tile-SliderWidget.png" width="120" height="150" alt="Slider"><br/></p>

Change the value of the connected device, such as dimming a light. The units, MIN and MAX values can be adjusted in settings.

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591708092/cayenne/Custom_Widget_Slider_Example.png" width="900" height="500" alt="Slider Widget"><br/><br/></p>

<p id="slider-widget-2" class="anchor-link"></p>


#### Slider Arduino Tutorial

This tutorial explains how to use the Slider widget to add an actuator connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your actuator.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591708092/cayenne/Custom_Widget_Slider_Dropdown.png" width="346" height="668" alt="Slider Tutorial Form"><br/><br/></p>

**Name** <br/>
Give your actuator a name. 

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type for your required Slider widget.

**Unit** <br/>
Select the unit type for the Slider widget.

For example, a light dimmer might have Data type of voltage and Units of percentage.

**Channel**
Add the channel number you want to add the custom Slider widget.

**Minimum and Maximum Values (optional)** <br/>
Input the minimum and maximum values that you’d like the slider widget to use when adjusting the range of data for your actuator.

**Step 1: Sketch File** <br/>
If you haven’t already uploaded the Slider code for this widget to your Arduino, click the Sketch File button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/SliderWidget/SliderWidget.ino" target="_blank">Slider Widget sketch file</a>. See [Using Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#using-sketch-files-arduino target=) for more information on customizing and using sketch files.

**Step 2: Add Widget** <br/>
After filling in each of the fields for your widget, click the **Add Widget** button and the widget will be added to your dashboard.<br/><br/>

<p id="value-display" class="anchor-link"></p>


### Value

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160624081807/Tile-ValueWidget.png" width="120" height="150" alt="Value Display Widget"><br/></p>

Displays a measurement value from a sensor or device. You can use settings to adjust the icon or unit information displayed in the widget.

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591708256/cayenne/Custom_Widget_Value_Example.png" width="900" height="500" alt="Value Display Widget"><br/></p>

<p id="value-display-2" class="anchor-link"></p>


#### Value Arduino Tutorial

This tutorial explains how to use the Value display widget to add a sensor connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your sensor.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591708256/cayenne/Custom_Widget_Value_Dropdown.png" width="346" height="637" alt="Value Display"><br/><br/></p>

**Name** <br/>
Give your sensor a name. 

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type for your required Value widget.

**Unit** <br/>
Select the unit type for the Value widget.

For example, a temperature monitor could have a Data type of temperature and Units of Celsius.

**Channel**
Add the channel number you want to add the custom Value widget.

**Step 1: Sketch File** <br/>
If you haven’t already uploaded the Value code for this widget to your Arduino, click the Sketch File button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/ValueWidget/ValueWidget.ino" target="_blank">Value Widget sketch file</a>. See [Using Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files) for more information on customizing and using sketch files.

**Step 2: Add Widget** <br/>
After filling in each of the fields for your widget, click the Add Widget button and the widget will be added to your dashboard.

<p id="co2-detector" class="anchor-link"></p>


### CO2

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591643960/cayenne/CO2.png" width="120" height="150" alt="Co2 Widget"><br/></p>

This displays 2 states. When CO2 is detected by sensor, the widget animates with “On” state to show CO2 presence. When there is no CO2, it is in the “Off” state.

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591709172/cayenne/Custom_Widget_CO2_Example.png" width="900" height="500" alt="CO2  Widget"><br/></p>

<p id="co2-detector-2" class="anchor-link"></p>


#### CO2 Arduino Tutorial

This tutorial explains how to use the CO2 widget to add a sensor connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your sensor.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591709172/cayenne/Custom_Widget_CO2_Dropdown.png" width="346" height="637" alt="Value Display"><br/><br/></p>

**Name** <br/>
Give your sensor a name. 

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type for your required CO2 widget.

**Unit** <br/>
Select the unit type for the CO2 widget.

For example, a CO2 widget have a Data type of Digital Sensor and Units of Digital(0/1).

**Channel**
Add the channel number you want to add the custom CO2 widget.

**Step 1: Sketch File** <br/>
If you haven’t already uploaded the CO2 code for this widget to your Arduino, click the Sketch File button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/TwoStateWidget/TwoStateWidget.ino" target="_blank">CO2 Widget sketch file</a>. See [Using Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files) for more information on customizing and using sketch files.

**Step 2: Add Widget** <br/>
After filling in each of the fields for your widget, click the Add Widget button and the widget will be added to your dashboard.

<p id="tank-widget" class="anchor-link"></p>


### Tank

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591643960/cayenne/Tank.png" width="120" height="150" alt="Tank Widget"><br/></p>

This widget can be used to display a level of an water tank or other. 

**Example States**

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591713586/cayenne/Custom_Widget_Tank_Example.png" width="900" height="500" alt="Tank Widget"><br/></p>

<p id="tank-widget-2" class="anchor-link"></p>


#### Tank Widget Arduino Tutorial

This tutorial explains how to use the Tank widget to add a sensor connected to your Arduino.

Let’s look at each dropdown field that will be used when adding your sensor.

<p style="text-align:center"><br/><img src="https://res.cloudinary.com/dctlrnwuz/image/upload/v1591709172/cayenne/Custom_Widget_CO2_Dropdown.png" width="346" height="637" alt="Value Display"><br/><br/></p>

**Name** <br/>
Give your sensor a name. 

**Device** <br/>
Select your Arduino device.

**Data** <br/>
Select the data type for the Tank widget.

**Unit** <br/>
Select the unit type for the Tank widget.

For example, a Tank widget have a Data type of Tank Level and Units of Analog.

**Channel**
Add the channel number you want to add the custom Tank widget.

**Step 1: Sketch File** <br/>
If you haven’t already uploaded the Tank code for this widget to your Arduino, click the Sketch File button to open the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino/blob/master/examples/CustomWidgets/ValueWidget/ValueWidget.ino" target="_blank">Tank Widget sketch file</a>. See [Using Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-using-sketch-files) for more information on customizing and using sketch files.

**Step 2: Add Widget** <br/>
After filling in each of the fields for your widget, click the Add Widget button and the widget will be added to your dashboard.
