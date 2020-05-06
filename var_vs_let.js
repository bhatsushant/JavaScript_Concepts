// var v/s let

var bool = true;
if(true) {
    var bool = false;
    console.log("Inside",bool);
}
console.log('Outside',bool);

/*  Output -    Inside false
                Outside false 

As you see from the above output, variables declared using var have scope at global level */


let val = true;
if(true) {
    let val = false;
    console.log('Inside',val);
}
console.log('Outside',val);
/*  Output -    Inside false
                Outside true

Variables declared using let keyword have block level scope */
