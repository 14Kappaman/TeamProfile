const fs = require("fs");

const {getUserInput,getUserchoice} = require("./src/input")
const {
    Engineer
} = require("./lib/Engineer.js");
const {
    Intern
} = require("./lib/Intern.js");
const {
    Manager
} = require("./lib/Manager.js");


function renderHTML(title, style, body, javascript) {
    fs.writeFileSync("./dist/index.html",
        `<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>${title}</title>
    <style>
    ${style}
    </style>
</head>
<body>
    ${body}
</body>
<script>
${javascript}
</script>
</html>`);

}

var Employees = []
async function start() {
    var name = await getUserInput("Enter name of manager: ")
    var id = await getUserInput("Enter employee ID: ")
    var email = await getUserInput("Enter empployee email:")
    var officeNumber = await getUserInput("Enter office number: ")

    var manager = new Manager(name, id, email, officeNumber);

    Employees.push(manager)

    MainMenu()

}
start()

async function AddIntern() {
    var name = await getUserInput("Enter name of Intern: ")
    var id = await getUserInput("Enter employee ID: ")
    var email = await getUserInput("Enter employee email:")
    var school = await getUserInput("Enter name of school: ")

    var intern = new Intern(name, id, email, school);

    Employees.push(intern)

    console.log("adding intern")
    MainMenu()
}


async function AddEngineer() {
    var name = await getUserInput("Enter name of engineer: ")
    var id = await getUserInput("Enter employee ID: ")
    var email = await getUserInput("Enter employee email:")
    var github = await getUserInput("Enter github username: ")

    var engineer = new Engineer(name, id, email, github);

    Employees.push(engineer)

    console.log("adding engineer")
    MainMenu()

}


async function Finish() {
    let employeeList ="<h1>Employee List</h1>" 
    let style = fs.readFileSync("./test.css");


    Employees.forEach(employee => {
        let additional = ""
        switch (employee.getRole()) {
            case "Manager":
                additional = `<div>Office Number: ${employee.getOfficenumber()}</div>`

                break;
            case "Intern":  
            additional = `<div>School: ${employee.getSchool()}</div>`

                    ;
            case "Engineer":
                additional = `<div>GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></div>`

                 break;

        }

        employeeList += renderEmployee(employee,additional)

    })

renderHTML("employeelist",style, employeeList,"")
}


async function MainMenu() {
    var Userchoice = await getUserchoice('  would you like to do ', [
        'Add Intern',
        'Add Engineer',
        'Finish Team',

    ])
    mainMenu[Userchoice]();

}
let mainMenu = {
    'Add Intern': AddIntern,
    'Add Engineer': AddEngineer,
    'Finish Team': Finish
};

function renderEmployee(employee, additional) {
    return `
    <div class="employee">
    <div>${employee.getName()}</div>
    <div>ID: 
    ${employee.getId()}</div>
    <div>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></div>

    ${additional}
    <div>Role: 
    ${employee.getRole()}</div>

    
    </div>`


}