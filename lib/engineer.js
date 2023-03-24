const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHub){
        super(name, id, email)
        this.github = GitHub
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}


module.exports = Engineer;