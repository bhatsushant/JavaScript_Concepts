function func() {
    height = 50;
    return height;
}
func(); // This will return '50' even though height isn't defined anywhere as JavaScript itself creates variables 
        // which are assigned values


// One way to fix the above loophole is to use the strict mode as shown below

'use strict'
function func() {
    height = 50;
    return height;
}
func(); // This will now return an error as 'height is not defined' because we have used the 'use strict' mode which
        // ensures strict checking for variable creation and its usage