/*
Cayenne TMP36 + Luminosity Example
TMP36 is connected to Analog pin 0 and communicates on Virtual Channel 1.
Luminosity actuator is connected to Digital pin 6 and communicates on Virtual Channel 6.
*/

#define CAYENNE_PRINT Serial   // Comment this out to disable prints and save space
#include <CayenneTemperature.h>
#include <CayenneMQTTEthernet.h>   // Change this to use a different communication device. See Communications examples.

// Cayenne authentication info. This should be obtained from the Cayenne Dashboard.
char username[] = "Replace with MQTT Username from Connect screen";
char password[] = "Replace with MQTT Password from Connect screen";
char clientID[] = "Replace with CLIENT ID from Connect screen";

// TMP36 Virtual channel
#define VIRTUAL_CHANNEL 1

// Luminosity Pin & Virtual channel
#define LED_VIRTUAL_CHANNEL 6
#define ACTUATOR_PIN 6

// Analog pin the TMP36 is connected to.
const int tmpPin = 0;

// Voltage to the TMP36. For 3v3 Arduinos use 3.3.
const float voltage = 5.0; 

TMP36 tmpSensor(tmpPin, voltage);

void setup()
{
  Serial.begin(9600);
  Cayenne.begin(username, password, clientID);
}

void loop()
{
  Cayenne.loop();
}

// This function is called when data is sent from Cayenne.
CAYENNE_IN(LED_VIRTUAL_CHANNEL)
{
  int value = getValue.asInt(); // 0 to 255
  CAYENNE_LOG("Channel %d, pin %d, value %d", LED_VIRTUAL_CHANNEL, ACTUATOR_PIN, value);
  // Write the value received to the PWM pin. analogWrite accepts a value from 0 to 255.
  analogWrite(ACTUATOR_PIN, value);
}

// This function is called at intervals to send sensor data to Cayenne.
CAYENNE_OUT(VIRTUAL_CHANNEL)
{
  // This command writes the temperature in Celsius to the Virtual Channel.
  Cayenne.celsiusWrite(VIRTUAL_CHANNEL, tmpSensor.getCelsius());
  // To send the temperature in Fahrenheit or Kelvin use the corresponding code below.
  //Cayenne.fahrenheitWrite(VIRTUAL_CHANNEL, tmpSensor.getFahrenheit());
  //Cayenne.kelvinWrite(VIRTUAL_CHANNEL, tmpSensor.getKelvin());
}

