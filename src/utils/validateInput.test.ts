import validateInput from './validateInput';

describe('tests for validateInput', () => {
  test('it returns true for valid input cd', () => {
    const result = validateInput('cd');
    expect(result.isValidCommand).toBe(true);
    expect(validateInput('   cd  dir   ').isValidCommand).toBe(true);
    expect(validateInput('cdd ').isValidCommand).toBe(false);
    expect(validateInput('cde ').isValidCommand).toBe(false);
    expect(validateInput('cdf ').isValidCommand).toBe(false);
  });

  test('it returns true for valid input clear', () => {
    const result = validateInput('clear ');
    expect(result.isValidCommand).toBe(true);
  });

  test('it returns true for valid input help', () => {
    const result = validateInput('help ');
    expect(result.isValidCommand).toBe(true);
  });
  test('it returns true for valid input lights', () => {
    const result = validateInput('lights ');
    expect(result.isValidCommand).toBe(true);
  });
  test('it returns true for valid input ls', () => {
    const result = validateInput('ls ');
    expect(result.isValidCommand).toBe(true);
  });
  test('it returns true for valid input noshell', () => {
    const result = validateInput('noshell ');
    expect(result.isValidCommand).toBe(true);
  });
  test('it returns true for valid input whoareyou', () => {
    const result = validateInput('whoareyou ');
    expect(result.isValidCommand).toBe(true);
  });
});
