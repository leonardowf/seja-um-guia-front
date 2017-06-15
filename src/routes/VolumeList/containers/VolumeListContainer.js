import { connect } from 'react-redux'
import VolumeList from '../components/VolumeList'
import { searchVolume, volumesSelector } from '../modules/volumeList'
import { push } from 'react-router-redux'

const onClickVolume = (volume) => {
  return {
    type: "asdas",
    payload: volume
  }
  console.log("aquiiii")
}

const mapDispatchToProps = {
  searchVolume,
  onClickVolume: () => (push("/"))
}

const mapStateToProps = (state) => {
  return {
    volumes: volumesSelector(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeList)