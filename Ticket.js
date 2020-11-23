class Ticket{
  constructor({source,destination,isReturn=false,customerAge,distance,ticketFare,dateTime}){
    this.source = source;
    this.destination = destination;
    this.isReturn = isReturn;
    this.customerAge = customerAge;
    this.distance = distance;
    this.ticketFare = ticketFare;
    this.dateTime = dateTime;
  }
  print(ticketPrinter){
    ticketPrinter.print({...this});
  }
}

module.exports = Ticket