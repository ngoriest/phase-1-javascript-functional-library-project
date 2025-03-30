function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
  
  function myEach(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else {
        for (const key in collection) {
          callback(collection[key]);
        }
      }
      return collection;
    }
  
    function myMap(collection, callback) {
      const result = [];
      myEach(collection, (value) => {
        result.push(callback(value));
      });
      return result;
    }
    function myReduce(collection, callback, initialValue) {
      let accumulator = initialValue;
      let startIndex = 0;
    
      // Convert object to array of values if needed
      const values = Array.isArray(collection) 
        ? collection 
        : Object.values(collection);
    
      // If no initialValue is provided, use first element as initial
      if (initialValue === undefined && values.length > 0) {
        accumulator = values[0];
        startIndex = 1;
      }
    
      for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], i, collection);
      }
    
      return accumulator;
    }
  
    function myFind(collection, predicate) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
            return collection[i];
          }
        }
      } else {
        for (const key in collection) {
          if (predicate(collection[key])) {
            return collection[key];
          }
        }
      }
      return undefined;
    }
  
    function myFilter(collection, predicate) {
      const result = [];
      myEach(collection, (value) => {
        if (predicate(value)) {
          result.push(value);
        }
      });
      return result;
    }
    function mySize(collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    }
    function myFirst(array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    }
    function myLast(array, n) {
      if (n === undefined) {
        return array[array.length - 1];
      } else {
        return array.slice(-n);
      }
    }
    function myKeys(object) {
      return Object.keys(object);
    }
    function myValues(object) {
      return Object.values(object);
    }