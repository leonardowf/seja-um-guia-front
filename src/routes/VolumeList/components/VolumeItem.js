import React from 'react'
import PropTypes from 'prop-types'
import './VolumeItem.scss'

//
// const VolumeItem = ({ image, name , onClick, author, imageLink }) => (
//   <div onClick={onClick} className="row">
//     <div className="panel panel-default">
//       <div className="panel-body">
//         <div className="col-md-2">
//           <img src={imageLink} alt="..." className="img-thumbnail"></img>
//         </div>
//         <div className="col-md-10"><h3>{ name }</h3><h4>{author}</h4></div>
//       </div>
//     </div>
//
//   </div>
//
//
//   // <button onClick={onClick} type="button" className="list-group-item">{ name }</button>
// )


const VolumeItem = ({ image, name , onClick, author, imageLink }) => (
  <div onClick={onClick} className="col-sm-6 col-md-4">
    <div className="thumbnail">
      {imageLink &&
        <img className="volume-thumbnail" src={imageLink} alt={`Capa do livro ${name}`} />
      }
        <div className="caption">
          <h3>{name}</h3>
          <p>{author}</p>
        </div>
    </div>
  </div>


  // <button onClick={onClick} type="button" className="list-group-item">{ name }</button>
)


VolumeItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default VolumeItem