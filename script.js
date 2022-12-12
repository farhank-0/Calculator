function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return Math.round(a/b*100)/100;
}

function operate(num1, operand, num2) {
    if(operand == '+') {
        add(num1, num2);
    }
    if(operand == '-') {
        subtract(num1, num2);
    }
    if(operand == '*') {
        multiply(num1,  num2);
    }
    if(operand == '/') {
        divide(num1, num2);
    }
}