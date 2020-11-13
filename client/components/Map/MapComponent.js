import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import ReactMapGL, { Marker, GeolocateControl, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import Stations from './Stations';
import CalculateButton from './Calculate-Button';
import {keepMapWithinBounds} from './utils'

//maxBounds: https://docs.mapbox.com/mapbox-gl-js/example/restrict-bounds/
//https://github.com/visgl/react-map-gl/issues/786

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
    pitch: 0,
  });


  const maxBounds = [[-74.270176, 40.424795], [-73.622982, 40.920462]]

  const handleViewportChange = (viewport) => {
    if (
      !keepMapWithinBounds(
        viewport.latitude,
        viewport.longitude,
        maxBounds
      )
    ) {
      setViewport(viewport);
    }
  };

//user must have geolocation turned on
  const [geolocationSupport, isgeolocationSupported] = useState(true);
  const [userLocation, setUserLocation] = useState({
    longitude: -74.0060,
    latitude: 40.7128
  });


  const mapRef = useRef(null); //if using geolocate control

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



//TODO: custom map controller for accessibilty (keyboard control)

  return (
    <>
    <ReactMapGL
      {...viewport}
      // onViewportChange={viewport => {
      //   setViewport(viewport);
      // }}
      onViewportChange={handleViewportChange}
      mapboxApiAccessToken="pk.eyJ1Ijoia3Jpc3RpbmUwMTA1IiwiYSI6ImNrZXlxY3NzdDBidjAyeXFjcHFoZTJjMWwifQ._CwmRc-zBpkfo4hKWgngBQ"
      width="100vw"
      height={400}>
        <Stations />
        {geolocationSupport && <GeolocateControl
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          auto={true}
          />}
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
