const LocalStorageStub = {
    getItem: () => undefined,
    key: () => undefined,
    length: 0,
    removeItem: () => undefined,
    setItem: () => undefined,
  };
  
  const STORE = (typeof window !== 'undefined' && window.localStorage) || LocalStorageStub;
  
  /**
   * try to parse result if it is JSON
   * @param {any} value to try to parse
   */
  function tryParse(value:any) {
    if (typeof value !== 'string') {
      return value;
    }
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
  
  /* API */
  
  /**
   * Get all entries from localStorage
   */
//   export const getAll = () => {
//     const result = {};
//     for (let i = 0, j = STORE.length; i < j; i += 1) {
//       const key = STORE.key(i);
//       result[key] = tryParse(STORE.getItem(key));
//     }
//     return result;
//   };
  
  /**
   * get value
   * @param {string} key
   */
  export const getItem = (key:any) => tryParse(STORE.getItem(key));
  
  /**
   * set the value for the key
   * @param {*} key
   * @param {*} value
   */
  export const setItem = (key:any, value:any) => {
    try {
      STORE.setItem(key, value);
    } catch (e) {
      // catch exception
    }
  };
  