## Azure IoT Hub & myDevices

myDevices digests Azure IoT Hub events with the following documentation. A JSON payload with the following requirements should be used for proper integration. See the [IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/) documentations for guidelines on how to connect and send telemetry data.

Helpful links
 - [IoT Hub SDKs](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-sdks)
 - [SDK for C](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-sdk-c-intro)
 - [MQTT Support](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support)


### myDevices Message Schema

When sending telemetry messages to IoT Hub, follow the JSON schema below.

| Attribute | Type | Sample
|-------|---------|----------------------------------|
| eui | String | unique hardware identifier
| format | String | `json` or `hex`
| data | Array | An array list of Cayenen LPP objects see below.

The `data` attribute must be a JSON array of objects, each element having `channel`, `value`, `type` and `unit` porperties. Refer to the list of our <a href="http://mydevices.com/cayenne/docs/cayenne-mqtt-api/#cayenne-mqtt-api-supported-data-types">supported data types</a> for the `type` and `unit` properties.

**Example Message Body** 
```json
{
    "eui": "ble-stag-01172021",
    "format": "json",
    "data": [{
            "channel": 5,
            "unit": "p",
            "value": 100,
            "type": "",
            "name": "Battery",
            "hardware_id": "000a0032874326321"
        },
        {
            "channel": 100,
            "type": "rssi",
            "unit": "dbm",
            "value": -64,
            "name": "Signal",
            "hardware_id": "000a0032874326321"
        },
        {
            "channel": 5,
            "unit": "p",
            "value": 82,
            "type": "",
            "name": "Battery",
            "hardware_id": "000a0032874326323"
        },
        {
            "channel": 100,
            "type": "rssi",
            "unit": "dbm",
            "value": -73,
            "name": "Signal",
            "hardware_id": "000a0032874326323"
        }
    ]
}
```