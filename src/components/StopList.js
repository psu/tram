import React, { Component } from 'react'

export default class StopList extends Component {
  render() {
    const stopsHtml = this.props.list.map(stop => {
      return (
        <li key={stop.idx}>
          <a
            href={`#stop=${stop.id}`}
            onClick={() => this.props.onSelect(stop)}
          >
            {stop.name}
          </a>
        </li>
      )
    })
    return (
      <div className="stop-list">
        <ul>{stopsHtml}</ul>
      </div>
    )
  }
}
