const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Kristi','Idaho','10');

    expect(intern.getSchool()).toEqual(intern.internSchool);
    expect(intern.getRole()).toBe(Intern);
    expect(intern.getID()).toEqual(intern.internID);
})