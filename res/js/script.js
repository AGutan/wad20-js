let a = null;
let b = null;
let operator = null;

function compose() {
    let value = "";
    if (a !== null) {
        value += a + " "
    }
    if (operator !== null) {
        value += operator + " "
    }
    if (b !== null) {
        value += b
    }

    let input = document.getElementById('eq');
    input.value = value;
}

let resetButton = document.getElementById('ce');
resetButton.addEventListener('click', function () {
    let input = document.getElementById('eq');
    let div = document.getElementById('result');
    div.innerText = "";
    input.value = "";
    a = null;
    b = null;
    operator = null;
});

let equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', function () {
    if (a === null) {
        alert('You have to select a number first');
        return;
    }
    if (operator === null) {
        alert('You have to select an operator');
        return;
    }
    if (b === null) {
        alert('You have to select a second number');
        return;
    }
    let resultDiv = document.getElementById('result');
    let result = 0;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '^':
            result = Math.pow(a, b);
            break;
        default:
            console.error("Unexpected operator")
            break;
    }
    resultDiv.innerText = "" + result;
});

let operatorButtons = document.getElementsByClassName('operator');
for (let i = 0; i < operatorButtons.length; i++) {
    let id = operatorButtons[i].id;
    operatorButtons[i].addEventListener('click', function () {
        if (a === null) {
            alert('You have to select a number first');
            return;
        }
        operator = id;
        compose();
    })
}

for (let i = 0; i < 10; i++) {
    let number = document.getElementById('number-' + i);
    number.addEventListener('click', function () {
        if (operator === null && a === null) {
            a = i
        }
        else if (operator && b === null) {
            b = i
        }
        else if (operator === null && a !== null) {
            a = Number.parseInt(a + "" + i)
        } else {
            b = Number.parseInt(b + "" + i)
        }
        compose()
    })
}