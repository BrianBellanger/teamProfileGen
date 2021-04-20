// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName(){
      return this.name;
    }

    getId(){
      return this.id;
    }

    getEmail(){
      return this.email;
    }

    getRole(){
      return "Employee";
    }

    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Email: ${this.email}`);
      console.log(`ID: ${this.id}`);
      console.log(`Office Number: ${this.officeNumber}`);
      console.log(`GitHub: ${this.github}`);
      console.log(`School: ${this.school}`);
    }
}

  module.exports = Employee;