// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, role, email) {
      this.name = name;
      this.id = id;
      this.role = role;
      this.email = email;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Role: ${this.role}`);
      console.log(`Email: ${this.email}`);
      console.log(`ID: ${this.id}`);
      console.log(`Office Number: ${this.officeNumber}`);
      console.log(`GitHub: ${this.github}`);
      console.log(`School: ${this.school}`);
    }
}

  module.exports = Employee;