import { gql } from '@apollo/client'


const GET_STATIONS = gql`
  query getStations {
    station @rest(type: "Station", path: "?ADA=TRUE&entry=YES&entrance_type=Elevator") {

    }
  }
`
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
