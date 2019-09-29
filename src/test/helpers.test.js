const help = require('./helpers');

describe('helpers module', () => {
  describe('Sum of two numbers', () => {
    it('can add two numbers', () => {
      const expectedOutput = 10;
      const actualOutput = help.sum(5, 5);
      expect(actualOutput).toBe(expectedOutput);
    });
    it('can add three numbers', () => {
      const expectedOutput = 10;
      const actualOutput = help.sum(5, 3, 2);
      expect(actualOutput).toBe(expectedOutput);
    })
  });
});