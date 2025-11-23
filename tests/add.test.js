const { add } = require('../index');

test('add should add two numbers', () => {
  expect(add(2,3)).toBe(5);
});
