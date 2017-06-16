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
      <div className="row">
          <div className="form-group">
            <input type='text'
                   className="form-control"
                   value={this.state.inputValue}
                   onChange={this.didChangeText}
                   placeholder='Nome do livro, autor ou descrição...'/>
          </div>
      </div>
    )
  }
}

SearchField.propTypes = {
  onTextChange: PropTypes.func.isRequired
}

export default SearchField
