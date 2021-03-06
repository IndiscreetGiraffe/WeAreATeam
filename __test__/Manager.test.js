const Manager = require('../lib/Manager');

test('creates a Manager Object', () => {
    const manager = new Manager('Alex','4','1');

    expect(manager.getOfficeNumber()).toEqual(manager.managerOffice);
    expect(manager.getID()).toEqual(manager.managerID);
    expect(manager.getRole()).toBe(Manager);
})