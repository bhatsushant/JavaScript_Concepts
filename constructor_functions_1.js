// Constructor functions

function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return this.name + ' attacks with ' + this.weapon;
}

const peter = new Elf('Peter', 'Stone');
console.log(peter.attack());

const sam = new Elf('Sam', 'Fire');
console.log(sam.attack());

/* Output - Peter attacks with Stone
            Sam attacks with Fire */

// Adding a function using the '.prototype' method as shown above adds a common function on the constructor function 
// which can be used by any object created using the 'new' keyword.
// This function has a single instance in the memory and all objects using this function point to the same function
// This saves memory as if the function was added in the constructor function itself like the 'name' and 'weapon' properties, 
//it would have created a separate instance for every object created and would have caused a lot of memory wastage.