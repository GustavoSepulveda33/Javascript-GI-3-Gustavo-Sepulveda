




class Person { 

    constructor (name, job, age) {

        this.name = name; 
        this.job = job; 
        this.age = age; 
    }

    excercise() {

        console.log("Running is fun apparently.");
        return("Running is fun apparently.");

    }

    fetchJob() {

        console.log(`${this.name} is a ${this.job}.`);

        return(`${this.name} is a ${this.job}.`);

    }


}

class Programmer extends Person { 

    constructor (name, job, age, languages) {

        super(name, job, age)
        this.languages = languages; 
        this.busy = true; 

    }

    
    completeTask() {
        this.busy = false; 
        console.log("Task Completed!");
        alert("Task Completed!"); 
    }

    acceptNewTask() { 

        this.busy = true; 
        console.log("Task Accepted!");
        alert("Task Accepted!"); 

    }

    offerNewTask() {

        if (this.busy) {

            console.log("Back of the line, kid. Gustavo can't accept any new tasks right now."); 
            alert("Back of the line, kid. Gustavo can't accept any new tasks right now."); 
            return "Gustavo can't accept any new tasks right now." ;

        } else {

            console.log("Gustavo would love to take on a new responsibility.");
            alert("Gustavo would love to take on a new responsibility.");
            return "Gustavo would love to take on a new responsibility." ;
        }

    }

    learnLanguage(learnedLang) { 

        let arr1 = []; 

        arr1.push(this.languages)
        arr1.push(learnedLang);

        this.languages = arr1 ; 

    }

    listLanguages() { 

        console.log(`Gustavo's databse of stored languages: ${this.languages}`);
        alert(`Gustavo's database of stored languages: ${this.languages}`);
        return `${this.languages}`;
    }


}


let gus = new Programmer ("Gustavo", "programmer", "25", "html" ) ;


function offerTaskButton() {

    gus.offerNewTask(); 

}


function learnNewLangButton() {

    gus.learnLanguage(prompt("What language do you want to download into Mr. Sepulveda's brain?"))
    alert ("thank you! Download will begin automatically."); 

}



// Button Commands: 

function listLangButton() {

    gus.listLanguages(); 


}

function compTaskButton() {

    gus.completeTask(); 

}

function acceptTaskButton() {

    gus.acceptNewTask(); 

}

function BurnItAll() {

    document.getElementById("askAgain").style.display = "block";

}


function uSure() {

    alert("You asked for it."); 
    location.reload() ; 

}









