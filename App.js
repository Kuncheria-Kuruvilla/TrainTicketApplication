const inquirer = require('inquirer');
const clear = require('clear');
const chalk = require('chalk')
var figlet = require('figlet');

const {ConsoleTicketPrinter} = require('./Printer')
const {ChennaiTicketIssuer} = require('./TicketIssuer')
const {consoleTicketFormatter} = require('./TicketFormater')
const {STATIONS} = require('./Stations')

inquirer.registerPrompt("search-list", require("inquirer-search-list"));

const ticketQuestions = [
  {
    type: "search-list",
    message: "From: ",
    name: "source",
    choices: STATIONS,
    validate: function(answer) {
        if (!STATIONS.includes(answer)) {
          return `Sorry! Cannot find the station '${answer}'.`;
        }
        return true;
      }
  },
  {
    type: "search-list",
    message: "To: ",
    name: "destination",
    choices: STATIONS,
    validate: function(answer) {
        if (!STATIONS.includes(answer)) {
          return `Sorry! Cannot find the station '${answer}'.`;
        }
        return true;
      }
  },
  {
    type: 'confirm',
    name: 'isReturn',
    message: 'Return?',
    default: false,
  },
  {
    type: 'input',
    name: 'age',
    message: 'Age:',
    validate: function (value) {
      var valid = !isNaN(parseInt(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  }
]

const continueQuestion = [
    {
    type: 'input',
    name: 'continue',
    message: 'Press Enter/Return key to continue'
  }
]
class App {
  constructor(){
    this.printer =  new ConsoleTicketPrinter(consoleTicketFormatter);
    this.ticketIssuer = new ChennaiTicketIssuer();
  }

  async run(){
    while(true){
      try{
        console.log(chalk`{cyan.bold ${figlet.textSync('Print my  ticket','Small')}}`);
        const {source,destination,isReturn,age} = await inquirer.prompt (ticketQuestions)
        const t =  this.ticketIssuer.create({source,destination,  isReturn,age})
        this.printer.print(t);
        await inquirer.prompt(continueQuestion)
        clear();
      }
      catch(err){
        console.log(chalk`\n{bgRed.bold ERROR} {red Something went wrong}`)
        await inquirer.prompt(continueQuestion)
        clear();
      }
    }
  }
}

module.exports = new App()