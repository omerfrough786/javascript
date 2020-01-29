// //Proto type is an invisible property of all objects that we created, it has typof object
// //it has some predefinde methodes like isPrototypeOf () and more
// //we can use proto type to add extra properties afterr we finsh our objector constructur definiction

// // the xtra added properties using prototyape it will be added to all instances from that object

// // let animal = {
// //     eats: true
// // }

// // let rabbit = {
// //     jumbs: true
// // }
// // console.log(rabbit)
// // console.log(animal)
// // rabbit.__proto__ = animal 
// // rabbit.__proto__.ears = 2
// // console.log(rabbit.ears)

// // let longEars = {
// //     earlemgth: 10,
// //     __proto__: rabbit
// // }
// // console.log(longEars.eats)


// //Task: please weite a uiser object
// // user has tow properties : name & pass
// //write another object it is guest
// // guest has tow extra proprties wich are role and authorities
// //implement inheritance

// const user = {
//     name: 'Ali',
//     Password: 'Pass',
//     changePassword: function (newPass) {
//         this.pass = newPass
//     }

// }

// const guest = {
//     type: 'guest',
//     authorities: ['read'],
//     __proto__: user
// }

// guest.changePassword('myEasypass')
// console.log(guest.pass)

// const admin = {
//     __proto__: guest,
//     modifyAuths: function (addOrdel, item) {

//         //addOrdel is boolen (true for add and fals for delete)
//         if (addOrdel) {
//             if (item) {
//                 this.authorities.push(item)
//             } else {
//                 console.log(`We can't add empty item`)
//             }
//         } else {
//             if (item) {
//                 let pos = 0
//                 for (i = 0; i < this.authorities.length; i++) {
//                     if (this.authorities[i] == item) pos = i
//                 }
//                 if (pos > 0) authorities.splice(pos, 1)
//                 else console.log(`Sorry item does not exist`)
//             } else {
//                 authorities.pop()
//             }
//         }

//         return this.authorities

//     }
// }





// // function Animal(iEats) {
// //     this.eats = iEats

// // }

// // let anim1 = new Anima1(true)
// // console.log(anim1)

function Prodect(iName, iPrice) {
    this.name = iName
    this.price = iPrice
    this.getPrice = function () {
        return this.price
    }
}

const p1 = new Prodect('Myphone', 1100)
console.log(p1)

function Food(fName, fPrice, iVegan) {
    Prodect.call(this, fName, fPrice)
    this.category = 'food';
    this.vegan = iVegan;

}

const p2 = new Food('salad', 3, true)
console.log(p2.getPrice())


function User(Name, Password) {
    this.name = Name
    this.pass = Password
}
const U1 = new User('Ali', 000)

function Guest(Name, Password, iType, iAuthorities) {
    User.call(this, Name, Password)
    this.Teacher = 'Ahmad';
    this.type = iType;
    this.authorities = iAuthorities
}
const g1 = new Guest('Philp', 2525)
console.log(g1)