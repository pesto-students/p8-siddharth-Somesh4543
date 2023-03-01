function hasLoop(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

const node1 = { val: 1 };
const node2 = { val: 3 };
const node3 = { val: 4 };
node1.next = node2;
node2.next = node3;
node3.next = node2;
console.log(hasLoop(node1));

const node4 = { val: 1 };
const node5 = { val: 8 };
const node6 = { val: 3 };
const node7 = { val: 4 };
node4.next = node5;
node5.next = node6;
node6.next = node7;
console.log(hasLoop(node4));
