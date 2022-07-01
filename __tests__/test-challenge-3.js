const assignment = require('../src/assignment.js');

const { celsiusToFahrenheit } = assignment;
const maybe = celsiusToFahrenheit === undefined ? test.skip : test;

maybe('Challenge - 3 : my celsiusToFahrenheit function can convert an array of temperatures', () => {
    const numbers = [
        -9, 29, 36, 7, 29, -2, 36, -8, 5, 3, 31, 2, 21, 34, 2, -4, -8, -1, -7, 33
    ]
    const converted = [
        15, 84, 96, 44, 84, 28, 96, 17, 41, 37, 87, 35, 69, 93, 35, 24, 17, 30, 19, 91
    ];
    expect(celsiusToFahrenheit(numbers)).toEqual(converted);
});