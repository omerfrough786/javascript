// const arr = [8, 5, 69, 8, 5, 665, 5, 8]


// let max = arr[0];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
//Spread operator ...somthing
const arr = [8, 5, 69, 8, 5, 665, 5, 8]
console.log(Math.max(...arr))
console.log(...arr)

//Using spread in  functions


function avrage(...numbers) {
    let sum = 0
    for (i = 0; i < length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length
}
let x = avrage(1, 2, 3)
console.log(x)

//Using spead in Object
let obj = {
    name: 'Omer',
    age: 28
}
let obj1 = {
    secoundName: 'Ali',
    gender: 'male'
}
let obj2 = {
    ...obj,
    obj1,
    nationalty: 'Germany'
}
console.log(obj1)

let ar = [10, 'first string', [5, 6], 'secound string', 50]
// let firstString = ar[1]
// let secoundString = ar[2]

let [, firstString, secoundString] = ar;

let [firstNumber, , , lastNumber] = ar;
console.log(firstString)
console.log(secoundString)

console.log(firstNumber)
console.log(lastNumber)

const ob = {
    firstname: 'Deniz',
    lastname: 'Schmidt',
    age: 50
}
const {
    firstname,
    age
} = ob;
console.log(firstname)
console.log(age)

//Rest Operators
const numbers = [1, 2, 3] //1 is alone [2,3]
const [fnumber, ...rnumbers] = numbers
console.log(fnumber) // => 1
console.log(rnumbers) // => [2,3]