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
      return <h1>Hello, {this.props.volume.id}</h1>;
    }

    return this.emptyVolumeRender()
  }
}

export default VolumeDetail