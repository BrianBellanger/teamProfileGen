// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Intern extends Employee {
    constructor(name, id, role, email, school){
        super(name, id, role, email);
    this.school = school;
    }
};


module.exports = Intern;