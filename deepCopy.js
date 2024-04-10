function deepCopy(obj) {
  if (!(obj instanceof Object) || obj == null) {
    return obj;
  }

  let result;

  if (Array.isArray(obj)) {
    result = [];

    for (let i = 0; i < obj.length; i++) {
      result[i] = deepCopy(obj[i]);
    }
  } else if (obj instanceof Date) {
    result = new Date(obj.getTime());
  } else if (obj instanceof RegExp) {
    result = new RegExp(obj);
  } else if (typeof obj === 'function') {
    result = new Function('return ' + obj.toString())();
  } else {
    result = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepCopy(obj[key]);
      }
    }
  }

  return result;
}

const obj = {
  str: 'string',
  num: 123,
  empty: null,
  notDefined: undefined,
  int: BigInt(Number.MAX_SAFE_INTEGER),
  innerObj: {
    innerArr: [1, 2, 3],
    innerFunc: () => {
      return 'innerFunc!';
    },
    innerDate: new Date(),
    innerReg: new RegExp(/^[a-zA-Z]+$/),
  },
  func: () => {
    return 'func!';
  },
  arr: [4, 5, 6],
  sym: Symbol('symbol'),
  date: new Date('2024-04-05'),
  reg: new RegExp(/ab+c/, 'i'),
};

const obj2 = deepCopy(obj);

module.exports = deepCopy;
