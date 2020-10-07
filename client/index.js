import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { RestLink } from 'apollo-link-rest';
import App from './app'
//import mapboxgl from 'mapbox-gl';

//mapboxgl.accessToken = "pk.eyJ1Ijoia3Jpc3RpbmUwMTA1IiwiYSI6ImNrZXgzNWIxcTA1cGIydGw2aGczZTVjcTIifQ.k66a5jUyK9govXmsLGDIFw";

const restLink = new RestLink({
  uri: 'https://data.ny.gov/resource/i9wp-a4ja.json/',
  // uri: 'https://data.ny.gov/resource/i9wp-a4ja.geojson?ADA=TRUE'
  //https://data.ny.gov/resource/i9wp-a4ja.geojson?ADA=TRUE
  //https://github.com/eturino/apollo-link-scalars to define geoJSON custom scalar type
  //https://github.com/larkintuckerllc/apollo-client-rest/blob/master/src/apis/todos.ts apollo rest api supports out of the box returning json objects (or arrays of them)
});

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: restLink,
  cache: cache,
  connectToDevTools: true,
  typeDefs: {}
  // clientState: {
  //   defaults: {
  //     clientLocation: [0,0]
  //   }
  // },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <Provider store={store}> */}
    <Router>
     <App />
    </Router>
    {/* </Provider> */}
  </ApolloProvider>,
  // <div>Hello, world!</div>,
  document.getElementById('app')
);
