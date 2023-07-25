Array.prototype.mapPolyfill = function (handler) {
  const mappedArray = Array.from(this);

  for (let index = 0; index < this.length; index++) {
    mappedArray[index] = handler(this[index]);
  }

  return mappedArray;
};

Array.prototype.filterPolyfill = function (handler) {
  const filteredArray = [];

  for (let index = 0; index < this.length; index++) {
    if (handler(this[index])) {
      filteredArray.push(this[index]);
    }
  }

  return filteredArray;
};

Array.prototype.reducePolyfill = function (handler, initialValue) {
  let accumulator = initialValue;

  for (const item of this) {
    accumulator = handler(accumulator, item);
  }

  return accumulator;
};

const mapResult = [1, 2, 3].mapPolyfill((item) => item * 2);
const filterResult = [1, 2, 3].filterPolyfill((item) => item % 2 === 0);
const reduceResult = [1, 2, 3].reducePolyfill((sum, item) => sum + item, 0);

console.log(mapResult);
console.log(filterResult);
console.log(reduceResult);
