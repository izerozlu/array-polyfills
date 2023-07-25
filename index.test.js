import './index';

describe('Array polyfill tests', () => {
  describe('mapPolyfill', () => {
    it('should apply mapPolyfill correctly', () => {
      const testArray = [1, 2, 3, 4];
      const doubledArray = testArray.mapPolyfill((item) => item * 2);
      expect(doubledArray).toEqual([2, 4, 6, 8]);
    });

    it('should handle empty array for mapPolyfill', () => {
      const emptyArray = [].mapPolyfill((item) => item);
      expect(emptyArray).toEqual([]);
    });

    it('should handle an array with undefined values for mapPolyfill', () => {
      const testArray = [1, 2, undefined, 4];
      const mappedArray = testArray.mapPolyfill((item) => item * 2);
      expect(mappedArray).toEqual([2, 4, NaN, 8]);
    });
  });

  describe('filterPolyfill', () => {
    it('should apply filterPolyfill correctly', () => {
      const testArray = [1, 2, 3, 4];
      const evenArray = testArray.filterPolyfill((item) => item % 2 === 0);
      expect(evenArray).toEqual([2, 4]);
    });

    it('should handle empty array for filterPolyfill', () => {
      const emptyArray = [].filterPolyfill((item) => item);
      expect(emptyArray).toEqual([]);
    });

    it('should handle an array with falsy values for filterPolyfill', () => {
      const testArray = [1, 0, 'hello', '', false, null, undefined];
      const filteredArray = testArray.filterPolyfill(Boolean);
      expect(filteredArray).toEqual([1, 'hello']);
    });
  });

  describe('reducePolyfill', () => {
    it('should apply reducePolyfill correctly', () => {
      const testArray = [1, 2, 3, 4];
      const sum = testArray.reducePolyfill((acc, item) => acc + item, 0);
      expect(sum).toBe(10);
    });

    it('should handle empty array for reducePolyfill', () => {
      const emptyArray = [].reducePolyfill((acc, item) => acc + item, 0);
      expect(emptyArray).toBe(0);
    });

    it('should handle initial value for reducePolyfill', () => {
      const testArray = [1, 2, 3, 4];
      const result = testArray.reducePolyfill((acc, item) => acc + item, 5);
      expect(result).toBe(15);
    });

    it('should handle an array with a single element for reducePolyfill', () => {
      const testArray = [10];
      const result = testArray.reducePolyfill((acc, item) => acc + item, 5);
      expect(result).toBe(15);
    });

    it('should handle an array with undefined values for reducePolyfill', () => {
      const testArray = [1, 2, undefined, 4];
      const result = testArray.reducePolyfill(
        (acc, item) => (item ? acc + item : acc),
        0
      );
      expect(result).toBe(7);
    });
  });
});
