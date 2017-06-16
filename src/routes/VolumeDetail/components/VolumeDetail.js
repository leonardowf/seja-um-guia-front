import React from 'react'

class VolumeDetail extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.emptyVolumeRender = this.emptyVolumeRender.bind(this)
  }

  componentDidMount() {
    const volumeId = this.props.location.query.id

    if (volumeId) {
      this.props.loadVolumeWithId(volumeId)
    } else {
      this.props.noVolumeId()
    }
  }

  emptyVolumeRender() {
    return (
      <div>vazio meo</div>
    )
  }

  render() {
    if (this.props.volume) {
      const {
        volumeInfo
      } = this.props.volume

      const {
        title,
        subtitle
      } = volumeInfo

      return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className='page-header'>
            <h1>{title}{' '}<small>{subtitle}</small></h1>
          </div>
        </div>
      </div>

      )
    }

    return this.emptyVolumeRender()
  }
}

export default VolumeDetail