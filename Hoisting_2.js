// Hoisting - 2

console.log(sing1());   // This will return 'lala lala lala'. The first sing1 function gets replaced with the second sing1
                        // function declared below because of full hoisting of functions declared using 
                        // function declaration method

console.log(sing2());   // This returns an error 'function does not exist' because the function sing2 is declared 
                        // using function expression method and because of this before execution, 
                        // only the variable sing2 is hoisted as 'undefined'

console.log(sing2);     // This will return 'undefined' because of partial hoisting of variables declared using 
                        // the 'var' keyword

//function declaration
function sing1() {
 console.log("la la la");
} // This never gets used

function sing1() {
    console.log("lala lala lala");
}

//function expression
var sing2 = function() {
    console.log("lalala lalala lalala");
}