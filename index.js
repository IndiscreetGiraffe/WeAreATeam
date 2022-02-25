const fs = require('fs');
const inquirer = require('inquirer');
const { generatecards } = require('./lib/generatecards');

let employees = []
console.log("Bob the builder, can we build it!")
async function startQuestions() {

    const employee = await inquirer.prompt([
        {
            type:'input',
            name:'employeeName',
            message: "What is your employee's name?",
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the employee!");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'employeeEmail',
            message:"What is the employee's email?",
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log("Please enter your employee email!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: "What's your employee role?",
            choices: ['Manager', 'Engineer', 'Intern'],
        }

    ])

    let employeeObject = employee

    
}