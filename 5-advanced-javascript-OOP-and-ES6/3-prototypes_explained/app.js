function Student(){
    this.name = 'Mario'
    this.gender = 'Male'
}

Student.prototype.age = 15
let studOne = new Student()
let studTwo = new Student()
Student.prototype.MyName = function(){
    
    return this.name
}

// console.log(studOne.MyName())

//Prototype is invisible property of an object.
//it returns prototype object of a function to which it links to.


//Person Constructor

function Person(fName,lName,dob){

    this.firstName = fName;
    this.lastName = lName;
    this.birthday = new Date(dob)
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthdate.getTime()
    //     const ageDate = new Date(diff)
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }

}

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

let person1= new Person('Mustafa', 'Osman', '02-20-1992')
console.log(person1.calculateAge())

//Gets Married
let person2 = new Person('Mario', 'Smith', '08-19-1996')
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName
}

person2.getsMarried(person1.lastName)
console.log(person2.lastName)


//Get full name

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

// console.log(person2.getFullName())
let Animal = {
    kind: 'cat',
    sound: 'meau',
    legs : 2,
}
    
Animal.prototype.calLegs = function(){
    if(this.kind == 'bird'){
        this.legs =2
    }else{
        this.legs = 4
    }
} 

console.log(Animal.calLegs('bird'))




    

 


