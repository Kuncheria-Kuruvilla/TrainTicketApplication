const Ticket = require('./Ticket')
const {getFare} = require('./FareCalculator')
const {getDistance} = require('./Stations')

class TicketIssuer {

  create({source,destination,isReturn,age}){
  const distance = getDistance(source,destination)
  const ticketFare = getFare({source,destination,isReturn,age})
   const ticket = new Ticket({source,destination,isReturn,distance,ticketFare,dateTime: new Date()})
    
  return ticket;
  }
}

module.exports = new TicketIssuer()