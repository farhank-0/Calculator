class Calculator {
    constructor(prevOpText, currOpText) {
        this.prevOpText = prevOpText;
        this.currOpText = currOpText;
        this.clear();
    }
    clear() {
        this.prevOp = '';
        this.currOp = '';
        this.operation = undefined;
    }
    delete() {

    }
    appendNum(num) {
        if(num === "." && this.currOp.includes('.')){return}
        this.currOp = this.currOp.toString() + num.toString();
    }
    chooseOp(operation) {
        if(this.currOp === '') {return}
        if(this.prevOp !== '') {
            this.operate();
        }
        this.operation = operation;
        this.prevOp = this.currOp;
        this.currOp = '';
    }
    operate() {

    }
    updateDisplay() {
        this.currOpText.innerText = this.currOp;
        this.prevOpText.innerText = this.prevOp;
    }
}
const numButtons = document.querySelectorAll('[data-num]');
const opButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const delButton = document.querySelector('[data-del]');
const allClearButton = document.querySelector('[data-allclear]');
const prevOpText = document.querySelector('[data-previousop]');
const currOpText = document.querySelector('[data-currentop]');

const calculator = new Calculator(prevOpText, currOpText);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText);
        calculator.updateDisplay();
    })
})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOp(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.operate();
    calculator.updateDisplay();
})
/*function add(a,b) {
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
}*/