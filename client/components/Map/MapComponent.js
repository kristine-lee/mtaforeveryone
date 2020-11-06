import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import ReactMapGL, { Marker, GeolocateControl, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import Stations from './Stations';
import CalculateButton from './Calculate-Button'

const mapBody = styled.div`
margin: 0;
padding: 0;
position: relative;
`
const mapBox = styled.div`
position: absolute;
top: 0;
bottom: 0;
width: 100%;
`

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    longitude: -74.0060,
    latitude: 40.7128,
    zoom: 11,
    bearing: 0,
    pitch: 0
  });
  const [geolocationSupport, isgeolocationSupported] = useState(true);
  const [userLocation, setUserLocation] = useState({
    longitude: -74.0060,
    latitude: 40.7128
  });


  const mapRef = useRef(null);

//setting the user location
  const getUserLocation = () => {
    if(navigator.geolocation){
      return navigator.geolocation.getCurrentPosition(showUser)
    } else {
      isgeolocationSupported(false)
    }
  }

const showUser = (position) => {
  const currentLocation = {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude
  }
  setUserLocation(currentLocation)
}

useEffect(() => {
  getUserLocation()
}, [userLocation])


//TODO: add bounds to the viewport

//TODO: useref for the react map component

  return (
    <>
    <ReactMapGL {...viewport}
      mapboxApiAccessToken={"pk.eyJ1Ijoia3Jpc3RpbmUwMTA1IiwiYSI6ImNrZXlxY3NzdDBidjAyeXFjcHFoZTJjMWwifQ._CwmRc-zBpkfo4hKWgngBQ"}
      onViewportChange={newViewport => {
        setViewport(newViewport);
      }}
      width="100vw"
      height={400}>
        <Stations />
        <GeolocateControl
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto={true}
        />
        {/* <NavigationControl onViewportChange={newViewport => {
          setViewport(newViewport);
        }} /> */}
      {userLocation && (
       <Marker longitude={userLocation.longitude} latitude={userLocation.latitude}>
         <FontAwesomeIcon icon={faAccessibleIcon} />
       </Marker>
     )}
     </ReactMapGL>
     <CalculateButton userLocation={userLocation} />
      </>
  )
}

export default MapComponent
