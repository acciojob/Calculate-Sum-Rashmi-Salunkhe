//your JS code here. If required.
function calculateSum() {
    // Get the values of the two number inputs
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);

    // Validate if both inputs are numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate the sum
        const sum = num1 + num2;

        // Display the sum in the paragraph with id 'sum'
        document.getElementById('sum').textContent = sum;
    } else {
        // If inputs are invalid, clear the result
        document.getElementById('sum').textContent = '';
    }
}
