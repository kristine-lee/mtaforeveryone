import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Marker } from 'react-map-gl'
import { GET_STATIONS } from '../graphql'
import Loading from '../Loading.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubway } from '@fortawesome/free-solid-svg-icons';

//TODO: 3. wrap the results of the api call in useMemo so you dont have to rerender it every time https://dmitripavlutin.com/dont-overuse-react-usecallback/ OR useSelecter (like in streetArts, just make it into a different component)



const Stations = () => {
  const { loading, error, data } = useQuery(GET_STATIONS)
  const [stations, setStations] = useState([])


  useEffect(() => {
    if (!loading && data) {
      setStations((prevState) => prevState.concat(data.stations))
    }
  }, [data])

  //helper function//
  const renderStationMarkers = (stations) => {
    return (
      stations.map((spot) => <Marker key={spot.station_name} longitude={parseFloat(spot.entrance_longitude)} latitude={parseFloat(spot.entrance_latitude)}>
      <FontAwesomeIcon icon={faSubway} />
      </Marker>)
    )
  }

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <Loading />


 if (data) {
  return (
    <>
    {console.log("STATIONS", stations)}
    {stations.length > 0 && renderStationMarkers(stations)}
    {/* {stations && stations.map((station) => {<Marker key={station.station_name} longitude={parseFloat(station.entrance_longitude)} latitude={parseFloat(station.entrance_latitude)}>
      <FontAwesomeIcon icon={faSubway} />
  </Marker>})} */}
    </>
  )
 }

}

export default Stations

//another component for grabbing the user's geolocation and then calculating


