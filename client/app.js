//app basically lists all the components that should be on the front page
import React from 'react'
import Routes from './routes'
// import Footer from './components/Footer'
import MapComponent from './components/Map/MapComponent'
import TakeAction from './components/Take-Action-Page'

const App = () => {
  return (
    <>
    <Routes />
    <MapComponent />
    <TakeAction />
    </>
  )
}

export default App
