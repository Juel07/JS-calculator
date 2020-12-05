// select the buttons
const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-prev-operand]')
const currentOperandTextElement = document.querySelector('[data-curr-operand]')

//how to store all the elements for the calc? use a class, that will take all inputs and functions for the calculator

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        //set variables for this class
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
        //checks if more than one "." exists, and stops executing the function
        if (number === "." && this.currentOperand.includes('.')) return
        // convert to a string, so JS appends the numbers and does not add them
        //so if 1 is clicked twice -> should result in 11 and not 1+1=2
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        //if the current input is empty, stops execution of the following code
        if (this.currentOperand === "") return
        //includes the previous inputs if any, and computes it together with new inputs
        if (this.previousOperand !== "") {
            this.compute()
        }
        // set the operation we passed
        this.operation = operation
        // after typing the current op, recycle to the previous operand
        this.previousOperand = this.currentOperand
        //clearing out the current value, allowing to type the new value
        this.currentOperand = ''
    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }

}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// add a event listener for each button, pass the text of the number we are choosing & update the final display
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})