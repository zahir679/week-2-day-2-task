const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

// Addition

test("sum 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("sum 0.1 + 0.3 to equal 0.4", () => {
  expect(sum(0.1, 0.3)).toBeCloseTo(0.4);
});

test("sum 999999999 + 100000000 to equal 1099999999", () => {
  expect(sum(999999999, 100000000)).toBe(1099999999);
});

test("sum -10 + 9 to equal -1", () => {
  expect(sum(-10, 9)).toBe(-1);
});

// Subraction

test("subtract 2 - 2 to equal 0", () => {
  expect(subtract(2, 2)).toBe(0);
});

test("subtract 10000 - 9000 to equal 1000", () => {
  expect(subtract(10000, 9000)).toBe(1000);
});

test("subtract 0.2 - 0.1 to equal 0.1", () => {
  expect(subtract(0.2, 0.1)).toBeCloseTo(0.1);
});

// Multiplication

test("multiply 2 * 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});

test("multiply 2494 * 4942 to equal 12325348", () => {
  expect(multiply(2494, 4942)).toBe(12325348);
});

test("multiply 0.1 * 0.5 to equal 0.05", () => {
  expect(multiply(0.1, 0.5)).toBeCloseTo(0.05);
});

// Division

test("divide 2 / 2 to equal 1", () => {
  expect(divide(2, 2)).toBe(1);
});

test("divide 20000 / 10000 to equal 2", () => {
  expect(divide(20000, 10000)).toBe(2);
});
