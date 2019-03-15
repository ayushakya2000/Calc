const objk = require('./cal');

test('1 + 2 to equal 3', () => {
  expect(objk.sum(1, 2)).toBe(3);
});

test('3 - 2 to equal 1', () => {
  expect(objk.sub(3, 2)).toBe(1);
});

test('1 * 3 to equal 3', () => {
  expect(objk.mul(1, 3)).toBe(3);
});

test('4 / 2 to equal 2', () => {
  expect(objk.div(4, 2)).toBe(2);
});
