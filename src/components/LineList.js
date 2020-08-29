import React, { Component } from 'react'

export default class LineList extends Component {
  render() {
    const lines = this.props.lines.map(line => {
      return (
        <li key={line.id}>
          {line.type} - {line.lineNumber} - {line.direction}
        </li>
      )
    })
    return <ul className="stop-board-list">{lines}</ul>
  }
}
