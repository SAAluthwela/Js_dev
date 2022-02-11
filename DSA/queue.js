function Queue() {
  this.elements = [];
}

//add item to queue
Queue.prototype.enqueue = function (e) {
  this.elements.push(e);
};

//remove item from queue
Queue.prototype.dequeue = function () {
  return this.elements.shift();
};

//check isEmpty?
Queue.prototype.isEmpty = function () {
  return this.elements.length == 0;
};

//get peek item
Queue.prototype.peek = function () {
  return !this.isEmpty() ? this.elements[0] : undefined;
};

//get length
Queue.prototype.length = function () {
  return this.elements.length;
};

let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
// get the current item at the front of the queue
console.log(q.peek()); // 1

// get the current length of queue
console.log(q.length()); // 7

// dequeue all elements
while (!q.isEmpty()) {
  console.log(q.dequeue());
}
