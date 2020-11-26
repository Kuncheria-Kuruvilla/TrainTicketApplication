class TicketIssuerTemplate {
  create({source,destination,isReturn,age}){
  const distance = this.calculateDistance({source,destination})
  const ticketFare = this.calculateFare({source,destination,isReturn,age})
   const ticket = this.createTicket({source,destination,isReturn,distance,ticketFare,dateTime: new Date()})
    
  return ticket;
  }
  calculateDistance({source,destination}){}
  calculateFare({source,destination,isReturn,age}){}
  createTicket({source,destination,isReturn,distance,ticketFare,dateTime}){}
}

module.exports = TicketIssuerTemplate