
const chalk = require('chalk');

const getDate = dateTime => `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()} `
const getTime = dateTime => `${dateTime.getHours()} : ${dateTime.getMinutes()}`

const chalkFormat = ({source,destination,isReturn,distance,ticketFare,dateTime}) => 
chalk`
      |{yellow.italic ${getDate(dateTime)} || ${getTime(dateTime)}}
      |${source}
      |${destination}
      |${isReturn ? source: ''}
      |${distance} stops
      |${ticketFare}
      `
module.exports = {chalkFormat};