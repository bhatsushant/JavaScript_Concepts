// Simple example of currying

// Currying is a concept wherein a function is passed with a parameter and in turn returns another function with a parameter. 
// A function has to be passed with parameters one by one.
//This ensures reusability of functions 
// and also demonstrates abstraction wherein the user of the function doesn't need to know what an underlying function does
//but will recieve an output if passed with specific parameters.

const multiply = (a) => (b) => a*b;
const multiplyBy10 = multiply(10); 

multiplyBy10;
//  (b) => a*b

multiplyBy10(5);
// 50

multiplyBy10(6);
// 60

multiplyBy10(7);
// 70

const multiplyBy15 = multiply(15);

multiplyBy15(5);
// 75

multiplyBy15(6);
// 90

// As you can see from the above exampe the function multiply can be reused multiple times
// by different implementations of functions each having their own logic