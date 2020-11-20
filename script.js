// select the buttons
const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-prev-operand]')
const currentOperandTextElement = document.querySelector('[data-curr-operand]')

//how to store all the elements for the calc? use a class, that will take all inputs and functions for the
//calculator

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        // set variables for this class
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        //call this function as soon as we create the calculator
        this.clear()
    }

    // define all operations for our calculator class

    clear() {
        //define the following variables; clear the inputs and set them to default values; 
        this.currentOperand = ""
        this.previousOperand = ""
        //operation is undefined since they don't have any operation selected if we clear things
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }

}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// add a event listener for each button, add the number and update the final display
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})