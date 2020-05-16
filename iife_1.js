// Example of Immediately Invoked Function Expression (IIFE)

var fightModule = (function() {
    let harry = 'potter'
    let voldemort = 'one who cannot be named'

    function fight(char1, char2) {
        let attack1 = Math.floor(Math.random() * char1.length);
        let attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }
    return  {
        fight : fight
    }
})()

// Output:  

fightModule;
//  {fight: ƒ}

fightModule.fight('harry','voldemort');
//  "voldemort wins"

fightModule.fight('hermoine','ron');
//  "hermoine wins"

// the above pattern ensures that variables aren't accessible in the global scope and cannot be modified by other global functions or variables
// only the methods we make available in the return object are accessible