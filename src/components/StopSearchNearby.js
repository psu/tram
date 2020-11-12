import React, { Component } from 'react'

export default class StopSearchNearby extends Component {
  state = {
    currentCoords: {
      lat: '',
      long: '',
    },
  }

  onUpdateNearby = e => {
    this.props.onSearch(this.state.currentCoords)
  }

  componentDidMount() {
    // https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(pos => {
        this.setState({
          currentCoords: {
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
          },
        })
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onUpdateNearby}>Get nearby stops</button>
      </div>
    )
  }
}
