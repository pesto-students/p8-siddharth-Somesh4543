class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(x) {
    this.s1.push(x);
    console.log(`Element ${x} enqueued into the queue`);
  }

  dequeue() {
    if (this.s2.length === 0) {
      if (this.s1.length === 0) {
        console.log(`Queue is empty, cannot perform dequeue operation`);
        return -1;
      }
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    const x = this.s2.pop();
    console.log(`Element ${x} dequeued from the queue`);
    return x;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.dequeue();
queue.enqueue(3);
queue.dequeue();
queue.enqueue(4);
queue.dequeue();
queue.dequeue();
