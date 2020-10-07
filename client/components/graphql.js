import { gql } from '@apollo/client'


const GET_STATIONS = gql`
  query getStations {
    stations @rest(type: "Stations", path: "?ADA=TRUE&entry=YES&entrance_type=Elevator") {
        _id
        station_name
        corner
        entrance_longitude
        entrance_latitude

    }
  }
`

export default GET_STATIONS
// const GET_STATIONS = gql`
  // query getStations {
  //   station @rest(type: "Station", path: "?ADA=TRUE&entry=YES") {
  //     data @type(name: "Station") {
  //       station_name
  //       corner
  //       entrance_type
  //       entrance_longitude
  //       entrance_latitude
  //     }
  //   }
  // }
