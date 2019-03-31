import React, { Component } from 'react'
import Nasa from './components/Nasa'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Nasa />
      </>
    )
  }
}

export default App
