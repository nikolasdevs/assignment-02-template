const axios = require('axios');
const assignment = require('../src/assignment.js');

const { sumOfNumbersTo } = assignment;
const maybe = sumOfNumbersTo === undefined ? test.skip : test;

maybe(
    'Challenge - 1 : my sumOfNumbersTo function can sum an array of numbers',
    async () => {
        let res = await axios.get(
            'https://randomapi.com/api/tcp8cz29?key=1YGT-X0VZ-V2PC-TUK8'
        );
        const { value, correctFunction } = res.data.results[0];
        expect(sumOfNumbersTo(value)).toBe(correctFunction);
    }
);
