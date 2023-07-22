const assignment = require('../src/assignment.js');

const { countEvenNumbers } = assignment;
const maybe = countEvenNumbers === undefined ? test.skip : test;

maybe('Challenge - 2 : my countEvenNumbers function can count even numbers in array of numbers', () => {
    expect(countEvenNumbersWithin(10)).toBe({ count: 5, sum: 30, arrayOfEvenNumbers: [2, 4, 6, 8, 10] });
});