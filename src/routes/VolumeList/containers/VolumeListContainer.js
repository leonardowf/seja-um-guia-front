import { connect } from 'react-redux'
import VolumeList from '../components/VolumeList'
import { searchVolume, volumesSelector, selectVolumeFromList } from '../modules/volumeList'

const mapDispatchToProps = {
  searchVolume,
  onClickVolume: selectVolumeFromList
}

const mapStateToProps = (state) => {
  return {
    volumes: volumesSelector(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeList)