import React, { Component } from 'react'
import Nasa from './components/Nasa'
import Addform from './components/Addform'

class App extends Component {
  render() {
    return (
      <>
        <Nasa />
        <Addform />
      </>
    )
  }
}

export default App
