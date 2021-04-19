// Requirements:
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

// Path variables:
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");



// Instructions:
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```



// Functions:
function init(){
inquirer
    .prompt([
        {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'memberSelect',
        choices: ["Manager", 
            "Engineer",
            "Intern",
            "Finished adding team member(s)"
            ],
        },
    ])
    .then((selectResponse) => {
        switch(selectResponse.memberSelect){
            case "Manager":
                // Manager
                managerQ();
                break;
            case "Engineer":
                // Engineer
                engineerQ();
                break;
            case "Intern":
                // Intern
                internQ();
                break;
            case "Finished adding team member(s)":
                // Fin
                render();
            default:
                break;
            };  
        }
    )
};

function managerQ(){
inquirer
    .prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        },
        {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID?",
        },
        {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
        },
        {
        type: 'input',
        name: 'officeNum',
        message: "What is the manager's office number?",
        },
    ])
    .then((mgrResponse) => {
        console.log("Manager Name:", mgrResponse.name);
        console.log("Manager ID:", mgrResponse.id);
        console.log("Manager Email:", mgrResponse.email);
        console.log("Manager Office Number:", mgrResponse.officeNum);
    
        init();
    
    });
};

function engineerQ(){
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        },
        {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID?",
        },
        {
        type: 'input',
        name: 'installation',
        message: "What is the engineer's email?",
        },
        {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        },
    ])
    .then((engResponse) => {
        console.log("Engineer Name:", engResponse.name);
        console.log("Engineer ID:", engResponse.id);
        console.log("Engineer Email:", engResponse.email);
        console.log("Engineer GitHub username:", engResponse.github);
        
        // Add to Engineer Array

        init();
    
    });
};

function internQ(){
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?",
        },
        {
        type: 'input',
        name: 'id',
        message: "What is the Intern's ID?",
        },
        {
        type: 'input',
        name: 'email',
        message: "What  the Intern's email?",
        },
        {
        type: 'input',
        name: 'school',
        message: "What is  the Intern's school?",
        },
    ])
.then((intResponse) => {
        console.log("Intern Name:", intResponse.name);
        console.log("Intern ID:", intResponse.id);
        console.log("Intern Email:", intResponse.email);
        console.log("Intern School:", intResponse.school);
        
        init();

    });
};



// Begin:  Call init Fx
init();