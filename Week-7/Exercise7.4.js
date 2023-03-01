function checkBalanced(exp) {
  let stack = [];
  let brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] in brackets) {
      stack.push(exp[i]);
    } else {
      if (stack.length == 0) {
        return false;
      }
      let lastOpen = stack.pop();
      if (brackets[lastOpen] != exp[i]) {
        return false;
      }
    }
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkBalanced("{([])}"));
console.log(checkBalanced("()"));
console.log(checkBalanced("([]"));
console.log(checkBalanced("[()]{}{()()}"));
console.log(checkBalanced("[(])"));
