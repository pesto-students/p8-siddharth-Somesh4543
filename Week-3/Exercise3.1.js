const memoize = (squ) => {
  const results = {};
  return (...args) => {
    const argsKey = args;

    if (!results[argsKey]) {
      results[argsKey] = squ(...args);
    }
    return results[argsKey];
  };
};

const square = memoize((n) => {
  let num = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      num++;
    }
  }

  return num;
});

console.log(square(500));
console.log(square(500));
console.log(square(500));
console.log(square(5400));
console.log(square(5400));
console.log(square(5400));
