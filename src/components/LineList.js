import React, { Component } from 'react'

export default class LineList extends Component {
  render() {
    const linesHtml = this.props.lines.map(line => {
      return (
        <li key={line.journeyid}>
          <span style={{ color: line.fgColor }}>✘</span>{' '}
          <span style={{ color: line.bgColor }}>✘</span> {line.time} (
          {line.rtTime}) {line.name} mot {line.direction}
        </li>
      )
    })
    return <ul className="stop-board-list">{linesHtml}</ul>
  }
}
