
const Employee = require('../lib/Employee');

test('creates an Employee Object', () => {
    const employee = new Employee('John');

    expect(employee.employeeName).toBe('John');
    expect(employee.getEmail()).toEqual(employee.employeeEmail);
    
})

