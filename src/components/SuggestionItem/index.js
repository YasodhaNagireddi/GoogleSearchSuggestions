// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, displaySuggestion} = props
  const {suggestion} = eachItem

  const onClickSuggestion = () => {
    displaySuggestion(suggestion)
  }
  return (
    <li className="suggestionitem-container">
      <p className="suggestion-item-text">{suggestion}</p>
      <button
        className="suggestion-del-btn"
        onClick={onClickSuggestion}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="suggestion-arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
