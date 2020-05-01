const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}

let obj3 = obj2;
 
function change(num, str, object1, object2) {
    num = num * 10;
    str = "Pete";
    object1 = object2;
    object2.value = "c";
    console.log("Printed from inside function");
    console.log(num); 
    console.log(str);
    console.log(object1.value);
    console.log(object2.value);
}
 
change(number, string, obj1, obj2);
console.log("Printed from outside function");
console.log(number); 
console.log(string);
console.log(obj1.value);

// These printed from outside will still return the original unchanged values as the change() function changes values only inside the function