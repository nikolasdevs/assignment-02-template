const  axios = require('axios');
const assignment = require('../src/assignment.js');

const { countEvenNumbersWithin } = assignment;
const maybe = countEvenNumbersWithin === undefined ? test.skip : test;

maybe('Challenge - 2 : my countEvenNumbersWithin function can count even numbers in array of numbers', async () => {
    let res = await axios.get('https://randomapi.com/api/3ba71dfdc0144abba3452e039f210123');
    const { value, correctFunction } = res.data.results[0];
    expect(countEvenNumbersWithin(value)).toStrictEqual(correctFunction);
});