import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Addform from './components/Addform'
import Home from './pages/Home'
import FindPictureDay from './components/FindPictureDay'
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Addform" component={Addform} />
            <Route exact path="/FindPicture" component={FindPictureDay} />
          </Switch>
        </Router>
        {/* <Addform /> */}
      </>
    )
  }
}

export default App
