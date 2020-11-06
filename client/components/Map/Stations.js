import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Marker, Popup } from 'react-map-gl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubway } from '@fortawesome/free-solid-svg-icons';

import { GET_STATIONS } from '../graphql'
import Loading from '../Loading.js'
import Markers from './Markers'


const Stations = () => {
  const { loading, error, data } = useQuery(GET_STATIONS)
  const [stations, setStations] = useState([])
  const [selectedStation, setSelectedStation] = useState(null)



  useEffect(() => {
    if (!loading && data) {
      setStations((prevState) => prevState.concat(data.stations))
    }
  }, [data])

  //helper function//
  // const renderStationMarkers = (stations) => {
  //   return (
  //     stations.map((spot) => <Marker key={spot.station_name} longitude={parseFloat(spot.entrance_longitude)} latitude={parseFloat(spot.entrance_latitude)} onClick={handleClick} >
  //     <FontAwesomeIcon icon={faSubway} />
  //     </Marker>)
  //   )
  // }

  //TODO: handleclick doesn't do anything -_- needs to set the state when popup is clicked

  //geocoder can turn the long & lat into human readable address

  const handleClick = info => {
    setSelectedStation({info})
    console.log("SET STATION", selectedStation)
  }

  const renderPopup = () => {
    //objects are passed by reference
    let {entrance_latitude, entrance_longitude} = selectedStation.info;
    console.log("SELECT IT", selectedStation.info)
    console.log("POPPITY", {entrance_latitude, entrance_longitude})
    return (selectedStation.info && (
        <Popup
          tipsize={5}
          anchor="top"
          latitude={parseFloat(entrance_latitude)}
          longitude={parseFloat(entrance_longitude)}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setSelectedStation(null)}>
          What!
        </Popup>
    )
    )
  }

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <Loading />


 if (data) {
  return (
    <>
    {console.log("STATIONS", stations)}
    {/* {stations.length > 0 && renderStationMarkers(stations)} */}
    {/* {stations && stations.map((station) => {<Marker key={station.station_name} longitude={parseFloat(station.entrance_longitude)} latitude={parseFloat(station.entrance_latitude)}>
      <FontAwesomeIcon icon={faSubway} />
  </Marker>})} */}
    {stations.length > 0 && <Markers stations={stations} handleClick={handleClick}/>}
    {selectedStation !== null ? renderPopup() : null}
    </>
  )
 }

}

export default Stations

//another component for grabbing the user's geolocation and then calculating


