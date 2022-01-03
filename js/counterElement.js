const body = document.querySelector("body")
const counter = document.querySelector(".counter")
let number = document.querySelector(".number")
const reset = document.querySelector(".reset")
const minus = document.querySelector(".minus")

let i = 0

function count() {
  i++
  number.innerHTML = i
}
counter.addEventListener("click", count)

function resets() {
  number.innerHTML = 0
  i = 0
}
reset.addEventListener("click", resets)

function minusF() {
  if (number.innerHTML == 0) return
  number.innerHTML = i - 1
  i--
}
minus.addEventListener("click", minusF)