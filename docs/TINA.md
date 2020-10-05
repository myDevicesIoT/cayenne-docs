<p id="bring-your-own-thing-api" class="anchor-link"></p>

# HTTP API

Sending Device to Cloud messages using HTTP API.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;"><strong>IoT in a Box:</strong> https://lora.iotinabox.com/v1/networks/iotinabox/uplink <br /><strong>Cayenne:</strong> https://lora.iotinabox.com/v1/networks/generic/uplink</td>
</tr>
</tbody>
</table>

| Header | Value  |
|-------|-------------------------------------------|
| Content-Type | application/json |

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
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">https://lora.iotinabox.com/v1/networks/iotinabox/data</td>
</tr>
</tbody>
</table>

**Headers**
| Header | Value  |
|-------|-------------------------------------------|
| Content-Type | multipart/form-data |
| Authorization | Basic Token |


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
  --url http://localhost:3001/v1/networks/iotinabox/data \
  --header 'authorization: Basic Base64=' \
  --header 'content-type: multipart/form-data' \
  --form snapshot=@file.jpeg \
  --form 'ch_1024=file,image=snapshot' \
  --form 'ch_171=temp,f=75' \
  --form 'ch_6=temp,f=75' \
  --form 'ch_4=rel_hum,p=80' \
  --form 'eui=fc0f860000000001f3'
```
