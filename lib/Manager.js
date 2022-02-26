const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(managerOffice, managerID) {
        super();

    this.managerOffice = managerOffice;
    this.managerID = managerID;
    }

    getOfficeNumber() {

        return this.managerOffice
    }

    getRole() {
        
        return Manager;
    }

    getID() {
        return this.managerID;
    }
}

module.exports = Manager;