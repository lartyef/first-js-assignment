
function convertWeightAndDisplay() {
  //my name using prompt
  const name = prompt("Ahmed:");

  // My weight in kilograms using prompt
  const weightInKg = parseFloat(prompt("60kg:"));

  // Check if weightInKg is a valid number
  if (!isNaN(weightInKg)) {
    // Convert weight from kilograms to pounds (1 kg = 2.20462 pounds)
    const weightInLbs = weightInKg * 2.20462;

    // Creating a message string
    const message = `${name}'s weight is ${weightInLbs.toFixed(2)} pounds.`;

    // Display the result using alert
    alert(message);
  } else {
    // If the input is not a valid number, show an error message
    alert("Invalid input for weight. Please enter a valid number.");
  }
}

// Call the function to start the process
convertWeightAndDisplay();
