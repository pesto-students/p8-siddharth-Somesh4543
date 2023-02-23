function findPairWithDiff(arr, diff) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = arr[i] - diff;
    if (hash[complement]) {
      return 1;
    }
    hash[arr[i]] = true;
  }
  return 0;
}

let A = [5, 10, 3, 2, 50, 80];
let B = 78;
console.log(findPairWithDiff(A, B));

A = [-10, 20];
B = 30;
console.log(findPairWithDiff(A, B));
