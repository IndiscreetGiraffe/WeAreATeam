const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(internSchool, internID) {
        super();

        this.internSchool = internSchool;
        this.internID = internID;
    }

    getSchool() {

        return this.internSchool
    }

    getRole() {

        return Intern
    }

    getID() {
        return this.internID;
    }
}

module.exports = Intern;