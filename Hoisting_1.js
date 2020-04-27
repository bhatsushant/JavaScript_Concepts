// Hoisting - 1

console.log(isValid); // This will return 'undefined' as the variable isValid is partially hoisted before execution
var isValid = true;
console.log(sing()); // This will return 'la la la' as function is fully hoisted before execution
function sing(){
    console.log("la la la");
}
function func(){
    console.log("Before Declaration : " + isValid); // This will return 'undefined' as variables are partially hoisted 
                                                    // before execution and also because of scope/lexical environment
                                                    // (functions have their own values for variables)
    var isValid = false;
    console.log("After Declaration : " + isValid); // This will return 'false' as expected
}
func();
console.log("Global : " + isValid); // This will return 'true' as now the global execution context holds the value of 
                                    // isValid as 'true' (the value 'false' is only inside the function)

console.log(num);   // This will retun an error 'num not defined' as there are only 2 types of hoisting 
                    // 1. for variables declared using 'var' keyword 
                    // 2. and functions declared using function declaration method
const num = 10;