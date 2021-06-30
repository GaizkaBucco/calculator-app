class Calculator {
   constructor(previousOperandTextElemment, currentOperandTextElemment) {
       this.previousOperandTextElemment = previousOperandTextElemment
       this.currentOperandTextElemment = currentOperandTextElemment
       this.reset()
   }

   reset() {
       this.currentOperand = ''
       this.previousOperand = ''
       this.operation = undefined
   }

   delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
   }

   appendNumber(number) {
      if(number === "." && this.currentOperand.includes(".")) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
   }
   
   chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
         this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
   }

   compute() {
      let computation
      const previous = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if(isNaN(previous) || isNaN(current)) return 
      switch (this.operation) {
         case '+':
            computation = previous + current
            break
         case '-':
            computation = previous - current
            break
         case '*':
            computation = previous * current
            break
         case '/':
            computation = previous / current
            break
         default:
            return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
   }

   getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
         integerDisplay = ''
      } else {
         integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
      }
      if (decimalDigits != null) {
         return `${integerDisplay}.${decimalDigits}`
      } else {
         return integerDisplay
      }
   }

   updateDisplay() {
      this.currentOperandTextElemment.innerText = this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
         this.previousOperandTextElemment.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
         this.previousOperandTextElemment.innerText = ''
      }
   }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const resetButton = document.querySelector('[data-reset]')
const previousOperandTextElemment = document.querySelector('[data-previous-operand]')
const currentOperandTextElemment = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElemment, currentOperandTextElemment)


numberButtons.forEach(button => {
   button.addEventListener('click', () => {
       calculator.appendNumber(button.innerText)
       calculator.updateDisplay()
   })
})

operationButtons.forEach(button => {
   button.addEventListener('click', () => {
       calculator.chooseOperation(button.innerText)
       calculator.updateDisplay()
   })
})

equalsButton.addEventListener('click', () => {
   calculator.compute()
   calculator.updateDisplay()
})

resetButton.addEventListener('click', () => {
   calculator.reset()
   calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
   calculator.delete()
   calculator.updateDisplay()
})


window.addEventListener('keydown', (e) => {
   console.log(e.key)
   if(
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
   ) {
      clickNumberButton(e.key)
   } else if (
      e.key === "+" ||
      e.key === "-" ||
      e.key === "*" ||
      e.key === "/"
   ) {
      clickOperationButton(e.key)
   } else if (e.key === "Enter" || e.key === "=") {
      equalsButton.click()
   } else if (e.key === "Backspace") {
      deleteButton.click()
   }
})

function clickNumberButton(key) {
   numberButtons.forEach(button => {
      if (button.innerText === key) {
         button.click()
      }
   })
}

function clickOperationButton(key) {
   operationButtons.forEach(button => {
      if (button.innerText === key) {
         button.click()
      }
   })
}


// Styling----------------------------------------------------------------------------------

// Variables for  themes

const theme1 = document.getElementById("theme-1-selector")
const theme2 = document.getElementById("theme-2-selector")
const theme3 = document.getElementById("theme-3-selector")

const documentBody = document.getElementById("document-body")
const themeSlider = document.getElementById("theme-toggle-slider")
const themeSliderCenter = document.getElementById("theme-toggle-slider-center")
const calcScreen = document.getElementById("screen")
const keyboard = document.getElementById("keyboard")
const equalsBtn = document.getElementById("equals-btn")
const numberBtn = document.querySelectorAll(".number-btn")
const textBtn = document.querySelectorAll(".text-btn")

// Function to set theme 1
function setTheme1() {
   documentBody.classList.remove("body-theme-2", "body-theme-3")
   documentBody.classList.add("body-theme-1")

   themeSlider.classList.remove("theme-toggle-slider-theme-2", "theme-toggle-slider-theme-3")
   themeSlider.classList.add("theme-toggle-slider-theme-1")

   themeSliderCenter.classList.remove("theme-toggle-slider-center-theme-2", "theme-toggle-slider-center-theme-3")
   themeSliderCenter.classList.add("theme-toggle-slider-center-theme-1")

   calcScreen.classList.remove("screen-theme-2", "screen-theme-3")
   calcScreen.classList.add("screen-theme-1")

   keyboard.classList.remove("keyboard-theme-2", "keyboard-theme-3")
   keyboard.classList.add("keyboard-theme-1")

   equalsBtn.classList.remove("equals-btn-theme-2", "equals-btn-theme-3")
   equalsBtn.classList.add("equals-btn-theme-1")

   numberBtn.forEach(btn => btn.classList.remove("number-btn-theme-2", "number-btn-theme-3"))
   numberBtn.forEach(btn => btn.classList.add("number-btn-theme-1"))

   textBtn.forEach(btn => btn.classList.remove("text-btn-theme-2", "text-btn-theme-3"))
   textBtn.forEach(btn => btn.classList.add("text-btn-theme-1"))
}

// Function to set theme 2
function setTheme2() {
   documentBody.classList.remove("body-theme-1", "body-theme-3")
   documentBody.classList.add("body-theme-2")

   themeSlider.classList.remove("theme-toggle-slider-theme-1", "theme-toggle-slider-theme-3")
   themeSlider.classList.add("theme-toggle-slider-theme-2")

   themeSliderCenter.classList.remove("theme-toggle-slider-center-theme-1", "theme-toggle-slider-center-theme-3")
   themeSliderCenter.classList.add("theme-toggle-slider-center-theme-2")

   calcScreen.classList.remove("screen-theme-1", "screen-theme-3")
   calcScreen.classList.add("screen-theme-2")

   keyboard.classList.remove("keyboard-theme-1", "keyboard-theme-3")
   keyboard.classList.add("keyboard-theme-2")

   equalsBtn.classList.remove("equals-btn-theme-1", "equals-btn-theme-3")
   equalsBtn.classList.add("equals-btn-theme-2")

   numberBtn.forEach(btn => btn.classList.remove("number-btn-theme-1", "number-btn-theme-3"))
   numberBtn.forEach(btn => btn.classList.add("number-btn-theme-2"))

   textBtn.forEach(btn => btn.classList.remove("text-btn-theme-1", "text-btn-theme-3"))
   textBtn.forEach(btn => btn.classList.add("text-btn-theme-2"))
}

// Function to set theme 3
function setTheme3() {
   documentBody.classList.remove("body-theme-1", "body-theme-2")
   documentBody.classList.add("body-theme-3")

   themeSlider.classList.remove("theme-toggle-slider-theme-1", "theme-toggle-slider-theme-2")
   themeSlider.classList.add("theme-toggle-slider-theme-3")

   themeSliderCenter.classList.remove("theme-toggle-slider-center-theme-1", "theme-toggle-slider-center-theme-2")
   themeSliderCenter.classList.add("theme-toggle-slider-center-theme-3")

   calcScreen.classList.remove("screen-theme-1", "screen-theme-2")
   calcScreen.classList.add("screen-theme-3")

   keyboard.classList.remove("keyboard-theme-1", "keyboard-theme-2")
   keyboard.classList.add("keyboard-theme-3")

   equalsBtn.classList.remove("equals-btn-theme-1", "equals-btn-theme-2")
   equalsBtn.classList.add("equals-btn-theme-3")

   numberBtn.forEach(btn => btn.classList.remove("number-btn-theme-1", "number-btn-theme-2"))
   numberBtn.forEach(btn => btn.classList.add("number-btn-theme-3"))

   textBtn.forEach(btn => btn.classList.remove("text-btn-theme-1", "text-btn-theme-2"))
   textBtn.forEach(btn => btn.classList.add("text-btn-theme-3"))
}

// Event Listeners to set themes
theme1.addEventListener("click", setTheme1)
theme2.addEventListener("click", setTheme2)
theme3.addEventListener("click", setTheme3)

