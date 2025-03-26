
let potionStrengthMessage = "Potion Strength Calculated";

document.getElementById('potionForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid potion strengths!");
        return;
    }

    if (operation === 'divide' && num2 === 0) {
        alert("Cannot dilute by zero!");
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation!";
    }

    document.getElementById('result').innerText = `${potionStrengthMessage}: ${result}`;
});
