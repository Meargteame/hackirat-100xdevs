

class Person{
    constructor(firstName,lastName,age){

        this._firstName = firstName;
        this._lastName  = lastName;
        this._age = age ;
    }
    
    describer(){
        return `Full  name is ${this._firstName} ${this._lastName} \n Age is ${this._age}`;
    }
}

let person_1 = new Person("Meareg","Teame",21);
console.log(person_1.describer());



// static functions - functions that represent for the class 
// called only on the class 
