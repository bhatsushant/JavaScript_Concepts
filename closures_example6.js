// Example of Closure to avoid overwriting values and maintaining scope

const array = [1,2,3,4];

for(var i=0; i<array.length; i++) {
    setTimeout(function(){
        console.log(`I am at index ${i}`);
    },3000);
}

/* The above example will return 'I am at index 4' 4 times even though the loop iterates over every element because by the time the setTimeout WebAPI has returned after 3 seconds, var which is a global variable has rewritten it's value to 4*/

// There are 2 ways to solve this

// 1. Changing var to let

const array = [1,2,3,4];

for(let i=0; i<array.length; i++) {
    setTimeout(function(){
        console.log(`I am at index ${i}`);
    },3000);
}

/* The let keyword stores and maintains the values of variables in block scope unlike var which stores the values at the global scope. This helps in maintaining the state of the variable 'i' each time the loop iterates over it and even though the WebAPI returns with a delay, the value for each 'i' is maintained */

// 2. Immediately Invoked Function Expression (IIFE)

const array = [1,2,3,4];

for(var i=0; i<array.length; i++) {
    (function(closureI){
        setTimeout(function(){
            console.log(`I am at index ${closureI}`);
        },3000);
    })(i);
}

/* This is another way we can maintain the value of the variable 'i' each time by passing it everytime to the function as a parameter */