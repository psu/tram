import React, { Component } from 'react'
import LineList from './LineList'

const dummyLines = {
  lines: [
    { type: 'tram', lineNumber: '9', direction: 'in', id: '111' },
    { type: 'tram', lineNumber: '8', direction: 'out', id: '222' },
    { type: 'buss', lineNumber: '37', direction: 'in', id: '333' },
    { type: 'boat', lineNumber: '651', direction: 'in', id: '444' },
  ],
}

export default class StopBoard extends Component {
  state = { lines: dummyLines.lines }
  render() {
    return (
      <div className="stop-board">
        <h2 className="stop-board-name">{this.props.name}</h2>
        <LineList lines={this.state.lines} />
      </div>
    )
  }
}
