# HTTP API

Sending Device to Cloud messages using HTTP API.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;"><strong>IoT in a Box:</strong> https://hub.m2c.io/v1/networks/iotinabox/uplink <br /><strong>Cayenne:</strong> https://hub.m2c.io/v1/networks/generic/uplink</td>
</tr>
</tbody>
</table>

| Header | Value  |
|-------|-------------------------------------------|
| Content-Type | application/json |
| x-subscription-key | API Key |


**Request Payload**
 ```
 {
     "eui": "UNIQUE_DEVICE_ID",
     "format": "json",
     "data": {
         "temp": 20
     }
}
```

**Request Example Using Cayenne LPP**
 ```
 {
     "eui": "UNIQUE_DEVICE_ID",
     "format": "hex",
     "data": "0367014a046882"
}
```

For <a href="https://github.com/myDevicesIoT/cayenne-docs/blob/master/docs/LORA.md#cayenne-low-power-payload">Cayenne LPP Documentation</a>

**Request Example Using MQTT API Payload**
 ```
 {
     "eui": "UNIQUE_DEVICE_ID",
     "format": "json",
     "data": [
        {
            "channel": 1,
            "value": 16.4,
            "type": "temp",
            "unit": "c"
        },
        {
            "channel": 2,
            "value": 75,
            "type": "rel_hum",
            "unit": "p"
        },
        {
            "channel": 5,
            "value": 75,
            "type": "batt",
            "unit": "v"
        },
        {
            "channel": 10,
            "value": 1,
            "type": "digital_sensor",
            "unit": "d"
        },
        {...}
    ]
}
```

The data property must be a JSON array of objects, each element having `channel`, `value`, `type` and `unit` porperties. Refer to the list of our <a href="http://mydevices.com/cayenne/docs/cayenne-mqtt-api/#cayenne-mqtt-api-supported-data-types">supported data types</a> for the `type` and `unit` properties.


## Image Upload API (Preview)

The following endpoint consumes image stream and sensor data to be processed on myDevices platform.  

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">https://hub.m2c.io/v1/networks/iotinabox/data</td>
</tr>
</tbody>
</table>

**Headers**
| Header | Value  |
|-------|-------------------------------------------|
| Content-Type | multipart/form-data |
| x-subscription-key | API Key |


One of the part of the body should be set to `image` with the filename and additional parts can be sent with sensor data. The key would be the channel number `ch_x` and value would follow our MQTT channel based payload: `type,unit=value`. [Supported list of data types](https://github.com/myDevicesIoT/cayenne-docs/blob/master/docs/MQTTAPIS.md#supported-data-types)


**Body**
| Key | Value
|-------|-------------------------------------------|
| eui | fc0f860000000001f3 - Device ID |
| snapshot | route65.jpg |
| ch_1024 | file,image |
| ch_x | type,unit=value |
| ... | ... |



**Example Curl Command**
 ```shell
curl --request POST \
  --url https://hub.m2c.io/v1/networks/iotinabox/data \
  --header 'x-subscription-key: API-KEY' \
  --header 'content-type: multipart/form-data' \
  --form snapshot=@file.jpeg \
  --form 'ch_1024=file,image=snapshot' \
  --form 'ch_171=temp,f=75' \
  --form 'ch_6=temp,f=75' \
  --form 'ch_4=rel_hum,p=80' \
  --form 'eui=fc0f860000000001f3'
```

# MQTT API

## V2

### Topic format

All topics use following format :

`v2/{serviceId}/{endpointId}/{resourceId}`

Where
- `serviceId` is the Cayenne MQTT API Service
- `endpointId` is a Service endpoint
- `resourceId` is a Cayenne MQTT API Resource

### Things Service

| **Parameter** | **Definition** |
|---------------|----------------|
| `serviceId`   | *things*       | 
| `endpointId`  | *Device ID*    |


### Topic ACL

## Common Resources

### Data Resources
| **resourceId**   | **Payload** | **Description**                                                    | **V1** | **V2** |
|------------------|-------------|--------------------------------------------------------------------|--------|--------|
| `data/{CHANNEL}` | D_TEXT  | Send value for a single sensor or actuator using text format.          | ✅ | ✅ |
| `data/json`      | D_JSON  | Send value for multiple sensors and actuators using Cayenne JSON.      | ✅ | ❌ |
| `data.json`      | D_JSON  | Send value for multiple sensors and actuators using Cayenne JSON.      | ✅ | ✅ |
| `data.bin`       | LPP     | Send value for multiple sensors and actuators using LPP binary format. | ❌ | ✅ |

#### Example

Publishing data to cloud

**Topic***
`v2/things/DEVICE_ID/data.json`

**Payload**
```json
{
  "hardware_id": "01020304050607",
  "device_id" : "optinal",
  "client_id": "MQTT_USERNAME",
  "application_id": "REALM_TENANT_ID",
  "event": "uplink",
  "timestamp": 01020304050607,
  "sensors": [
    {
       "channel": 1,
       "value": 16.4,
       "type": "temp",
       "unit": "c"
     },
     {
        "channel": 2,
        "value": 75,
        "type": "rel_hum",
        "unit": "p"
     },
     ...
  ]
}
```


