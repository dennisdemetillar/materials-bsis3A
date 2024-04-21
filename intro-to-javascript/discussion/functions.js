const greet = (name) => {
    return `Hello, ${name}!`; // Declaration with arrow function
};

const square = (num) => num * num; // Shorter arrow function with implicit return

console.log(greet('John')); // Output: Hello, John!
console.log(square(5)); // Output: 25
