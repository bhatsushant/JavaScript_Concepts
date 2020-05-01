//Benefits of closure

// 1. Memory optimization

function heavyDuty(index){
    const bigArray = new Array(7000).fill('~');
    console.log('Created for heavyDuty!');
    return bigArray[index];
}

function anotherHeavyDuty(){
    const bigArray = new Array(7000).fill('*');
    console.log('Created for anotherHeavyDuty!');
    return function(index){
        return bigArray[index];
    }
}

const getHeavyDuty = anotherHeavyDuty();

heavyDuty(600);
heavyDuty(700);
heavyDuty(800);

getHeavyDuty(500);
getHeavyDuty(400);
getHeavyDuty(300);

/* The heavyDuty function creates a new array and destroys it every time its called. This consumes a lot of memory and the performance degrades. The anotherHeavyDuty function though solves the above problem using closures. This function is passed to a variable which returns the function inside it. Once it has created the array the function inside always remembers or stores the array for further use and when the assigned variable is called a new array is not created but the same array is used for operations.*/