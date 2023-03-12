/* eslint-disable no-undef */
// Write your code here
import {Component} from 'react'

import './DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: '', destinationsList: initialDestinationList}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, destinationsList} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.includes(searchInput),
    )
    return (
      <div className="cont">
        <h1 className="title">Destination Search</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="icon"
        />
        <ul className="list-cont">
          {searchResults.map(each => (
            <DestinationSearch listDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
