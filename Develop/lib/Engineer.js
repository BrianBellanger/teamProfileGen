// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Import the parent class
const Employee = require('./Employee');

// Create an `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
    constructor(name, id, role, email, github){
        super(name, id, role, email);
    this.github = github;
    }
};


module.exports = Engineer;