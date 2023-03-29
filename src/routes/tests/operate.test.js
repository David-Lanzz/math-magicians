import operate from '../../logic/operate';

describe('Tests for operate.js', () => {
  const add = jest.fn(() => operate(2, 2, '+'));
  test('if add function works', () => {

  }, expect(add()).toBe('4'));

  const subtract = jest.fn(() => operate(2, 2, '-'));
  test('if subtract function works correctly', () => {

  }, expect(subtract()).toBe('0'));

  const divide = jest.fn(() => operate(2, 2, '÷'));
  test('if divide function works correctly', () => {

  }, expect(divide()).toBe('1'));

  const multiply = jest.fn(() => operate(2, 2, 'x'));
  test('if multiply function works correctly', () => {

  }, expect(multiply()).toBe('4'));
});
