import React, { Component } from 'react'
import Vasttrafik from '../api/Vasttrafik'

export default class LoadData extends Component {
  api = new Vasttrafik()
  defaults = {
    stopBoard: {
      excludeDR: 1,
    },
  }

  getLocationsBy = async () => {
    const locations = await this.api.getData('/location.name', { input: 'ols' })
    console.log(locations)
  }

  getBoard = async () => {
    const board = await this.api.getData(
      '/departureBoard',
      Object.assign(
        {
          id: '9022014008000000',
          date: '2020-08-31',
          time: '09:00',
        },
        this.defaults.stopBoard
      )
    )
    console.log(board)
  }

  render() {
    return (
      <div>
        <button onClick={this.getLocations}>log locations for 'ols'</button>
        <br />
        <button onClick={this.getBoard}>log board for ''</button>
        <br />
        <br />
      </div>
    )
  }
}
