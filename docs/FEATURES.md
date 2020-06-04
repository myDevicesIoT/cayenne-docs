# Features

<p id="tools-features" class="anchor-link"></p>

## Dashboard
The Cayenne dashboard (online and mobile) is the main screen where you can setup, customize, monitor, manage and control your connected devices.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601123646/LightSwitch-RPI-todashboard.jpg" width="600" height="383" alt="Light Switch Dashboard"></p>

From the Cayenne dashboard you can:

+ Add [Raspberry Pis](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-single-board-computers-raspberry-pi), [Arduino boards](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-microcontrollers-arduino), [LoRa devices](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-lora-devices), [sensors](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-sensors), [actuators](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-actuators) and [extensions](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-extensions).
+ Fully customize your dashboard with [drag-and-drop widgets](#features-dashboard-drag-and-drop-widgets).
+ View [device and sensor data history](#features-visualization-data-history).
+ Setup [automatic triggers](#features-triggers) and receive [notification alerts](#features-alerts).
+ [Schedule actions](#features-scheduling) and commands.
+ [Create IoT projects](http://www.cayenne-mydevices.com/CayenneStaging/docs/#features-projects).
+ [Remotely manage](#features-remote-control) devices and sensors.
+ [Track Assets](#features-asset-tracking) and display them on a map.


### Drag-and-drop widgets

Cayenne uses widgets to visualize devices, their data, status and actions. Every device, sensor and actuator that gets added in Cayenne has one or more widgets associated depending on the hardware capabilities. Widgets are added to the Device list on the left hand side and to each device’s Dashboard.

Widgets can be be re-arranged on your dashboard by drag and dropping them anywhere. To move a widget, place your mouse or finger at top middle area of widget. Then tap and move the widget where you want it on your dashboard.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602132429/Widget-Move.jpg" width="600" height="319" alt="Arduino IDE Port Selection"></p>


### Widget settings

A variety of widget parameters can be customized by the user. Access the widget settings by selecting the wheel in the upper right of the widget. In here you can change the widget type, change the min/max values and more.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602132209/Project-WidgetSettings.jpg" width="300" height="330" alt="Project Widget Settings"></p>


## Visualization

Cayenne stores historical data that enables you to see meaningful patterns of behavior to help understand and guide improvements on your IoT projects and the devices and sensors connected.


### Live Data

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602132957/Sensor-Live.jpg" width="600" height="244" alt="Sensor Live"></p>


### Data History

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602133036/Sensor-History.jpg" width="600" height="244" alt="Sensor History"></p>


### Filtering visualization

From the data history graph, you have the ability to filter by different timeframes. Depending upon the timeframe you have selected, the data display will update to show you more or less detail.

You can select from any of the preset ranges available. The ranges shown to you here may depend upon the data currently available for the device. For example, if the device was recently added you may not see the option to select the yearly options. Some options such as **minutes** and **year to date** will always be present. Custom filtering options will added soon.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602134448/Line-Chart-filtering.png" width="600" height="220" alt="Line Chart Filtering"></p>


### Downloading data history

Coming soon you will be able download data history.


## Projects

The Projects feature allows you to combine widgets from any combination of devices into one custom dashboard called a Project. Each project has its own set of triggers and scheduled events that you can be setup.


### Creating a Project

To begin creating a new project click the **+ Create New Project** entry in the navigation menu or expand the **Add** menu and select the **Project** option.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602135511/CreateNewProject.jpg" width="155" height="42" alt="Create New Project"></p>


#### Naming the project

In order to create your new project, you must give the dashboard a unique name. Giving your project a name is the only required step for project creation.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602135634/Projects-Name.jpg" width="260" height="43" alt="Projects Name"></p>

After creating your new project, you will see a blank canvas. From here, you can start populating your new project dashboard with widgets from any of your devices.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602135744/Projects-Default.jpg" width="600" height="358" alt="Projects Default"></p>


#### Adding widgets

You can customize your project by adding widgets at any time. When adding widgets, you can add widgets associated with any existing device in your device list or you can add new devices that will then be added to your project as well as listed in the device list.


#### Add single widget

You can click and drag a single widget from a device into the device list area. The added widget appears in the project and the widget container clearly indicates which device this widget is associated with.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601131032/Arduino-TMP36.jpg" width="600" height="336" alt="Arduino TMP36"></p>


#### Adding multiple widgets

To add more than one widget at a time, you can drag the device from the device list into the dashboard area. This will allow the user to add multiple widgets associated with that device at one time.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602140608/Projects-MultipleWidget.jpg" width="600" height="412" alt="Multiple Widgets"></p>

After selecting some or all the widgets you would like to add from a device, they appear on the Project dashboard.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602140649/Projects-MultipleWidget-Dashbioard.jpg" width="600" height="358" alt="Multiple Widgets on Dashboard"></p>


#### Deleting widgets

To remove a widget from a project, click on the **cogwheel** icon in the top right corner of the widget, then click **Remove from project**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602141024/Project-RemoveWidget.jpg" width="300" height="330" alt="Remove Widget"></p>

**Note:** This only removes the widget from this project. It doesn’t remove the widget from other projects or from Cayenne.


### Editing and deleting projects

To edit a project name or delete a project click on the cogwheel icon next to your Project Name.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601130027/Configure.jpg" width="230" height="183" alt="Configure"></p>


## Scheduling

Cayenne allows you to create scheduled events for Raspberry Pis, Arduinos, sensors and actuators connected. A scheduled event can have one or more actions added to it.

### Setting up scheduled events

**Example event**
Let’s create an example event to show you how easy it is. We’ll create the following event: *At 10 pm turn off the lights and turn off the fan.*

1. To begin creating an Event, open the feature by selecting **Add New** and then **Event**.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"></p>

2. The Create New Event screen appears.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144155/ScheduleEvent-00.jpg" width="345" height="365" alt="Schedule Event"></p>

From here, you can fill in all the details required for creation of your scheduled event. When creating a new scheduled event, the empty screen serves as an overview of the creation process.

3. Let’s begin by giving our scheduled event a name. Enter **“At 10 pm, Turn off Light and Fan”** into the **Event title** field.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144407/ScheduleEvent-01.jpg" width="345" height="365" alt="Schedule Event"><br/><br/></p>
   
4. In the Date and Time fields, enter the date you want to start the scheduled event and the time.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144430/ScheduleEvent-02.jpg" width="345" height="365" alt="Schedule Event"><br/><br/></p>
   
5. Select the Timezone of when you want the scheduled event to run. By Default, the scheduled event runs in the **default browser timezone** of the computer or phone you are on.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144501/ScheduleEvent-03.jpg" width="346" height="400" alt="Schedule Event"><br/><br/></p>
   
6. Select how often you want the scheduled event to occur. By default, the scheduled event only occurs one time. For this example we will have the scheduled event happen Every Day. Select the **Repeat** frequency and choose the **Every Day** option.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144544/ScheduleEvent-04.jpg" width="346" height="400" alt="Schedule Event"><br/><br/></p>
   
7. You can optionally choose to receive notifications whenever this event runs. Events can be delivered by email and/or text message. For this example, we will choose to receive notification by email and text message. Select the checkbox next to each option and enter the phone number and email address you would like to receive the notification into the appropriate fields.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144636/ScheduleEvent-05.jpg" width="346" height="410" alt="Schedule Event"><br/><br/></p>
   
8. To complete your scheduled event, add the action that you want to occur at your scheduled time. For this example, we will add two different actions in our scheduled event.

9. Click the **+ Action** button to create a new event.
   
   Using the **Device** field, select the device that will take the action.
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144712/ScheduleEvent-06.jpg" width="346" height="619" alt="Schedule Event"><br/><br/></p>
      
   After selecting the device for the action, use the **Action** field to choose what type of action will be triggered. The list of actions that you see displayed will always be appropriate based upon the device you selected for the action.
   
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144827/ScheduleEvent-07.jpg" width="346" height="546" alt="Schedule Event"><br/><br/></p>

   Repeat the process for adding another device and action for this scheduled event.
   
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144848/ScheduleEvent-08.jpg" width="346" height="546" alt="Schedule Event"><br/><br/></p>
   
10. You’re done. Click **Save**, and your Scheduled Event will be added to Cayenne. Cayenne will automatically take care of synchronizing with your devices and running the event at the appropriate time.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144957/Scheduling-MonthView.jpg" width="600" height="413" alt="Month View"></p>


### Scheduling views

You can view your scheduled events by Year, Month, Week or List View.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602145121/Scheduling-ListView.jpg" width="600" height="321" alt="Schedule List View"><br/></p>


### Receiving notifications

Cayenne can send you a notification when a scheduled event has occurred by email and/or text message.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602145334/ScheduleEvent-Notification.jpg" width="346" height="615" alt="Schedule Notifications"><br/></p>


## Triggers

### What is a trigger?

Cayenne allows you to create triggered actions on and between your Raspberry Pis, Arduinos, sensors and actuators based upon the state your devices. Simply put if a trigger event happens, then a resulting action happens.


### Setting up triggers

**Example trigger**
Let’s create our first trigger. We’ll create a trigger to turn on our light when the temperature reaches a certain value.


1. To begin creating a Trigger, click **Add New Trigger** from top right navigation.
   
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"><br/></p>

2. The Create Trigger screen appears.
   
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602145622/Triggers-000.jpg" width="600" height="376" alt="Triggers"><br/></p>
   
   From here, you can fill in all the details required for creation of your trigger. When creating a new trigger, the empty screen serves as an overview of the creation process. All triggers follow the general format of **IF** my device senses something, **THEN** do something in response.

3. Let’s begin by giving our trigger a name. Enter **“Arduino Uno TMP36 is above 80, Turn on Raspberry Pi Light Switch”** into the Trigger Name field.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602145732/Triggers-01.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>

4. We’re going to trigger a light turning on when a temperature sensor on the Arduino device is above 80 degrees. The TMP36 temperature sensor is located on our Arduino device, so drag & drop the **Arduino** device into the **IF** statement.
   
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602145843/Triggers-02.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>
   
5. After selecting the TMP36 temperature sensor, we can choose whether we want to trigger an action if temperature is above or below a certain value.

   We want to react to the temperature being high, so we select **Temperature** from the list and select **Temperature Above** in the options presented and choose 80 degrees for this example.
   
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602145950/Triggers-03.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>
   
6. We want to take action once the temperature is high by turning on the light in our **Raspberry Pi*. Drag & drop the Raspberry Pi device into the **THEN** statement area.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602150032/Triggers-04.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>

7. We can now choose an action to take on our **Raspberry Pi**. Since we want to turn on the light, select **Light Switch** from the actions list and then choose On from the list of options available.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602150131/Triggers-05.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>

8. We’re done! Click **Save Trigger** to complete our trigger and return to the Triggers list where our new trigger is shown.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602150219/Triggers-06.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>
   
Cayenne will will now start monitoring the temperature sensor and when it reaches the correct temperature your trigger will automatically run.
   
   
   
## Alerts

### What is an alert?

Cayenne enables you to receive notifications when a device or sensor has reached a certain state. For example, you could be notified when a light gets turned on, a certain temperature is reached, or motion is detected.


### Setting up alerts

**Example alert**
Let’s create our first notification alert. We’ll send a text message and email notification alert when the temperature outside reaches 90 degrees to send a text message and email.

1. To begin creating a Trigger Notification Alert, open the up the feature by selecting **Triggers** from **Add New navigation**.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Add New Device"><br/></p>
   
2. The Create Trigger screen appears.
   
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602145622/Triggers-000.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>
   
   From here, you can fill in all the details required for creation of your notification alert. To make this process easy, you will be guided through triggered alert creation that is easy to follow and select the devices and actions that you want.

3. Let’s begin by giving our trigger a name. Enter **“Tmp36 is above 80, Send Notification”** into the Trigger Name field.
   
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602150757/Triggers-01-Notification.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>

4. We’re going to trigger a notification alert when Tmp36 is above 80 degrees. The TMP36 temperature sensor is located on our Arduino device, so drag & drop the **Arduino** device into the **IF** statement.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602150853/Triggers-02-Notification.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>

5. After selecting the TMP36 temperature sensor, we can choose whether we want to trigger a notification if temperature is above or below a certain value.

   We want to react to the temperature being high, so we select **Temperature** from the list and select **Temperature Above** in the options presented and choose **80 degrees** for this example.
   
   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602150957/Triggers-03-NOtification.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>
   
6. We want to receive a triggered alert notification by text message and email each time TMP36 is above 80 degrees. Click **Setup notification**.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602151034/Triggers-04-Notification.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>
   
7. You can choose to receive notifications by text message and/or email. We want both, so we will choose **Select All**.   

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602151059/Triggers-05-Notification.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>

8. Click **Add custom recipient** and enter in phone number to receive text. Then click **Add more recipients**? and add in the email address.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602151114/Triggers-06-Notification.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>   
   
9. We’re done! Click **Save Trigger** to complete our trigger alert and return to the Triggers list where our new trigger alert is shown.

   <p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602151206/Triggers-07-Notification.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>   
   
Cayenne will will now start monitoring the temperature sensor and when it reaches the correct temperature a notification alert will be send by email and text message. <br/><br/>
   
 
### Receiving alerts

### SMS

Cayenne will send you notification alerts by text message if selected.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602151440/Triggers-07-Notification-Event.jpg" width="346" height="615" alt="Notification Alert"><br/><br/></p>   


### Email

Cayenne will send you notification alerts by email if selected.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160603101622/Triggers-08-EmailAlert.jpg" width="346" height="372" alt="Email Alert"><br/><br/></p>  


## Remote Control

Cayenne makes it easy to manage your connected devices from anywhere. Using the online dashboard, you can monitor device status, make changes to your devices, and control them as if you were right in front of them.


* **Online Dashboard** – You can access the Cayenne online dashboard from anywhere using a web browser. No matter where you are, as long as you can access the dashboard, you can manage your devices.

 
**Manually control device**

Cayenne makes it easy to add widgets to your device and project dashboards for quickly changing the state of your device. Using Actuators or Custom Widgets, you can easily manually take action on your device. For example, you can create a custom [Button widget](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-actuators-generic-digital-output) that lets you easily toggle your light on/off. Or you can add a [Servo Motor](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-actuators-motor-servo-motor) that lets you adjust a motor using a [Slider widget](https://developers.mydevices.com/cayenne/docs/supported-hardware/#supported-hardware-actuators-generic-pwm-output).

Cayenne has a growing [list of widgets available](https://developers.mydevices.com/cayenne/docs/custom-widgets/) to help you manually control a device’s state.

* [Button](https://developers.mydevices.com/cayenne/docs/custom-widgets/#custom-widgets-button): Change device state from ON/OFF or HIGH/LOW. For example, turning a light on/off.
* [Dial Knob](https://developers.mydevices.com/cayenne/docs/custom-widgets/#custom-widgets-dial-knob): Change values between MIN and MAX, such as the temperature of a thermostat or volume control. Knob widgets can also be used to just display the current value of a knob that is being turned by a user, such as potentiometer or physical knob located on a board.
* [Joystick](https://developers.mydevices.com/cayenne/docs/custom-widgets/#custom-widgets-joystick): This controls a device, such as a video camera in a parking lot or a robot. It controls movements on X and Y axis in 4 directions.
* [Lighting](https://developers.mydevices.com/cayenne/docs/custom-widgets/#custom-widgets-lighting): Changes the color, adjusts the luminosity and has ability to turn on or off a light, LED or light source.
* [Slider](https://developers.mydevices.com/cayenne/docs/custom-widgets/#custom-widgets-slider): Change the value of the connected device, such as dimming a light.
* [Switch](https://developers.mydevices.com/cayenne/docs/custom-widgets/#custom-widgets-switch): Used to change between 2 states, such as switching between power voltage levels used. Similar to a button.
 

**Scheduling actions**

Cayenne allows you to create scheduled events for LoRa devices, Raspberry Pis, Arduinos, connected sensors and actuators. A scheduled event can have one or more actions added to it. After setting up your scheduled action, Cayenne will take care of running the action at the appropriate time. [View more on Scheduling](#features-scheduling)

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602144848/ScheduleEvent-08.jpg" width="346" height="546" alt="Triggers"><br/><br/></p>

**Automatic Triggers**

Cayenne allows you to create triggered actions on and between your LoRa devices, Raspberry Pis, Arduinos, connected sensors and actuators based upon the state your devices. After setting up your Triggers, Cayenne will monitor device conditions and take action once the appropriate conditions are met. Simply put if a trigger event happens, then a resulting action happens. [View more on Triggers](#features-triggers)

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160602151114/Triggers-06-Notification.jpg" width="600" height="376" alt="Triggers"><br/><br/></p>


## Asset Tracking

Need to find a lost device, or need to monitor the movement of your devices during the day? Using Cayenne’s asset tracking features, you can see the past & present location of your devices connected to Cayenne.

**Asset tracking visualization**

After setting up asset tracking on your connected devices, Cayenne gives you an easy way to visualize their current and past locations. The [Device Map widget](#features-asset-tracking-map-tracking-features-device-map-features) allows you to view the location history of a single device and any connected sensors. Using the [Project Tracking tab](#features-asset-tracking-map-tracking-features-project-tracking-map-features), you can examine the location and history for multiple devices at once. <br/>

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160712114534/Device-Tracking-map-highlight.png" width="600" height="363" alt="Asset Tracking"><br/><br/></p>


### Configuring Tracking

Cayenne will guide you through enabling tracking as a part of the setup process for each of your devices. As you add your device through the Cayenne dashboard, you will be asked to enter in any required information needed to enable asset tracking.

*NOTE: Cayenne currently supports GPS-enabled LoRa devices. Additional tracking options and tracking for other devices is coming soon.*

#### LoRa Devices

Some LoRa devices move around and support automatic location updating, while other devices will remain stationary. If the device supports automatic location tracking, Cayenne will be automatically configured to obtain the location data. If the device does not support automatic location tracking, or you do not wish to use it, you can set your device’s location manually.

*NOTE: If your LoRa device does not have on-board GPS, you may not see the tracking fields available. In the future, you will be able to track all of your LoRa devices, whether they support GPS or not.*

**Enabling Automatic Asset Tracking (LoRa)**

If your LoRa device provides location data and will move around, the **Location** field for the device will default to “*This device moves*”. After adding the device, you will see the device shown at its current location on the map and the location information for the device will be automatically kept up to date as the device moves.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160926144159/LoRa-Settings-Automatic-location-tracking1.png" width="600" height="363" alt="LoRa Tracking"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160804145558/Map-view-Device-Map-trails1.png" width="600" height="416" alt="LoRa Tracking"><br/><br/></p>

**Manual Asset Tracking (LoRa)**

If your LoRa device will remain stationary, set the **Location** field for the device to “*This device doesn’t move*”. You can then  manually enter in an address or coordinates for the device using the **Address** field. After adding the device, you will see your device shown on the map at that location.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160926143957/LoRa-Settings-Device-doesnt-move1.png" width="600" height="363" alt="LoRa Tracking"><br/><br/></p>

If you wish to change the address, access the location settings using the **settings cogwheel** menu to open the *Settings* dialog where you can change the address in the **Address** field.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170201095452/LoRa-manual-tracking-February-2017.png" width="600" height="485" alt="LoRa Tracking"><br/><br/></p>


### Map Tracking Features

Cayenne’s Map Widget makes it easy to view the current or past location data for your devices. Whenever you add an appropriate device to Cayenne, a [Device Map Widget](#features-asset-tracking-map-tracking-features-device-map-features) is automatically added for you. This Device Map widget allows you to visualize the location data for your single device. If you want to view multiple devices at once, check out the [Project Map Widget](#features-asset-tracking-map-tracking-features-project-tracking-map-features).
 
**Zooming and scrolling**

Using the Map Widget, you can zoom in and zoom out and scroll the map view around to get the best view of your data.<br/><br/>

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160712142115/Map-view-zoom-scroll.png" width="600" height="363" alt="Map Tracking Features"><br/><br/></p>

**Change Map View options**

Using the Map View menu, you can change certain map options such as viewing Terrain or Satellite imagery.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160712142329/Map-view-sat-terrain.png" width="600" height="363" alt="Terrain Imagery"><br/><br/></p>


#### Device Map Features

Whenever you add an appropriate device to Cayenne, a Device Map widget is automatically added for you. This widget allows you to easily visualize the location data for your single device.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160804145928/Device-Tracking-map-highlight2.png" width="600" height="416" alt="Device Map Features"><br/><br/></p>

**Location markers**<br/>

Location history for each device is shown on the Device Map as a trail of location markers. The location trail gives you can easy way to see movement of the selected device for the date being shown. You can click on the device or on a location data point to see additional details.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160804150042/Map-view-Device-Map-markers2.png" width="600" height="416" alt="Device Map Features"><br/><br/></p>

**Details popup**

Clicking on a device or a location marker opens a popup dialog with additional information. When clicking on a device marker, you will see additional information on the device, its current location and attached sensors. When clicking on a past location marker, you can see additional address information taken at that point in time.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160804150250/Map-view-Device-Map-popup-details1.png" width="600" height="416" alt="Device Map Features"><br/><br/></p>


**Filtering by Date & Time**

Using the controls in the widget, you can update the map widget to display a different day of location data. You can use the **left arrow** or **right arrow** next to the date to quickly jump backward or forward a day at a time. Alternatively, you can on the current displayed date to open a **date picker** that will let you choose the date. After changing the date, the map widget will update to display the location of your device on that date. You can also use the time of day slider to adjust the timeframe displayed for the selected day.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160712142934/Map-view-Device-Map-date-filter.png" width="600" height="363" alt="Device Map Features"><br/><br/></p>


**Viewing Connected Devices**

The Map widget makes it easy to see your device and all connected sensors. Sensors connected directly to the device will appear in the same location as the device. You can click on the location for the device and the status of connected devices will appear in the information data that appears.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160804150250/Map-view-Device-Map-popup-details1.png" width="600" height="416" alt="Device Map Features"><br/><br/></p>


#### Project Tracking Map Features

You can use the **Tracking** tab found in your [Project](#features-projects) to visualize the location data for multiple devices at one time.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160712143333/Map-view-Project-Map-highlight.png" width="600" height="363" alt="Project Map Features"><br/><br/></p>

**Adding Devices**

The Tracking tab will automatically display a location marker for each device that has been added to the Project. To do so, simply [add one or more](#features-projects-creating-a-project-adding-widgets) of the device's widgets to the project dashboard. The Tracking tab will then automatically include that device on the project map.
 
**Details popup**

Clicking on a device marker in the map opens a popup dialog with additional information on the device and its location, specific to the currently shown Data and Time.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160712143550/Map-view-Project-Map-popup-details.png" width="600" height="363" alt="Project Map Features"><br/><br/></p>

**Filtering by Date**

Using the on-screen controls, you can update the tracking map to display a different day of location data for all devices on the map. You can use the **left arrow** or **right arrow** next to the date to quickly jump backward or forward a day at a time. Alternatively, you can on the current displayed date to open a **date picker** that will let you choose the date. After changing the date, the map  will update to display the location of all devices on the map at that point in time.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160712143656/Map-view-Project-Map-date-filter.png" width="600" height="363" alt="Project Map Features"><br/><br/></p>


**Filtering by Time of day**

In addition to picking which day to view location data on, the Project map also gives you the ability to view where the devices where throughout the day. To change the time of day, click and drag the **time of day slider**. As you change the slider position, the location markers for each device shown on the map updates. Using the time of day slider, you can watch the location of each device change as the day goes on.


## Custom Code

Cayenne supports a number of sensors, actuators and extensions [natively](https://developers.mydevices.com/cayenne/docs/supported-hardware/). If you want to use a device that Cayenne does not currently support, or you want greater control over the behavior of your device, you will need to write some custom code. Using Cayenne, you can easily integrate your devices that use custom code, viewing and controlling them using the same great dashboard support that Cayenne has for native devices.


### Arduino


Writing custom code for devices connected to an Arduino is accomplished using sketch files. By writing your code in the sketch file, you have complete control over how your data is sent to Cayenne. [See Using Sketch Files](https://developers.mydevices.com/cayenne/docs/sketch-files/)

If the sensor that you want to customize is already supported by Cayenne, you can start with the example sketch file for that sensor and make minor changes before uploading it to your board. If you want greater control, or you need to add something new that Cayenne does not currently support, you can use a Custom Widget and add whatever custom code you need to the example sketch files for Custom Widgets.

*TIP: Your custom code should communicate with Cayenne using [Virtual Pins](https://developers.mydevices.com/cayenne/docs/sketch-files/#sketch-files-virtual-pins).*

The example sketch files for each component can be found by following the Add Device/Widget process in the Cayenne dashboard, or you can visit the <a href="https://github.com/myDevicesIoT/Cayenne-MQTT-Arduino" target="_blank">Cayenne github</a>.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160617151040/Add-Device-Arduino-TMP36-Sketch-file2.png" width="600" height="386" alt="Arduino Custom Code"><br/><br/></p>


After writing your sketch file to send device data to the Cayenne Virtual Pins, you can upload the code to your Arduino board. You will then need to complete adding your Device or Custom Widget to Cayenne by telling Cayenne how to read the data. Fill in the appropriate settings during the Add Device/Widget process, making sure to select the correct **Virtual Pin(s)**, **Data Type** and **Units** being sent in your custom code.


<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160721125553/Custom-Code-Arduino-Custom-Widget-settings1.png" width="600" height="362" alt="Arduino Custom Code"><br/><br/></p>


Once your code has been uploaded to your Arduino, and a corresponding widget added to Cayenne, you will see your device shown on the dashboard as you would with any device that Cayenne supports out of the box.


<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160721124512/Custom-Code-Arduino-Custom-Widget-on-dash.png" width="600" height="362" alt="Arduino Custom Code"><br/><br/></p>


### Raspberry Pi

Coming soon

