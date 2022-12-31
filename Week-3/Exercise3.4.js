function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5

console.log(stack.items); // => undefined

//item moved to the variable inside "createStack" scope.
// for ouside of "createSatack" it was impossible to access or modify item array.
// item now encapsulated push and pop method.
// push() and pop() method directly capture method from "createStack". 