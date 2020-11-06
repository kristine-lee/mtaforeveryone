import React from 'react';
import { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubway } from '@fortawesome/free-solid-svg-icons';

export default class Markers extends React.PureComponent {
  render(){
    const {stations, handleClick} = this.props;
    return (
    stations.map(spot =>
    <Marker
      key={spot.station_name}
      latitude={parseFloat(spot.entrance_latitude)}
      longitude={parseFloat(spot.entrance_longitude)} >
      <FontAwesomeIcon icon={faSubway} onClick={() => handleClick(spot)} />
    </Marker>)
    )
  }
}
