import React, { Component } from 'react'

export default class StopSearchName extends Component {
  state = { searchInput: '' }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSearch(this.state.searchInput)
  }

  render = () => {
    return (
      <div className="stop-search">
        <form onSubmit={this.onFormSubmit}>
          <div className="search-field">
            <label htmlFor="search">Stop Name</label>
            <input
              id="search"
              type="text"
              value={this.state.searchInput}
              onChange={e => this.setState({ searchInput: e.target.value })}
            />
            <input id="submit" type="submit" value="Search" />
          </div>
        </form>
      </div>
    )
  }
}
