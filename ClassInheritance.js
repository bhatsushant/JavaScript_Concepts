class Player {
    constructor(name,type){
        console.log('player',this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}. I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name,type){
        super(name,type);
        console.log('wizrard',this);
    }
    play() {
        console.log(`Wizard ${this.name} of type ${this.type} playing with XP 100.`);
    }
}

const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Shawn','Defender');