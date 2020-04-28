// 'this' keyword example
// 'this' refers to the object that the function is a propeerty of

const name = "Bob";
function person() {
    console.log(this.name);
}

person(); // This will return 'Bob' as 'this' points to the global object which has the name property as 'Bob'

const obj1 = {
    name : "Alex",
    person : person
}

obj1.person(); // This will return 'Alex' as 'this' now points to obj1 which is accessing the function as a property

const obj2 = {
    name : "Cassy",
    person : person
}

obj2.person(); // This will return 'Cassy' as 'this' now points to obj2 which is accessing the function as a property