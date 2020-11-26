const Ticket = require('../Ticket')
const TicketIssuerTemplate = require('./TicketIssuerTemplate')
const FareCalculator = require('../FareCalculator')
const {getDistance} = require('../Stations')

class ChennaiTicketIssuer extends TicketIssuerTemplate{
  constructor(){
    super();
    this.fareCalculator = new FareCalculator()
  }

  calculateDistance({source,destination}){
    return getDistance(source,destination);
  }
  calculateFare({source,destination,isReturn,age}){
    return this.fareCalculator.getFare({source,destination,isReturn,age})
  }

  createTicket({source,destination,isReturn,distance,ticketFare,dateTime = new Date()}){
    return new Ticket({source,destination,isReturn,distance,ticketFare,dateTime})
  }
}

module.exports = ChennaiTicketIssuer