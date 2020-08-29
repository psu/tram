import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import StopContainer from './components/StopContainer'
import LoadData from './components/LoadData'

class App extends Component {
  render() {
    return (
      <div>
        <LoadData />
        <StopContainer stopId="1" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
