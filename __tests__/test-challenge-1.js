const assignment = require('../src/assignment.js');

const { sumOfNumbers } = assignment;
const maybe = sumOfNumbers === undefined ? test.skip : test;

maybe('Challenge - 1 : my sumNumbers function can sum an array of numbers', () => {
    const numbers = [
        38, 60, -29, -90, 55, -26, 23, 76, -17, 7, -85, 79, -36, -27, -62, -48, 87, 91, -26, 75
    ];
    expect(sumOfNumbers(numbers)).toBe(69);
});