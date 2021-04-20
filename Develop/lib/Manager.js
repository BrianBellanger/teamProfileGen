// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Import the parent class
const Employee = require('./Employee');

// Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
    constructor(name, id, role, email, officeNumber) {
        super(name, id, role, email);
    this.officeNumber = officeNumber;
    }
};


module.exports = Manager;