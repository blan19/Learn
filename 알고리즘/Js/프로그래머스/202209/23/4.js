class Heap {
  constructor() {
    this.items = [];
  }

  swap(idx1, idx2) {
    const temp = this.items[idx1];
    this.items[idx1] = this.items[idx2];
    this.items[idx2] = temp;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleDown() {
    let index = 0;

    while (
      this.leftChild(index) &&
      this.rightChild(index) < this.items[index]
    ) {
      let smallerIndex = this.leftChildIndex(index);

      // * 오른쪽이 더 작은 경우, 교환
      if (
        this.rightChild(index) &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        this.swap(smallerIndex, index);
        index = smallerIndex;
      }
    }
  }

  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  poll() {
    let item = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();
    return item;
  }
}

const heap = new MinHeap();

heap.add(2);
heap.add(4);
heap.add(8);
heap.add(1);
// heap.poll();
console.log(heap);
// heap.poll();
console.log(heap);
