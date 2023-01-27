const Employee = require("./employee");

class Intern extends Employee {
    super(name,"intern",email)
    constructor(school) {
        this.school = school;
    }
    getOfficeNumber(){}
}

module.exports = Intern;