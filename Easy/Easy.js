

//CHALLENGE: 
// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"



function submit() {

    function excercise(sport) {

        // console.log("exercise(sport) test"); 
        console.log("Today's exercise: " + sport);
        document.getElementById("answer").innerHTML = "Today's exercise: " + sport ; 
        return
    
    }


    function run() {
        var run = excercise("Running");
    }


    function swim() {
        var swim = excercise('swimming');
    }


    if (document.getElementById("radioRun").checked == true) {


        run(); 
        // var run = excercise("Running");
        // console.log("Checked option: Running"); 
        // return

    } else if (document.getElementById("radioSwim").checked == true) {


        swim();
        // var swim = excercise('swimming');
        // console.log("Checked option: Swimming");  
        // return
        
    } else {

        console.log("Choose a sport."); 
        document.getElementById("answer").innerHTML = "Choose a sport." ;
        
    }

}




