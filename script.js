const cifra = document.querySelectorAll(".digit")
const display = document.querySelector(".display")
const clear = document.querySelector(".clear")
const operator = document.querySelectorAll(".operator")

const equal = document.querySelector("#equal")

let firstNumber = null
let secondNumber = null
let opr = ''

cifra.forEach( (cif) => {
    cif.addEventListener("click", () => {
        
        display.textContent +=cif.textContent
        
    })
})


operator.forEach( (op) => {
    op.addEventListener("click", () => {
        operator.forEach(ope => ope.style.backgroundColor = "gray")
        
        if (opr === '') {
            firstNumber = Number(display.textContent)
        }

        opr = op.textContent.trim()

        console.log("first number is : " + firstNumber)
        op.style.backgroundColor = "red"
        display.textContent = ''
        console.log("operation is: " + op.textContent)
    })
})


 clear.addEventListener("click", ()=>{
    display.textContent =''
 })


equal.addEventListener("click", ()=>{
        secondNumber = Number(display.textContent)
        console.log("second number is : " +secondNumber)
        if (opr === "+") {
            add(firstNumber,secondNumber)
        }

        else if (opr === "-") {
            subtract(firstNumber,secondNumber)
        }

        else if (opr === "X") {
            multiply(firstNumber,secondNumber)
        }

        else if (opr === "/") {
            divide(firstNumber,secondNumber)
        }

        opr = ''
})

function add(first, second) {
    let result = first+second
    display.textContent = result
    return result
}

function subtract(first, second) {
    let result = first - second
    display.textContent = result
    return result
}

function multiply(first,second) {
    let result = first * second  
    display.textContent = result
    return result
}

function divide(first,second) {

    if (second != 0){
        let result = first / second
        display.textContent = result.toFixed(3)
        return result
    }

    else {
        display.textContent = "CANNOT DIVIDE BY ZERO"

    }
    


}