// Adding new methods to built-in functions and modifying existing methods

// Example 1 - Adding a new method, lastYear, to Date function


Date.prototype.lastYear = function() {
    return this.getFullYear - 1;
}

new Date().lastYear();

/* Current year is 2020 
Output - 2019 */

new Date('2016').lastYear();

// Output - 2015

// Example 2 - Modifying the map() function of an array

Array.prototype.map = function() {
    let arr = [];
    for(let i=0; i<this.length; i++) {
        arr.push(this[i] + ' MAP');
    }
    return arr;
}

let array = [1,2,3,4];
array.map();

// Output - ["1 MAP", "2 MAP", "3 MAP", "4 MAP"];