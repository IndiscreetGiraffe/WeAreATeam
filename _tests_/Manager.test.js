const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Manager = require('../lib/Manager');

test('creates a Manager Object', () => {
    const manager = new Manager('Steve','4','1');

    expect(manager.getOfficeNumber()).toEqual(manager.managerOffice);
    expect(manager.getID()).toEqual(manager.managerID);
    expect(manager.getRole()).toBe(Manager);
})