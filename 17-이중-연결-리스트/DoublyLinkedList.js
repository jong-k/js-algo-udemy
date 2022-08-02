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
}

const myList = new DoublyLinkedList();
myList.push(20);
myList.push(30);
myList.push(40);