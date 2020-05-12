// Example of Factory Functions with Object.create()

const elfFunctions = {
    attack() {
        return this.name + ' attacks with ' + this.weapon;
    }
};

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions);
    console.log(newElf.__proto__);  //will return 'attack: ƒ attack()'
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'Stone');
console.log(peter.attack());
const sam = createElf('Sam', 'Fire');
console.log(sam.attack());

/* Output - Peter attacks with Stone
            Sam attacks with Fire */

// Object.create() creates a prototypal link or chain