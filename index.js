Array.prototype.mapPolyfill = function (handler) {
  const mappedArray = [];

  for (const item of this) {
    mappedArray.push(handler(item));
  }

  return mappedArray;
};

Array.prototype.filterPolyfill = function (handler) {
  const filteredArray = [];

  for (const item of this) {
    if (handler(item)) {
      filteredArray.push(item);
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

Array.prototype.everyPolyfill = function (handler) {};

const filterResult = [1, 2, 3].filterPolyfill((item) => item % 2 === 0);
const reduceResult = [1, 2, 3].reducePolyfill((sum, item) => sum + item, 0);
