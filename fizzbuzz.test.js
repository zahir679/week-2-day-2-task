const { fizzBuzz } = require("./fizzbuzz");

describe("Fizz tests", () => {
  describe("Fizz! is returned when", () => {
    it("is a multiple of three", () => {
      const actual = fizzBuzz(3);
      expect(actual).toBe("Fizz!");
    });
  });
});

describe("Buzz tests", () => {
  describe("Buzz! is returned when", () => {
    it("is a multiple of five", () => {
      const actual = fizzBuzz(5);
      expect(actual).toBe("Buzz!");
    });
  });
});

describe("FizzBuzz tests", () => {
  describe("FizzBuzz! is returned when", () => {
    it("is a multiple of three and five", () => {
      const actual = fizzBuzz(15);
      expect(actual).toBe("FizzBuzz!");
    });
  });
});

describe("Not a number tests", () => {
  describe("Please input a valid value! is returned when", () => {
    it("is not a valid input", () => {
      const actual = fizzBuzz("giberish");
      expect(actual).toBe("Please input a valid value!");
    });
  });
});