// 단일 연결 리스트와 다르게 prev 속성도 필요
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else { // next 연결 -> prev 연결 -> tail 변경하면 임시 변수 필요없음 (메모리 줄이자)
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  
  pop() {
    if (this.head === null) return undefined;
    else {
      const poppedNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null; // 굳이 필요할지 의문
      }
      this.length--;
      return poppedNode;
    }
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    let count;
    let currentNode;
    if (idx < 0 || idx > this.length - 1) return null;
    else if (idx < this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== idx) {
        count++;
        currentNode = currentNode.next;
      }
    } else if (idx >= this.length / 2) {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== idx) {
        count--;
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }

  set(idx, val) {
    let foundNode = this.get(idx);
    if (!foundNode) return false;
    else {
      foundNode.val = val;
    }
    return true;
  }
}

const myList = new DoublyLinkedList();
myList.push(20);
myList.push(30);
myList.push(40);