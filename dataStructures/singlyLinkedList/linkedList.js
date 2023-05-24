class SinglyLInkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length == 0) {
      return undefined;
    }
    let currentNode = this.get(this.length - 1);
    currentNode.next = null;
    let toBeRemoved = this.tail;
    this.tail = currentNode;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return toBeRemoved;
  }

  unshift(val) {
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    if (this.length == 0) {
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length == 0) return undefined;

    let toBeShifted = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return toBeShifted;
  }

  get(index) {
    if (this.length <= index || index < 0) return undefined;

    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, val) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (this.length < index || index < 0) return false;
    if (index == 0) {
      return !!this.unshift(val);
    }
    if (index == this.length) {
      this.push(val);
      return true;
    }
    let parentNode = this.get(index - 1);
    let previousNextNode = parentNode.next;
    let newNode = new Node(val);

    parentNode.next = newNode;
    newNode.next = previousNextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (this.length <= index || index < 0) return undefined;
    if (index == this.length - 1) return this.pop();
    if (index == 0) return this.shift();
    let parentNode = this.get(index - 1);
    let toBeRemoved = parentNode.next;
    parentNode.next = parentNode.next.next;
    this.length--;
    return toBeRemoved;
  }

  reverse() {
    if (this.length == 1) return this;
    // swap had and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    // for (let i = 0; i < this.length; i++) {
    //   next = node.next;
    //   node.next = prev;
    //   prev = node;
    //   node = next;
    // }
    // return this;

    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list = new SinglyLInkedList();
// list.push(5);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
console.log("---------------");
console.log(list);
console.log("---------------");
// console.log(list.set(2, 9));
// console.log(list.remove(1));
// console.log(list.remove(1));
// console.log(list.remove(0));
list.reverse();
// console.log(list.get(0));
console.log("---------------");
list.print();
console.log(list);
// console.log(list.pop());
