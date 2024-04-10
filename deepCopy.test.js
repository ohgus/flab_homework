const deepCopy = require('./deepCopy');

describe('DeepCopy Test', () => {
  const obj = {
    str: 'string',
    num: 123,
    empty: null,
    notDefined: undefined,
    int: BigInt(Number.MAX_SAFE_INTEGER),
    innerObj: {
      innerArr: [1, 2, 3],
      innerFunc: function () {
        return 'innerFunc!';
      },
      innerDate: new Date(),
      innerReg: new RegExp(/^[a-zA-Z]+$/),
    },
    func: function () {
      return 'func!';
    },
    arr: [4, 5, 6],
    sym: Symbol('symbol'),
    date: new Date('2024-04-05'),
    reg: new RegExp(/ab+c/, 'i'),
  };

  const copiedObj = deepCopy(obj);

  test('string', () => {
    expect(copiedObj.str).toEqual(obj.str);
  });

  test('number', () => {
    expect(copiedObj.num).toEqual(obj.num);
  });

  test('null', () => {
    expect(copiedObj.empty).toEqual(obj.empty);
  });

  test('undefined', () => {
    expect(copiedObj.notDefined).toEqual(obj.notDefined);
  });

  test('bigInt', () => {
    expect(copiedObj.int).toEqual(obj.int);
  });

  test('symbol', () => {
    expect(copiedObj.sym).toEqual(obj.sym);
  });

  test('object', () => {
    expect(copiedObj === obj).toBe(false);
    expect(copiedObj.innerObj === obj.innerObj).toBe(false);
  });

  test('array', () => {
    expect(copiedObj.arr === obj.arr).toBe(false);
    expect(copiedObj.innerObj.innerArr === obj.innerObj.innerArr).toBe(false);
  });

  test('date', () => {
    expect(copiedObj.date === obj.date).toBe(false);
    expect(copiedObj.innerObj.innerDate === obj.innerObj.innerDate).toBe(false);
  });

  test('function', () => {
    expect(copiedObj.func === obj.func).toBe(false);
    expect(copiedObj.innerObj.innerFunc === obj.innerObj.innerFunc).toBe(false);
  });

  test('RegExp', () => {
    expect(copiedObj.reg === obj.reg).toBe(false);
    expect(copiedObj.innerObj.innerReg === obj.innerObj.innerReg).toBe(false);
  });
});
