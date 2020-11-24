const R = require('ramda')
const {getDistance,NUMBER_OF_STATIONS} = require('../Stations')

const MAX_DISTANCE_FLAT_FARE = 20;
const BASE_DISTANCE = 5;
const BASE_FARE = 10;
const INCREMENT_FARE = 5;
const CHILDREN_DISCOUNT = 0.75
const TWO_WAY_TICKET_MULTIPLIER = 1.75

const regularFare = ({source,destination}) => {
    const distance = getDistance(source,destination)
    if(distance === NUMBER_OF_STATIONS - 1){
      return MAX_DISTANCE_FLAT_FARE;
    }
    else if(distance <= BASE_DISTANCE){
      return BASE_FARE
    }
    else{
      const incrementalFare = (Math.floor((distance-BASE_DISTANCE)/5) * INCREMENT_FARE)
      const remainingStationFare = (distance-BASE_DISTANCE) % 5 ? INCREMENT_FARE : 0
      return BASE_FARE + incrementalFare + remainingStationFare;
    }
  }

const childrenFare = (regularFare) => regularFare * CHILDREN_DISCOUNT;

const returnFare = (regularFare) => regularFare * TWO_WAY_TICKET_MULTIPLIER;

class FareCalculator {
  getFare({source,destination,age,isReturn}){
    let calculate;
    if(age < 3){
      calculate = (...args) => 0
    }
    else if(age < 10 && isReturn){
      calculate = R.compose(returnFare,childrenFare,regularFare)
    }
    else if(age<10){
      calculate = R.compose(childrenFare,regularFare)
    }
    else if(isReturn){
      calculate = R.compose(returnFare,regularFare)
    }
    else {
      calculate = regularFare
    }
    return calculate({source,destination})
  }
}

module.exports = new FareCalculator();