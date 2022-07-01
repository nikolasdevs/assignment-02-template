const assignment = require('../src/assignment.js');

const { countEvenNumbers } = assignment;
const maybe = countEvenNumbers === undefined ? test.skip : test;

maybe('Challenge - 2 : my countEvenNumbers function can count even numbers in array of numbers', () => {
    const numbers = [
        12, 26, 19, 16, 6, 7, 49, 5, 74, 23, 42, 19, 11, 44, 55, 59, 19, 94, 86, 100
    ]
    expect(countEvenNumbers(numbers)).toBe(10);
});