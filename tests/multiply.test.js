const { multiply } = require('../index');

test('multiply two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});
