
const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Kristi','6','10');

    expect(intern.getSchool()).toEqual(intern.internSchool);
    expect(intern.getRole()).toBe(Intern);
    expect(intern.getID()).toEqual(intern.internID);
})