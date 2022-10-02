

//CHALLENGE: 
// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
// prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
// prints "Each person gets 2.67 slices of pizza"


//sharePizza -> amount of people eating
//cutPizzaSlices -> total amount of pizza slices
//sharePizza function divides the amount of people by the amount of total pizza and prints the result. 






function order() {

    var cutPizzaSlices ;

    function sharePizza(input) {

        let slices = cutPizzaSlices / input ; 
        let fixedSlices = slices.toFixed(2);  //.toFixed limits the division result (slices) to two decimal places. 

        console.log (`Each person gets ${fixedSlices} slices of pizza.`); 
        document.getElementById("answer").innerHTML = `Each person gets ${fixedSlices} slices of pizza.` ; 
        return
    } 


    // if statements to determine pizza size (cutPizzaSlices) according to radio form selection.
    if (document.getElementById("radioSmall").checked == true) {

        cutPizzaSlices = 4; 
        // console.log("Checked option: Small");
        // console.log(cutPizzaSlices); 

        var input = parseInt(prompt("Wait, how many people are gonna eat?"));
        return sharePizza(input);

    } else if (document.getElementById("radioMedium").checked == true) {

        cutPizzaSlices = 8; 
        // console.log("Checked option: Medium");
        // console.log(cutPizzaSlices); 

        var input = parseInt(prompt("Wait, how many people are gonna eat?"));
        return sharePizza(input);

    } else if (document.getElementById("radioLarge").checked == true) {

        cutPizzaSlices = 12; 
        // console.log("Checked option: Large"); 
        // console.log(cutPizzaSlices); 

        var input = parseInt(prompt("Wait, how many people are gonna eat?"));
        return sharePizza(input);

    } else {
        console.log("Choose a size to begin order"); 
    }


    // console.log(cutPizzaSlices / input)


    // console.log("----------------"); 
    // console.log(sharePizza(2)); 


}















