// Simple example of closure

function call() {
    setTimeout(()=>{console.log(callMe)},4000);
    const callMe = 'Hey there!';
}

call(); /* This will return 'Hey there!' even though we have declared variable callMe below the timeout function and hoisting doesn't work with const variables. This is because by the time the timeout WebApi returns to the call stack, the function call() has already been full executed and the popped off from the stack and the value od callMe is retained because of closure*/