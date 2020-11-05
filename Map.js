import React, {useRef, useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
import ReactMapGL from 'react-map-gl';

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


mapboxgl.accessToken = "pk.eyJ1Ijoia3Jpc3RpbmUwMTA1IiwiYSI6ImNrYzBvNHRhMzAwdzUyem53N2UzdDZ3YXkifQ.GWnxqxDa7O_xseRXf5Jumw";
// const Map = () => {
//   const mapContainerRef = useRef(null);

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [40.7812, -73.9665],
//       zoom: 10,
//     });
//     map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
//     return () => map.remove();
//   }, []);

//   return <div className="map-container" ref={mapContainerRef} />;
// }

class Map extends React.Component {

  constructor() {
    super ()
    this.mapRef = React.createRef()
  }

  componentDidMount() {
    // Creates new map instance
    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/kristine0105/ckdy7pbpc10ow19t93r915e6l',
      center: [-73.985664, 40.748514],
      zoom: 12
    });

    // Creates new directions control instance
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/walking',
    });

    // Integrates directions control with map
    map.addControl(directions, 'top-left');

  /*
    map.on("load", () => {
      // add the data source for new a feature collection with no features
      map.addSource("accessible-mta-stops", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });
      // now add the layer, and reference the data source above by name
      map.addLayer({
        id: "accessible-mta-layer",
        source: "accessible-mta-stops",
        type: "symbol",
        layout: {
          // full list of icons here: https://labs.mapbox.com/maki-icons
          "icon-image": "bakery-15", // this will put little croissants on our map
          "icon-padding": 0,
          "icon-allow-overlap": true
        }
      });
    });

      map.on("moveend", async () => {
        // get new center coordinates
        const { lng, lat } = map.getCenter();
        // fetch new data
        const results = await fetchFakeData({ longitude: lng, latitude: lat });
        // update "random-points-data" source with new data
        // all layers that consume the "accessible-mta-stops" data source will be updated automatically
        map.getSource("accessible-mta-stops").setData(results);
      });*/
  }

  render() {
    return (
      // Populates map by referencing map's container property
      // <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
      <div style={{width: "100%", height:"100vh"}} ref={this.mapRef}>
      </div>
    );
  }
}


export default Map

