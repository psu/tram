import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import StopBoard from './components/StopBoard'
import StopSearch from './components/StopSearch'
import StopList from './components/StopList'
import LoadData from './components/LoadData'
import Vasttrafik from './api/Vasttrafik'

class App extends Component {
  render() {
    return (
      <div>
        <LoadData />
        <StopBoard stopID="9021014005160000" />
        <StopSearch />
        <StopList stopId="1" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
