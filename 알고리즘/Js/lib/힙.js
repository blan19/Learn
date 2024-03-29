class Node {
  constructor({ key, value }) {
    this.key = key;
    this.value = value;
  }
}

class Heap {
  constructor() {
    this.items = [];
  }

  parentIndex = (index) => Math.floor((index - 1) / 2);

  leftChildIndex = (index) => index * 2 + 1;

  rightChildIndex = (index) => index * 2 + 2;

  parent = (index) => this.items[this.parentIndex(index)];

  leftChild = (index) => this.items[this.leftChildIndex(index)];

  rightChild = (index) => this.items[this.rightChildIndex(index)];

  peek = () => this.items[0];

  size = () => this.items.length;
}

class MinHeap extends Heap {
  bubbleUp = () => {
    let index = this.items.length - 1;
    const lastInsertedNode = this.items[index];

    while (index > 0) {
      if (this.parent(index).key > lastInsertedNode.key) {
        this.parent(index) = this.items[index];
        index = this.parentIndex(index);
      } else break;
    }

    this.items[index] = lastInsertedNode;
  };

  bubbleDown = () => {
    let index = 0;
    const size = this.size();
    const rootNode = this.peek();

    while(this.leftChild(index)) {
      const leftChildIndex = this.leftChildIndex(index);
      const rightChildIndex = this.rightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < size && this.items[rightChildIndex].key < this.items[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      if(this.items[smallerChildIndex].key <= rootNode.key) {
        this.items[index] = this.items[smallerChildIndex];
        index = smallerChildIndex;
      } else break
    }

    this.items[index] = rootNode;
  };

  insert = (item) => {
    const node = new Node(item);
    this.items[this.items.length] = node;
    this.bubbleUp();
  };

  poll = () => {
    const size = this.size();
    const rootNode = this.peek();

    if(size <= 0) return undefined;
    if(size === 1) this.items = [];
    else {
      this.items[0] = this.items.pop();
      this.bubbleDown();
    }

    return rootNode;
  };
}


const minHeap = new MinHeap();

minHeap.insert({key: 1, value: "hello, world"});
minHeap.insert({key: 2, value: "hello, world"});
minHeap.insert({key: 5, value: "hello, world"});
minHeap.insert({key: 4, value: "hello, world"});
minHeap.insert({key: 9, value: "hello, world"});

console.log(minHeap.poll());
console.log(minHeap);
console.log(minHeap.poll());
console.log(minHeap);