// This example shows how to connect to the Cayenne MQTT broker using an Ethernet W5100 shield. It also includes
// reading a TMP36 Temperature sensor's value, converting it to Temperature in Celsius and sending that data to Cayenne.

//#define CAYENNE_DEBUG
#define CAYENNE_PRINT Serial
#include <CayenneMQTTEthernet.h>

unsigned long lastMillis = 0;

// Get these values from the Cayenne dashboard Connect screen for your new board
char username[] = "Replace with MQTT Username from Connect screen";
char password[] = "Replace with MQTT Password from Connect screen";
char clientID[] = "Replace with CLIENT ID from Connect screen";

void setup() {
	Serial.begin(9600);
	Cayenne.begin(clientID, username, password);
}

void loop() {
	Cayenne.loop();

	if(millis() - lastMillis > 10000) {
		lastMillis = millis();

    // Read TMP36 sensor data from Analog Pin 0 and convert to a Celsius value.
    float voltage = 5.0; // we need to know the source voltage to convert properly below
    int reading = analogRead(0); // read voltage value from sensor
    float currentVoltage = (reading * voltage) / 1024.0;
    float currentTemp = (currentVoltage - 0.5) * 100;

    // Publish the TMP36 temperature data to Cayenne on Channel 0.
    Cayenne.celsiusWrite(0, currentTemp);
	}
}

CAYENNE_CONNECTED()
{
	CAYENNE_LOG("CAYENNE_CONNECTED");
}

CAYENNE_DISCONNECTED()
{
	CAYENNE_LOG("CAYENNE_DISCONNECTED");
}

CAYENNE_IN_DEFAULT()
{
	CAYENNE_LOG("CAYENNE_IN_DEFAULT(%u) - %s, %s", request.pin, getValue.getId(), getValue.asString());
	if (strcmp(getValue.asStr(), "error") == 0) {
		getValue.setError("Error message");
	}
}

CAYENNE_OUT_DEFAULT()
{
	CAYENNE_LOG("CAYENNE_OUT_DEFAULT(%u)", request.pin);
}

