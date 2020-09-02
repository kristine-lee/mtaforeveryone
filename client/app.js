//app basically lists all the components that should be on the front page
import React from 'react'
import Routes from './routes'
// import Footer from './components/Footer'
import Map from './components/Map'
import Results from './components/Calculated-Results'
import TakeAction from './components/Take-Action-Page'

const App = () => {
  return (
    <>
    <Routes />
    <Map />
    <Results />
    <TakeAction />
    </>
  )
}

export default App
