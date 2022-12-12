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
        this.currOp = this.currOp.toString().slice(0,-1);
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
        let result;
        const prev = parseFloat(this.prevOp);
        const curr = parseFloat(this.currOp);
        if(isNaN(prev) || isNaN(curr)) {return}
        switch (this.operation) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*': 
                result = prev * curr;
                break;
            case '÷':
                result = Math.round(prev/curr*100)/100;
                break;
            default:
                return;
        }
        this.currOp = result;
        this.operation = undefined;
        this.prevOp = '';
    }
    displayNum(num) {
        const stringNum = num.toString();
        const intDigit = parseFloat(stringNum.split('.')[0]);
        const decDigit = stringNum.split('.')[1];
        let intDisplay
        if(isNaN(intDigit)){
            intDisplay = '';
        } else {
            intDisplay = intDigit.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if(decDigit != null) {
            return `${intDisplay}.${decDigit}`
        } else {
            return intDisplay;
        }
        return num;
    }
    updateDisplay() {
        this.currOpText.innerText = this.displayNum(this.currOp);
        if(this.operation != null){
        this.prevOpText.innerText = `${this.displayNum(this.prevOp)} ${this.operation}`;
        } else {
            this.prevOpText.innerText = '';
        }
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

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

delButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})