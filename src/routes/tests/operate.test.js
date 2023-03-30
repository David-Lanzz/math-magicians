import operate from '../../logic/operate';

describe('Tests for operate.js', () => {
  test('if add function works', () => {
    expect(operate(2, 2, '+')).toBe('4');
    expect(operate(2.5, 1.5, '+')).toBe('4');
    expect(operate(-2, 2, '+')).toBe('0');
    expect(operate(0.1, 0.2, '+')).toBe('0.3');
  });

  test('if subtract function works correctly', () => {
    expect(operate(2, 2, '-')).toBe('0');
    expect(operate(2.5, 1.5, '-')).toBe('1');
    expect(operate(-2, 2, '-')).toBe('-4');
    expect(operate(0.2, 0.1, '-')).toBe('0.1');
  });

  test('if multiply function works correctly', () => {
    expect(operate(2, 2, 'x')).toBe('4');
    expect(operate(2.5, 1.5, 'x')).toBe('3.75');
    expect(operate(-2, 2, 'x')).toBe('-4');
    expect(operate(0.1, 0.2, 'x')).toBe('0.02');
  });

  test('if divide function works correctly', () => {
    expect(operate(2, 2, '÷')).toBe('1');
    expect(operate(2.5, 1.5, '÷')).toBe('1.66666666666666666667');
    expect(operate(-2, 2, '÷')).toBe('-1');
    expect(operate(0.1, 0.2, '÷')).toBe('0.5');
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('if modulo function works correctly', () => {
    expect(operate(2, 2, '%')).toBe('0');
    expect(operate(2.5, 1.5, '%')).toBe('1');
    expect(operate(-2, 2, '%')).toBe('0');
    expect(operate(0.1, 0.2, '%')).toBe('0.1');
    expect(operate(2, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('if invalid operator returns error', () => {
    expect(() => operate(2, 2, '#')).toThrow();
  });
});

