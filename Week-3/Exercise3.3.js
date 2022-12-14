function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

//output "Count is 0"
//increment is changing the count not the message.
//As the message variable is within the scope of "CreateIncrement" hence the message holds to 0.
//hence log() function is a closure that captures message variable from the "createIncrement()" scope.
//As message is within "CreateIncrement" scope hence it is inaccessible to increment().
//in clouser we only have to look where the function was declared and what value of parent I can access.