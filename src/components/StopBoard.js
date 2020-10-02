import React, { Component } from 'react'
import LineList from './LineList'

export default class StopBoard extends Component {
  render() {
    return (
      <div className="stop-board">
        <h2 className="stop-name">{this.props.stop.name}</h2>
        <div className="metadata">
          {this.props.stop.date} {this.props.stop.time}
        </div>
        <LineList lines={this.props.lines} />
      </div>
    )
  }
}
