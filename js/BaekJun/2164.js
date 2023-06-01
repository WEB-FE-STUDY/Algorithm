const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Queue {
  constructor(arr) {
    this.arr = arr;
  }
  qPush(num) {
    this.arr.push(num);
  }
  qShift() {
    const node = this.arr.shift();
    return node;
  }
  qLength() {
    return this.arr.length;
  }
  qPop() {
    this.arr.pop();
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(element) {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return removedNode.value;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let cur = this.head;
    let prev = null;

    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }

    const removedNode = cur;

    if (prev) {
      prev.next = null;
      this.tail = prev;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return removedNode.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const solution = (input) => {
  const n = Number(input);
  const cards = new LinkedList();
  for (let i = 0; i < n; i++) {
    cards.push(i + 1);
  }
  while (true) {
    if (cards.length === 1) break;
    cards.shift();
    const secondCard = cards.shift();
    cards.push(secondCard);
  }
  return cards.shift();
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
