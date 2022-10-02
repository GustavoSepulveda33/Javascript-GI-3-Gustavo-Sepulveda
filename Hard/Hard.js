


class ppi {

    constructor (name, ssn){

        this.name = name;
        this.ssn = ssn; 
    }

    
}

class Person extends ppi {

    constructor (name, ssn, age){

        super(name);
        this.age = age; 

    }

    getName() {

        console.log(this.name); 
    }

}

let gus = new Person ("Gustavo", "333-22-4444", "25"); 


console.log(gus.age);
console.log(gus.name);
console.log(gus.ssn);


