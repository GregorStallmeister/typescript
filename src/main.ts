import './style.css'
import {printStudent, printStudents, Student} from "./Student.ts";
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

console.log("Hello World!")

let age: number = 24

for (let i = 1; i <= age; i++) {
    console.log(i)
}

if (age > 18)
    console.log("Age is greater than 18.")
else
    console.log("Age is less or equal than 18.")

let scope: number = 0

if (scope !== 0)
    console.log("Scope is available.")
else
    console.log("Scope is not available.")

if (scope)
    console.log("Scope is evaluated as truthy.")
else
    console.log("Scope is evaluated as falsy.")

let username: string = ""

if (username.length > 0)
    console.log("Username is available.")
else
    console.log("Username is not available.")

if (!username)
    console.log("Username is evaluated as falsy.")
else
    console.log("Username is evaluated as truthy.")

let isAdmin: boolean = false

if (isAdmin)
    console.log("isAdmin is evaluated to truthy.")
else
    console.log("isAdmin is evaluated to falsy.")

// @ts-ignore
if (isAdmin === true)  // Yes, I know: It can be simplified. But this is for practice.
    console.log("isAdmin is true.")
else
    console.log("isAdmin is false")

let endValue: number = 5

for (let i = 0; i < endValue; i++) {
    let row: string = ""

    for (let j = 0; j < endValue - i; j++)
        row = row + " "

    for (let k = 0; k < i; k++)
        row = row + "**"

    row = row + "*"

    console.log(row)
}

for (let i = 0; i < endValue; i++) {
    let row: string = ""

    for (let j = 0; j < endValue; j++)
        row = row + " "

    row = row + "*"

    console.log(row)
}

console.log("----------------------------------------------------------------")

const numbers: number[] = [1, 2, 3, 4, 5, 6]
console.log(numbers)

const numbersDoubled: number[] = numbers.map(element => element * 2)
console.log(numbersDoubled)

const words: string[] = ["Max", "Moritz", "Fritzchen", "Susi", "Hermeline"]
console.log(words)

const wordsLongerThan5Letters: string[] = words.filter(word => word.length > 5)
console.log(wordsLongerThan5Letters)

const sumOfNumbers: number = numbers.reduce(function (previousValue, actualValue) {
    return previousValue + actualValue
})
console.log(sumOfNumbers)

const atLeastOneNumberIsGreater: boolean = numbersDoubled.some((actualNumber) => actualNumber > 10)
console.log(atLeastOneNumberIsGreater)

console.log()
console.log("------------------ Bonus ---------------")
console.log()

const list = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194]
console.log(list)

const listSortedDescending: number[] = list
    .sort(function (a, b) {
        return a - b
    })
    .reverse()
console.log(listSortedDescending)

const squaredNumbers: number [] = listSortedDescending
    .map((element) => element * element)
console.log(squaredNumbers)

squaredNumbers.pop()
squaredNumbers.pop()
squaredNumbers.shift()
squaredNumbers.shift()
squaredNumbers.shift()
squaredNumbers.shift()

console.log(squaredNumbers)

// squaredNumbersButDivisibleBy4 : numbers[] = squaredNumbers
//     .map((squaredNumber) => { return squaredNumber % 4 > 0 ? squaredNumber: null})
// console.log(squaredNumbers)

const student1: Student = {firstName: "Anton", lastName: "Meier", age: 17, grades: [1, 4, 2, 2, 2, 3, 1]}
printStudent(student1)

const student2: Student = {firstName: "Berta", lastName: "Müller", age: 16, grades: ["A",2,"F",3,1,"B",2,5]}
printStudent(student2)

const student3: Student = {firstName: "Cäsar", lastName: "Schmidt", age: 18, grades: ["A",2,undefined,3,1,"B",undefined,5]}
printStudent(student3)

console.log()
console.log("Now all together:")
printStudents([student1, student2, student3].reverse())