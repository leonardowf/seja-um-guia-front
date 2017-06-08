import React from 'react'
import PropTypes from 'prop-types'
import SearchField from './SearchField'

export const Counter = ({ counter, increment, doubleAsync, searchVolume }) => (
  <div style={{ margin: '0 auto' }} >
    <SearchField onTextChange={searchVolume}/>
    <h2>Counter: {counter}</h2>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
)
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  searchVolume: PropTypes.func.isRequired,
}

export default Counter
