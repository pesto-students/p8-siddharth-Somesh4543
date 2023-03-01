function nextGreaterElement(arr) {
  const stack = [];
  const result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    console.log("Current element:", arr[i]);
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const index = stack.pop();
      console.log(`  Next greater element for ${arr[index]} is ${arr[i]}`);
      result[index] = arr[i];
    }
    stack.push(i);
  }

  console.log("Next greater elements:", result);
}

nextGreaterElement([1, 3, 2, 4]);
nextGreaterElement([6, 8, 0, 1, 3]);
