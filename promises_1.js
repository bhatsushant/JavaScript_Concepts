// Simple example of Promises

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Resolved');
    } else {
        reject('Rejected');
    }
});

promise.then(result => result + '!')
    .then(result2 => result2 + '?')
    .then(result3 => result3 + '!')
    .then(() => {   throw Error;    })
    .catch(() => console.log('Errrrrroooooorrrrr!!!!!!'));

/* Output - Errrrrroooooorrrrr!!!!!!
            Promise {<resolved>: undefined} */

promise.then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('Errrrrroooooorrrrr!!!!!!'))
    .then(result3 => result3 + '!');

// Promise {<resolved>: "Resolved!?!"}

// This happens as even though the 'catch()' statement is written above the last '.then' statement,
// the '.catch()' acts only if there's an error in the code

promise.then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('Errrrrroooooorrrrr!!!!!!'))
    .then(result3 => {    throw Error;    });

/* Output - Promise {<rejected>: ƒ}
            Uncaught (in promise) ƒ Error() { [native code] } */

// The above output produces an error as even though a '.catch()' statement is present,
// the placing of the '.catch()' matters as it won't catch any errors that occur in the code written after it