// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Import the parent class
const Employee = require('./Employee');

// Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
    constructor(id, officeNumber) {
        super(id, name, role, email);
    this.officeNumber = officeNumber;
    }
}

const manager = new Manager(id, officeNumber);

console.log('---NEW MANAGER---');
manager.printInfo();

module.exports = Manager;
