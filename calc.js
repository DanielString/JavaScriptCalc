let expression = "";
let buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

buttons.forEach((button)=>{
  let b = document.getElementById(button)
  b.addEventListener("click", ()=> {
    expression += button
    console.log(expression)
    displayValue()
  })
})

let equals = document.getElementById("equals");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
equals.addEventListener("click", ()=> {
  expression = String (eval(expression))
  console.log(expression)
  displayValue()
})

plus.addEventListener("click", ()=> {
  expression += " + "
  console.log(expression)
  displayValue()
})

minus.addEventListener("click", ()=> {
  expression += " - "
  console.log(expression)
  displayValue()
})

document.getElementById("x").addEventListener("click", ()=> {
  expression += " * "
  console.log(expression)
  displayValue()
})

document.getElementById("divide").addEventListener("click", ()=> {
  expression += " / "
  console.log(expression)
  displayValue()
})

function displayValue() {
  let output = document.getElementById("output")
  let value = expression.split(" ")
  let value2 = value.pop()
  
  
  output.innerHTML = `<h1>${value2}</h1>`
}

let clear = document.getElementById("c")
clear.addEventListener("click", function(){
  expression = "0"
  displayValue()
})
