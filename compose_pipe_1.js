// Simple example of Compose and Pipe

// Function composition is the process of combining two or more functions to produce a new function.
// Piping is Compose in the reverse order

const compose = (f, g) => (data) => f(g(data));

const pipe = (f, g) => (data) => g(f(data));

const multiplyBy3 = (num) => num*3;

const makePositive = (num) => Math.abs(num);

const multiplyBy3AndAbsoluteCompose = compose(multiplyBy3, makePositive);
const multiplyBy3AndAbsolutePipe = pipe(multiplyBy3, makePositive);

multiplyBy3AndAbsoluteCompose(-50);

// Output - 150

multiplyBy3AndAbsolutePipe(-50);

// Output - 150

// As you see both the Compose and Pipe produce exactly same results