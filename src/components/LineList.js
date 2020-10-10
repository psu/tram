import React, { Component } from 'react'
import RelativeTime from './RelativeTime'
import './LineList.css'

export default class LineList extends Component {
  render() {
    const linesHtml = this.props.lines.map(line => {
      return (
        <li
          key={line.journeyid}
          className={`lineListItem lineType${line.type} lineTrack${line.track}`}
        >
          <span
            className="itemBadge"
            style={{ color: line.bgColor, background: line.fgColor }}
          >
            {line.sname}
          </span>
          <span className="itemTime">
            <RelativeTime dateInput={line.calcTimestamp} />
          </span>
          <span className="itemDirection">{line.direction}</span>
        </li>
      )
    })
    return <ul className="lineList">{linesHtml}</ul>
  }
}
