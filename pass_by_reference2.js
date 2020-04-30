// Pass by reference and cloning - Example 1

// Shallow Cloning and Deep Cloning

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        deep : "Another adress"
    }
}

const obj2 = Object.assign({},obj1);
const obj3 = {...obj1};
obj1.c.deep = "Cloned";

console.log(obj1);
console.log(obj2);
console.log(obj3);

// All objects above will get modified as the 'assign' method and the spread operator will only shallow clone the objected i.e. the cloning doesn't work on nested objects. The nested objects will still refer to the same address.

// For deep cloning we need to do the following :

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        deep : "Another adress"
    }
}

const obj2 = Object.assign({},obj1);
const obj3 = {...obj1};
const deepClone = JSON.parse(JSON.stringify(obj1));
obj1.c.deep = "Cloned";

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(deepClone); // This will retain the value of property 'c' and
                        // won't be changed whe obj1 is modified