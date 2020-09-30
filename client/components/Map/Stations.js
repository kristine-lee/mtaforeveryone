import React, { useState, useEffect } from 'react'
import { useQuery, useLazyQuery, gql } from '@apollo/client'
import { GeoLocateControl, Source, Layer } from 'react-map-gl'
import Loading from '../Loading.js'
import MockData from '../mockdata.json'

//do i need to change this into geoJson?
// const GET_STATIONS = gql`
//   query getStations {
//     station @rest(type: "Station", path: "?ADA=TRUE&entry=YES") {
//       data @type(name: "Station") {
//         station_name
//         corner
//         entrance_type
//         entrance_longitude
//         entrance_latitude
//       }
//     }
//   }
//`

const Stations = () => {
  // const { loading, error, data, fetchMore } = useQuery(GET_STATIONS)
  const [station, setStation] = useState({
    "station_name": "",
    "corner": "",
    "entrance_type": "Elevator",
    "entrance_longitude": -74.0060,
    "entrance_latitude": 40.7128
  })

  // if (error) return <h1>Something went wrong!</h1>
  // if (loading) return <Loading />

  // useEffect(() => {
  //   if(!loading && !error){
  //     setStation(data.elements)
  //   }
  // }, [station, data, loading])

  return (
    <>
    <Source id="stations" type="geojson" data={MockData}>
    <Layer id="station-markers" type="symbol" source="geojson" />
    </Source>
    </>
  )


}

export default Stations
//markers of accessible stations
//another component for grabbing the user's geolocation and then calculating
