let animal = {
    eats: true,
    doesEat: function () {
        return this.eats
    }
}

//Creat a new object using Object create

// let rabbit = Object.create(animal, {
//     longEars: {
//         value: 2
//     },
//     jumps: {
//         value: true
//     }
// })
let rabbit = Object.create(animal)
rabbit.longEars = 2
rabbit.jumps = true
// console.log(rabbit)

//We Creat our person object



const personProto = {
    greeting: function () {
        return `Hello Miss ${this.firstName} ${this.lastName}`
    },
    getMarried: function (newLastName) {
        this.lastName = newLastName
    }
}

const person = Object.create(personProto)

person.firstName = 'Farh';
person.lastName = 'Yousef';
person.age = 25;
person.martialstatus = 'single';
person.getMarried('Nelson')
// console.log(person)


const User = {
    userName: 'Ali',
    passowrd: 1234,
  
}

let guest = Object.create(User)

guest.role = 'person';
guest.auth = ['read'];

console.log(guest)




const userProto = {
     changePassword: function (newPass) {
                     this.pass = newPass
    },
    
    modifyAuths: function (addOrdel, item) {

                    //addOrdel is boolen (true for add and fals for delete)
                    if (addOrdel) {
                        if (item) {
                            this.authorities.push(item)
                        } else {
                            console.log(`We can't add empty item`)
                        }
                    } else {
                        if (item) {
                            let pos = 0
                            for (i = 0; i < this.authorities.length; i++) {
                                if (this.authorities[i] == item) pos = i
                            }
                            if (pos > 0) authorities.splice(pos, 1)
                            else console.log(`Sorry item does not exist`)
                        } else {
                            authorities.pop()
                        }
                    }

                    return this.authorities

                }
}

const user = Object.create(userProto)

user.userName = 'Re7';
user.passowrd = 222222;
user.age = 22;
user.authorities= ['read'],
user.__proto__= 'user'
person.getMarried('Nelson')

console.log(user)