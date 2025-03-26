function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;
 
    // Error handling for invalid input
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid potion strengths!");
        return;
    }
 
    if (operation === 'add') result = num1 + num2;
    else if (operation === 'subtract') result = num1 - num2;
    else if (operation === 'multiply') result = num1 * num2;
    else if (operation === 'divide') {
        result = num2 !== 0 ? num1 / num2 : "Cannot dilute by zero!";
    }
 
    document.getElementById('result').innerText = 'Potion Effect Strength: ' + result;
 }
 
