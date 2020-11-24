const Printer = require('./Printer');

class ConsoleTicketPrinter extends Printer{
  constructor(formatter){
    super()
    this.formatter = formatter
  }
  printTicket(ticket){
    console.log(this.formatter(ticket))
  }
}

module.exports = ConsoleTicketPrinter
