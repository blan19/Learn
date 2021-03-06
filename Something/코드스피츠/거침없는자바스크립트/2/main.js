const Item = class {
  #time;
  #block;
  constructor(block, time) {
    this.block = block;
    this.time = time + performance.now();
  }
};

// ? performance.now()는 브라우저가 시작된 후

const queue = new Set();

const f = (time) => {
  queue.forEach((item) => {
    if (item.time > time) return;
    queue.delete(item);
    item.block();
  });
  requestAnimationFrame(f);
};
requestAnimationFrame(f);

const timeout = (block, time) => queue.add(new Item(block, time));

timeout((_) => console.log("hello"), 1000);
