const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(engineerGithub, engineerID) {
        super();
        this.engineerGithub = engineerGithub;
        this.ID = engineerID;
    }

    getGithub() {

        return this.engineerGithub
    }

    getRole() {

        return Engineer
    }

    getID() {

        return this.engineerID;
    }

}


module.exports = Engineer;