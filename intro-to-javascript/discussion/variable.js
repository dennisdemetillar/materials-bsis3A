let x = 10; // Declaration with let
const PI = 3.14; // Declaration with const

if (true) {
    let y = 20; // Block-scoped variable
    const NAME = 'John'; // Block-scoped constant
}
console.log(x); // Output: 10
console.log(y); // Error: y is not defined

