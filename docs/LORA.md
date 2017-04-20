<p id="lora" class="anchor-link"></p>

# LoRa®

<p id="lora-information" class="anchor-link"></p>
<p id="overview-lora" class="anchor-link"></p>

## Overview
LoRa is a wireless technology developed to create the low-power, wide-area networks (LPWANs) required for machine-to-machine (M2M) and Internet of Things (IoT) applications. The technology offers a very compelling mix of long range, low power consumption and secure data transmission and is gaining significant traction in IoT networks being deployed by wireless network operators.

A network based on LoRa wireless technology can provide coverage that is greater in range compared to that of existing cellular networks. In fact, many mobile network operators have chosen to complement their existing cellular/wireless networks with a LPWAN based on LoRa technology because it is easy to plug into their existing infrastructure and also allows them to offer their customers a solution to serve more IoT battery-operated applications.

LoRa technology originally developed by Semtech is now utilized by the over 400 members of the LoRa Alliance, a non-profit organization focused on standardizing LoRa Technology for IoT/M2M and creating a strong ecosystem to scale the technology. To date, the alliance has developed a global LPWAN specification, known as LoRaWAN™, to help standardize LPWANs and foster the adoption of these networks to enable IoT, M2M, smart city, and industrial applications.

<p id="how-it-works-lora" class="anchor-link"></p>
<p id="lora-how-lorawan-works" class="anchor-link"></p>

## How LoRaWAN™ works
LoRaWAN™ is a protocol specification based on the LoRa technology developed by the LoRa Alliance. LoRaWAN targets the basic needs of LoRa usage for IoT by providing Addressing, Routing and Security.

Topology of a LoRaWAN network consists of several elements.

* **End Nodes:** End nodes are elements such as sensors, which are usually remotely located.
* **Concentrator / Gateway:** Gateways are access points for for end nodes (e.g. sensors), aggregating data and communicating that data to a central network server via standard IP connections. Several gateways can be co-located in an area and can transparently share a single connection to the network server.
* **Network Server:** The LoRa Network Server acts to eliminate duplicate packets, manages security and data rates.
* **Application Server:** Application Servers manage payload security and performs analysis to utilize sensor data. Cayenne operates as an Application Server.

<p id="device-information-lora" class="anchor-link"></p>


## About DevEUIs

LoRa devices have a unique identifier (DevEUI) that is assigned to the device by the chip manufacturer. This identifier is used to uniquely identify the device on the network. Cayenne will need to know the DevEUI for your device, regardless of whether it is already registered, or if the device needs to be activated for the first time.

<p id="using-a-public-gateway-lora" class="anchor-link"></p>

## Cayenne Low Power Payload

### Overview

The Cayenne Low Power Payload (LPP) provides a convenient and easy way to send data over LPWAN networks such as LoRaWAN.  The Cayenne LPP is compliant with the payload size restriction, which can be lowered down to 11 bytes, and allows the device to send multiple sensor data at one time.  

Additionally, the Cayenne LPP allows the device to send different sensor data in different frames. In order to do that, each sensor data must be prefixed with two bytes:

- **Data Channel:** Uniquely identifies each sensor in the device across frames, eg. “indoor sensor”
- **Data Type:** Identifies the data type in the frame, eg. “temperature”.

### Payload structure
<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>1 Byte</b></td>
<td style="font-size: 15px; padding: 10px;"><b>1 Byte</b></td>
<td style="font-size: 15px; padding: 10px;"><b>N Bytes</b></td>
<td style="font-size: 15px; padding: 10px;"><b>1 Byte</b></td>
<td style="font-size: 15px; padding: 10px;"><b>1 Byte</b></td>
<td style="font-size: 15px; padding: 10px;"><b>M Bytes</b></td>
<td style="font-size: 15px; padding: 10px;"><b> ... </b></td>
</tr>
<tr>
<td>Data1 Ch.</td>
<td>Data1 Type</td>
<td>Data1</td>
<td>Data2 Ch.</td>
<td>Data2 Type</td>
<td>Data2</td>
<td>...</td>
</tr>
</tbody>
</table>

### Data Types

Data Types conform to the IPSO Alliance Smart Objects Guidelines, which identifies each data type with an “Object ID”.  However, as shown below, a conversion is made to fit the Object ID into a single byte.

```
LPP_DATA_TYPE = IPSO_OBJECT_ID - 3200
```

Each data type can use 1 or more bytes to send the data according to the following table.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Type</b></td>
<td style="font-size: 15px; padding: 10px;"><b>IPSO</b></td>
<td style="font-size: 15px; padding: 10px;"><b>LPP</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Hex</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Data Size</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Data Resolution per bit</b></td>
</tr>
<tr>
<td>Digital Input</td>
<td>3200</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>Digital Output</td>
<td>3201</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>Analog Input</td>
<td>3202</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>0.01 Signed</td>
</tr>
<tr>
<td>Analog Output</td>
<td>3203</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>0.01 Signed</td>
</tr>
<tr>
<td>Illuminance Sensor</td>
<td>3301</td>
<td>101</td>
<td>65</td>
<td>2</td>
<td>1 Lux Unsigned MSB</td>
</tr>
<tr>
<td>Presence Sensor</td>
<td>3302</td>
<td>102</td>
<td>66</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>Temperature Sensor</td>
<td>3303</td>
<td>103</td>
<td>67</td>
<td>2</td>
<td>0.1 °C Signed MSB</td>
</tr>
<tr>
<td>Humidity Sensor</td>
<td>3304</td>
<td>104</td>
<td>68</td>
<td>1</td>
<td>0.5 % Unsigned</td>
</tr>
<tr>
<td>Accelerometer</td>
<td>3313</td>
<td>113</td>
<td>71</td>
<td>6</td>
<td>0.001 G Signed MSB per axis</td>
</tr>
<tr>
<td>Barometer</td>
<td>3315</td>
<td>115</td>
<td>73</td>
<td>2</td>
<td>0.1 hPa Unsigned MSB</td>
</tr>
<tr>
<td>Gyrometer</td>
<td>3334</td>
<td>134</td>
<td>86</td>
<td>6</td>
<td>0.01 °/s Signed MSB per axis</td>
</tr>
<tr>
<td rowspan="3">GPS Location</td>
<td rowspan="3">3336</td>
<td rowspan="3">136</td>
<td rowspan="3">88</td>
<td rowspan="3">9</td>
<td>Latitude : 0.0001 ° Signed MSB</td>
</tr>
<tr>
<td>Longitude : 0.0001 ° Signed MSB</td>
</tr>
<tr>
<td>Altitude : 0.01 meter Signed MSB</td>
</tr>
</tbody>
</table>

### Examples

#### Device with 2 temperature sensors

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Payload (Hex)</b></td>
<td style="font-size: 15px; padding: 10px;" colspan="2">03 67 01 10 05 67 00 FF</td>
</tr>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Data Channel</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Type</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Value</b></td>
</tr>
<tr>
<td>03 ⇒ 3</td>
<td>67 ⇒ Temperature</td>
<td>0110 = 272 ⇒ 27.2°C</td>
</tr>
<tr>
<td>05 ⇒ 5</td>
<td>67 ⇒ Temperature</td>
<td>00FF = 255 ⇒ 25.5°C</td>
</tr>
</tbody>
</table>

#### Device with temperature and acceleration sensors

**Frame N**
<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Payload (Hex)</b></td>
<td style="font-size: 15px; padding: 10px;" colspan="2">01 67 FF D7</td>
</tr>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Data Channel</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Type</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Value</b></td>
</tr>
<tr>
<td>01 ⇒ 1</td>
<td>67 ⇒ Temperature</td>
<td>FFD7 = -41 ⇒ -4.1°C</td>
</tr>
</tbody>
</table>

**Frame N+1**
<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Payload (Hex)</b></td>
<td style="font-size: 15px; padding: 10px;" colspan="2">06 71 04 D2 <i>FB 2E</i> <i>00 00</i></td>
</tr>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Data Channel</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Type</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Value</b></td>
</tr>
<tr>
<td rowspan="3">06 ⇒ 6</td>
<td rowspan="3">71 ⇒ Accelerometer</td>
<td>X: 04D2 = +1234 ⇒ +1.234G</td>
</tr>
<tr>
<td><i>Y: FB2E = -1234 ⇒ -1.234G</i></td>
</tr>
<tr>
<td><i>Z: 0000 = 0 ⇒ 0G</i></td>
</tr>
</tbody>
</table>

#### Device with GPS

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Payload (Hex)</b></td>
<td style="font-size: 15px; padding: 10px;" colspan="2">01 88 06 76 5f <i>f2 96 0a</i> <i>00 03 e8</i></td>
</tr>
<tr>
<td style="font-size: 15px; padding: 10px;"><b>Data Channel</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Type</b></td>
<td style="font-size: 15px; padding: 10px;"><b>Value</b></td>
</tr>
<tr>
<td rowspan="3">01 ⇒ 1</td>
<td rowspan="3">88 ⇒ GPS</td>
<td>Latitude: 06765f ⇒ 42.3519</td>
</tr>
<tr>
<td><i>Longitude: F2960a ⇒ -87.9094</i></td>
</tr>
<tr>
<td><i>Altitude: 0003E8 ⇒ 10 meters</i></td>
</tr>
</tbody>
</table>

### IPSO Smart Objects Reference

For full information about IPSO Smart Objects, see <a href="http://www.ipso-alliance.org/" target="_blank">http://www.ipso-alliance.org/</a>.

```
IPSO Smart Objects are based on the object model specified in OMA LightWeight M2M [1] Chapter 6, 
Identifiers and Resources.
					
An IPSO Smart Object is a specified collection of reusable resources (See Table 2, Reusable Resources) 
that has a well-known object ID (See Table 1, Smart Objects) and which represents a particular type of 
physical sensor, actuator, connected object or other data source. The reusable resources,which make up 
the Smart Object, represent static and dynamic properties of the connected physical object and the 
embedded software contained therein.
					
This document defines a set of IPSO Smart Objects, which conform to the OMA LWM2MObject Model, and 
which can be used as data objects, or web objects, to represent common sensors, actuators, and data 
sources.
					
Although OMA LWM2M is based on the IETF CoAP [2] protocol, these objects may be used with other 
transport protocols (e.g. HTTP [3] with REST [4]) by supporting the Content-Types and access methods 
defined in [1]. 
```
   IPSO Smart Objects Guideline - Starter Pack - Version 1.0 ©2014 IPSO Alliance


The following section provides information extracted from the IPSO Smart Objects specifications.  It includes all of the Data Types (object ID) that can be used with Cayenne LPP. **Therefore, the current implementation is limited to the data types listed in the [Data Types section](#lora-cayenne-low-power-payload-data-types).**

#### Starter Pack Data Types

For full specification, see <a href="http://www.ipso-alliance.org/so-starter-pack/" target="_blank">http://www.ipso-alliance.org/so-starter-pack/</a>.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170118152251/Cayenne-LPP-Starter-Pack-Data-Types.png" width="660" height="851" alt="IPSO Starter Pack Data Types"><br/><br/></p>

#### Expansion Pack Data Types

For full specification, see  <a href="http://www.ipso-alliance.org/so-expansion-pack/" target="_blank">http://www.ipso-alliance.org/so-expansion-pack/</a>.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170118152253/Cayenne-LPP-Expansion-Pack-Data-Types.png" width="660" height="1051" alt="IPSO Expansion Pack Data Types"><br/><br/></p>

### Reference Implementation

#### Cayenne LPP C/C++ constants definitions

```
#define LPP_DIGITAL_INPUT       0       // 1 byte
#define LPP_DIGITAL_OUTPUT      1       // 1 byte
#define LPP_ANALOG_INPUT        2       // 2 bytes, 0.01 signed
#define LPP_ANALOG_OUTPUT       3       // 2 bytes, 0.01 signed
#define LPP_LUMINOSITY          101     // 2 bytes, 1 lux unsigned
#define LPP_PRESENCE            102     // 1 byte, 1
#define LPP_TEMPERATURE         103     // 2 bytes, 0.1°C signed
#define LPP_RELATIVE_HUMIDITY   104     // 1 byte, 0.5% unsigned
#define LPP_ACCELEROMETER       113     // 2 bytes per axis, 0.001G
#define LPP_BAROMETRIC_PRESSURE 115     // 2 bytes 0.1 hPa Unsigned
#define LPP_GYROMETER           134     // 2 bytes per axis, 0.01 °/s
#define LPP_GPS                 136     // 3 byte lon/lat 0.0001 °, 3 bytes alt 0.01m


// Data ID + Data Type + Data Size
#define LPP_DIGITAL_INPUT_SIZE       3
#define LPP_DIGITAL_OUTPUT_SIZE      3
#define LPP_ANALOG_INPUT_SIZE        4
#define LPP_ANALOG_OUTPUT_SIZE       4
#define LPP_LUMINOSITY_SIZE          4
#define LPP_PRESENCE_SIZE            3
#define LPP_TEMPERATURE_SIZE         4
#define LPP_RELATIVE_HUMIDITY_SIZE   3
#define LPP_ACCELEROMETER_SIZE       8
#define LPP_BAROMETRIC_PRESSURE_SIZE 4
#define LPP_GYROMETER_SIZE           8
#define LPP_GPS_SIZE                 11
```

#### Cayenne LPP C++ payload builder

This chapter describes the C++ class definition of the reference myDevices implementation, followed with by the implementation details. 

```
class CayenneLPP {
    public:
        CayenneLPP(uint8_t size);
        ~CayenneLPP();
        
        void reset(void);
        uint8_t getSize(void);
        uint8_t* getBuffer(void);
        uint8_t copy(uint8_t* buffer);
        
        uint8_t addDigitalInput(uint8_t channel, uint8_t value);
        uint8_t addDigitalOutput(uint8_t channel, uint8_t value);

        uint8_t addAnalogInput(uint8_t channel, float value);
        uint8_t addAnalogOutput(uint8_t channel, float value);

        uint8_t addLuminosity(uint8_t channel, uint16_t lux);
        uint8_t addPresence(uint8_t channel, uint8_t value);
        uint8_t addTemperature(uint8_t channel, float celsius);
        uint8_t addRelativeHumidity(uint8_t channel, float rh);
        uint8_t addAccelerometer(uint8_t channel, float x, float y, float z);
        uint8_t addBarometricPressure(uint8_t channel, float hpa);
        uint8_t addGyrometer(uint8_t channel, float x, float y, float z);
        uint8_t addGPS(uint8_t channel, float latitude, float longitude, float meters);
    
    private:
        uint8_t *buffer;
        uint8_t maxsize;
        uint8_t cursor;
        
        
};
```


**CayenneLPP::CayenneLPP(uint8_t size) : maxsize(size)**
```
Initialize the payload buffer with the given maximum size.
{
    buffer = (uint8_t*) malloc(size);
    cursor = 0;
}
```


**CayenneLPP::~CayenneLPP(void)**
```
{
    free(buffer);
}
```


**void CayenneLPP::reset(void)**
```
Reset the payload, to call before building a frame payload
{
    cursor = 0;
}
```


**uint8_t CayenneLPP::getSize(void)**
```
Returns the current size of the payload
{
    return cursor;
}
```


**uint8_t* CayenneLPP::getBuffer(void)**
```
Return the payload buffer
{
    return buffer;
}
```


**uint8_t CayenneLPP::copy(uint8_t* dst)**
```
{
    memcpy(dst, buffer, cursor);
    return cursor;
}
```


**uint8_t CayenneLPP::addDigitalInput(uint8_t channel, uint8_t value)**
```
{
    if ((cursor + LPP_DIGITAL_INPUT_SIZE) > maxsize) {
        return 0;
    }
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_DIGITAL_INPUT; 
    buffer[cursor++] = value; 
    return cursor;
}
```


**uint8_t CayenneLPP::addDigitalOutput(uint8_t channel, uint8_t value)**
```
{
    if ((cursor + LPP_DIGITAL_OUTPUT_SIZE) > maxsize) {
        return 0;
    }
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_DIGITAL_OUTPUT; 
    buffer[cursor++] = value; 

    return cursor;
}
```


**uint8_t CayenneLPP::addAnalogInput(uint8_t channel, float value)**
```
{
    if ((cursor + LPP_ANALOG_INPUT_SIZE) > maxsize) {
        return 0;
    }
    
    int16_t val = value * 100;
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_ANALOG_INPUT; 
    buffer[cursor++] = val >> 8; 
    buffer[cursor++] = val; 

    return cursor;
}
```


**uint8_t CayenneLPP::addAnalogOutput(uint8_t channel, float value)**
```
{
    if ((cursor + LPP_ANALOG_OUTPUT_SIZE) > maxsize) {
        return 0;
    }
    int16_t val = value * 100;
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_ANALOG_OUTPUT;
    buffer[cursor++] = val >> 8; 
    buffer[cursor++] = val; 

    return cursor;
}
```


**uint8_t CayenneLPP::addLuminosity(uint8_t channel, uint16_t lux)**
```
{
    if ((cursor + LPP_LUMINOSITY_SIZE) > maxsize) {
        return 0;
    }
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_LUMINOSITY; 
    buffer[cursor++] = lux >> 8; 
    buffer[cursor++] = lux; 

    return cursor;
}
```


**uint8_t CayenneLPP::addPresence(uint8_t channel, uint8_t value)**
```
{
    if ((cursor + LPP_PRESENCE_SIZE) > maxsize) {
        return 0;
    }
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_PRESENCE; 
    buffer[cursor++] = value; 

    return cursor;
}
```


**uint8_t CayenneLPP::addTemperature(uint8_t channel, float celsius)**
```
{
    if ((cursor + LPP_TEMPERATURE_SIZE) > maxsize) {
        return 0;
    }
    int16_t val = celsius * 10;
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_TEMPERATURE; 
    buffer[cursor++] = val >> 8; 
    buffer[cursor++] = val; 

    return cursor;
}
```


**uint8_t CayenneLPP::addRelativeHumidity(uint8_t channel, float rh)**
```
{
    if ((cursor + LPP_RELATIVE_HUMIDITY_SIZE) > maxsize) {
        return 0;
    }
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_RELATIVE_HUMIDITY; 
    buffer[cursor++] = rh * 2; 

    return cursor;
}
```

**uint8_t CayenneLPP::addAccelerometer(uint8_t channel, float x, float y, float z)**
```
{
    if ((cursor + LPP_ACCELEROMETER_SIZE) > maxsize) {
        return 0;
    }
    int16_t vx = x * 1000;
    int16_t vy = y * 1000;
    int16_t vz = z * 1000;
    
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_ACCELEROMETER; 
    buffer[cursor++] = vx >> 8; 
    buffer[cursor++] = vx; 
    buffer[cursor++] = vy >> 8; 
    buffer[cursor++] = vy; 
    buffer[cursor++] = vz >> 8; 
    buffer[cursor++] = vz; 

    return cursor;
}
```


**uint8_t CayenneLPP::addBarometricPressure(uint8_t channel, float hpa)**
```
{
    if ((cursor + LPP_BAROMETRIC_PRESSURE_SIZE) > maxsize) {
        return 0;
    }
    int16_t val = hpa * 10;
    
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_BAROMETRIC_PRESSURE; 
    buffer[cursor++] = val >> 8; 
    buffer[cursor++] = val; 

    return cursor;
}
```


**uint8_t CayenneLPP::addGyrometer(uint8_t channel, float x, float y, float z)**
```
{
    if ((cursor + LPP_GYROMETER_SIZE) > maxsize) {
        return 0;
    }
    int16_t vx = x * 100;
    int16_t vy = y * 100;
    int16_t vz = z * 100;
    
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_GYROMETER; 
    buffer[cursor++] = vx >> 8; 
    buffer[cursor++] = vx; 
    buffer[cursor++] = vy >> 8; 
    buffer[cursor++] = vy; 
    buffer[cursor++] = vz >> 8; 
    buffer[cursor++] = vz; 

    return cursor;
}
```


**uint8_t CayenneLPP::addGPS(uint8_t channel, float latitude, float longitude, float meters)**
```
{
    if ((cursor + LPP_GPS_SIZE) > maxsize) {
        return 0;
    }
    int32_t lat = latitude * 10000;
    int32_t lon = longitude * 10000;
    int32_t alt = meters * 100;
    
    buffer[cursor++] = channel; 
    buffer[cursor++] = LPP_GPS; 

    buffer[cursor++] = lat >> 16; 
    buffer[cursor++] = lat >> 8; 
    buffer[cursor++] = lat; 
    buffer[cursor++] = lon >> 16; 
    buffer[cursor++] = lon >> 8; 
    buffer[cursor++] = lon; 
    buffer[cursor++] = alt >> 16; 
    buffer[cursor++] = alt >> 8;
    buffer[cursor++] = alt;

    return cursor;
}
```


## Using a public network
Using a public LoRa network is the easiest way to get started using LoRa. In order to get started using a public LoRa network, you will want to first verify that yours sensors will be covered by an appropriate Network Operator. Once you know which network operator you will connect with, you can purchase devices that work on that network. You will then need an account with that operator so that you can add your devices to the network.

In order to activate a LoRa device on a network, you will need to have an account with that network. Using Cayenne, you will not need your account information if the device has already been registered on the network. If you wish to use Cayenne to help activate the device on the network, however, you will need your account information handy so that you can provide this information in order to authenticate with the network and activate the device.

Cayenne currently supports the following LoRa networks. The list of networks that work with Cayenne will keep growing.

*   [Actility](#lora-actility)
*   [Kerlink](#lora-kerlink-network)
*   [Loriot](#lora-loriot-network)
*   [OrbiWise](#lora-orbiwise-network)
*   [Senet](#lora-senet-network)
*   [Stream](#lora-stream-network)
*   [The Things Network](#lora-the-things-network)


## Actility

**About Actility**

Actility is an industry leader in Machine to Machine (M2M) large scale infrastructure with ThingPark®, the new generation standard-based M2M communication platform. Actility is a winner of the French Ministry of Research competition, has obtained the Grand Prix of the Tremplin Entreprise and has been rewarded by Innov’ Eco and CleanTech République for its particularly innovative approach in its Internet Of Things (IoT) solutions.

**Using Actility with Cayenne**

Cayenne makes it easy to use your LoRa device and the Actility network. You will need to:

1. [Create / Log into your account on Actility's ThingPark portal](#lora-actility-create-account)
2. [Setup gateway device](#lora-actility-setup-gateway-device)
3. [Create Cayenne Routing Profile](#lora-actility-create-cayenne-routing-profile)
4. [Register your device on the ThingPark portal](#lora-actility-manually-register-device)
5. [Program/Flash your device](#lora-actility-programming-the-device)
6. [Add your device to your Cayenne dashboard](#lora-actility-add-device-to-cayenne)

We will walk you through these steps in the following sections.


### Create account

To create your ThingPark account, visit the <a href="https://partners.thingpark.com/en" target="_blank">Actility ThingPark Partner's Portal</a> and click on **Try** or the <a href="https://partners.thingpark.com/explorer/register" target="_blank">Create free account</a> button to begin the process of creating your account.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170410102508/Actility-account-creation-highlight.png" width="600" height="338" alt="ThingPark create account link"><br/><br/></p>

Once your account has been created, you can <a href="https://partners.thingpark.com/en/user/login" target="_blank">log into your account</a> from the Partner portal.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170410103255/Actility-login-link.png" width="600" height="168" alt="ThingPark account login link"><br/><br/></p>

After logging into your account you will see the ThingPark Partner dashboard page. You will primarily use the *Device Manager* screen for the remainder of the documentation when configuring your account and devices to communicate with Cayenne. To access this screen, open the **side menu** and select the **Device Manager** link.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170410103431/ThingPark-partner-dashboard-with-highlight.png" width="600" height="376" alt="ThingPark dashboard with menu highlight"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170410103645/ThingPark-portal-side-menu.png" width="323" height="877" alt="Menu with device link highlght"><br/><br/></p>

After selecting the **Device Manager** link, your *Device Manager* screen will open.

_Tip: Take note of which server your account is using. For most people this will probably be **dev1.thingpark.com**. You will need to know which server you are using later when adding a device to Cayenne._

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170410104008/ThingPark-dev-server-with-highlight.png" width="600" height="393" alt="ThingPark device dashboard"><br/><br/></p>

### Setup gateway device

In order for your LoRa devices to connect to the Actility network, you must have purchased and configured a gateway device. When using the Actility network, we recommend that you purchase and configure one of the following gateway devices:

+ For use in the European Union, we recommend the **Multitech Conduit EU868**
   + You can purchase a <a href="https://market.thingpark.com/catalogsearch/result/?q=+eu868+gateway" target="_blank">Multitech Conduit EU868 here</a>
+ For use in the United States of America, we recommend the **Multitech Conduit US915**
   + You can purchase a <a href="https://market.thingpark.com/catalogsearch/result/?q=US915" target="_blank">Multitech Conduit US915 here</a>
   
**Be sure that you have an appropriate Actility gateway configured and working before continuing. Your devices will not be able to properly function without your gateway device in place.**


### Create Cayenne Routing Profile

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/rpZo-GKd7mY" frameborder="0" allowfullscreen></iframe></p>

In order for data from your device to reach Cayenne, you must create an **Application Server** that points to Cayenne in the Actility portal. You will also need to add an **AS Routing Profile** that uses this server. You only need to perform this step once. Any devices that you wish to add to Cayenne will then need to be configured to use the routing profile or Cayenne will not receive their data.

Begin by creating the **Application Server**. From the device manager, select the **Application Servers** entry and from the screen that appears, click on the **Create** button to begin creating a new server.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170119090424/Actility-Routing-Profile-1-App-Server.png" width="600" height="358" alt="Create new app server highlight"><br/><br/></p>

Give the new entry an appropriate name that you can refer to later, such as "Cayenne". After proceeding, you will see the *Application Server* screen where you can enter in information for the application server. From this screen, click on the **Add** button located in the **Add a route** section.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170119090427/Actility-Routing-Profile-2-App-Server-Route.png" width="600" height="360" alt="Add new route button highlight"><br/><br/></p>

In the *Route* section that gets added to the screen, click on the **Add** button to start adding a destination.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170119090428/Actility-Routing-Profile-2.5-App-Server-Route.png" width="600" height="361" alt="Destintation Add button highlight"><br/><br/></p>

In the *Add Destination* dialog that appears, enter in the Cayenne Actility URL and then click on the **Add** button to save your changes.

```
https://lora.mydevices.com/v1/networks/actility/uplink
```

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412073138/Create-Routing-Profile-add-destination.png" width="600" height="249" alt="Paste in Cayenne destination url"><br/><br/></p>

Now that the Application Server has been setup, we need to create the AS Routing Profile. To create this profile select the **AS routing profiles** entry on the portal. From the screen that appears, click on the **Create** button to begin creating a new profile.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170119090432/Actility-Routing-Profile-4-Profile-main.png" width="600" height="359" alt="Create new profile highlight"><br/><br/></p>

Give your profile an appropriate name, such as "Cayenne" so that you can refer to it later when you configure your devices. After giving your profile a name, you will see the *AS Routing Profile* screen. Click on the **Add** button located in the **Destinations** section.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170119090433/Actility-Routing-Profile-5-Profile-new.png" width="600" height="360" alt="Add destination button highlight"><br/><br/></p>

From the *Add Destinations* dialog that appears, be sure that the **Type** dropdown is set to *Application Server*. In the **Destinations** dropdown, be sure to select the Application Server you created earlier for Cayenne.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170119090435/Actility-Routing-Profile-6-Profile-destination.png" width="600" height="268" alt="Select app server in profile"><br/><br/></p>

After saving your changes, you will be returned to the previous screen. Be sure to click on the **Save** button to save the changes to your profile. You may now continue with creating a device that uses this profile.


### Manually register device

Before you can use your LoRa device on the Actility network, it must be registered on the network. The following information will help guide you through this process using Actility's ThingPark portal and the *Device Manager* screen.

**Create new device**

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/hxhRwEalGvk" frameborder="0" allowfullscreen></iframe></p>

To get started with a new device, right-click on the **Devices** entry in the portal and select **Create device** from the menu that appears.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822155516/ThingPark-menu-expanded-Create-device.png" width="400" height="337" alt="Actility"><br/><br/></p>

The *New device* dialog will appear. To create a new device using the Actility portal, you will need to enter in all required information for completing the device creation. The process begins by selecting an appropriate activation mode from the **Device activation** field.

Actility supports two activation modes (OTAA, APB). In most cases, you will want to select Over the Air Activation (OTAA). Let's cover the information needed for both methods.

- [Over the Air Activation (OTAA)](#lora-actility-manually-register-device-over-the-air-activation-otaa)
- [Activation By Personalization (APB)](#lora-actility-manually-register-device-activation-by-personalization-apb)

#### Over the Air Activation (OTAA)

After selecting the OTAA activation mode, the list of fields will update to show you required fields. You will need to fill in all require fields to register & activate your device with Actility. Below you will find notes on the fields seen for OTAA and specific notes as they relate to what needs to be selected in order to work with Cayenne.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160822144738/ThingPark-New-device.png" width="600" height="407" alt="Actility"><br/><br/></p>

+ Device identification
    + **Device EUI:** Enter the DevEUI for your device. This ID should come with the information included with your device, or can be found in the device configuration.
    + **Device Address:** Skip – When selecting OTAA activation, the device address will automatically be generated based on the DevEUI.
    + **Device Profile:** Actility uses this profile to correctly decode the payload, based on the device type, and display it on their dashboard. Be sure to select the correct profile for your device and which network it will be using.
    
        *TIP: You can refer to the [Supported devices section](#lora-actility-supported-devices) where we have more details on which Device Profile to select for devices.*
+ Application layer
    + **Application EUI:** Enter the AppEUI. The AppEUI is a global application ID that uniquely identifies the application provider (i.e., owner) of the device.

        *TIP: If you do not have an Applicate EUI, you can create one yourself. It must be a unique string composed of 16 alphanumeric characters.*
    + **Application key:** Enter the Appkey. The AppKey is a key specific for the end-device that is assigned by the application owner to the end-device and most likely derived from an application-specific root key exclusively known to and under the control of the application provider.

        *TIP: If you do not have an Applicate key, you can create one yourself. It must be a unique string composed of 32 alphanumeric characters.*
    + **Thingpark cloud config:** Skip – Cayenne does not require this optional field.
+ Network
    + **Connectivity plan:** Select an appropriate Actility plan here for activating your device under.
    + **AS routing profile:** Select the Cayenne route that you [created earlier](#lora-actility-create-cayenne-routing-profile) from the dropdown here. This will forward the information from your device to Cayenne so that once your device is online, Cayenne will receive its information.
+ Administrative data
    + **Device name:** Used by Actility. Cayenne does not use this information.
    + **Marker:** Used by Actility. Cayenne does not use this information.
    + **Administrative info:** Used by Actility. Cayenne does not use this information.
    + **Administrative location:** Used by Actility. Cayenne does not use this information.
+ Complete the device creation by clicking the **Create** button to create the device.

Once added, you will see your new device listed in the device list on the portal.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/ThingPark-device-list.png" width="600" height="406" alt="Actility"><br/><br/></p>

Once your device has been created, continue by making sure that your device has been [programmed/flashed](#lora-actility-programming-the-device).

#### Activation By Personalization (APB)

After selecting the APB activation mode, the list of fields will update to show you required fields. You will need to fill in all require fields to register & activate your device with Actility. Below you will find notes on the fields seen for APB and specific notes as they relate to what needs to be selected in order to work with Cayenne.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160825073849/ThingPark-New-device-APB.png" width="600" height="369" alt="Actility"><br/><br/></p>

+ Device identification
    + **Device EUI:** Enter the DevEUI for your device. This ID should come with the information included with your device, or can be found in the device configuration.
    + **Device Address:** When using APB, you will need to manually enter the hardware address here.
    + **Device Profile:** Actility uses this profile to correctly decode the payload, based on the device type, and display it on their dashboard. Be sure to select the correct profile for your device and which network it will be using.
    
        *TIP: You can refer to the [Supported devices section](#lora-actility-supported-devices) where we have more details on which Device Profile to select for devices.*
    + **Application session key:** Enter the AppSKey. The AppSKey is an application session key specific for the end-device. It is used by both the network server and the end-device to encrypt and decrypt the payload field of application-specific data messages.
    + **Network session key:** Enter the NwkSKey. The NwkSKey is a network session key specific for the end-device. It is used by both the network server and the end-device to calculate and verify the MIC (message integrity code) of all data messages to ensure data integrity. It is further used to encrypt and decrypt the payload field of a MAC only data messages.
+ Application layer
    + **Application EUI:** Enter the AppEUI. The AppEUI is a global application ID that uniquely identifies the application provider (i.e., owner) of the device.

        *TIP: If you do not have an Applicate EUI, you can create one yourself. It must be a unique string composed of 16 alphanumeric characters.*
    + **Application key:** Enter the Appkey. The AppKey is a key specific for the end-device that is assigned by the application owner to the end-device and most likely derived from an application-specific root key exclusively known to and under the control of the application provider.

        *TIP: If you do not have an Applicate key, you can create one yourself. It must be a unique string composed of 32 alphanumeric characters.*
    + **Thingpark cloud config:** Skip – Cayenne does not require this optional field.
+ Network
    + **Connectivity plan:** Select an appropriate Actility plan here for activating your device under.
    + **AS routing profile:** Select the Cayenne route that you [created earlier](#lora-actility-create-cayenne-routing-profile) from the dropdown here. This will forward the information from your device to Cayenne so that once your device is online, Cayenne will receive its information.
+ Administrative data
    + **Device name:** Used by Actility. Cayenne does not use this information.
    + **Marker:** Used by Actility. Cayenne does not use this information.
    + **Administrative info:** Used by Actility. Cayenne does not use this information.
    + **Administrative location:** Used by Actility. Cayenne does not use this information.
+ Complete the device creation by clicking the **Create** button to create the device.

Once added, you will see your new device listed in the device list on the portal.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/ThingPark-device-list.png" width="600" height="406" alt="Actility"><br/><br/></p>

Once your device has been created, continue by making sure that your device has been [programmed/flashed](#lora-actility-programming-the-device).

###  Programming the device

Some devices will come from your device supplier preprogrammed and ready to be used immediately. Other devices will require you to program the device manually. If your device is preprogrammed, it can now be deployed and connected to the network for usage.

If your device needs to be programmed, you should now proceed with programming/flashing the device. Because this process is different for each device, you should refer to the instructions for your device for any specific information you need to perform this step. If you need help, you can refer to the [Supported devices section](#lora-actility-network-supported-devices) where you will find Product page, Datasheet and User Guides for your device.

**NOTE: Be sure that your device is programmed and properly connected to the network at this time. Only after your device is programmed, online and properly forwarding data should you proceed with adding your device to Cayenne.**


### Add device to Cayenne

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/u6QuVJCUTo4" frameborder="0" allowfullscreen></iframe></p>

Once your device has been registered, programmed, configured to forward data to Cayenne and is online, you can proceed with adding the device in Cayenne so that it appears in your dashboard.

From the Cayenne Dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Actility"><br/><br/></p>

From the list of devices & widgets that appears, select the **LoRa** category and then the **Actility** Network option to view a list of Actility supported devices.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-LoRa-device-Actility-menu.png" width="600" height="363" alt="Actility"><br/><br/></p>

After selecting the device that you wish to add, settings for that device will appear. In the following section, we’ll walk you through the settings needed for adding a previously registered device.

#### Already Registered

If your device has been previously registered on the Actility network, it can be quickly & easily added to Cayenne. Once added, your device and all of its sensors will appear in your dashboard.

**Items you will need:**

1.  Which [LoRa technology device](#lora-actility-supported-devices) is being added?
2.  Your device will need to have been previously registered on the network. Refer to [Manual device registration](#lora-actility-manually-register-device) if you need help with manually registering your device on a network.
3.  What is the unique [DevEUI](#lora-about-deveuis) for the device being added?
4.  Which Actility ThingPark Server are you using?
5.  Your Actility ThingPark Email and ThingPark Password.

To see how easy it is, let’s walk through an example of connecting an [Adeunis LoRa Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse) which was previously registered under an [Actility account](#lora-actility-create-account).

**1\. Choose the Network** <br/>
Make sure the **Actility** network is selected in the list of Networks.'

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-LoRa-device-Actility-menu-1.png" width="600" height="363" alt="Actility"><br/><br/></p>

**2\. Select the Device** <br/>
Select your device from among the list supported Actility devices. In this case, we’ll select the **Adeunis Pulse**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-LoRa-device-Pulse-selected.png" width="600" height="363" alt="Actility"><br/><br/></p>

**3\. Enter Settings & Add device**

In order to add the device, Cayenne needs to know some information about the device and how it will be shown on the dashboard.

1.  Give the device a name. In our case, we’ll enter “LoRa Pulse” in the **Name** field.
2.  Enter the [DevEUI](#lora-about-deveuis) for this device into the **DevEUI** field.
3.  Our device has been previously manually registered with Actility. Select “Already Registered” in the **Activation Mode** field.
4.  From the **ThingPark Server** field, be sure to select the correct server that you are using.
5.  Enter your **ThingPark Email** and **ThingPark Password** into the corresponding fields.
6.  Click **Add device**.

<p style="text-align:center"><br/><img src="http://cloudfront-mydevices-wordpress.s3.amazonaws.com/wp-content/uploads/20170118131239/Add-Device-Actility-LoRa-Pulse-already-registered2.png" width="600" height="363" alt="Actility"><br/><br/></p>

The Pulse has been added to your dashboard and Cayenne will automatically add widgets for the sensors on the device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status of the water, gas, electricity & heat sensors on the device.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-dashboard.png" width="600" height="363" alt="Actility"><br/><br/></p>


### Supported devices

**Actility network devices supported by Cayenne**
Cayenne currently supports the following devices on the Actility network. Support for more devices is constantly ongoing.

*   [Adeunis Demonstrator](#supported-hardware-lora-devices-adeunis-adeunis-demonstrator)
*   [Adeunis Field Test Device](#supported-hardware-lora-devices-adeunis-adeunis-field-test-device)
*   [Adeunis Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse)
*   [Adeunis Sensors](#supported-hardware-lora-devices-adeunis-adeunis-sensors)
*   [Ascoel CM868LR / CMUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-cm868lr-cmus915lr)
*   [Ascoel CM868LRTH / CMUS915LRTH](#supported-hardware-lora-devices-ascoel-ascoel-cm868lrth-cmus915lrth)
*   [Ascoel CO868LR / COUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-co868lr-cous915lr)
*   [Ascoel IR868LR / IRUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-ir868lr-irus915lr)
*   [Elsys ELT-1](#supported-hardware-lora-devices-elsys-elsys-elt-1)
*   [Elsys ESM5k](#supported-hardware-lora-devices-elsys-elsys-esm5k)
*   [Elsys ERS](#supported-hardware-lora-devices-elsys-elsys-ers)
*   [GlobalSat LS-111 CO2](#supported-hardware-lora-devices-globalsat-globalsat-ls-111-co2)
*   [GlobalSat LT-100](#supported-hardware-lora-devices-globalsat-globalsat-lt-100)
*   [Haxiot Arduino Shield](#supported-hardware-lora-devices-haxiot-haxiot-arduino-shield)
*   [Multitech mDotBox](#supported-hardware-lora-devices-multitech-multitech-mdotbox)
*   [Multitech XDot](#supported-hardware-lora-devices-multitech-multitech-xdot)
*   [NKE Watteco Smart Plug](#supported-hardware-lora-devices-nke-watteco-nke-watteco-smart-plug)
*   [NKE Watteco THr](#supported-hardware-lora-devices-nke-watteco-nke-watteco-thr)
*   [Rising HF RHF1S001](#supported-hardware-lora-devices-rising-hf-rising-hf-rhf1s001)
*   [Semtech LoRaMote EU](#supported-hardware-lora-devices-semtech-semtech-loramote-eu)
*   [Semtech LoRaMote US](#supported-hardware-lora-devices-semtech-semtech-loramote-usa)


**Actility Device Profiles by device**

When setting up your device on Actility's ThingPark portal, you must select the correct **Device Profile** for your device. Below are some guidelines on which profile to select.

+ For devices used in European Union:
  + Select the Profile **LoRaWAN 1.0 class A - Rx2-SF12**
+ For devices use in United States of America:
  + Select the Profile **LoRaWAN 1.0 class A -US- Rx2-SF12**
+ Exceptions to the above:
  + If you are using the **NKE Watteco SmartPlug**, use the class C version of above configs depending on which region you are in.

    For example, with the SmartPlug being used in the US, select **LoRaWAN 1.0 class C (-US-) Rx2-SF12**
    And in the EU, select **LoRaWAN 1.0 class C - Rx2-SF12**


## Kerlink Network

**About Kerlink**

Kerlink specialises in network solutions for the Internet of Things (IoT). Its mission is to provide its clients – telecom
carriers, businesses and public authorities – with network solutions (equipment, software and services) dedicated to
the Internet of Things.

**Using Kerlink with Cayenne**

Cayenne makes it easy to use your LoRa device and the Kerlink network. You will need to:

1. [Setup gateway device](#lora-kerlink-network-setup-gateway-device)
2. [Setup traffic forwarding to Cayenne](#lora-kerlink-network-setup-traffic-forwarding-to-cayenne)
3. [Manually register device](#lora-kerlink-network-manually-register-device)
4. [Program/Flash your device](#lora-kerlink-network-programming-the-device)
5. [Add your device to your Cayenne dashboard](#lora-kerlink-network-add-device-to-cayenne)

We will walk you through these steps in the following sections.


### Setup gateway device

In order for your LoRa technology devices to connect to the Kerlink network, you must have purchased and configured a gateway device. Kerlink supports <a href="http://www.kerlink.fr/en/products" target="_blank">several different gateway devices</a>.

- **NOTE:** At this time, connection between Kerlink and Cayenne is only supported with the <a href="http://www.kerlink.fr/en/products/lora-iot-station-2/wirma-station-spn" target="_blank">Kerlink Wirnet Station SPN</a>.

**Be sure that you have your gateway configured and working before continuing. Your devices will not be able to properly function without your gateway device in place.**

#### Connect to your gateway device

Adding LoRa devices and forwarding their data to Cayenne must be configured on the Kerlink gateway device. You can do so using the gateway's web interface.

**Log into the gateway device.**

Connect with your browser to the URL / IP Address of your gateway device.

*TIP: If needed you can use a network scanner, such as the <a href="https://www.fing.io/#fingapp" target="_blank">Fing app</a> to identify devices on your network.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420150425/Kerlink-IP-Address-example.png" width="365" height="85" alt="Example enter IP address in browser"><br/><br/></p>

**Possible security warning seen on connection**

When connecting to your gateway device, you may find that your web browser complains about the connection not being secure. Depending upon which browser you are using and its security settings, you may need <a href="http://www.inmotionhosting.com/support/website/ssl/self-signed-ssl-certificate-warning" target="_blank">to take actions to proceed</a> and access the gateway content.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420150219/Kerlink-security-warning.png" width="660" height="392" alt="Example security warning from Chrome"><br/><br/></p>

**Connected to gateway device**

As soon as you are connected to the gateway device, you will see the landing screen for your device. You can proceed with configuring the gateway to forward data to Cayenne.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420150602/Kerlink-landing-screen.png" width="660" height="414" alt="Kerlink SPN landing screen"><br/><br/></p>


### Setup traffic forwarding to Cayenne

In order for data from your devices to reach Cayenne, you must configure your gateway device to forward data to Cayenne. You will need to perform this step on each Kerlink gateway device. Once logged into your Kerlink gateway interface, click on the **HTTP transmitter** option located in the **Configuration** section.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420151016/Kerlink-landing-screen-data-forward-highlight.png" width="660" height="414" alt="device routing feed screen"><br/><br/></p>

In the *HTTP transmitter* screen that appears, enter in the following information:

1. Click on the **Enable** checkbox to enable the fields shown here.
2. In the **Address** field enter in the uplink URL for the Kerlink network.

    ```
    https://lora.mydevices.com/v1/networks/kerlink/uplink/
    ```

3. Click **Save* to save the changes.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420150904/Kerlink-Cayenne-forwarding.png" width="660" height="297" alt="HTTP Transmitter configured for Cayenne"><br/><br/></p>

Your gateway is now configured to forward data to Cayenne. You can now proceed with adding devices.


### Manually register device

Before you can use your device on the Kerlink network, it must be registered on the network. To accomplish this, devices can be added to the gateway under what Kerlink calls "Fleet devices". The following information will help guide you through this process.

Click on the **Fleet** option located near the top of the gateway menu. The *Fleet* screen appears and from here you can add devices.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420151837/Kerlink-landing-screen-fleet-highlight.png" width="660" height="414" alt="Landing screen with fleet option highlighted"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420152455/Kerlink-fleet-devices-landing.png" width="660" height="333" alt="Fleet devices default screen"><br/><br/></p>

Kerlink supports two activation modes (OTAA, ABP). In most cases, you will want to select Over the Air Activation (OTAA). Let’s cover the information needed for both methods.

- [Over the Air Activation (OTAA)](#lora-kerlink-manually-register-device-over-the-air-activation-otaa)
- [Activation By Personalization (ABP)](#lora-kerlink-manually-register-device-activation-by-personalization-abp)

#### Over the Air Activation (OTAA)

Below you will find notes on the fields seen for OTAA and specific notes as they relate to what needs to be selected in order to work with Cayenne.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420153101/Kerlink-OTAA-activation.png" width="660" height="111" alt="Kerlink OTAA activation options"><br/><br/></p>

+ **Dev EUI:** Enter the DevEUI for your device. This ID should come with the information included with your device, or can be found in the device configuration.
+ **App EUI:** Enter the AppEUI. The AppEUI is a global application ID that uniquely identifies the application provider (i.e., owner) of the device.

    *TIP: If you do not have an Applicate EUI, you can create one yourself. It must be a unique string composed of 16 alphanumeric characters.*

+ **App key:** Enter the Appkey. The AppKey is a key specific for the end-device that is assigned by the application owner to the end-device and most likely derived from an application-specific root key exclusively known to and under the control of the application provider.

    *TIP: If you do not have an Applicate key, you can create one yourself. It must be a unique string composed of 32 alphanumeric characters.*

+ **Class C:** Select whether or not your device operates in continuous listening mode. If not, leave this option unselected.

    *TIP: Class C is a continuous listening mode making sense for devices that are connected to the electrical network. In this mode the network can at anytime transmit downlink message to the device.*
	
After filling in the fields for you device, click on the **Add** button to add the device. Once added, you will see your new device listed in the fleet device.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420154546/Kerlink-device-added.png" width="600" height="333" alt="Kerlink fleet device added"><br/><br/></p>

Once your device has been created, continue by making sure that your device has been [programmed/flashed](#lora-kerlink-programming-the-device).

#### Activation By Personalization (ABP)

Below you will find notes on the fields seen for ABP and specific notes as they relate to what needs to be selected in order to work with Cayenne.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420153100/Kerlink-ABP-activation.png" width="660" height="98" alt="Kerlink ABP activation options"><br/><br/></p>

+ **Dev Addr:** When using ABP, you will need to manually enter the hardware address here.

    **NOTE:** Kerlink's ABP fields does not ask you to enter the **Dev EUI** for the device. In order to properly add a device using ABP in Cayenne, an extra step is needed. Be sure to refer to the [Add your device to your Cayenne dashboard](#lora-kerlink-network-add-device-to-cayenne) section in order to make sure that your device is properly added to Cayenne.

+ **NwkSKey:** Enter the Network Session Key. The NwkSKey is a network session key specific for the end-device. It is used by both the network server and the end-device to calculate and verify the MIC (message integrity code) of all data messages to ensure data integrity. It is further used to encrypt and decrypt the payload field of a MAC only data messages.
+ **AppSKey:** Enter the Application Session Key. The AppSKey is an application session key specific for the end-device. It is used by both the network server and the end-device to encrypt and decrypt the payload field of application-specific data messages.
+ **Class C:** Select whether or not your device operates in continuous listening mode. If not, leave this option unselected.

    *TIP: Class C is a continuous listening mode making sense for devices that are connected to the electrical network. In this mode the network can at anytime transmit downlink message to the device.*
	
After filling in the fields for you device, click on the **Add** button to add the device. Once added, you will see your new device listed in the fleet device.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420154546/Kerlink-device-added.png" width="600" height="333" alt="Kerlink fleet device added"><br/><br/></p>

Once your device has been created, continue by making sure that your device has been [programmed/flashed](#lora-kerlink-programming-the-device).

###  Programming the device

Some devices will come from your device supplier preprogrammed and ready to be used immediately. Other devices will require you to program the device manually. If your device is preprogrammed, it can now be deployed and connected to the network for usage.

If your device needs to be programmed, you should now proceed with programming/flashing the device. Because this process is different for each device, you should refer to the instructions for your device for any specific information you need to perform this step. If you need help, you can refer to the [Supported devices section](#lora-kerlink-network-supported-devices) where you will find Product page, Datasheet and User Guides for your device.

**NOTE: Be sure that your device is programmed and properly connected to the network at this time. Only after your device is programmed, online and properly forwarding data should you proceed with adding your device to Cayenne.**

### Add device to Cayenne

Once your device has been registered, programmed, configured to forward data to Cayenne and is online, you can proceed with adding the device in Cayenne so that it appears in your dashboard.

From the Cayenne Dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Cayenne Add New menu"><br/><br/></p>

From the list of devices & widgets that appears, select the **LoRa** category and then the **Kerlink** Network option to view a list of supported devices.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420160324/Cayenne-Kerlink-network-list.png" width="660" height="413" alt="Cayenne showing supported Kerlink devices"><br/><br/></p>

After selecting the device that you wish to add, settings for that device will appear. In the following section, we’ll walk you through the settings needed for adding a previously registered device.

#### Already Registered

If your device has been previously registered on the Kerlink network, it can be quickly & easily added to Cayenne. Once added, your device and all of its sensors will appear in your dashboard.

**Items you will need:**

1. Which [LoRa technology device](#lora-kerlink-network-supported-devices) is being added?
2. Your device will need to have been previously registered on the network. Refer to [Manual device registration](#lora-kerlink-network-manually-register-device) if you need help with manually registering your device on a network.
3. What is the unique [DevEUI](#lora-about-deveuis) for the device being added?

To see how easy it is, let’s walk through an example of connecting an [Adeunis Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse) which was previously registered under a [the Kerlink network account](#lora-kerlink-network-create-account).

**1\. Choose the Network**

Make sure the **Kerlink** network is selected in the list of LoRaWAN Networks.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420160324/Cayenne-Kerlink-network-list.png" width="660" height="413" alt="Cayenne showing supported Kerlink devices"><br/><br/></p>

**2\. Select the Device**

Select your device from among the list supported the Kerlink network devices. In this case, we’ll select the **Adeunis Pulse**.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420160445/Cayenne-Kerlink-Pulse-selected.png" width="660" height="413" alt="Kerlink with Pulse device highlight"><br/><br/></p>

**3\. Enter Settings & Add device**

In order to add the device, Cayenne needs to know some information about the device and how it will be shown on the dashboard.

1. Give the device a name. In our case, we’ll enter “LoRa Pulse” in the **Name** field.
2. Enter the [DevEUI](#lora-about-deveuis) for this device into the **DevEUI** field.

    **NOTE: If your device was configured for Activation By Personalization (ABP), you will need to take a special step here -** Cayenne asks for the DevEUI but this information is not currently provided with Kerlink and ABP. To work around this issue, enter in 8 zeros (00000000) followed by the **Dev Addr** used during the ABP step on the gateway. Without performing this step, your ABP device will not work with Cayenne.

3. Our device has been previously manually registered with the Kerlink network. Make sure “Already Registered” is selected in the **Activation Mode** field.
4. Click **Add device**.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420123934/Cayenne-Stream-Pulse-device-settings.png" width="660" height="414" alt="Stream Pulse settings"><br/><br/></p>

The Pulse has been added to your dashboard and Cayenne will automatically add widgets for the sensors on the device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status of the water, gas, electricity & heat sensors on the device.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-dashboard.png" width="600" height="363" alt="LoRa dashboard"><br/><br/></p>


### Supported devices

**The Kerlink network devices supported by Cayenne**

Cayenne currently supports the following devices on the Kerlink network. Support for more devices is constantly ongoing.

*   [Adeunis Demonstrator](#supported-hardware-lora-devices-adeunis-adeunis-demonstrator)
*   [Adeunis Field Test Device](#supported-hardware-lora-devices-adeunis-adeunis-field-test-device)
*   [Adeunis Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse)
*   [Adeunis Sensors](#supported-hardware-lora-devices-adeunis-adeunis-sensors)
*   [Ascoel CM868LR / CMUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-cm868lr-cmus915lr)
*   [Ascoel CM868LRTH / CMUS915LRTH](#supported-hardware-lora-devices-ascoel-ascoel-cm868lrth-cmus915lrth)
*   [Ascoel CO868LR / COUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-co868lr-cous915lr)
*   [Ascoel IR868LR / IRUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-ir868lr-irus915lr)
*   [Elsys ELT-1](#supported-hardware-lora-devices-elsys-elsys-elt-1)
*   [Elsys ESM5k](#supported-hardware-lora-devices-elsys-elsys-esm5k)
*   [Elsys ERS](#supported-hardware-lora-devices-elsys-elsys-ers)
*   [GlobalSat LS-111 CO2](#supported-hardware-lora-devices-globalsat-globalsat-ls-111-co2)
*   [GlobalSat LT-100](#supported-hardware-lora-devices-globalsat-globalsat-lt-100)
*   [Haxiot Arduino Shield](#supported-hardware-lora-devices-haxiot-haxiot-arduino-shield)
*   [Multitech mDotBox](#supported-hardware-lora-devices-multitech-multitech-mdotbox)
*   [Multitech XDot](#supported-hardware-lora-devices-multitech-multitech-xdot)
*   [NKE Watteco Smart Plug](#supported-hardware-lora-devices-nke-watteco-nke-watteco-smart-plug)
*   [NKE Watteco THr](#supported-hardware-lora-devices-nke-watteco-nke-watteco-thr)
*   [Rising HF RHF1S001](#supported-hardware-lora-devices-rising-hf-rising-hf-rhf1s001)
*   [Semtech LoRaMote EU](#supported-hardware-lora-devices-semtech-semtech-loramote-eu)
*   [Semtech LoRaMote US](#supported-hardware-lora-devices-semtech-semtech-loramote-usa)


## Loriot Network

**About Loriot**

LORIOT AG is a Swiss start-up in the field of Internet of Things, founded in 2015. Loriot offers a complete end-to-end solution for real-world IoT applications, including gateway and sensor hardware. Typical customers are small and medium enterprises in the Internet of Things business, cities, municipalities and wireless network operators.

**Using Loriot with Cayenne**

Cayenne makes it easy to use your LoRa device and the Loriot network. You will need to:

1. [Create / Log into your account on Loriot's portal](#lora-loriot-network-create-account)
2. [Setup gateway device](#lora-loriot-network-setup-gateway-device)
3. [Create Cayenne Data Output](#lora-loriot-network-create-cayenne-data-output)
4. [Register your device on the Loriot portal](#lora-loriot-network-manually-register-device)
5. [Program/Flash your device](#lora-loriot-network-programming-the-device)
6. [Add your device to your Cayenne dashboard](#lora-loriot-network-add-device-to-cayenne)

We will walk you through these steps in the following sections.

**Note:** For the examples and information shown in this section we will assume that you are using the **US** server. You will find the same information on whatever server you choose, just note that some of the URLs linked in this section will be different based on the server you use.

### Create account

**Log into the Loriot portal**

To create your Loriot account, visit the <a href="https://loriot.io/register.html" target="_blank">Loriot Account Registration</a> page. From here you can enter in all the required details for creating your account, including which server you will be using.

**NOTE:** Loriot has many servers that you can use, but you will need an account on each of them in order to use that server.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Account-Registration.png" width="660" height="399" alt="Loriot account registration"><br/><br/></p>

### Setup gateway device

In order for your LoRa technology devices to connect to the Loriot network, you must have purchased and configured a gateway device. Loriot has a <a href="https://us1.loriot.io/lora-gateways.html" target="_blank">Gateway page</a> with costs and recommendations. Once you have purchased the gateway you want to use, Loriot offers guides for how to set it up for use. When logged into your account, refer to the **Documentation > Gateways** section on the Loriot portal for information.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Setup-gateway.png" width="660" height="396" alt="Loriot setup gateway"><br/><br/></p>
   
**Be sure that you have an appropriate Loriot gateway configured and working before continuing. Your devices will not be able to properly function without your gateway device in place.**

### Create Cayenne Data Output

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/euB4Axp1e2M" frameborder="0" allowfullscreen></iframe></p>

In order for data from your device to reach Cayenne, you must configure your devices in the Loriot portal to forward data to Cayenne. The Loriot portal groups devices in what they call **Applications**. If you want to use a group of devices with Cayenne, you will need to perform some configuration on the portal. You only need to perform this step once for each Application that you want to use. To set this up, click on the **Applications** button in the portal. The *Network Applications* screen appears.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Applications-highlight.png" width="660" height="478" alt="applications button highlighted"><br/><br/></p>

From the *Network Applications* screen, click on the name of the Application that you want to configure. This will open the dashboard for your Application.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Network-Applications-screen.png" width="660" height="395" alt="Network Applications screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-App-Dashboard.png" width="660" height="395" alt="application dashboard"><br/><br/></p>

From the Application screen for your device, find the **Data Output** option and click on the **Edit Output** button to change it. The *Application Output* screen will appear.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Application-Output-screen.png" width="660" height="395" alt="myDevices app dash with data output highlight"><br/><br/></p>

On the *Application Output* screen, next to the **Data Output** option select the **Change** button and a list of output types will appear. From the list of types, select the **myDevices Cayenne** option and then click on the **Confirm change** button to save the change.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170413102532/Loriot-App-Output-list-updated.png" width="660" height="414" alt="Select Cayenne from output list"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170413103214/Loriot-Change-Data-Output-updated.png" width="660" height="413" alt="Confirm data output change"><br/><br/></p>

### Manually register device

Before you can use your device on the Loriot network, it must be registered on the network. If you need to regsiter your device with Loriot, the following information will help guide you through this process using Loriot's portal.

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/q6o1AzSuo9c" frameborder="0" allowfullscreen></iframe></p>

Devices must be added into an **Application** in the Loriot portal. To enroll a new device, click on **Applications** and then select which Application your device will be added to. This will open your application's dashboard.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170413105236/Loriot-App-Dashboard-2.png" width="660" height="415" alt="application dashboard"><br/><br/></p>

From the application dashboard screen, click on **Managed devices** and the *Devices* screen appears. From the *Devices* screen, you can enroll new devices or you can import existing devices.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Devices-screen.png" width="660" height="394" alt="Devices screen"><br/><br/></p>

#### Enroll new device

Loriot makes enrolling a new device easy, all you need is the [DevEUI](#lora-about-deveuis) for your device.

**If you know your DevEUI**

If you know the DevEUI for your device, select **Enroll new device**. In the *Enroll* screen that appears, enter in your DevEUI into the **Device EUI** field and click the **Enroll** button. Loriot will take care of assigning all other keys (APPKEY, APPSKEY, NWKSKEY) and identifiers (DevAddr) for your device automatically.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Enroll-new-device-screen.png" width="660" height="394" alt="enroll new device"><br/><br/></p>

**If you don't know your DevEUI**

If you don't know your DevEUI, click on **Generate new device**. Loriot will generate your device's DevEUI and all other keys and identifiers needed and then add a device entry into your list of devices.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Devices-screen-generate-highlight.png" width="660" height="394" alt="Devices screen generate highlight"><br/><br/></p>

#### Import existing device

If you have existing devices, select either the **Import existing OTAA** or **Import existing ABP** button, depending upon whether your devices use Over the Air Activation or Activation by Personalization. You will then need to enter in all of the required information for your device.

**Note:** You will only use this feature if you have an existing device deployed in the field and are not able to re-personalize the device. In all other cases, you will want to use the new [device enrollement process](#lora-loriot-network-manually-register-device-enroll-new-device).

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Import-OTAA.png" width="660" height="394" alt="Loriot OTAA"><br/><br/></p>

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Import-ABP.png" width="660" height="394" alt="Loriot ABP"><br/><br/></p>

###  Programming the device

Some devices will come from your device supplier preprogrammed and ready to be used immediately. Other devices will require you to program the device manually. If your device is preprogrammed, it can now be deployed and connected to the network for usage.

If your device needs to be programmed, you should now proceed with programming/flashing the device. Because this process is different for each device, you should refer to the instructions for your device for any specific information you need to perform this step. If you need help, you can refer to the [Supported devices section](#lora-loriot-network-supported-devices) where you will find Product page, Datasheet and User Guides for your device.

**NOTE: Be sure that your device is programmed and properly connected to the network at this time. Only after your device is programmed, online and properly forwarding data should you proceed with adding your device to Cayenne.**

### Add device to Cayenne

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/AwFwQ4cVpIg" frameborder="0" allowfullscreen></iframe></p>

Once your device has been registered, programmed, configured to forward data to Cayenne and is online, you can proceed with adding the device in Cayenne so that it appears in your dashboard.

From the Cayenne Dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Loriot"><br/><br/></p>

From the list of devices & widgets that appears, select the **LoRa** category and then the **Loriot** Network option to view a list of Loriot supported devices.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Cayenne-dashboard-Loriot-Network-list.png" width="660" height="395" alt="Add devie with loriot selected"><br/><br/></p>

After selecting the device that you wish to add, settings for that device will appear. In the following section, we’ll walk you through the settings needed for adding a previously registered device.

#### Already Registered

If your device has been previously registered on the Loriot network, it can be quickly & easily added to Cayenne. Once added, your device and all of its sensors will appear in your dashboard.

**Items you will need:**

1. Which [LoRa technology device](#lora-loriot-network-supported-devices) is being added?
2. Your device will need to have been previously registered on the network. Refer to [Manual device registration](#lora-loriot-network-manually-register-device) if you need help with manually registering your device on a network.
3. What is the unique [DevEUI](#lora-about-deveuis) for the device being added?
4. What is your Loriot **Application ID**? You can obtain your App ID from your Application's dashboard on the Loriot portal.

   <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170413105438/Loriot-App-Dashboard-App-ID-highlight-2.png" width="660" height="415" alt="app dashboard App ID highlight"><br/><br/></p>

5. What is your Loriot **Security Token**? Yuu can obtain your Token by clicking on **Security tokens** from your Application's dashboard on the Loriot portal.

   <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170413105707/Loriot-App-Dashboard-Security-Token-higlight-2.png" width="660" height="441" alt="App dashboard Security token highlight"><br/><br/></p>

   <p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-Security-Token-screen.png" width="660" height="394" alt="Security token"><br/><br/></p>

To see how easy it is, let’s walk through an example of connecting an [Adeunis Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse) which was previously registered under an [Loriot account](#lora-loriot-network-create-account).

**1\. Choose the Network**

Make sure the **Loriot** network is selected in the list of Networks.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Cayenne-dashboard-Loriot-Network-list.png" width="660" height="395" alt="Loriot network selected"><br/><br/></p>

**2\. Select the Device**

Select your device from among the list supported Loriot devices. In this case, we’ll select the **Adeunis Pulse**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Cayenne-dashboard-Loriot-device-highlight.png" width="660" height="395" alt="Loriot device highlight"><br/><br/></p>

**3\. Enter Settings & Add device**

In order to add the device, Cayenne needs to know some information about the device and how it will be shown on the dashboard.

1. Give the device a name. In our case, we’ll enter “LoRa Pulse” in the **Name** field.
2. Enter the [DevEUI](#lora-about-deveuis) for this device into the **DevEUI** field.
3. Our device has been previously manually registered with Loriot. Make sure “Already Registered” is selected in the **Activation Mode** field.
4. Select which server your device uses from the **Loriot Server** dropdown.
5. Enter in the **Loriot App ID** for the Application this device uses on the Loriot portal.
6. Enter in the **Loriot Token** for the Application this device uses on the Loriot portal.
4. Click **Add device**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Loriot-pulse-settings.png" width="660" height="394" alt="Loriot Pulse settings"><br/><br/></p>

The Pulse has been added to your dashboard and Cayenne will automatically add widgets for the sensors on the device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status of the water, gas, electricity & heat sensors on the device.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-dashboard.png" width="600" height="363" alt="LoRa dashboard"><br/><br/></p>


### Supported devices

**Loriot network devices supported by Cayenne**

Cayenne currently supports the following devices on the Loriot network. Support for more devices is constantly ongoing.

*   [Adeunis Demonstrator](#supported-hardware-lora-devices-adeunis-adeunis-demonstrator)
*   [Adeunis Field Test Device](#supported-hardware-lora-devices-adeunis-adeunis-field-test-device)
*   [Adeunis Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse)
*   [Adeunis Sensors](#supported-hardware-lora-devices-adeunis-adeunis-sensors)
*   [Ascoel CM868LR / CMUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-cm868lr-cmus915lr)
*   [Ascoel CM868LRTH / CMUS915LRTH](#supported-hardware-lora-devices-ascoel-ascoel-cm868lrth-cmus915lrth)
*   [Ascoel CO868LR / COUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-co868lr-cous915lr)
*   [Ascoel IR868LR / IRUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-ir868lr-irus915lr)
*   [Elsys ELT-1](#supported-hardware-lora-devices-elsys-elsys-elt-1)
*   [Elsys ESM5k](#supported-hardware-lora-devices-elsys-elsys-esm5k)
*   [Elsys ERS](#supported-hardware-lora-devices-elsys-elsys-ers)
*   [GlobalSat LS-111 CO2](#supported-hardware-lora-devices-globalsat-globalsat-ls-111-co2)
*   [GlobalSat LT-100](#supported-hardware-lora-devices-globalsat-globalsat-lt-100)
*   [Haxiot Arduino Shield](#supported-hardware-lora-devices-haxiot-haxiot-arduino-shield)
*   [Multitech mDotBox](#supported-hardware-lora-devices-multitech-multitech-mdotbox)
*   [Multitech XDot](#supported-hardware-lora-devices-multitech-multitech-xdot)
*   [NKE Watteco Smart Plug](#supported-hardware-lora-devices-nke-watteco-nke-watteco-smart-plug)
*   [NKE Watteco THr](#supported-hardware-lora-devices-nke-watteco-nke-watteco-thr)
*   [Rising HF RHF1S001](#supported-hardware-lora-devices-rising-hf-rising-hf-rhf1s001)
*   [Semtech LoRaMote EU](#supported-hardware-lora-devices-semtech-semtech-loramote-eu)
*   [Semtech LoRaMote US](#supported-hardware-lora-devices-semtech-semtech-loramote-usa)

## OrbiWise Network

**About OrbiWise**

OrbiWise is a leading solution provider for Low-Power Wide–Area wireless Networks optimized for connected objects based on LoRa(TM) technology.

**Using OrbiWise with Cayenne**

Cayenne makes it easy to use your LoRa device and the OrbiWise network. You will need to:

1. [Create / Log into your account on the OrbiWise portal](#lora-orbiwise-network-create-account)
2. [Setup gateway device](#lora-orbiwise-network-setup-gateway-device)
3. [Register your device on the Orbiwise portal](#lora-orbiwise-network-manual-register-device)
4. [Setup traffic forwarding to Cayenne](#lora-orbiwise-network-setup-device-forwarding-to-cayenne)
5. [Program/Flash your device](#lora-orbiwise-network-programming-the-device)
6. [Add your device to your Cayenne dashboard](#lora-orbiwise-network-add-device-to-cayenne)

We will walk you through these steps in the following sections.


### Create account

To get an account with OrbiWise, you will need to work directly with OrbiWise. Accounts are not created manually through any sign up process.

### Setup gateway device

In order for your LoRa technology devices to connect to the OrbiWise network, you should purchase and configure a gateway device. Currently, you will obtain and use a <a href="http://www.tektelic.com/portfolio/" target="_blank">Tektelic gateway</a> that has been configured for OrbiWise and Cayenne. OrbiWise will perform this configuration for you. Since your gateway will be preconfigured to work with Cayenne, you will not need to configure any Cayenne-specific data forwarding for each device connected to that gateway.

**Be sure that your devices are covered by an appropriate OrbiWise gateway, including having the gateway configured and working for Cayenne, before continuing. Your devices will not be able to properly function without your gateway device in place.**

#### Register new gateway device

If you obtain your gateway from OrbiWise, your gateway may already be configured and registered. In such instances, you probably do not need to register your device prior to using it. If, however, you need to register your device you can do so using your OrbiWise portal.

To view the gateways under your account, log into your customer-specific OrbiWise portal and select **My Gateways** > **List Of Gateways**. You will then see the current list of gateways for your account.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/OrbiWise-My-Gateways-menu.png" width="600" height="257" alt="OrbiWise gateway screen and menu"><br/><br/></p>

To register a new gateway, click on the **Add Gateway** button and the *Add Gateway* dialog appears. The only information you'll need is the **Gateway ID** for the gateway you'll be adding. Enter this ID into the **Gateway ID** field and click **Add Gateway** to add your gateway.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/OrbiWise-Add-Gateway.png" width="600" height="192" alt="OrbiWise add gateway dialog"><br/><br/></p>


### Manual register device

Before you can use your device on the OrbiWise network, it must be registered on the network using the OrbiWise portal. The following information will help guide you through this process.

**Register new device**

Start by going to your customer-specific OrbiWise portal and logging into your account. Once logged in, you can proceed with registering a new device. From the **My Devices** menu, select **List of Devices** and the *My Devices* screen appears.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/OrbiWise-My-Devices-menu.png" width="600" height="248" alt="Orbiwise add device menu"><br/><br/></p>

From the *My Devices* screen, click on the **Add Device** button to begin the process of adding a new device. The **Add New Device** dialog appears, allowing you to enter in the required information to add and activate your device. Depending upon the **Registration type** that you will be using ([Join Procedure](#lora-orbiwise-network-manual-register-device-join-procedure) or [Presonalized](#lora-orbiwise-network-manual-register-device-presonalized)), the information you need to provide will be slightly different.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/OrbiWise-Add-new-device-Join-Procedure.png" width="600" height="259" alt="Orbiwise OTA"><br/><br/></p>

#### Join Procedure

After selecting the **Registration type** > **Join Procedure** option, the list of fields will update to show you required fields needed for **Join Procedure** registration. This registration process is similar to *Over the Air Activation* that may see with other LoRa networks. You will need to fill in all require fields to register & activate your device with OrbiWise. Below you will find notes on the fields seen for **Join Procedure** registration and specific notes as they relate to what needs to be selected in order to work with Cayenne.

+ **Device EUI:** Enter the **DevEUI** for your device. This ID should come with the information included with your device, or can be found in the device configuration.
+ **Application EUI:** Enter the **AppEUI**. The AppEUI is a global application ID that uniquely identifies the application provider (i.e., owner) of the device.

   _NOTE: The OrbiWise portal is currently under active development. Currently there is a bug in the OrbiWise portal wherein although the **AppEUI** field is required for *Join Procedure* registration, this field may not be present on the dialog. To work around this, perform the following steps:_
   1. _First select the **Registration type** > **Personalized** option to temporarily display the fields for the **Personalized** registration mode._
   2. _Enter in the **AppEUI** information into the field that *does* appear there. You only need to enter in the AppEUI here._
   3. _Then return to the **Join Precedure** tab by clicking back on **Join Procedure**._
   4. _You can then continue with registering using the **Join Procedure** registration fields._
+ **Comment:** Optional. We recommend you enter in the device name, or a description so that you can easily refer to it on the OrbiWise dashboard.
+ Complete the device registration by clicking the **Add Device** button.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/OrbiWise-Add-new-device-Join-Procedure.png" width="600" height="259" alt="Orbiwise OTA"><br/><br/></p>

#### Personalized

After selecting the **Registration type** > **Personalized** option, the list of fields will update to show you required fields needed for **Personalized** registraiton. This registration process is similar to *Activation by Personalization* that may see with other LoRa networks. You will need to fill in all require fields to register & activate your device with OrbiWise. Below you will find notes on the fields seen for Personalized registration and specific notes as they relate to what needs to be selected in order to work with Cayenne.

+ **Device EUI:** Enter the **DevEUI** for your device. This ID should come with the information included with your device, or can be found in the device configuration.
+ **Application EUI:** Enter the **AppEUI**. The AppEUI is a global application ID that uniquely identifies the application provider (i.e., owner) of the device.

   *TIP: If you do not have an Applicate EUI, you can create one yourself. It must be a unique string composed of 16 alphanumeric characters.*
+ **Comment:** Optional. We recommend you enter in the device name, or a description so that you can easily refer to it on the OrbiWise dashboard.
+ **DevAddr:** When using Personalized registration, you will need to manually enter the 4 byte hardware address here.
+ **NwkSKey:** Enter the **NwkSKey**. The NwkSKey is a network session key specific for the end-device. It is used by both the network server and the end-device to calculate and verify the MIC (message integrity code) of all data messages to ensure data integrity. It is further used to encrypt and decrypt the payload field of a MAC only data messages.
+ Complete the device creation by clicking the **Add Device** button.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/OrbiWise-Add-new-device-Personalized.png" width="600" height="344" alt="Orbiwise ABP"><br/><br/></p>

### Setup device forwarding to Cayenne

When using an OrbiWise gateway, you should not need to configure any additional data forwarding to Cayenne on the devices themselves. The OrbiWise gateway that you use should be configured to automatically forward the appropriate data to Cayenne. Once your gateway is setup and working, the LoRa devices connected to it will be ready to communicate their data with Cayenne.

###  Programming the device

Some devices will come from your device supplier preprogrammed and ready to be used immediately. Other devices will require you to program the device manually. If your device is preprogrammed, it can now be deployed and connected to the network for usage.

If your device needs to be programmed, you should now proceed with programming/flashing the device. Because this process is different for each device, you should refer to the instructions for your device for any specific information you need to perform this step. If you need help, you can refer to the [Supported devices section](#lora-orbiwise-network-supported-devices) where you will find Product page, Datasheet and User Guides for your device.

**NOTE: Be sure that your device is programmed and properly connected to the network at this time. Only after your device is programmed, online and properly forwarding data should you proceed with adding your device to Cayenne.**

_TIP: You should see data being reported on the OrbiWise portal's **Data** > **Show Packets** page. If you do not, double check the values entered for your device and consider programming/flashing the device again._

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/OrbiWise-Data-packet-activity.png" width="600" height="344" alt="Orbiwise data activity"><br/><br/></p>

### Add device to Cayenne

Once your device has been registered, programmed, and connected to a gateway that is forwarding data to Cayenne, you can proceed with adding the device in Cayenne so that it appears in your dashboard.

From the Cayenne dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="200" height="192" alt="Orbiwise"><br/><br/></p>

From the list of devices & widgets that appears, click **LoRa** and select the **OrbiWise** Network option to view a list of OrbiWise supported devices.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-LoRa-device-OrbiWise-menu.png" width="600" height="363" alt="Cayenne dashboard showing Orbiwse network"><br/><br/></p>

After selecting the device that you wish to add, settings for that device will appear. In the following section, we’ll walk you through the settings needed for adding a previously registered device.

#### Already Registered

Once your device has been previously registered on the OrbiWise network, it can be quickly & easily added to Cayenne. Once added, your device and all of its sensors will appear in your dashboard.

**Items you will need:**

1.  Which [LoRa device](#lora-orbiwise-network-supported-devices) is being added?
2.  Your device will need to have been previously registered on the network. Refer to [Manual device registration](#lora-orbiwise-network-manual-register-device) if you need help with manually registering your device on the network.
3.  What is the unique [DevEUI](#lora-about-deveuis) for the device being added?

To see how easy it is, let’s walk through an example of connecting an [Multitech mDotBox](#supported-hardware-lora-devices-multitech-multitech-mdotbox) which was previously registered under a [OrbiWise account](#lora-orbiwise-network-create-account).

**1\. Choose the Network** <br/>
Make sure the **OrbiWise** network is selected in the list of Networks.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-LoRa-device-OrbiWise-menu.png" width="600" height="363" alt="Cayenne dashboard showing Orbiwse network"><br/><br/></p>

**2\. Select the Device** <br/>
Select your device from among the list supported OrbiWise devices. In this case, we’ll select the **Multitech mDotBox**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-LoRa-device-OrbiWise-mDotBox-selected.png" width="600" height="363" alt="Cayenne dashboard with mDotBox device selected"><br/><br/></p>

**3\. Enter Settings & Add device** <br/>
In order to add the device, Cayenne needs to know some information about the device and how it will be shown on the dashboard.

1.  Give the device a name. In our case, we’ll enter “mDotBox” in the **Name** field.
2.  Enter the [DevEUI](#lora-about-deveuis) for this device into the **DevEUI** field.
3.  Our device has been previously manually registered with OrbiWise. Make sure “Already Registered” is selected in the **Activation Mode** field.
4.  Click **Add LoRa device**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-Device-OrbiWise-mDotBox-already-registered.png" width="600" height="363" alt="Cayenne dashboard with mDotBox device settings filled in"><br/><br/></p>

The Multitech mDotBox device has been added to your dashboard and Cayenne will automatically add widgets for the sensors on the device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status of the various sensors on the device.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-dashboard.png" width="600" height="363" alt="Actility"><br/><br/></p>

### Supported devices

**OrbiWise network devices supported by Cayenne**

Cayenne currently supports the following devices on the OrbiWise network. Support for more devices is constantly ongoing.

*   [Adeunis Field Test Device](#supported-hardware-lora-devices-adeunis-adeunis-field-test-device)
*   [Ascoel CM868LR / CMUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-cm868lr-cmus915lr)
*   [Ascoel CM868LRTH / CMUS915LRTH](#supported-hardware-lora-devices-ascoel-ascoel-cm868lrth-cmus915lrth)
*   [Ascoel CO868LR / COUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-co868lr-cous915lr)
*   [Ascoel IR868LR / IRUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-ir868lr-irus915lr)
*   [Elsys ELT-1](#supported-hardware-lora-devices-elsys-elsys-elt-1)
*   [Elsys ESM5k](#supported-hardware-lora-devices-elsys-elsys-esm5k)
*   [Elsys ERS](#supported-hardware-lora-devices-elsys-elsys-ers)
*   [GlobalSat LS-111 CO2](#supported-hardware-lora-devices-globalsat-globalsat-ls-111-co2)
*   [GlobalSat LT-100](#supported-hardware-lora-devices-globalsat-globalsat-lt-100)
*   [Haxiot Arduino Shield](#supported-hardware-lora-devices-haxiot-haxiot-arduino-shield)
*   [Multitech mDotBox](#supported-hardware-lora-devices-multitech-multitech-mdotbox)
*   [Multitech XDot](#supported-hardware-lora-devices-multitech-multitech-xdot)
*   [Rising HF RHF1S001](#supported-hardware-lora-devices-rising-hf-rising-hf-rhf1s001)
*   [Semtech LoRaMote US](#supported-hardware-lora-devices-semtech-semtech-loramote-usa)

## Senet Network

**About Senet**

Senet, a contributing member of the LoRa® Alliance, is the first and only public provider in North America of low-power wide-area networks (LPWANs) with its class-leading LoRa® modulation for IoT and M2M applications.

**Using Senet with Cayenne**

Cayenne makes it easy to use your LoRa technology device and the Senet network. You will need to:

1. [Create / Log into your account on the Senet portal](#lora-senet-network-create-account)
2. [Setup gateway device](#lora-senet-network-setup-gateway-device)
3. [Register your device on the Senet portal](#lora-senet-network-manual-register-device)
4. [Setup traffic forwarding to Cayenne](#lora-senet-network-setup-device-forwarding-to-cayenne)
5. [Program/Flash your device](#lora-senet-network-programming-the-device)
6. [Add your device to your Cayenne dashboard](#lora-senet-network-add-device-to-cayenne)

We will walk you through these steps in the following sections.


### Create account

To create your Senet account, visit the <a href="https://portal.senetco.io/" target="_blank">Senet Portal</a>. Click on the **Create New Account** to get started.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412110645/Senet-portal-landing.png" width="600" height="377" alt="Senet portal with create new user highlight"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412110516/Senet-Portal-create-new-user.png" width="600" height="377" alt="Senet create user dialog"><br/><br/></p>


### Setup gateway device

In order for your LoRa technology devices to connect to the Senet network, you should purchase and configure a gateway device. When using the Senet network, it is recommended that you use a MultiConnect Conduit gateway device. You can find links to an appropriate version of this device on the <a href="http://multitech.com/brands/multiconnect-conduit" target="_blank">Multitech MultiConnect Conduit page</a>.

**Be sure that your devices are covered by the Senet network, including having an appropriate gateway configured and working if needed, before continuing. Your devices will not be able to properly function without your gateway device in place.**

#### Register new gateway device

If you need to register a new gateway device, the Senet portal has instructions and the software for doing so. To begin this process, log into your Senet account and click on the **Register Devices** button. Select **Gateway** from the dialog that appears to begin the process of adding your gateway device.

**Note:** Currently only the MultiTech Conduit gateway can be registered through the Senet Portal.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412111106/Senet-add-device-or-gateway-link.png" width="600" height="376" alt="senet portal with register device button highlight"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412111304/Senet-register-device-popup-with-gateway-highlight.png" width="600" height="215" alt="register gateway link highlighted"><br/><br/></p>

The *Register Gateway* dialog that appears will walk you through the process of adding your gateway device. You can refer to Senet's own <a href="http://docs.senetco.io/docs/gw/" target="_blank">gateway documentation</a> if you need help with this step.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412111424/Senet-register-gateway-process.png" width="600" height="282" alt="Register gateway information"><br/><br/></p>

### Manual register device

Before you can use your LoRa technology device on the Senet network, it must be registered on the network using the Senet portal. The following information will help guide you through this process.

**Log into the Senet portal**

Start by going to the <a href="https://portal.senetco.io" target="_blank">Senet portal</a> and logging into your account. Once logged in, you can proceed with registering a new device.

**Register new device**

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/CrY-wAw58Ts" frameborder="0" allowfullscreen></iframe></p>

To get started with a new device, click on the **Register Devices** button. From the dialog that appears, select the **Device** option.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412111106/Senet-add-device-or-gateway-link.png" width="600" height="376" alt="senet portal with register device button highlight"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412112304/Senet-register-device-popup-with-device-highlight.png" width="600" height="215" alt="Register new device highlight"><br/><br/></p>

From the *Register Device* dialog that appears, enter in the **Device EUI** (or allocate one from here) and a description for the device. Click **Register New Device** to complete registering the device.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412112920/Senet-register-device-dialog.png" width="600" height="291" alt="Register new device dialog"><br/><br/></p>

Your device will now appear in the list of devices shown on your dashboard. You can now setup device forwarding to Cayenne.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412113335/Senet-dashboard-generic.png" width="600" height="376" alt="Senet dashboard showing devices"><br/><br/></p>


### Setup device forwarding to Cayenne

<p style="text-align:center"><iframe width="480" height="270" src="https://www.youtube.com/embed/k7V0FzuFf-I" frameborder="0" allowfullscreen></iframe></p>

In order for Cayenne to be able to able to receive your device’s information, you will need to setup packet forwarding. To do so, expand the settings for the device and click on the **cogwheel** icon. The *Edit Device* screen appears.

*TIP: Alternatively you can click on the device tile itself and then select the **cogwheel** icon that also appears on the Device screen.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412132623/Senet-access-device-settings.png" width="528" height="310" alt="Accessing device settings"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412133201/Senet-Edit-device-dialog.png" width="600" height="426" alt="Edit device dialog"><br/><br/></p>

From the *Edit Device* dialog we can setup the device so that it forwards data to Cayenne. To do so, perform the following:

1. Select the **NOTIFICATION TARGET** tab. This will expose the fields needed for forwarding.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412133750/Senet-Edit-device-with-highlight.png" width="600" height="426" alt="Edit device dialog with highlight for Notification target"><br/><br/></p>

2. Open the **Forward To** dropdown and select the **myDevices Cayenne** profile.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412133748/Senet-Edit-device-notification-target.png" width="600" height="423" alt="Notification target tab with Forward To highlight"><br/><br/></p>

3. Before data will begin forwarding, be sure that the **Status** slider is set to **Enabled**.

4. Make sure that the **RF Data** checkbox is selected to see signal strength data for your device in Cayenne.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412133747/Senet-Edit-device-notification-target-verify.png" width="600" height="397" alt="Notification target tab with all selections made"><br/><br/></p>

5. Click **Save** to save the changes.


###  Programming the device

Some devices will come from your device supplier preprogrammed and ready to be used immediately. Other devices will require you to program the device manually. If your device is preprogrammed, it can now be deployed and connected to the network for usage.

If your device needs to be programmed, you should now proceed with programming/flashing the device. Because this process is different for each device, you should refer to the instructions for your device for any specific information you need to perform this step. If you need help, you can refer to the [Supported devices section](#lora-senet-network-supported-devices) where you will find Product page, Datasheet and User Guides for your device.

**NOTE: Be sure that your device is programmed and properly connected to the network at this time. Only after your device is programmed, online and properly forwarding data should you proceed with adding your device to Cayenne.**

*TIP: You should see data being reported on the Senet portal's device list for your device. If you do not, double check the values entered for your device and consider programming/flashing the device again.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412135622/Senet-device-traffic.png" width="600" height="358" alt="Senet dashboard showing traffic from device"><br/><br/></p>


### Add device to Cayenne

Once your device has been registered, programmed, configured to forward data to Cayenne and is online, you can proceed with adding the device in Cayenne so that it appears in your dashboard.

From the Cayenne dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="200" height="192" alt="Senet"><br/><br/></p>

From the list of devices & widgets that appears, click **LoRa** and select the **Senet** Network option to view a list of Senet supported devices.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-LoRa-device-Senet-menu.png" width="600" height="362" alt="Senet"><br/><br/></p>

After selecting the device that you wish to add, settings for that device will appear. In the following section, we’ll walk you through the settings needed for adding a previously registered device.

#### Already Registered

Once your device has been previously registered on the Senet network, it can be quickly & easily added to Cayenne. Once added, your device and all of its sensors will appear in your dashboard.

**Items you will need:**

1.  Which [LoRa technology device](#lora-senet-network-supported-devices) is being added?
2.  Your device will need to have been previously registered on the network. Refer to [Manual device registration](#lora-senet-network-manual-register-device) if you need help with manually registering your device on the network.
3.  What is the unique [DevEUI](#lora-about-deveuis) for the device being added?
4.  What is your unique Senet account API Key?

To see how easy it is, let’s walk through an example of connecting an [Multitech mDotBox](#supported-hardware-lora-devices-multitech-multitech-mdotbox) which was previously registered under a [Senet account](#lora-senet-network-create-account).

**1\. Choose the Network** <br/>
Make sure the **Senet** network is selected in the list of Networks.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-LoRa-device-Senet-menu-1.png" width="600" height="362" alt="Senet"><br/><br/></p>

**2\. Select the Device** <br/>
Select your device from among the list supported Senet devices. In this case, we’ll select the **Multitech mDotBox**.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/Add-LoRa-device-mDotBox-selected.png" width="600" height="362" alt="Senet"><br/><br/></p>

**3\. Enter Settings & Add device** <br/>
In order to add the device, Cayenne needs to know some information about the device and how it will be shown on the dashboard.

1.  Give the device a name. In our case, we’ll enter “mDotBox” in the **Name** field.
2.  Enter the [DevEUI](#lora-about-deveuis) for this device into the **DevEUI** field.
3.  Our device has been previously manually registered with Senet. Make sure “Already Registered” is selected in the **Activation Mode** field.
4.  Enter your unique **Senet Account API Key** for your Senet account. This will allow Cayenne to send downlink commands to your device.

    *TIP: If you have not generated your API Key it can be found on the Senet Portal under your Account Information.*
  
    **Note: Once generated on the Senet Portal, your API key is not shown to you again. Be sure to copy & save off your API key for later reference! Failing to do so may cause you to need to regenerate your key. If you do so, remember that you will need to update the settings for all previously added devices in Cayenne as well.**
  
    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412143938/Senet-Access-Account-Info.png" width="600" height="213" alt="Senet access Account Info"><br/><br/></p>

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412150043/Senet-API-Key.png" width="600" height="377" alt="Senet portal showing API key section"><br/><br/></p>    
5.  Click **Add device**.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170412144153/myDevices-Senet-updated-Add-Device.png" width="600" height="376" alt="Cayenne Add Device with all Senet fields shown"><br/><br/></p>

The Multitech mDotBox device has been added to your dashboard and Cayenne will automatically add widgets for the sensors on the device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status of the various sensors on the device.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-dashboard.png" width="600" height="363" alt="Actility"><br/><br/></p>

### Supported devices

**Senet network devices supported by Cayenne**

Cayenne currently supports the following devices on the Senet network. Support for more devices is constantly ongoing.

*   [Adeunis Field Test Device](#supported-hardware-lora-devices-adeunis-adeunis-field-test-device)
*   [Ascoel CM868LR / CMUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-cm868lr-cmus915lr)
*   [Ascoel CM868LRTH / CMUS915LRTH](#supported-hardware-lora-devices-ascoel-ascoel-cm868lrth-cmus915lrth)
*   [Ascoel CO868LR / COUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-co868lr-cous915lr)
*   [Ascoel IR868LR / IRUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-ir868lr-irus915lr)
*   [Elsys ELT-1](#supported-hardware-lora-devices-elsys-elsys-elt-1)
*   [Elsys ESM5k](#supported-hardware-lora-devices-elsys-elsys-esm5k)
*   [Elsys ERS](#supported-hardware-lora-devices-elsys-elsys-ers)
*   [GlobalSat LS-111 CO2](#supported-hardware-lora-devices-globalsat-globalsat-ls-111-co2)
*   [GlobalSat LT-100](#supported-hardware-lora-devices-globalsat-globalsat-lt-100)
*   [Haxiot Arduino Shield](#supported-hardware-lora-devices-haxiot-haxiot-arduino-shield)
*   [Multitech mDotBox](#supported-hardware-lora-devices-multitech-multitech-mdotbox)
*   [Multitech XDot](#supported-hardware-lora-devices-multitech-multitech-xdot)
*   [Rising HF RHF1S001](#supported-hardware-lora-devices-rising-hf-rising-hf-rhf1s001)
*   [Semtech LoRaMote US](#supported-hardware-lora-devices-semtech-semtech-loramote-usa)


## Stream Network

**About Stream**

Stream Technologies is the company behind IoT-X, a Connectivity Enablement, Management & Billing platform. 

Designed for all operators of Cellular, Satellite & Low Power Wide Area networks, IoT-X is offered as a Platform as a Service (PaaS) and is fast being adopted by established network operators and new entrants into the M2M/IOT sector.

**Using Stream with Cayenne**

Cayenne makes it easy to use your LoRa device and the Stream network. You will need to:

1. [Create / Log into your account on Stream's IoT-X portal](#lora-stream-network-create-account)
2. [Setup gateway device](#lora-stream-network-setup-gateway-device)
3. [Setup traffic forwarding to Cayenne](#lora-stream-network-setup-traffic-forwarding-to-cayenne)
4. [Create Application](#lora-stream-network-create-application)
5. [Register your device on the IoT-X portal](#lora-stream-network-manually-register-device)
6. [Program/Flash your device](#lora-stream-network-programming-the-device)
7. [Add your device to your Cayenne dashboard](#lora-stream-network-add-device-to-cayenne)

We will walk you through these steps in the following sections.


### Create account

To register and configure your devices to work with Stream, you will need to use <a href="https://stream.iot-x.com/" target="_blank">Stream's IoT-X portal</a>. To get an account with Stream and to use the IoT-X portal, you will need to work directly with Stream. Accounts are not created manually through any sign up process.

*TIP: If you need help logging into your Stream IoT-X account, you can refer to Stream's <a href="http://help.iot-x.com/quickstart" target="_blank">Quick-Start Guide</a> which includes information on logging in and what to do if you need help.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420121317/Stream-login.png" width="660" height="413" alt="iotx login screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420121353/Stream-landing.png" width="660" height="415" alt="iotx landing screen after login"><br/><br/></p>

### Setup gateway device

In order for your LoRa technology devices to connect to the Stream network, you must have purchased and configured a gateway device. The Stream network supports a few different gateway devices. Refer to the **Add a LoRa Gateway** process on the IoT-X portal and to Stream's <a href="http://help.iot-x.com/userguide/lora/lora-user-actions/lora-gateway-user-actions/adding-a-gateway-to-iot-x" target="_blank">Adding a Gateway documentation</a> for more information.

**Be sure that you have an appropriate gateway configured and working before continuing. Your devices will not be able to properly function without your gateway device in place.**


#### Register new gateway device

If you need to register a new gateway device, you can do so from the IoT-X portal. To begin this process, <a href="https://stream.iot-x.com/login" target="_blank">log into your account</a> and expand the **LoRa** side menu. Select the **Gateways** option to open the *LoRa Gateways* screen. From here, click on the **Add Gateway** button to begin the process of adding a new gateway.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420121549/Stream-LoRa-menu-gateway-highlight.png" width="660" height="421" alt="iotx dashboard with LoRa menu expanded"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420121739/Stream-gateways-screen-highlight.png" width="660" height="299" alt="lora gateways screen"><br/><br/></p>

On the *Add a LoRa Gateway* screen that appears, select the gateway device that you are adding and enter in the required information.

*TIP: Stream has in-depth documentation on <a href="http://help.iot-x.com/userguide/lora/lora-user-actions/lora-gateway-user-actions/adding-a-gateway-to-iot-x" target="_blank">registering your gateway</a> available if you should need help with this process.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420121830/Stream-add-lora-gateway.png" width="660" height="310" alt="Add a LoRa Gateway screen"><br/><br/></p>

### Setup traffic forwarding to Cayenne

In order for data from your devices to reach Cayenne, you must configure the IoT-X portal to forward data to Cayenne. You only need to perform this step once globally for your account. To perform this step, expand the **Services** menu and select the **Data Routing** option. On the *Device Routing Feeds* screen that appears, click on the **Create** button to create a new device routing feed.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420122011/Stream-Services-menu.png" width="660" height="370" alt="iotx dashboard with Services menu expanded"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420134016/Stream-device-routing-feed-with-highlight.png" width="660" height="356" alt="device routing feed screen with highlight"><br/><br/></p>

In the *Add Data Routing Destination* dialog that appears, enter in the following information:

1. Give the feed a **Name** such as "Cayenne".
2. Expand the **Output Type** dropdown and select the **HTTPS POST** option.
3. In the **URL** field enter in Cayenne's Stream uplink URL.

    ```
    https://lora.mydevices.com/v1/networks/stream/uplink
    ```

	<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420123544/Stream-Cayenne-routing-feed.png" width="660" height="410" alt="device routing feed screen"><br/><br/></p>

4. Click **Add** to complete creation of your routing feed.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420122049/Stream-device-routing-feed.png" width="660" height="356" alt="device routing feed screen"><br/><br/></p>

Your account is now configured to forward device data to Cayenne. You can now proceed with creating an application and adding devices to it.

### Create Application

The IoT-X portal groups devices in what they call **Applications**. Before you can add devices you must have an application.

*TIP: Setting up [Data forwarding](#lora-stream-network-setup-traffic-forwarding-to-cayenne) to Cayenne is done globally to your account in Stream. If you already have an Application that you want to use for your devices, you do not need to create an additional application. You can skip to adding devices in that case.*

To create an application, log into the <a href="https://stream.iot-x.com" target="_blank">IoT-X portal</a> and expand the **LoRa** side menu. Select the **Applications** option to open the *LoRa Applications* screen. Click on the **Create an Application** button to begin the process of adding an application.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420121547/Stream-LoRa-menu-application-highlight.png" width="660" height="421" alt="iotx dashboard with LoRa menu expanded"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420122536/Stream-LoRa-Apps-screen-with-highlight.png" width="660" height="304" alt="lora applications screen"><br/><br/></p>

On the *Add a LoRa Application* screen that appears, enter in the required information for creating a new application.

*TIP: Stream has in-depth documentation on <a href="http://help.iot-x.com/userguide/lora/lora-user-actions/lora-application-user-actions/creating-a-lora-application-in-iot-x" target="_blank">creating a LoRa Application</a> available if you should need help with this process.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420122639/Stream-add-new-application.png" width="660" height="301" alt="Add a LoRa Application screen"><br/><br/></p>

Once you have an application that you want to use, you can then add your devices to it.


### Manually register device

Before you can use your device on the Stream network, it must be registered on the network. To accomplish this, devices must be added into an **Application** in IoT-X portal. The following information will help guide you through this process.

1. Expand the **LoRa** side menu. Select the **Applications** option to open the *LoRa Applications* screen.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420121547/Stream-LoRa-menu-application-highlight.png" width="660" height="421" alt="iotx dashboard with LoRa menu expanded"><br/><br/></p>

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420122400/Stream-LoRa-Apps-screen.png" width="660" height="304" alt="lora applications screen"><br/><br/></p>

2. Click on the name of the application you want to add the device to. The screen that appears will show you the details of your application, any existing registered devices and an *Add a Device* panel from which you can add new devices.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420123003/Stream-LoRa-Apps-highlight-an-app.png" width="660" height="304" alt="list of applications with highlight"><br/><br/></p>

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420123216/Stream-demo-app-details.png" width="660" height="360" alt="App details screen shown for demo app"><br/><br/></p>

3. Refer to the **Add a Device** panel on the application screen. You can enter in all the required details for adding your device directly here. The Stream network supports both **OTAA** and **APB** activation.

    *TIP: If you need help with this part of the process you can refer to Stream's <a href="http://help.iot-x.com/userguide/lora/lora-user-actions/lora-application-user-actions/adding-devices-to-lora-applications" target="_blank">Adding devices to LoRa Applications</a> documentation.*

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420123340/Stream-Add-a-Device-panel.png" width="573" height="393" alt="Add a device panel"><br/><br/></p>

4. Click **Add** to complete adding your device.
	
###  Programming the device

Some devices will come from your device supplier preprogrammed and ready to be used immediately. Other devices will require you to program the device manually. If your device is preprogrammed, it can now be deployed and connected to the network for usage.

If your device needs to be programmed, you should now proceed with programming/flashing the device. Because this process is different for each device, you should refer to the instructions for your device for any specific information you need to perform this step. If you need help, you can refer to the [Supported devices section](#lora-stream-network-supported-devices) where you will find Product page, Datasheet and User Guides for your device.

**NOTE: Be sure that your device is programmed and properly connected to the network at this time. Only after your device is programmed, online and properly forwarding data should you proceed with adding your device to Cayenne.**

### Add device to Cayenne

Once your device has been registered, programmed, configured to forward data to Cayenne and is online, you can proceed with adding the device in Cayenne so that it appears in your dashboard.

From the Cayenne Dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Cayenne Add New menu"><br/><br/></p>

From the list of devices & widgets that appears, select the **LoRaWAN** category and then the **Stream** Network option to view a list of supported devices.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420123748/Cayenne-Stream-network-list.png" width="660" height="415" alt="Cayenne showing supported Stream devices"><br/><br/></p>

After selecting the device that you wish to add, settings for that device will appear. In the following section, we’ll walk you through the settings needed for adding a previously registered device.

#### Already Registered

If your device has been previously registered on the Stream network, it can be quickly & easily added to Cayenne. Once added, your device and all of its sensors will appear in your dashboard.

**Items you will need:**

1. Which [LoRa technology device](#lora-stream-network-supported-devices) is being added?
2. Your device will need to have been previously registered on the network. Refer to [Manual device registration](#lora-stream-network-manually-register-device) if you need help with manually registering your device on a network.
3. What is the unique [DevEUI](#lora-about-deveuis) for the device being added?

To see how easy it is, let’s walk through an example of connecting an [Adeunis Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse) which was previously registered under a [the Stream network account](#lora-stream-network-create-account).

**1\. Choose the Network**

Make sure the **Stream** network is selected in the list of LoRaWAN Networks.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420123748/Cayenne-Stream-network-list.png" width="660" height="415" alt="Cayenne showing supported Stream devices"><br/><br/></p>

**2\. Select the Device**

Select your device from among the list of supported Stream network devices. In this case, we’ll select the **Adeunis Pulse**.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420123843/Cayenne-Stream-Pulse-selected.png" width="660" height="414" alt="Stream with Pulse device highlight"><br/><br/></p>

**3\. Enter Settings & Add device**

In order to add the device, Cayenne needs to know some information about the device and how it will be shown on the dashboard.

1. Give the device a name. In our case, we’ll enter “LoRa Pulse” in the **Name** field.
2. Enter the [DevEUI](#lora-about-deveuis) for this device into the **DevEUI** field.
3. Our device has been previously manually registered with the Stream network. Make sure “Already Registered” is selected in the **Activation Mode** field.
4. Click **Add device**.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170420123934/Cayenne-Stream-Pulse-device-settings.png" width="660" height="414" alt="Stream Pulse settings"><br/><br/></p>

The Pulse has been added to your dashboard and Cayenne will automatically add widgets for the sensors on the device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status of the sensors on the device.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-dashboard.png" width="600" height="363" alt="LoRa dashboard"><br/><br/></p>


### Supported devices

**The Stream network devices supported by Cayenne**

Cayenne currently supports the following devices on the Stream network. Support for more devices is constantly ongoing.

*   [Adeunis Demonstrator](#supported-hardware-lora-devices-adeunis-adeunis-demonstrator)
*   [Adeunis Field Test Device](#supported-hardware-lora-devices-adeunis-adeunis-field-test-device)
*   [Adeunis Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse)
*   [Adeunis Sensors](#supported-hardware-lora-devices-adeunis-adeunis-sensors)
*   [Ascoel CM868LR / CMUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-cm868lr-cmus915lr)
*   [Ascoel CM868LRTH / CMUS915LRTH](#supported-hardware-lora-devices-ascoel-ascoel-cm868lrth-cmus915lrth)
*   [Ascoel CO868LR / COUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-co868lr-cous915lr)
*   [Ascoel IR868LR / IRUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-ir868lr-irus915lr)
*   [Elsys ELT-1](#supported-hardware-lora-devices-elsys-elsys-elt-1)
*   [Elsys ESM5k](#supported-hardware-lora-devices-elsys-elsys-esm5k)
*   [Elsys ERS](#supported-hardware-lora-devices-elsys-elsys-ers)
*   [GlobalSat LS-111 CO2](#supported-hardware-lora-devices-globalsat-globalsat-ls-111-co2)
*   [GlobalSat LT-100](#supported-hardware-lora-devices-globalsat-globalsat-lt-100)
*   [Haxiot Arduino Shield](#supported-hardware-lora-devices-haxiot-haxiot-arduino-shield)
*   [Multitech mDotBox](#supported-hardware-lora-devices-multitech-multitech-mdotbox)
*   [Multitech XDot](#supported-hardware-lora-devices-multitech-multitech-xdot)
*   [NKE Watteco Smart Plug](#supported-hardware-lora-devices-nke-watteco-nke-watteco-smart-plug)
*   [NKE Watteco THr](#supported-hardware-lora-devices-nke-watteco-nke-watteco-thr)
*   [Rising HF RHF1S001](#supported-hardware-lora-devices-rising-hf-rising-hf-rhf1s001)
*   [Semtech LoRaMote EU](#supported-hardware-lora-devices-semtech-semtech-loramote-eu)
*   [Semtech LoRaMote US](#supported-hardware-lora-devices-semtech-semtech-loramote-usa)


## The Things Network

**About The Things Network**

The Things Network is building a global, open, crowd-sourced Internet of Things data network which is owned and operated by its users. It is based on the technology called LoRaWAN which is perfect for the Internet of Things as it is low energy, long range and low bandwidth. The entire city of Amsterdam was covered with this network in less than 6 weeks and inspired hundreds of cities around the world to do the same.


**Using The Things Network with Cayenne**

Cayenne makes it easy to use your LoRa device and The Things Network. You will need to:

1. [Create / Log into your account on The Things Network portal](#lora-the-things-network-create-account)
2. [Setup gateway device](#lora-the-things-network-setup-gateway-device)
3. [Create Application and configure Integration](#lora-the-things-network-create-application)
4. [Register your device on The Things Network portal](#lora-the-things-network-manually-register-device)
5. [Program/Flash your device](#lora-the-things-network-programming-the-device)
6. [Add your device to your Cayenne dashboard](#lora-the-things-network-add-device-to-cayenne)

We will walk you through these steps in the following sections.

### Create account

To create your account, visit The Things Network <a href="https://account.thethingsnetwork.org/register" target="_blank">Sign Up</a> page. From here you can enter in all the required details for creating your account.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419085534/TTN-Account-Signup.png" width="660" height="414" alt="Account Sign Up"><br/><br/></p>

**Open The Things Network Console**

Once you have your account and have signed in, you will want to access the **Console** which is where you can configure your Applications and Gateway devices. To access the console, expand your user menu and select the **CONSOLE** option. This will open the <a href="https://console.thethingsnetwork.org/" target="_blank">Console page</a>.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419085621/TTN-User-menu-expanded.png" width="660" height="278" alt="User menu expanded"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419085659/TTN-Console-landing-screen.png" width="660" height="414" alt="Console landing screen"><br/><br/></p>

### Setup gateway device

In order for your LoRa technology devices to connect to The Things Network, you must have purchased and configured a gateway device. The Things Network has a <a href="https://www.thethingsnetwork.org/docs/gateways/" target="_blank">Gateway page</a> with information on hardware supported, including their own <a href="https://www.kickstarter.com/projects/419277966/the-things-network" target="_blank">Gateway device (Coming Soon)</a> that you can use.

**Be sure that you have an appropriate gateway configured and working before continuing. Your devices will not be able to properly function without your gateway device in place.**

#### Register gateway device

If you need to register a new gateway device, you can do so from The Things Network console. To begin this process, log into your account and open the <a href="https://console.thethingsnetwork.org/" target="_blank">Console page</a>. Select the **Gateways** link to open the *Gateways* screen. From here, select the **register gateway** link to begin the process of registering a new gateway.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419090054/TTN-Console-gateway-highlight.png" width="660" height="414" alt="Console screen with gateways highlight"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419090415/TTN-gateway-register-highlight.png" width="660" height="288" alt="Console screen with gateways highlight"><br/><br/></p>

You will then be guided through setting up your gateway device.

*TIP: The Things Network has in-depth documentation on <a href="https://www.thethingsnetwork.org/docs/gateways/registration.html" target="_blank">registering your gateway</a> available if you should need help with this process.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419090740/TTN-Register-Gateway.png" width="660" height="415" alt="Register gateway screen"><br/><br/></p>


### Create Application

In order for data from your device to reach Cayenne, you must configure your devices in The Things Network portal to forward data to Cayenne. The Things Network portal groups devices in what they call **Applications**. If you want to use a group of devices with Cayenne, you will need to configure your Application to use the Cayenne. You only need to perform this step once for each Application that you want to use.

To create an application, click <a href="https://console.thethingsnetwork.org/applications/add" target="_blank">add application</a> in the console. The *Add Application* screen appears.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419091041/TTN-Applications-with-highlight.png" width="660" height="343" alt="Add Application screen"><br/><br/></p>

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419091041/TTN-Applications-with-highlight.png" width="660" height="343" alt="Add Application screen"><br/><br/></p>

On the *Add Application*, fill in the required information to create your new Application.

*Tip: If you need help with this part of the process, you can refer to The Things Network <a href="https://www.thethingsnetwork.org/docs/applications/add.html" target="_blank">documentation on this step</a>.*

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419091227/TTN-Add-new-Application.png" width="660" height="396" alt="Add Application screen"><br/><br/></p>

Once you have an application that you want to use, you can then proceed with configuring it to work with Cayenne.


#### Add Cayenne Integration

To configure your Application to forward data to Cayenne you will need to add an **Integration**. To add the Cayenne integration, perform the following steps:

*TIP: If you need additional help with this step you can also refer to The Things Network <a href="https://www.thethingsnetwork.org/docs/applications/integrations.html#add-an-integration" target="_blank">Add an Integration</a> documentation for generic help on adding integrations.*

1. Open your existing Application in the console.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419091821/TTN-Application-Overview.png" width="660" height="415" alt="Application Overview"><br/><br/></p>

2. Select **Integrations** from the top-right menu.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092016/TTN-Application-Integrations-link-highlight.png" width="660" height="415" alt="Application screen with Integrations highlight"><br/><br/></p>

3. Click the **add integration** link.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092139/TTN-Integrations-screen-with-highlight.png" width="660" height="301" alt="Integrations screen with add link highlight"><br/><br/></p>

4. Click to select the Cayenne integration option shown in the list. A list of options for the Cayenne Integration will then be shown.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092236/TTN-Cayenne-integration.png" width="660" height="328" alt="Add integration screen with Cayenne option"><br/><br/></p>

5. Configure the Cayenne integration by entering in a **Process ID**. This can be any string of text that you want, such as "cayenne-ID".

6. Complete the Cayenne integration by selecting the **Access Key** to be used for downlink commands. In most cases you will simply need to select the *default key* for your application.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092329/TTN-Cayenne-Integration-ready-to-add.png" width="660" height="393" alt="Cayenne integration screen with filled in values"><br/><br/></p>
	
7. Click **Add Integration** to complete the setup.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092439/TTN-Cayenne-integration-done.png" width="660" height="406" alt="Integrations screen with Cayenne shown as configured"><br/><br/></p>

Your application is now configured to forward data to Cayenne. You can now proceed with adding devices that use the application.

### Manually register device

Before you can use your device on The Things Network, it must be registered on the network. To accomplish this, devices must be added into an **Application** in The Things Network console. The following information will help guide you through this process.

1. In the Console, from the Application or an application’s Devices screen, click **register device**.

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419112909/TTN-Devices-screen-with-highlight.png" width="660" height="307" alt="Device screen with register link highlight"><br/><br/></p>

2. Fill in the required information for registering your device.

    *TIP: If you need help with this part of the process you can refer to The Things Network <a href="https://www.thethingsnetwork.org/docs/devices/registration.html" target="_blank">device registration</a> documentation.*

    <p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092603/TTN-Register-new-device.png" width="660" height="394" alt="Register Device screen"><br/><br/></p>

3. Click **Register** to complete adding your device.
	
###  Programming the device

Some devices will come from your device supplier preprogrammed and ready to be used immediately. Other devices will require you to program the device manually. If your device is preprogrammed, it can now be deployed and connected to the network for usage.

If your device needs to be programmed, you should now proceed with programming/flashing the device. Because this process is different for each device, you should refer to the instructions for your device for any specific information you need to perform this step. If you need help, you can refer to the [Supported devices section](#lora-the-things-network-supported-devices) where you will find Product page, Datasheet and User Guides for your device.

**NOTE: Be sure that your device is programmed and properly connected to the network at this time. Only after your device is programmed, online and properly forwarding data should you proceed with adding your device to Cayenne.**

### Add device to Cayenne

Once your device has been registered, programmed, configured to forward data to Cayenne and is online, you can proceed with adding the device in Cayenne so that it appears in your dashboard.

From the Cayenne Dashboard, click **Add New** > **Device / Widget**.

<p style="text-align:center"><br/><img src="http://d1nocd4j7qtmw4.cloudfront.net/wp-content/uploads/20160601122359/AddNew.jpg" width="260" height="252" alt="Cayenne Add New menu"><br/><br/></p>

From the list of devices & widgets that appears, select the **LoRa** category and then **The Things Network** option to view a list of supported devices.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092744/Cayenne-TTN-supported-devices.png" width="660" height="415" alt="Cayenne showing supported TTN devices"><br/><br/></p>

After selecting the device that you wish to add, settings for that device will appear. In the following section, we’ll walk you through the settings needed for adding a previously registered device.

#### Already Registered

If your device has been previously registered on The Things Network, it can be quickly & easily added to Cayenne. Once added, your device and all of its sensors will appear in your dashboard.

**Items you will need:**

1. Which [LoRa technology device](#lora-the-things-network-supported-devices) is being added?
2. Your device will need to have been previously registered on the network. Refer to [Manual device registration](#lora-the-things-network-manually-register-device) if you need help with manually registering your device on a network.
3. What is the unique [DevEUI](#lora-about-deveuis) for the device being added?

To see how easy it is, let’s walk through an example of connecting an [Adeunis Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse) which was previously registered under a [The Things Network account](#lora-the-things-network-create-account).

**1\. Choose the Network**

Make sure **The Things Network** is selected in the list of Networks.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092744/Cayenne-TTN-supported-devices.png" width="660" height="415" alt="Cayenne showing supported TTN devices"><br/><br/></p>

**2\. Select the Device**

Select your device from among the list supported The Things Network devices. In this case, we’ll select the **Adeunis Pulse**.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092906/Cayenne-TTN-Pulse-highlighted.png" width="660" height="416" alt="TTN with Pulse device highlight"><br/><br/></p>

**3\. Enter Settings & Add device**

In order to add the device, Cayenne needs to know some information about the device and how it will be shown on the dashboard.

1. Give the device a name. In our case, we’ll enter “LoRa Pulse” in the **Name** field.
2. Enter the [DevEUI](#lora-about-deveuis) for this device into the **DevEUI** field.
3. Our device has been previously manually registered with The Things Network. Make sure “Already Registered” is selected in the **Activation Mode** field.
4. Click **Add device**.

<p style="text-align:center"><br/><img src="https://s3.amazonaws.com/cloudfront-mydevices-wordpress/wp-content/uploads/20170419092952/Cayenne-TTN-Pulse-settings.png" width="660" height="413" alt="TTN Pulse settings"><br/><br/></p>

The Pulse has been added to your dashboard and Cayenne will automatically add widgets for the sensors on the device. You can now [track the location](#features-asset-tracking) of your device as well as examine the current status of the water, gas, electricity & heat sensors on the device.

<p style="text-align:center"><br/><img src="http://www.mydevices.com/cayenne/uploads/LoRa-dashboard.png" width="600" height="363" alt="LoRa dashboard"><br/><br/></p>


### Supported devices

**The Things Network devices supported by Cayenne**

Cayenne currently supports the following devices on The Things Network. Support for more devices is constantly ongoing.

*   [Adeunis Demonstrator](#supported-hardware-lora-devices-adeunis-adeunis-demonstrator)
*   [Adeunis Field Test Device](#supported-hardware-lora-devices-adeunis-adeunis-field-test-device)
*   [Adeunis Pulse](#supported-hardware-lora-devices-adeunis-adeunis-pulse)
*   [Adeunis Sensors](#supported-hardware-lora-devices-adeunis-adeunis-sensors)
*   [Ascoel CM868LR / CMUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-cm868lr-cmus915lr)
*   [Ascoel CM868LRTH / CMUS915LRTH](#supported-hardware-lora-devices-ascoel-ascoel-cm868lrth-cmus915lrth)
*   [Ascoel CO868LR / COUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-co868lr-cous915lr)
*   [Ascoel IR868LR / IRUS915LR](#supported-hardware-lora-devices-ascoel-ascoel-ir868lr-irus915lr)
*   [Elsys ELT-1](#supported-hardware-lora-devices-elsys-elsys-elt-1)
*   [Elsys ESM5k](#supported-hardware-lora-devices-elsys-elsys-esm5k)
*   [Elsys ERS](#supported-hardware-lora-devices-elsys-elsys-ers)
*   [GlobalSat LS-111 CO2](#supported-hardware-lora-devices-globalsat-globalsat-ls-111-co2)
*   [GlobalSat LT-100](#supported-hardware-lora-devices-globalsat-globalsat-lt-100)
*   [Haxiot Arduino Shield](#supported-hardware-lora-devices-haxiot-haxiot-arduino-shield)
*   [Multitech mDotBox](#supported-hardware-lora-devices-multitech-multitech-mdotbox)
*   [Multitech XDot](#supported-hardware-lora-devices-multitech-multitech-xdot)
*   [NKE Watteco Smart Plug](#supported-hardware-lora-devices-nke-watteco-nke-watteco-smart-plug)
*   [NKE Watteco THr](#supported-hardware-lora-devices-nke-watteco-nke-watteco-thr)
*   [Rising HF RHF1S001](#supported-hardware-lora-devices-rising-hf-rising-hf-rhf1s001)
*   [Semtech LoRaMote EU](#supported-hardware-lora-devices-semtech-semtech-loramote-eu)
*   [Semtech LoRaMote US](#supported-hardware-lora-devices-semtech-semtech-loramote-usa)
