//bind method
const john = { name: "John", age: 24 };
const jane = { name: "Jane", age: 22 };
function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}
const greetingJohn = greeting.bind(john);
greetingJohn();
const greetingJane = greeting.bind(jane);
greetingJane();

//The bind method creates a new function and sets the this keyword to the specified object.
// With the bind() method, an object can borrow a method from another object

//call method
const obj = { name: "Somesh" };

let greeting1 = function (a, b) {
  return `${a} ${this.name}. ${b}`;
};
console.log(greeting1.call(obj, "Hello", "Wassup?"));

//apply method
const obj1 = { name1: "Somesh" };

let greeting2 = function (c, d) {
  return `${c} ${this.name1}, ${d}`;
};
console.log(greeting2.apply(obj1, ["Hello", "wassup?"]));

//call and apply methods are basically same.
//Both method sets the "this" inside the function and immediately executes that function.
//Call also accepts multiple arguments using ","
//Where as Apply accepts an array of arguments instead of ","
