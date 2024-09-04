const sumOfNos = (a,b) => a + b;

// Dummy test case
describe('sumOfNos', () => {
  test('addition test', () => {
    const num1 = 1;
    const num2 = 2;
    const result = sumOfNos(num1, num2);

    expect(result).toBe(3);
  });
});
