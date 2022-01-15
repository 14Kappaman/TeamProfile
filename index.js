const fs = require("fs");
const inquirer = require("inquirer");
const { Engineer } = require("./lib/Engineer.js");
const { Intern } = require("./lib/Intern.js");
const {Manager} = require("./lib/Manager.js");

const title = "Employees";
const style = "";
const body = "Hello this is an HTML page";
const javascript = "";

fs.writeFileSync("./index.html",
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

var Employees = []
async function start(){
    var name = await getUserInput("Enter name of manager: ")
    var id = await getUserInput ("Enter employee ID: ")
    var email = await getUserInput( "Enter empployee email:")
    var officeNumber = await getUserInput( "Enter office number: ")

var manager = new Manager(name, id, email, officeNumber);

Employees.push(manager)

MainMenu()

}
async function getUserInput(message){

    return (await inquirer.prompt({
        type: "input", 
        name: "response",
        message: message,
        
            })).response;


} 
async function getUserchoice(message,choices){

    return (await inquirer.prompt({
        type: "list",
        name: "response",
        message: message,
        choices: choices

            })).response;

        }
        start()

        async function AddIntern (){
            var name = await getUserInput("Enter name of Intern: ")
    var id = await getUserInput ("Enter employee ID: ")
    var email = await getUserInput( "Enter employee email:")
    var officeNumber = await getUserInput( "Enter office number: ")

var intern = new Intern(name, id, email, officeNumber);

Employees.push(intern)

        console.log("adding intern")
MainMenu()
        }


        async function AddEngineer () {
            var name = await getUserInput("Enter name of engineer: ")
    var id = await getUserInput ("Enter employee ID: ")
    var email = await getUserInput( "Enter employee email:")
    var officeNumber = await getUserInput( "Enter office number: ")

var engineer = new Engineer(name, id, email, officeNumber);

Employees.push(engineer)

        console.log ("adding engineer")
MainMenu()

        }

        
        async function Finish (){


        }

        
        async function MainMenu (){
var Userchoice = await getUserchoice('  would you like to do ',[
    'Add Intern', 
    'Add Engineer',
    'Finish Team',

])
mainMenu[Userchoice]();

        }
        let mainMenu = {'Add Intern': AddIntern, 'Add Engineer': AddEngineer, 'Finish Team': Finish};
