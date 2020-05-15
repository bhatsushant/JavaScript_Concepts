// Simple example to demonstrate 'Promise.all()'

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Resolved');
    } else {
        reject('Rejected');
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, '2nd done');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, '3rd done');
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, '4th done');
});

Promise.all([promise,promise2,promise3,promise4])
    .then(values => {   console.log(values); });

//  Promise {<pending>}
//  ["Resolved", "2nd done", "3rd done", "4th done"]

// The above array will be displayed after 2 seconds as even though the earlier promises resolve quicker, the last one takes 2 seconds
// And the 'Promise.all()' function executes each promise sequentially and waits for the last promise to execute before returning the values