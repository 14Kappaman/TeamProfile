const inquirer = require("inquirer");





async function getUserInput(message) {

    return (await inquirer.prompt({
        type: "input",
        name: "response",
        message: message,

    })).response;


}
async function getUserchoice(message, choices) {

    return (await inquirer.prompt({
        type: "list",
        name: "response",
        message: message,
        choices: choices

    })).response;

}
module.exports = {getUserInput,getUserchoice}