// This example shows how to connect to the Cayenne MQTT broker using an Ethernet W5100 shield. It then includes
// reading a TMP36 Temperature sensor's value, converting it to Temperature in Celsius and sending that data to Cayenne.
// Finally, it includes an example of controlling a connected LED using a dashboard actuator.

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

// This function will be called every time our Dashboard actuator widget writes a value to Virtual Pin 8.
// Alternatively, we could have put this code into a CAYENNE_IN_DEFAULT() function and used logic to detect
// whether the command was on virtual channel 8.
CAYENNE_IN(V8)
{
  // Parse the new LED state received from the dashboard.
  int new_led_state = getValue.asInt();

  // Turn our LED ON/OFF based on the new state.
  digitalWrite(8, new_led_state);

  // Example: Inform Cayenne that the message wasn't handled correctly - an error was encountered. Maybe our device wasn't
  // in a good state and the LED can't be changed just yet? CAYENNE_IN will then skip updating our actuator's state on the
  // dashboard and will display an error to the user.
  //Cayenne.getValue.setError("Device not ready.");
}

