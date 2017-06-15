import { connect } from 'react-redux'
import VolumeDetail from '../components/VolumeDetail'
import { loadVolumeWithId } from '../modules/volumeDetail'

const noVolumeId = () => {
  console.log("noVolumeId")
  return {
    type: "banana"
  }
}

const loadVolume = (id) => {
  console.log("loadVolume", id)
  return {
    type: "banana"
  }
}

const mapDispatchToProps = {
  noVolumeId,
  loadVolumeWithId
}

const mapStateToProps = (state) => ({
  volume: state.selectedVolume
})

export default connect(mapStateToProps, mapDispatchToProps)(VolumeDetail)