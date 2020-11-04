import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { Marker } from 'react-map-gl'
import GET_STATIONS from '../graphql'
import Loading from '../Loading.js'
import MockData from '../mockdata.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubway } from '@fortawesome/free-solid-svg-icons';

//do i need to change this into geoJson? (no; look at the tutorial)
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
//`
//TODO: 3. wrap the results of the api call in useMemo so you dont have to rerender it every time https://dmitripavlutin.com/dont-overuse-react-usecallback/ OR useSelecter (like in streetArts, just make it into a different component)

//TODO: graphql query works, but markers do not render; they're not showing up on the map (on React Dev Tools; look at Components). Have them render


const Stations = () => {
  const { loading, error, data } = useQuery(GET_STATIONS)
  // const [station, setStation] = useState({
  //   "station_name": "",
  //   "corner": "",
  //   "entrance_type": "Elevator",
  //   "entrance_longitude": -74.0060,
  //   "entrance_latitude": 40.7128
  // })
  const [stations, setStations] = useState([])

  useEffect(() => {
    if (loading === false && data) {
      setStations(data)
    }
  }, [loading, data])

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <Loading />

  // useEffect(() => {
  //   if(!loading && !error){
  //     setStation(data.elements)
  //   }
  // }, [station, data, loading])
 if (data) {
  return (
    <div className="stations_marker">
    {data && data.stations.map((station) => {<Marker key="_id" longitude={parseInt(station.entrance_longitude)} latitude={parseInt(station.entrance_latitude)}>
      <FontAwesomeIcon icon={faSubway} />
  </Marker>})}
    </div>
  )
 }

}

export default Stations
//markers of accessible stations
//another component for grabbing the user's geolocation and then calculating
