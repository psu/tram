import React, { Component } from 'react'

export default class StopBoard extends Component {
  render() {
    const lines = this.props.lines.map(line => {
      return (
        <li key={line.id}>
          {line.type} - {line.lineNumber} - {line.direction}
        </li>
      )
    })
    return (
      <div className="stop-board">
        <h2 className="stop-board-name">{this.props.name}</h2>
        <ul className="stop-board-list">{lines}</ul>
      </div>
    )
  }
}
