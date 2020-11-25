
const chalk = require('chalk');
var Table = require('cli-table3');

const getDate = dateTime => `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()} `
const getTime = dateTime => `${dateTime.getHours()} : ${dateTime.getMinutes()}`

const consoleTicketFormatter = ({source,destination,isReturn,distance,ticketFare,dateTime}) => {
  var table = new Table({style:{head:[],border:[]}});
  table.push(
    [chalk`{italic ${getDate(dateTime)}/ ${getTime(dateTime)}}`, isReturn? chalk`{inverse.bold Return}`: chalk`{inverse.bold One way}`],
    [{colSpan:2,hAlign:'center',content:`${source}`}],
    [{colSpan:2,hAlign:'center',content:`${destination}`}]
  )
  isReturn && table.push([{colSpan:2,hAlign:'center',content:`${source}`}])
  table.push([`${distance} stops`, `\u20B9${ticketFare}`])

  return table.toString();
}

module.exports = {consoleTicketFormatter};