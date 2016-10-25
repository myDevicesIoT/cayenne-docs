#LoRa

<p id="lora-information" class="anchor-link"></p>
<p id="overview-lora" class="anchor-link"></p>

##Overview
LoRa is a wireless technology developed to create the low-power, wide-area networks (LPWANs) required for machine-to-machine (M2M) and Internet of Things (IoT) applications. The technology offers a very compelling mix of long range, low power consumption and secure data transmission and is gaining significant traction in IoT networks being deployed by wireless network operators.

A network based on LoRa wireless technology can provide coverage that is greater in range compared to that of existing cellular networks. In fact, many mobile network operators have chosen to complement their existing cellular/wireless networks with a LPWAN based on LoRa technology because it is easy to plug into their existing infrastructure and also allows them to offer their customers a solution to serve more IoT battery-operated applications.

LoRa technology was originally developed by Semtech, but is now coordinated by the 300+ member LoRa Alliance, a non-profit organization focused on standardizing LoRa for IoT/M2M and creating a strong ecosystem to scale the technology. To date, the alliance has developed a global LPWAN specification, known as LoRaWAN™, to help standardize LPWANs and foster the adoption of these networks to enable IoT, M2M, smart city, and industrial applications.

<p id="how-it-works-lora" class="anchor-link"></p>


##How LoRaWAN works
LoRaWAN is a Data + Network Protocol built on top of LoRa. LoRaWAN targets the basic needs of LoRa usage for IoT by providing Addressing, Routing and Security.

Topology of a LoRaWAN network consists of several elements.

* **End Nodes:** End nodes are elements such as sensors, which are usually remotely located.
* **Concentrator / Gateway:** Gateways are access points for for end nodes (e.g. sensors), aggregating data and communicating that data to a central network server via standard IP connections. Several gateways can be co-located in an area and can transparently share a single connection to the network server.
* **Network Server:** The LoRa Network Server acts to eliminate duplicate packets, manages security and data rates.
* **Application Server:** Application Servers manage payload security and performs analysis to utilize sensor data. Cayenne operates as an Application Server.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160819110810/LoRaWAN.png" width="600" height="320" alt="Using Sketch Files"><br/><br/></p>

<p id="device-information-lora" class="anchor-link"></p>


##About DevEUIs

LoRa devices have a unique identifier (DevEUI) that is assigned to the device by the chip manufacturer. This identifier is used to uniquely identify the device on the network. Cayenne will need to know the DevEUI for your device, regardless of whether it is already registered, or if the device needs to be activated for the first time.

<p id="using-a-public-gateway-lora" class="anchor-link"></p>


##Using a public network
Using a public LoRa network is the easiest way to get started using LoRa. In order to get started using a public LoRa network, you will want to first verify that yours sensors will be covered by an appropriate Network Operator. Once you know which network operator you will connect with, you can purchase devices that work on that network. You will then need an account with that operator so that you can add your devices to the network.

In order to activate a LoRa device on a network, you will need to have an account with that network. Using Cayenne, you will not need your account information if the device has already been registered on the network. If you wish to use Cayenne to help activate the device on the network, however, you will need your account information handy so that you can provide this information in order to authenticate with the network and activate the device.

Cayenne currently supports the following LoRa networks. The list of networks that work with Cayenne will keep growing.

*   [Actility](#lora-actility)
*   [Senet](#lora-senet-network)


##Actility

**About Actility**<br/>
Actility is an industry leader in Machine to Machine (M2M) large scale infrastructure with ThingPark®, the new generation standard-based M2M communication platform. Actility is a winner of the French Ministry of Research competition, has obtained the Grand Prix of the Tremplin Entreprise and has been rewarded by Innov’ Eco and CleanTech République for its particularly innovative approach in its Internet Of Things (IoT) solutions.

**Need an account?**<br/>
In order to register devices or add your device into Cayenne, you will need an Actility account. You may refer to [Create an Actility account](#lora-actility-create-account) for more information.

**Adding Actility network devices to Cayenne**<br/>
Cayenne currently supports the following registration / activation modes for devices that use the Actility network:

* [Already Registered](#lora-actility-add-device-to-cayenne-already-registered) – devices [manually registered](#lora-actility-manually-register-device) via the Actility portal.
* [Over the Air Activation (OTAA)](#lora-actility-add-device-to-cayenne-over-the-air-activation)
* [Activation by Personalization (ABP)](#lora-actility-add-device-to-cayenne-activation-by-personalization)

**Supported devices**<br/>
Need to know what devices are currently supported? Check out the Actility [Supported devices](#lora-actility-supported-devices) section.


###Create account

To create your Actility account, visit the <a href="http://actility.thingpark.com/thingpark-store/authentication" target="_blank">Actility Portal</a>. Follow the **Create your account** process located there to get started.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Actility-portal-landing.png" width="600" height="363" alt="Actility"><br/><br/></p>

###Manually register device

Before you can use your LoRa device on the Actility network, it must be registered on the network. The following information will help guide you through this process using the Actility portal.

*TIP: Cayenne is capable of activating your device on the Actility network automatically. If you wish to use this feature, you can skip manually registering your device and jump straight to the section on [Adding your device to Cayenne](#lora-actility-add-device-to-cayenne) using either [Over the Air Activation (OTAA)](#lora-actility-add-device-to-cayenne-over-the-air-activation) or [Activation by Personalization (APB)](#lora-actility-add-device-to-cayenne-activation-by-personalization).*

**1\. Log into the Actility portal**

Start by going to the <a href="https://demo.thingpark.com/deviceManager/" target="_blank">Actility portal</a> and logging into your account. You will then see the Actility dashboard.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822144157/ThingPark-login2.png" width="300" height="362" alt="Actility"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160824134621/ThingPark-landing-dashboard.png" width="600" height="407" alt="Actility"><br/><br/></p>

**2\. Create Cayenne Routing Profile**

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/n8pSDJqJtYU" frameborder="0" allowfullscreen></iframe></p>

In order for data from your device to reach Cayenne, you must create an **AS Routing Profile** in the Actility portal. We can then setup our device to use this profile. To begin, select the **AS routing profiles** entry on the portal. From the screen that appears, click on the **Add** button to create a new profile.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Create-Routing-Profile-1.png" width="600" height="359" alt="create-routing-profile-1"><br/><br/></p>

Give your profile a name and click the **Create** button.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Create-Routing-Profile-2.png" width="600" height="145" alt="create-routing-profile-2"><br/><br/></p>

The *Routing Profile* screen will appear with details for your profile. We want to add a new route to our profile, select the **Add** button to begin doing so.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Create-Routing-Profile-3.png" width="600" height="360" alt="create-routing-profile-3"><br/><br/></p>

In the **Destinations** field, select the existing *ThingPark Cloud* and click on the **Edit** button. The *Edit distation* dialog will appear.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Create-Routing-Profile-4.png" width="600" height="359" alt="create-routing-profile-4"><br/><br/></p>

In the *Edit distination* dialog, change the dropdown for **Type** to *Third party AS (HTTP)*. In the **Destination** field, enter in the Cayenne Actility URL **"https://longrangeapi.mydevices.com/longrange/api/actility/messages/add**. After doing so, click on the **Edit** button to save your changes.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Create-Routing-Profile-5.png" width="600" height="284" alt="Cayenne URL"><br/><br/></p>

After saving your changes, you will be returned to the previous screen. Be sure to click on the **Save** button to save the changes to your profile. You may now continue with creating a device that uses this profile.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Create-Routing-Profile-6.png" width="600" height="359" alt="create-routing-profile-6"><br/><br/></p>

**3\. Create new device**

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/cXPxkBeSaXk" frameborder="0" allowfullscreen></iframe></p>

To get started with a new device, right-click on the **Devices** entry in the portal and select **Create device** from the menu that appears.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822155516/ThingPark-menu-expanded-Create-device.png" width="400" height="337" alt="Actility"><br/><br/></p>

The **New device** dialog will appear. To create a new device using the Actility portal, you will need to enter in all required information for completing the device creation into the New device dialog. The process begins by selecting an appropriate activation mode from the **Device activation** field. In most cases, this will be Over the Air Activation (OTAA).

**Over the Air Activation (OTAA)**

After selecting the OTAA activation mode, the list of fields will update to show you required fields. You will need to fill in all require fields to register & activate your device with Actility. Below you will find notes on the fields seen for OTAA and specific notes as they relate to what needs to be selected in order to work with Cayenne.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822144738/ThingPark-New-device.png" width="600" height="407" alt="Actility"><br/><br/></p>

*   Device identification
    *   **Device EUI:** Enter the DevEUI for your device. This ID should come with the information included with your device, or can be found in the device configuration.
    *   **Device Address:** Skip – When selecting OTAA activation, the device address will automatically be generated based on the DevEUI.
    *   **Device Profile:** Actility uses this profile to correctly decode the payload, based on the device type, and display it on their dashboard. Selecting the correct profile here is not required for Cayenne to work with your device – the information will be sent in raw format to Cayenne and will work regardless of this selection.
*   Application layer
    *   **Application EUI:** Enter the AppEUI. The AppEUI is a global application ID that uniquely identifies the application provider (i.e., owner) of the device.
    *   **Application key:** Enter the Appkey. The AppKey is a key specific for the end-device that is assigned by the application owner to the end-device and most likely derived from an application-specific root key exclusively known to and under the control of the application provider.
    *   **Thingpark cloud config:** Skip – Cayenne does not require this optional field.
*   Network
    *   **Connectivity plan:** Select an appropriate Actility plan here for activating your device under.
    *   **AS routing profile:** Select the Cayenne route that you created above in **Step 2** from the dropdown here. This will forward the information from your device to Cayenne so that once your device is online, Cayenne will receive its information.
*   Administrative data
    *   **Device name:** Used by Actility. Cayenne does not use this information.
    *   **Marker:** Used by Actility. Cayenne does not use this information.
    *   **Administrative info:** Used by Actility. Cayenne does not use this information.
    *   **Administrative location:** Used by Actility. Cayenne does not use this information.
*   Complete the device creation by clicking the **Create** button to create the device.

**Activation By Personalization (APB)**

After selecting the APB activation mode, the list of fields will update to show you required fields. You will need to fill in all require fields to register & activate your device with Actility. Below you will find notes on the fields seen for APB and specific notes as they relate to what needs to be selected in order to work with Cayenne.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160825073849/ThingPark-New-device-APB.png" width="600" height="369" alt="Actility"><br/><br/></p>

*   Device identification
    *   **Device EUI:** Enter the DevEUI for your device. This ID should come with the information included with your device, or can be found in the device configuration.
    *   **Device Address:** When using APB, you will need to manually enter the hardware address here.
    *   **Device Profile:** Actility uses this profile to correctly decode the payload, based on the device type, and display it on their dashboard. Selecting the correct profile here is not required for Cayenne to work with your device – the information will be sent in raw format to Cayenne and will work regardless of this selection.
    *   **Application session key:** Enter the AppSKey. The AppSKey is an application session key specific for the end-device. It is used by both the network server and the end-device to encrypt and decrypt the payload field of application-specific data messages.
    *   **Network session key:** Enter the NwkSKey. The NwkSKey is a network session key specific for the end-device. It is used by both the network server and the end-device to calculate and verify the MIC (message integrity code) of all data messages to ensure data integrity. It is further used to encrypt and decrypt the payload field of a MAC only data messages.
*   Application layer
    *   **Application EUI:** Enter the AppEUI. The AppEUI is a global application ID that uniquely identifies the application provider (i.e., owner) of the device.
    *   **Application key:** Enter the Appkey. The AppKey is a key specific for the end-device that is assigned by the application owner to the end-device and most likely derived from an application-specific root key exclusively known to and under the control of the application provider.
    *   **Thingpark cloud config:** Skip – Cayenne does not require this optional field.
*   Network
    *   **Connectivity plan:** Select an appropriate Actility plan here for activating your device under.
    *   **AS routing profile:** Select the Cayenne route that you created above in **Step 2** from the dropdown here. This will forward the information from your device to Cayenne so that once your device is online, Cayenne will receive its information.
*   Administrative data
    *   **Device name:** Used by Actility. Cayenne does not use this information.
    *   **Marker:** Used by Actility. Cayenne does not use this information.
    *   **Administrative info:** Used by Actility. Cayenne does not use this information.
    *   **Administrative location:** Used by Actility. Cayenne does not use this information.
*   Complete the device creation by clicking the **Create** button to create the device.

Once added, you will see your new device listed in the device list on the portal.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822144748/ThingPark-device-list.png" width="600" height="406" alt="Actility"><br/><br/></p>

**4\. Programming the device**

Some devices will come from your device supplier preprogrammed and ready to be used immediately. Other devices will require you to program the device manually. If your device is preprogrammed, it can now be deployed and connected to the network for usage.

If your device needs to be programmed, you should now proceed with programming/flashing the device. Because this process is different for each device, you should refer to the instructions for your device for any specific information you need to perform this step.

**5\. Add your device in Cayenne**

Once your device has been registered, programmed and is online, you can then proceed with adding an [Already Registered device](#lora-actility-add-device-to-cayenne-already-registered) in Cayenne. This will add your new device into the list of devices shown in Cayenne.


###Add device to Cayenne

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/QPiZ-FSjdyw" frameborder="0" allowfullscreen></iframe></p>

In order for your LoRa device to appear in your dashboard, it must be added from the Cayenne dashboard.

Click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Actility"><br/><br/></p>

From the list of devices & widgets that appears, click **LoRa** and select the **Actility** Network option to view a list of Actility supported devices.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-LoRa-device-Actility-menu.png" width="600" height="363" alt="Actility"><br/><br/></p>

After selecting the device that you wish to add, settings for that device will appear. Depending upon whether your device has been previously registered on the Actility Network, or if you want Cayenne to perform this step, different settings will be displayed.

_TIP: Which device Activation Mode you use is decided by you or your device seller (usually the device manufacturer or the network provider) when the device is bought and all related IDs and Keys should be provided to you when you receive your device. In case you do not know your device Activation Mode and the related information please contact your device seller._

**Adding Actility network devices to Cayenne**  
Cayenne currently supports the following registration / activation modes for devices that use the Actility network:

* [Already Registered](#lora-actility-add-device-to-cayenne-already-registered) – devices [manually registered](#lora-actility-manually-register-device) via the Actility portal.
* [Over the Air Activation (OTAA)](#lora-actility-add-device-to-cayenne-over-the-air-activation)
* [Activation by Personalization (ABP)](#lora-actility-add-device-to-cayenne-activation-by-personalization)

In the following sections, we will walk you through examples of adding your Actility device using each of these activation modes.


####Already Registered
If your device has been previously registered on the Actility network, it can be quickly & easily added to Cayenne. Once added, your device and all of its sensors will appear in your dashboard.

**Items you will need:**

1.  Which [LoRa device](#lora-actility-supported-devices) is being added?
2.  Your device will need to have been previously registered on the network. Refer to [Manual device registration](#lora-actility-manually-register-device) if you need help with manually registering your device on a network.
3.  What is the unique [DevEUI](#lora-about-deveuis) for the device being added?

To see how easy it is, let’s walk through an example of connecting an [Adeunis LoRa Pulse](#supported-hardware-lora-devices-adeunis-lora-pulse) which was previously registered under an [Actility account](#lora-actility-create-account).

**1\. Choose the Network** <br/>
Make sure the **Actility** network is selected in the list of Networks.'

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-LoRa-device-Actility-menu-1.png" width="600" height="363" alt="Actility"><br/><br/></p>

**2\. Select the Device** <br/>
Select your device from among the list supported Actility devices. In this case, we’ll select the **Adeunis LoRa Pulse**.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-LoRa-device-Pulse-selected.png" width="600" height="363" alt="Actility"><br/><br/></p>

**3\. Enter Settings & Add device**

In order to add the device, Cayenne needs to know some information about the device and how it will be shown on the dashboard.

1.  Give the device a name. In our case, we’ll enter “LoRa Pulse” in the **Name** field.
2.  Enter the [DevEUI](#lora-about-deveuis) for this device into the **DevEUI** field.
3.  Our device has been previously manually registered with Actility. Select “Already Registered” in the **Activation Mode** field.
4.  Click **Add LoRa device**.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-Device-Actility-LoRa-Pulse-already-registered.png" width="600" height="363" alt="Actility"><br/><br/></p>

The LoRa Pulse widget has been added to your dashboard and Cayenne will automatically add widgets for the sensors on the device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status of the water, gas, electricity & heat sensors on the device.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160819153512/LoRa-device-dashboard.png" width="600" height="363" alt="Actility"><br/><br/></p>


####Over the Air Activation

In Over the Air Activation (OTAA), devices are pre-provisioned to work on a specific LoRa network. To use Activation by Personalization, the LoRa hardware is ordered preconfigured by the Device Manufacturer for a given setup. This removes any additional user interaction necessary to activate these devices once deployed.

**Items you will need:**

1.  Which [LoRa device](#lora-actility-supported-devices) is being added?
2.  What is the unique [DevEUI](#lora-about-deveuis) for the device? (Although this information is not needed for APB activation, Cayenne will need to know this information for communication with the device after it has been added.)
3.  **AppEUI** – The AppEUI is a global application ID that uniquely identifies the application provider (i.e., owner) of the device. The AppEUI is stored in the device before the activation procedure is executed.
4.  **Appkey** – Cryptographic Key. The AppKey is a key specific for the end-device that is assigned by the application owner to the end-device and most likely derived from an application-specific root key exclusively known to and under the control of the application provider.
5.  **Username** – Your username for your account on the network. Along with your password, this is used to authenticate your request to add the device to the network. Refer to your network provider if you need this information.
6.  **Password** – Your password for your account on the network. Along with your network username, this is used to authenticate your request to add the device to the network. Refer to your network provider if you need this information.

_TIP: Cayenne will store your **Username** and will temporarily cache your **Password**. This can save time if you are adding several devices to your dashboard._

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-Device-Actility-LoRa-Pulse-otaa-1.png" width="600" height="363" alt="Actility"><br/><br/></p>

Once you have entered in the required information, click on **Add LoRa device**. Cayenne will activate your device on the network and your dashboard will appear after a few moments. Cayenne will automatically create widgets for all sensors included with your device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status the sensors on the device.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/LoRa-dashboard.png" width="600" height="363" alt="Actility"><br/><br/></p>

####Activation by Personalization

In Activation by Personalization (APB), devices are pre-provisioned to work on a specific LoRa network. To use Activation by Personalization, the LoRa hardware is ordered preconfigured by the Device Manufacturer for a given setup. This removes any additional user interaction necessary to activate these devices once deployed.

**Items you will need:**

1.  Which [LoRa device](#lora-actility-supported-devices) is being added?
2.  What is the unique [DevEUI](#lora-about-deveuis) for the device being added? (Although this information is not needed for APB activation, Cayenne will need to know this information for communication with the device after it has been added.)
3.  **AppSKey** – The AppSKey is an application session key specific for the end-device. It is used by both the network server and the end-device to encrypt and decrypt the payload field of application-specific data messages. It is also used to calculate and verify an application-level MIC that may be included in the payload of application-specific data messages.
4.  **NwkSKey** – The NwkSKey is a network session key specific for the end-device. It is used by both the network server and the end-device to calculate and verify the MIC (message integrity code) of all data messages to ensure data integrity. It is further used to encrypt and decrypt the payload field of a MAC only data messages.
5.  **Username** – Your username for your account on the network. Along with your password, this is used to authenticate your request to add the device to the network. Refer to your network provider if you need this information.
6.  **Password** – Your password for your account on the network. Along with your network username, this is used to authenticate your request to add the device to the network. Refer to your network provider if you need this information.

_TIP: Cayenne will store your **Username** and will temporarily cache your **Password**. This can save time if you are adding several devices to your dashboard._

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-Device-Actility-LoRa-Pulse-apb.png" width="600" height="363" alt="Actility"><br/><br/></p>

Once you have entered in the required information, click on **Add LoRa device**. Cayenne will activate your device on the network and your dashboard will appear after a few moments. Cayenne will automatically create widgets for all sensors included with your device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status the sensors on the device.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/LoRa-dashboard.png" width="600" height="363" alt="Actility"><br/><br/></p>

###Supported devices

**Actility network devices supported by Cayenne**
Cayenne currently supports the following devices on the Actility network. Support for more devices is constantly ongoing.

*   [Adeunis LoRa Demonstrator](#supported-hardware-lora-devices-adeunis-lora-demonstrator)
*   [Adeunis LoRa Field Test Device](#supported-hardware-lora-devices-adeunis-lora-field-test-device)
*   [Adeunis LoRa Pulse](#supported-hardware-lora-devices-adeunis-lora-pulse)
*   [Adeunis LoRa Sensors](#supported-hardware-lora-devices-adeunis-lora-sensors)
*   [Ascoel CO2](#supported-hardware-lora-devices-ascoel-ascoel-co2)
*   [Ascoel Door Switch](#supported-hardware-lora-devices-ascoel-ascoel-door-switch)
*   [Ascoel Motion Sensor](#supported-hardware-lora-devices-ascoel-ascoel-motion-sensor)
*   [Elsys ELT-1](#supported-hardware-lora-devices-elsys-elsys-elt-1)
*   [Elsys ERS](#supported-hardware-lora-devices-elsys-elsys-ers)
*   [Elsys ESM5k](#supported-hardware-lora-devices-elsys-elsys-esm5k)
*   [GlobalSat LS-111 CO2](#supported-hardware-lora-devices-globalsat-globalsat-ls-111-co2)
*   [GlobalSat LT-100](#supported-hardware-lora-devices-globalsat-globalsat-lt-100)
*   [Multitech mDotBox](#supported-hardware-lora-devices-multitech-mdotbox)
*   [NKE Watteco Smart Plug](#supported-hardware-lora-devices-nke-watteco-watteco-smart-plug)
*   [NKE Watteco THr](#supported-hardware-lora-devices-nke-watteco-thr)
*   [Rising HF RHF1S001](#supported-hardware-lora-devices-rising-hf-rising-hf-rhf1s001)
*   [Semtech LoRa Motes EU](#supported-hardware-lora-devices-semtech-lora-motes-eu)
*   [Semtech LoRa Motes US](#supported-hardware-lora-devices-semtech-lora-motes-usa)


##Senet Network

**About Senet** <br/>
Senet, a contributing member of the LoRa® Alliance, is the first and only public provider in North America of low-power wide-area networks (LPWANs) with its class-leading LoRa® modulation for IoT and M2M applications.

**Need an account?** <br/>
In order to register devices or add your device into Cayenne, you will need a Senet account. You may refer to [Create a Senet account](#lora-senet-network-create-account) for more information.

**Adding Senet network devices to Cayenne** <br/>
Cayenne currently supports the following registration / activation modes for devices that use the Senet network:

* [Already Registered](#lora-senet-network-add-device-to-cayenne-already-registered) – devices [manually registered](#lora-senet-network-manual-register-device) via the Senet portal.

**Supported devices**
Need to know what devices are currently supported? Check out the Senet [Supported devices](#lora-senet-network-supported-devices) section.

###Create account
To create your Senet account, visit the <a href="https://portal.senetco.com/" target="_blank">Senet Portal</a>. Follow the **Register as a new user** process located there to get started.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Senet-portal-register-account.png" width="600" height="363" alt="Senet"><br/><br/></p>

###Manual register device
Before you can use your LoRa device on the Senet network, it must be manually registered on the network using the Senet portal. The following information will help guide you through this process. Once your device has been registered with Senet, it can be [added to Cayenne](#lora-senet-network-add-device-to-cayenne).

**1\. Log into the Senet portal** <br/>
Start by going to the <a href="https://portal.senetco.com/" target="_blank">Senet portal</a> and logging into your account.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822125129/Senet-login.png" width="600" height="318" alt="Senet"><br/><br/></p>

**2\. Register new device** <br/>

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/pCnxVzJVDWk" frameborder="0" allowfullscreen></iframe></p>

To get started with a new device, click on the **Register new device** button. Enter in the **Device ID** and a description for the device. Click **Submit** to register the device.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822125357/Senet-register-button-hlt.png" width="600" height="336" alt="Senet"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822125416/Senet-new-node.png" width="600" height="291" alt="Senet"><br/><br/></p>

**3\. Setup device forwarding to Cayenne** <br/>

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/T7m0f8UCdQk" frameborder="0" allowfullscreen></iframe></p>

In order for Cayenne to be able to able to receive your device’s information, you will need to setup packet forwarding in the Device Setup/Edit screen. Click on the device in the device list to open its dashboard.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822125444/Senet-device-dashboard.png" width="600" height="410" alt="Senet"><br/><br/></p>

From the menu, select **Device Edit** and the *Device Setup/Edit* screen appears.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822125508/Senet-menu-device-edit.png" width="600" height="208" alt="Senet"><br/><br/></p>

There are two options for setting up forwarding to Cayenne. In the first option, click on the dropdown for the **Forward To** and select the **MyDevices** option from the list.

*Tip: Be sure the **Forward RF Data** checkbox is selected to see signal strength data in Cayenne.*

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Senet-device-setup.png" width="600" height="194" alt="Senet"><br/><br/></p>

In the second option, you can manually enter the URL for forwarding. To do so, select **HTTP Post** from the **Forward To** dropdown. The **Packet Format** can remain at its default of *JSON*. Next, enter in the Cayenne URL for the Senet API into the **URL** field, using **https://longrangeapi.mydevices.com/longrange/api/senet/messages/add**.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Senet-device-setup-using-URL.png" width="600" height="216" alt="senet-device-setup-using-url"><br/><br/></p>

**4\. Programming the device** <br/>
Some devices will come from your device supplier preprogrammed and ready to be used immediately. Other devices will require you to program the device manually. If your device is preprogrammed, it can now be deployed and connected to the network for usage.

If your device needs to be programmed, you should now proceed with programming/flashing the device. Because this process is different for each device, you should refer to the instructions for your device for any specific information you need to perform this step.

**5\. Add your device in Cayenne** <br/>
Once your device has been registered, programmed and is online, you can then proceed with adding an [Already Registered device](#lora-senet-network-add-device-to-cayenne-already-registered) in Cayenne. This will add your new device into the list of devices shown in Cayenne.


###Add device to Cayenne
In order for your LoRa device to appear in your dashboard, it must be added from the Cayenne dashboard.

Click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="200" height="192" alt="Senet"><br/><br/></p>

From the list of devices & widgets that appears, click **LoRa** and select the **Senet** Network option to view a list of Senet supported devices.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-LoRa-device-Senet-menu.png" width="600" height="362" alt="Senet"><br/><br/></p>

After selecting the device that you wish to add, settings for that device will appear. As Senet currently only supports manual device registration, Cayenne will walk you through adding your [previously registered device](#lora-senet-network-manual-register-device).

In the following section, we’ll walk you through this process.

####Already Registered

Once your device has been previously registered on the Senet network, it can be quickly & easily added to Cayenne. Once added, your device and all of its sensors will appear in your dashboard.

**Items you will need:**

1.  Which [LoRa device](#lora-senet-network-supported-devices) is being added?
2.  Your device will need to have been previously registered on the network. Refer to [Manual device registration](#lora-senet-network-manual-register-device) if you need help with manually registering your device on the network.
3.  What is the unique [DevEUI](#lora-about-deveuis) for the device being added?

To see how easy it is, let’s walk through an example of connecting an [Multitech mDotBox](#supported-hardware-lora-devices-multitech-mdotbox) which was previously registered under a [Senet account](#lora-senet-network-create-account).

**1\. Choose the Network** <br/>
Make sure the **Senet** network is selected in the list of Networks.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-LoRa-device-Senet-menu-1.png" width="600" height="362" alt="Senet"><br/><br/></p>

**2\. Select the Device** <br/>
Select your device from among the list supported Senet devices. In this case, we’ll select the **Multitech mDotBox**.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-LoRa-device-mDotBox-selected.png" width="600" height="362" alt="Senet"><br/><br/></p>

**3\. Enter Settings & Add device** <br/>
In order to add the device, Cayenne needs to know some information about the device and how it will be shown on the dashboard.

1.  Give the device a name. In our case, we’ll enter “mDotBox” in the **Name** field.
2.  Enter the [DevEUI](#lora-about-deveuis) for this device into the **DevEUI** field.
3.  Our device has been previously manually registered with Senet. Make sure “Already Registered” is selected in the **Activation Mode** field.
4.  Click **Add LoRa device**.

<p style="text-align:center"><br/><img src="http://www.cayenne-mydevices.com/CayenneStaging/wp-content/uploads/Add-Device-Senet-mDotBox-already-registered.png" width="600" height="362" alt="Senet"><br/><br/></p>

The Multitech mDotBox device has been added to your dashboard and Cayenne will automatically add widgets for the sensors on the device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status of the various sensors on the device.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160819153512/LoRa-device-dashboard.png" width="600" height="407" alt="Senet"><br/><br/></p>

###Supported devices
**Senet network devices supported by Cayenne**
Cayenne currently supports the following devices on the Senet network. Support for more devices is constantly ongoing.

*   [Adeunis LoRa Field Test Device](#supported-hardware-lora-devices-adeunis-lora-field-test-device)
*   [Ascoel CO2](#supported-hardware-lora-devices-ascoel-ascoel-co2)
*   [Ascoel Door Switch](#supported-hardware-lora-devices-ascoel-ascoel-door-switch)
*   [Ascoel Motion Sensor](#supported-hardware-lora-devices-ascoel-ascoel-motion-sensor)
*   [Elsys ELT-1](#supported-hardware-lora-devices-elsys-elsys-elt-1)
*   [Elsys ERS](#supported-hardware-lora-devices-elsys-elsys-ers)
*   [Elsys ESM5k](#supported-hardware-lora-devices-elsys-elsys-esm5k)
*   [GlobalSat LS-111 CO2](#supported-hardware-lora-devices-globalsat-globalsat-ls-111-co2)
*   [GlobalSat LT-100](#supported-hardware-lora-devices-globalsat-globalsat-lt-100)
*   [Multitech mDotBox](#supported-hardware-lora-devices-multitech-mdotbox)
*   [NKE Watteco Smart Plug](#supported-hardware-lora-devices-nke-watteco-watteco-smart-plug)
*   [NKE Watteco THr](#supported-hardware-lora-devices-nke-watteco-thr)
*   [Rising HF RHF1S001](#supported-hardware-lora-devices-rising-hf-rising-hf-rhf1s001)
*   [Semtech LoRa Motes US](#supported-hardware-lora-devices-semtech-lora-motes-usa)
