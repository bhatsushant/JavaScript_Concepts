// Dynamic Scoping of the 'this' keyword - Example 2

const obj = {
    name : "Billy",
    a() {
        console.log('a',this);  // This will return the obj object as the function a() is being called by obj
        var b = function() {
            console.log('b',this);  // This will return the Window object as the function b() isn't called by any object 
                                    // but through the global scope itself
        }
        b();
    }
}

obj.a();


// If we need the function b() to return the obj object, there are three ways :

// 1. using the 'bind' keyword

const obj = {
    name : "Billy",
    a() {
        console.log('a',this);  // This will return the obj object as the function a() is being called by obj
        var b = function() {
            console.log('b',this);  // This will now return the obj object
        }
        return b.bind(this);
    }
}

obj.a()();  // Notice how we have to call the function twice as the calling it the first time will only return the
            // entire function b() and won't execute it



// 2. assigning the 'this' keyword to a variable before the function b() is declared/executed

const obj = {
    name : "Billy",
    a() {
        console.log('a',this);  // This will return the obj object as the function a() is being called by obj
        var self = this;    // This ensures that the 'self' variable will always have the value of this as the obj object
        var b = function() {
            console.log('b',self);  // This will now return the obj object
        }
        b();
    }
}

obj.a();


// 3. Arrow functions - as arrow functions bind the 'this' keyword lexically and not dynamically

const obj = {
    name : "Billy",
    a() {
        console.log('a',this);  // This will return the obj object as the function a() is being called by obj
        var b = () => {
            console.log('b',this);  // This will now return the obj object instead of the Window obj as now
                                    // the function b() is declared using arrow function
        }
        b();
    }
}

obj.a();

