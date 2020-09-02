import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
// import { useQuery, gql } from '@apollo/client'
import ReactMapGL, { Source, Layer, Feature } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import Stations from './Stations'

const mapBody = styled.div`
margin: 0;
padding: 0;
`
const mapBox = styled.div`
position: absolute;
top: 0;
bottom: 0;
width: 100%;
`

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    longitude: -74.0060,
    latitude: 40.7128,
    zoom: 8,
    bearing: 0,
    pitch: 0
  });

  const mapRef = useRef(null);

  // useEffect(() => {
  //   const map = reactMap.getMap();
  //   map.on('load', () => {
  //     map.addLayer({})
  //   })

  // }, [viewport])

  return (
    <ReactMapGL {...viewport}
      mapboxToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={newViewport => {
        setViewport({ ...newViewport });
      }}>
        markers here
      <Stations />
      </ReactMapGL>
  )
}
