import { gql } from '@apollo/client'


const GET_STATIONS = gql`
  query getStations {
    station @rest(type: "") {

    }
  }
`
