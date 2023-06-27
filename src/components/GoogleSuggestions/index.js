// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  displaySuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  searchUserInput = event => {
    this.setState({googleSearch: event.target.value})
  }

  render() {
    const {googleSearch} = this.state
    const {suggestionsList} = this.props

    const filteredSearchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="google-search-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="google-search-card">
          <div className="google-search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="google-search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="google-search-input"
              value={googleSearch}
              onChange={this.searchUserInput}
            />
          </div>
          <ul className="suggestion-item-container">
            {filteredSearchResults.map(suggestion => (
              <SuggestionItem
                eachItem={suggestion}
                displaySuggestion={this.displaySuggestion}
                key={suggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
