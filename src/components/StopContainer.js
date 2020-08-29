import React, { Component } from 'react'
import StopBoard from './StopBoard'

const dummyLines = {
  lines: [
    { type: 'tram', lineNumber: '9', direction: 'in', id: '111' },
    { type: 'tram', lineNumber: '8', direction: 'out', id: '222' },
    { type: 'buss', lineNumber: '37', direction: 'in', id: '333' },
    { type: 'boat', lineNumber: '651', direction: 'in', id: '444' },
  ],
}

export default class StopContainer extends Component {
  state = { lines: dummyLines.lines }
  render() {
    return (
      <div className="stop-board-container">
        <StopBoard name={this.props.name} lines={this.state.lines} />
      </div>
    )
  }
}
