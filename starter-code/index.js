class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) =>{return a-b}) 
    this.length = this.items.length;
  }

  get(pos) {
    let resultado = this.items[pos];
  return resultado
}

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length;
  }
  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((a, b) => {
      return a + b;
    }, 0);
  }
}

module.exports = SortedList;


let sortList = new SortedList();
var foo = 10;
for (let i = 0; i < 3; i++) {
  sortList.add(foo * i);
  console.log(`${sortList.get(i)}  -  ${foo * i}`);
}
console.log('-----------------')
sortList = new SortedList();
sortList.add(30);
sortList.add(20);
sortList.add(10);
console.log(`${sortList.get(1)}  -  ${10}`);
console.log(`${sortList.get(2)}  -  ${20}`);
console.log(`${sortList.get(3)}  -  ${30}`);