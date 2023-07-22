const axios = require('axios');
const assignment = require('../src/assignment.js');

const { celsiusToFahrenheit } = assignment;
const maybe = celsiusToFahrenheit === undefined ? test.skip : test;

maybe('Challenge - 3 : my celsiusToFahrenheit function can convert an array of temperatures', async () => {
    const res = await axios.get('https://randomapi.com/api/997f1c72e6b3685a1ca82c478dbfac78');
    const { value, correctFunction } = res.data.results[0];
    expect(celsiusToFahrenheit(value)).toEqual(correctFunction);
});