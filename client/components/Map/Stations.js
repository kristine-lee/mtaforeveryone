import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Popup } from 'react-map-gl'

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


  //geocoder can turn the long & lat into human readable address

  const handleClick = info => {
    setSelectedStation({info})
    console.log("SET STATION", selectedStation)
  }

  const renderPopup = () => {
    //objects are passed by reference
    let {entrance_latitude, entrance_longitude, station_name} = selectedStation.info;
    return (selectedStation.info && (
        <Popup
          tipsize={5}
          anchor="top"
          latitude={parseFloat(entrance_latitude)}
          longitude={parseFloat(entrance_longitude)}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setSelectedStation(null)}>
          Selected Station: {station_name}<br />
          <button>Calculate Distance</button>
        </Popup>
    )
    )
  }

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <Loading />


 if (data) {
  return (
    <>
    {stations.length > 0 && <Markers stations={stations} handleClick={handleClick}/>}
    {selectedStation !== null ? renderPopup() : null}
    </>
  )
 }

}

export default Stations

//another component for grabbing the user's geolocation and then calculating


