const ConsoleTicketPrinter = require('./ConsoleTicketPrinter')
const Ticket = require('./Ticket')
const {chalkFormat} = require('./TicketFormater')

const printer =  new ConsoleTicketPrinter(chalkFormat);
const t = new Ticket({source:'from',destination:'to',isReturn:true,distance:3,ticketFare:30,dateTime: new Date()})
printer.print(t);