import React, { Component } from 'react'
import Nasa from './components/Nasa'
import Nav from './components/Nav'
import Addform from './components/Addform'

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Nasa />
        <Addform />
      </>
    )
  }
}

export default App
