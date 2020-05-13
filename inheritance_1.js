//  Simple example of Inheritance

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        console.log(this.name+ ' attacks with ' + this.weapon);
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
    casteSpell() {
        return 'Abra-Kadabra';
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        console.log('Made the strongest fort');
    }
}

const dobby = new Elf('Dobby', 'Magic', 'House');
dobby; // Elf {name: "Dobby", weapon: "Magic", type: "House"}
dobby.casteSpell(); // Abra-Kadabra
const shrek = new Ogre('Shrek', 'Club', 'Green');
shrek; // Ogre {name: "Shrek", weapon: "Club", color: "Green"}
shrek.makeFort(); // Made the strongest fort