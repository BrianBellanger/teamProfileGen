// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Intern extends Employee {
    constructor(id, school) {
  
    super(id, school);
  
    }
}


module.exports = Intern;