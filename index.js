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
