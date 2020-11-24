const ConsoleTicketPrinter = require('./Printer/ConsoleTicketPrinter')
const ticketIssuer = require('./TicketIssuer')
const {chalkFormat} = require('./TicketFormater')

class App {

  run(){
    const printer =  new ConsoleTicketPrinter(chalkFormat);
    const t =  ticketIssuer.create({source:'Pallavaram',destination:'Tambaram',isReturn:false,age:9})
    printer.print(t);
  }
}

module.exports = new App()