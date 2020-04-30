// Pass by reference and cloning - Example 1

const obj1 = {
    a: 'a',
    b: 'b',
    c: 'c'
}

const obj2 = obj1;

obj.c = 5;

console.log(obj1);
console.log(obj2);  // This will return the property 'c' as 5 as obj2 is
                    // referring to the same address as obj1

// There are two ways to clone the object and provide them with a separate reference address

// 1. using the 'assign' method

const obj2 = Object.assign({},obj);

obj1.c = 5;

console.log(obj1);
console.log(obj2); // Now this will have the value of property 'c' intact 

// 2. using the spread operator

const obj2 = {...obj1};

obj1.c = 5;

console.log(obj1);
console.log(obj2); // Now this will have the value of property 'c' intact