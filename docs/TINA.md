<p id="bring-your-own-thing-api" class="anchor-link"></p>

# HTTP API

Sending Device to Cloud messages using HTTP API.

<table style="width: 100%;">
<tbody>
<tr>
<td style="font-size: 15px; padding: 10px; background-color: #357ca2; color: #ffffff;"><b>POST</b></td>
<td style="font-size: 15px; padding: 10px; background-color: #cfe2f3; color: #000000;">https://lora.iotinabox.com/v1/networks/iotinabox/uplink</td>
</tr>
</tbody>
</table>

| Header | Value  |
|-------|-------------------------------------------|
| Authorization | Basic MQTT_USERNAME:MQTT_PASSWORD |
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

The payload must be a JSON array of objects, each having `channel`, `value`, `type` and `unit` porperties. Refer to the list of our <a href="http://mydevices.com/cayenne/docs/cayenne-mqtt-api/#cayenne-mqtt-api-supported-data-types">supported data types</a> for the `type` and `unit` properties.
