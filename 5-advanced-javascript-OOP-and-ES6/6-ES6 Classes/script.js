// // // Class basic center for declartion

// // // class User {
// // //     //We should start with constructor
// // //     constructor(userName, passWord) {
// // //         this.name = userName;
// // //         this.pass = passWord;
// // //     }
// // //     //We wreite thre properties inside the constructor
// // //     // but we write the methods out side the constructor
// // //     changePass(newPass) {
// // //         this.pass = newPass
// // //     }
// // // }

// // // //the Usage 

// // // let u1 = new User('Kumaro', '1234')


// // // class Person {

// // //     constructor(firstName, lastName, dob) {
// // //         this.fname = firstName;
// // //         this.lName = lastName;
// // //         this.birthday = new Date(dob)
// // //     }

// // //     greating(Hey) {
// // //         return `Hey ${this.fname} ${this.lName}`
// // //     }
// // //     calAge() {

// // //         const diff = Date.now() - this.birthday.getTime();
// // //         const ageDate = new Date(diff)
// // //         return Math.abs(ageDate.getUTCFullYear() - 1970)

// // //     }
// // //     getsMarried(newLastName) {
// // //         this.lName = newLastName
// // //     }


// // // }

// // // let omer = new Person('Omer', 'Farough', '08-19-1987')
// // // omer.getsMarried('Mercedes')

// // // console.log(omer.calAge())





// // class Book {
// //     constructor(Author, title, price) {
// //         this.author = Author;
// //         this.title = title;
// //         this.price = price
// //     }
// //     changePass(newPass) {
// //         this.Price = newPass

// //     }

// // }

// // // let b1 = new Book('Patnice', 'Read', '25')
// // // b1.changePass(20)
// // // console.log(b1.Price)


// // class Customer extends Person {
// //     constructor(cFirstName, cLastName, phoneN, memberShip) {
// //         super(cFirstName, cLastName)
// //         this.phone = phoneN
// //         this.membership = memberShip
// //     }
// //     givMembershipCost(cost) {
// //         this.memcost = cost
// //     }
// // }

// // let c1 = new Customer('Mary', 'Riaz', '5534', 'standered')

// // console.log(c1)



// // class Magazen extends Book {
// //     constructor(authorT, titleT,priceP,newsLater) {
            
// //              super(authorT, titleT,priceP)//=constructor 
// //              this.phone = priceP
// //              this.newslater = newsLater
         
// //         }
       
// //     showYear(shoW) {
// //         this.year = shoW
// //     }

// //     }

// //     let b1 = new Magazen('Patnice', 'Read', '25')
// //     // b1.showYear(20)
// //     console.log(b1)


// // // Proparty shoul have location and price

// // class Proparty {

// //     constructor(location,size) {
// //         this.location = location;
// //         this.size = size;

// //     }

// // }

// // class Flat extends Proparty {
// //     constructor(location, size, priceP, owneR) {

// //         super(location, size) //=constructor 
// //         this.price = priceP
// //         this.owner = owneR

// //     }
// //     calcPrice() {
// //        return this.priceP * this.sizeS
// //     }
// // }

// // let F1 = new Flat('Germany', '50' ,'Ali','100')

// // // console.log(F1.calcPrice())


// class Person {

//     constructor(firstName, lastName) {
//         this.fname = firstName;
//         this.lName = lastName;

//     }

// }


class Person {
    //we should start with constructor
    constructor(firstName, lastName) {
        this.fName = firstName;
        this.lName = lastName

    }
    //we write the properties inside the constructor but we write the methods 
    //outside the constructor
    greeting(hallo) {
        return `Hi ${this.fName} ${this.lName}`
    }
}
class Customer extends Person {
    constructor(cfirstName, clastName, phone, memberShip) {
        super(cfirstName, clastName)
        this.Phone = phone;
        this.membership = memberShip
    }
    giveMembershipCost(cost) {
        this.memcost = cost
    }
}
let c1 = new Customer('omer', 'frough', "3423424", 'Gold')
c1.giveMembershipCost('100')
// console.log(c1.greeting())
// console.log(c1)
class Book {
    //we should start with constructor
    constructor(Author, title, price) {
        this.author = Author;
        this.title = title;
        this.price = price
    }

}
class Magazin extends Book {
    constructor(Author, title, price, year) {
        super(Author, title, price)
        this.Year = year

    }
    showYear() {
        return this.Year
    }
}
let M1 = new Magazin('B4B', 'Magazin', '50', '2018')
M1.showYear()
// console.log(M1.showYear())
// property class has two property location and size 
class Property {
    constructor(location, size) {
        this.location = location;
        this.size = size
    }
}
class Flat extends Property {
    constructor(location, size, owner, price) {
        super(location, size)
        this.Owner = owner
        this.Pricepsq = price
    }
    calcPrice() {
        return this.Pricepsq * this.size
    }
}
class Clinik extends Flat {
    constructor(location, size, owner, price, types, Doctors) {
        super(location, size, owner, price)
        this.types = types
        this.doctors = Doctors
    }
}
F1 = new Clinik('Hamburg', '10', 'Omer', '100', ['Surgery'], ['Experts'])
// console.log(F1)
class Personn {
    //we should start with constructor
    constructor(firstName, lastName) {
        this.fName = firstName;
        this.lName = lastName

    }
}
class Doctor extends Person {
    constructor(firstName, lastName, specialization, experience) {
        super(firstName, lastName)
        this.specialzed = specialization
        this.exp = experience
    }
}
D1 = new Doctor('omer', 'Frough', 'Orthopadie', '4 years')
console.log(D1)

