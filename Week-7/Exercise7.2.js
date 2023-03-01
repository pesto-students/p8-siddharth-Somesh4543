class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function leftShift(head, k) {
  if (!head || k === 0) {
    return head;
  }

  let curr = head;
  let count = 1;

  while (count < k && curr) {
    curr = curr.next;
    count++;
  }

  if (!curr) {
    return head;
  }

  let kthNode = curr;

  while (curr.next) {
    curr = curr.next;
  }

  curr.next = head;

  head = kthNode.next;

  kthNode.next = null;

  return head;
}

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(7);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(9);

let k = 3;

console.log("Original list:");
let curr = head;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}

head = leftShift(head, k);

console.log(`List left-shifted by ${k} nodes:`);
curr = head;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
