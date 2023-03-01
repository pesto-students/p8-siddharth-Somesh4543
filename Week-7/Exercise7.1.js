let head1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: { val: 4, next: { val: 5, next: { val: 6, next: null } } },
    },
  },
};
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
console.log(reverseLinkedList(head1));
