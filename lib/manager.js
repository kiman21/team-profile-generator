const Employee = require("./employee");

class Manager extends Employee {
    super(name,"manager",email)
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){}
}

module.exports = Manager;