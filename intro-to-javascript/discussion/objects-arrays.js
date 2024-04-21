const person = {
    name: 'John',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
};

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(person.greet()); // Output: Hello, my name is John and I'm 30 years old.
console.log(doubled); // Output: [2, 4, 6, 8, 10]
