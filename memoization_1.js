// Simple example of memoization

function addTo80(n) {
    console.log("Runs every time when called even with the same values");
    return n + 80;
}

function memoizedAddto80() {
    let cache = {}; // This is declared inside the function to avoid polluting the global scope
    return function(n) { // Closure is used so that the variable 'cache' declared above doesn't get reset everytime the function is run
        if(n in cache) {
            console.log("Returns values already stored in cache optimizing memory and saving tedious memory operations");
            return cache[n];
        } else {
            console.log("Runs just once when new values are encountered");
            cache[n] = n + 80;
        }
    }
}

const memoized = memoizedAddto80();

console.log(addTo80(5));
/*  Runs every time when called even with the same values
    85 */
console.log(addTo80(5));
/*  Runs every time when called even with the same values
    85 */

console.log(memoized(5));
/*  Runs just once when new values are encountered
    85 */

console.log(memoized(6));
/*  Runs just once when new values are encountered
    86 */

console.log(memoized(5));
/*  Returns values already stored in cache optimizing memory and saving tedious memory operations
    85  */

console.log(memoized(6));
/*  Returns values already stored in cache optimizing memory and saving tedious memory operations
    86 */