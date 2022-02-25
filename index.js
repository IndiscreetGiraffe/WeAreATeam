const fs = require('fs');
const inquirer = require('inquirer');
const { generatecards } = require('./lib/generateHTML');

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
                    console.log("Please enter the name of the employee!")
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
                    console.log("Please enter your employee email!")
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

    let manager
    if (employee.employeeRole === 'Manager') {
        manager = await inquirer.prompt([
           {
               type: 'input',
               name: 'managerID',
               message: "What is your manager ID?",
               validate: managerID => {
                   if (managerID) {
                       return true;
                   } else {
                       console.log("Please enter the correct manager ID!")
                       return false;
                   }
               }
           },
           {
               type: 'input',
               name: 'managerOffice',
               message: "What is the number of the manager's office?",
               validate: managerOffice => {
                   if (managerOffice) {
                       return true;
                   } else {
                       console.log("Please enter correct office number!")
                       return false;
                   }
               }
           }
        ])
        if (manager) {
            employeeObject = { ...employeeObject, manager }
            employees.push(employeeObject);
        }
    }

    let engineer
    if (employee.employeeRole === 'Engineer') {
        engineer = await inquirer.prompt ([
            {
                type: 'input',
                name: 'engineerID',
                message: "What be the Engineer's ID?",
                validate: engineerID => {
                    if (engineerID) {
                        return true;
                    } else {
                        console.log("Please enter a valid Engineer ID!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the Engineer's Github?",
                validate: engineerGithub => {
                    if (engineerGithub) {
                        return true;
                    } else {
                        console.log("Please enter the Github!")
                        return false;
                    }
                }
            }
        ])
        if (engineer) {
            employeeObject = { ...employeeObject, engineer }
            employees.push(employeeObject);
        }
    }

    let intern
    if (employee.employeeRole === 'Intern') {

        intern = await inquirer.prompt([
            {
                type: 'input',
                name: 'internID',
                message: "Please enter a valid intern ID!",
                validate: internID => {
                    if (internID) {
                        return true;
                    } else {
                        console.log("Please enter the intern ID!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Please enter the intern's school.",
                validate: internSchool => {
                    if (internSchool) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!")
                        return false;
                    }
                }
            }
        ])
        if (intern) {
            employeeObject = { ...employeeObject, intern }
            employees.push(employeeObject);
        }

    }

    const newEmployeeQuestions = await inquirer.prompt ([
        {
            type: 'confirm',
            name: 'newEmployee',
            message: "Would you like to add a new employee?"
        }
    ])
    if (newEmployeeQuestions.newEmployee) {
        startQuestions()
    } else {
        let returned = generateHTML(employees)
        if (returned) {
            writeFile('./output/teamprofile.html', returned);
            console.log('Your file was created successfully!')
        } else {
            console.log("Error, nothing here to see.");
        }
    }


};

const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err =>{
            if (err) {
                reject(err);
                console.log(error)
                return;
            }
            resolve({
                ok: true,
            });
        });
    });
};

startQuestions();