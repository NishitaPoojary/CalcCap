function calculate(){

let a = parseFloat(document.getElementById("num1").value)
let b = parseFloat(document.getElementById("num2").value)
let op = document.getElementById("operator").value

let result

// correct calculation
if(op === "+") result = a + b
if(op === "-") result = a - b
if(op === "*") result = a * b
if(op === "/") result = a / b

let finalResult
let message

// 50% chaos
if(Math.random() < 0.5){

finalResult = result + Math.floor(Math.random()*20) - 10

let chaosMessages = [
"Trust me bro.",
"Source: vibes.",
"Math ain't mathing.",
"I made it up.",
"Probably correct.",
"Numbers are a suggestion.",
"The vibes said this.",
"Don't question it."
]

message = chaosMessages[Math.floor(Math.random()*chaosMessages.length)]

}else{

finalResult = result

let correctMessages = [
"Okay fine... this one is correct.",
"Even I can't mess this up.",
"Math wins this time.",
"No cap. This is correct.",
"Surprisingly accurate."
]

message = correctMessages[Math.floor(Math.random()*correctMessages.length)]

}

document.getElementById("result").innerHTML =
"Result: " + finalResult + "<br>(" + message + ")"

}