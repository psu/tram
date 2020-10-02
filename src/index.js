import './App.css'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import StopBoard from './components/StopBoard'
import StopSearch from './components/StopSearch'
import StopList from './components/StopList'
import Vasttrafik from './api/Vasttrafik'

class App extends Component {
  api = new Vasttrafik()
  state = { stopList: [], stop: {}, lineList: [] }

  onSearchSubmit = async searchInput => {
    const response = await this.api.findStopsByText(searchInput)
    this.setState({ stopList: response })
  }

  onSelectStop = async stop => {
    const response = await this.api.getBoard(stop.id)
    this.setState({
      stop: {
        name: stop.name,
        date: response.serverdate,
        time: response.servertime,
      },
      lineList: response.Departure,
    })
  }

  render() {
    return (
      <div className="tram-container">
        <StopBoard stop={this.state.stop} lines={this.state.lineList} />
        <StopSearch onSearch={this.onSearchSubmit} />
        <StopList list={this.state.stopList} onSelect={this.onSelectStop} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
