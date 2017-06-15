import React from 'react'
import PropTypes from 'prop-types'

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.didChangeText = this.didChangeText.bind(this)

    this.state = {
      inputValue: ''
    };
  }

  didChangeText(event) {
    this.setState({ inputValue: event.target.value })
    this.props.onTextChange(event.target.value)
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.inputValue} onChange={this.didChangeText}/>
      </div>
    )
  }
}

SearchField.propTypes = {
  onTextChange: PropTypes.func.isRequired
}

export default SearchField
