//Example of prototypal Inheritance
let dragon = {
    name: 'Drogon',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        console.log(`I am ${this.name}, the breather of fire!!`);
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 1;
    }
}

lizard.__proto__ = dragon; // This sets dragon as parent of lizard

for(let prop in lizard) {
    if(lizard.hasOwnProperty(prop)) {
        console.log('Own property : ',prop);
    } else {
        console.log('Inherited Properties',prop);
    }
}
/* Output - Own property :  name
            Own property :  fight
            Inherited Properties fire
            Inherited Properties sing */