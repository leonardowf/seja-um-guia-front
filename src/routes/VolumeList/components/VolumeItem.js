import React from 'react'
import PropTypes from 'prop-types'

const someFunc = () => {
  console.log("banana na func");
}

const VolumeItem = ({ name , onClick }) => (
  <li className="list-group-item" onClick={onClick}>{ name }
  </li>
)

VolumeItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default VolumeItem