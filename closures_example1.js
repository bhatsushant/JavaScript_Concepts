// Simple example of closure

// Example 1

const nameFunc = (string) => (name) => (anotherName) => 
    console.log(`${string} ${name} ${anotherName}`);

nameFunc('Alex')('Bob')('Carry');   /* This will return 'Alex Bob Carry'. The last enclosing function has access to the variable passed in the first function even after the first function has been popped from the call stack. */

// Example 2

function grandpa() {
    let one = 'grandpa';
    return function dad() {
        let two = 'dad';
        let random = 'random' // This value will be garbage collected.
        return function son() {
            let three = 'son'
            console.log(`${one} ${two} ${three}`);
        }
    }
}

grandpa()()();  /* Similarly this will return 'grandpa dad son' as it retains the values from the the first two functions even though they have been popped off the call stack. As the variable random isn't accessed, it will be removed from the call stack */