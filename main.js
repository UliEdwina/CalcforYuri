const calculator = {

    displayValue: '0',
    firstOperand: null, 
    waitingForSecondOperand: false, 
    operator: null,

}

function updateDisplay() {
    const display = document.querySelector('.calulatorDisplay');

    display.value = calculator.displayValue

}

const keys = document.querySelector('.calculatorKeys');

keys.addEventListener('click', (event) => {
    const { target } = event;
    if(!target.matches('button')){
        return
    }
})

updateDisplay();