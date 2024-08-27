document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get values from input fields
    const weight = document.getElementById('input1').value;
    const height = document.getElementById('input2').value;
    const age = document.getElementById('input3').value;
    const currentFat = document.getElementById('input4').value;
    const targetFat = document.getElementById('input5').value;
    var bms = 0;
    var maintain_cal = 0;

    //Calculation
    bms = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    maintain_cal = bms * 1.2;

    var fatDiff = currentFat - targetFat;
    var calorieDef = weight / fatDiff * 100;
    var netCalories = maintain_cal - calorieDef;

    // Display the result
    const resultSection = document.getElementById('result');
    resultSection.innerHTML = `
        <h2>Result</h2>
        <p><strong>Maintenance Calories needed for your body:</strong> ${maintain_cal}</p>
        <p><strong>Calories deficiet per day:</strong> ${calorieDef}</p>
        <p><strong>Daily Calories Intake Limit:</strong> ${netCalories}</p>
    `;
});

