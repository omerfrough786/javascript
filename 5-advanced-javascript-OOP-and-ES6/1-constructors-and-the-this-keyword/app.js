// let animal = {
//     kind: 'cat',
//     sound: 'meau',
//     legs: 4,
//     tail: true,
//     numOfLegs : function(){
//         return this.legs
//     }
// }

// console.log(animal['numOfLegs']())

// let bird = animal

// animal.legs = 10

// console.log(bird.numOfLegs())



// const person = {
//     Name: 'Ali',
//     birthdate: new Date ('9-10-1992'),
//     //transform birthdate into date=object

//     calculateAge : function(d){

//        const diff = Date.now() - this.birthdate.getTime();
//        //now(in ms) and getTime () in ms 
//        //diff is the age in ms
//        const ageDate = new Date(diff)
//        //Date.now return ms starting from 1970

//        return Math.abs(ageDate.getUTCFullYear() - 1970)
    
//     }}



// console.log(person.calculateAge())






////PERSON CONSTRUCTOR


//the constructor is a function used to buil up an object
//a constructor function name must start with capital letter

function Person(name,dob){

        this.myName = name
        this.birthDate = new Date(dob)
        this.calAge = function(){

                       const diff = Date.now() - this.birthDate.getTime();
                       //now(in ms) and getTime () in ms 
                       //diff is the age in ms
                       const ageDate = new Date(diff)
                       //Date.now return ms starting from 1970
                
                       return Math.abs(ageDate.getUTCFullYear() - 1970)     

        }
   
}

// const trainer1 = new Person('Omer','02-20-1992')
//to call a constructor we need keyword

// console.log(trainer1)

const trainer2 = new Person('ahmad','02-20-1992')

console.log(trainer2.calAge())


function Animal(kind, legs){

    this.theKind = kind
    this.theLegs = legs
    this.changeKind = function(newKind){
        this.theKind = newKind
    }

}

const cat = new Animal('cat',4)


cat.changeKind('dog')

console.log(cat.theKind)

