import './App.css'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import StopBoard from './components/StopBoard'
import StopSearchName from './components/StopSearchName'
import StopList from './components/StopList'
import StopSearchNearby from './components/StopSearchNearby'
import Vasttrafik from './api/Vasttrafik'

class App extends Component {
  api = new Vasttrafik()
  state = { stopList: [], stop: {}, lineList: [] }

  onNameSearchSubmit = async searchInput => {
    const response = await this.api.findStopsByText(searchInput)
    this.setState({ stopList: response })
    this.onSelectStop(response[0])
  }

  onCoordsSearchSubmit = async searchCoords => {
    const response = await this.api.findStopsByCoords(searchCoords, {
      maxDist: 1500,
    })
    this.setState({ stopList: response })
    this.onSelectStop(response[0])
  }

  onSelectStop = async stop => {
    const response = await this.api.getBoard(stop.id, {
      timeSpan: 61,
      maxDeparturesPerLine: 2,
    })
    // enrich array of departures with calcXXX (from rtTime or time)
    const lines = response.Departure.map(line => {
      const time = line.rtTime ? line.rtTime : line.time
      const date = line.rtDate ? line.rtDate : line.date
      const timestamp = new Date(`${date} ${time}`).getTime()
      return {
        ...line,
        calcTime: time,
        calcDate: date,
        calcTimestamp: timestamp,
      }
    }).sort((a, b) => a.calcTimestamp - b.calcTimestamp)
    this.setState({
      stop: {
        name: stop.name,
        date: response.serverdate,
        time: response.servertime,
      },
      lineList: lines,
    })
  }

  render() {
    return (
      <div className="tram-container">
        <StopBoard stop={this.state.stop} lines={this.state.lineList} />
        <StopSearchName onSearch={this.onNameSearchSubmit} />
        <StopSearchNearby onSearch={this.onCoordsSearchSubmit} />
        <StopList list={this.state.stopList} onSelect={this.onSelectStop} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
