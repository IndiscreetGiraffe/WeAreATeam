
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('John','2');

    expect(engineer.getGithub()).toEqual(engineer.engineerGithub);
    expect(engineer.getID()).toEqual(engineer.engineerID);
    expect(engineer.getRole()).toBe(Engineer);
})