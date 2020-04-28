// Dynamic Scoping of the 'this' keyword - Example 1

function a(){
    console.log('a',this);  // This will return the Window object as expected as function a() belongs and is called through 
                            // the global scope
    function b(){
        console.log('b',this);  // This will also retun the Window object surprisingly as the function b() is also called 
                                // through the global scope as seen below and not by any object
        const c = {
            hi: function() {
                console.log('c',this);  // This will return the object c as now the hi() function is called by the object c
                                        // and 'this' now refers to the object c in this case
            }
        }
        c.hi();
    }
    b();
}
a();