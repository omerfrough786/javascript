// function sum(a,b){
//     return a+b
// }

// let res = sum(150,2025)
// console.log(res)


// const sum = function(a,b){
//     return a+b
// }

// let res = sum(150,2025)
// console.log(res)


let sum = (a, b) => a + b
let duplicate = n => n * 2
let pow = (x, n) => {
    if (n == 0) return1
    let result = x
    for (i = 1; i < n; i++) result *= x //reasult=result*x
    return result
}
let sayHi = () => console.log('Hi')
sayHi()

let res = sum(150, 2025)
res = duplicate(8)
res = pow(8,3)
console.log(res)

let fruits = ['orange', 'berry', 'banana', 'kiwi', 'avocado']
//  console.log(fruits.map(item => item == 'banana' ? item: ''))
//  9
let people = ['ahmad', 'omer', 'haris', 'kenan', 'ali', 'julian']
console.log(people.map(person => person == 'julian' ? 'German Name' : 'Indian Name'))