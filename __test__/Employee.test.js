
const Employee = require('../lib/Employee');

test('creates an Employee Object', () => {
    const employee = new Employee('Manny');

    expect(employee.employeeName).toBe('Manny');
    expect(employee.getEmail()).toEqual(employee.employeeEmail);
    
})


