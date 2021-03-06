const STATIONS={
      'Chennai Beach':1,
      'Chennai Fort':2,
      'Chennai Park':3,
      'Chennai Egmore':4,
      'Chetpet':5,
      'Nungambakkam':6,
      'Kodambakkam':7,
      'Mambalam':8,
      'Saidapet':9,
      'Guindy':10,
      'St. Thomas Mount':11,
      'Pazhavanthangal':12,
      'Meenambakkam':13,
      'Trisulam':14,
      'Pallavaram':15,
      'Chromepet':16,
      'Tambaram Sanatorium':17,
      'Tambaram':18,
    }

const NUMBER_OF_STATIONS = Object.keys(STATIONS).length;

const getDistance = (source,destination) => Math.abs(STATIONS[destination] - STATIONS[source])

module.exports = {getDistance,NUMBER_OF_STATIONS,STATIONS:Object.keys(STATIONS)}