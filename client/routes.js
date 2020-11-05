//all the redux routes that should be on the app
import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import Homepage from './components/Homepage'

class Routes extends React.Component {

  render () {
    return (
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    )
  }
}

export default withRouter((Routes))
