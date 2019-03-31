import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Addform from './components/Addform'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Addform" component={Addform} />
          </Switch>
        </Router>
        {/* <Addform /> */}
      </>
    )
  }
}

export default App
