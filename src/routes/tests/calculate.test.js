import calculate from '../../logic/calculate';

describe('Tests for calculate.js', () => {
  const AC = jest.fn(() => calculate({
    total: 8,
    next: 7,
    operation: '+',
  }, 'AC'));
  test('if AC clears the calculator', () => {

  }, expect(AC()).toEqual({
    total: null,
    next: null,
    operation: null,
  }));

  const zero = jest.fn(() => calculate({
    total: 0,
    next: '0',
    operation: '+',
  }, '0'));
  test('if zero clears the calculator', () => {

  }, expect(zero()).toEqual({}));

  const nooperation = jest.fn(() => calculate({
    total: '0',
    next: '4',
    operation: null,
  }, '9'));
  test('if nooperation clears the calculator', () => {

  }, expect(nooperation()).toEqual({ total: null, next: '49' }));

  const plusorminus = jest.fn(() => calculate({
    total: '20',
    next: '4',
    operation: null,
  }, '+/-'));
  test('if plusorminus clears the calculator', () => {

  }, expect(plusorminus()).toEqual({ total: '20', next: '-4', operation: null }));

  const plusorminus2 = jest.fn(() => calculate({
    total: '20',
    next: null,
    operation: null,
  }, '+/-'));
  test('if plusorminus2 clears the calculator', () => {

  }, expect(plusorminus2()).toEqual({ total: '-20', next: null, operation: null }));
});
