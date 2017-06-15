import React from 'react'
import { map } from 'lodash'
import SearchField from './SearchField'
import VolumeItem from './VolumeItem'

const buildVolumeItems = (volumes, onClickVolume) => (
  map(volumes, (volume) =>
      <VolumeItem onClick={() => {onClickVolume(volume)}}  key={volume.id} name={volume.volumeInfo.title}/>
  )
)

const VolumeList = ({ volumes, searchVolume, onClickVolume}) => {
  return (
    <div>
      <SearchField onTextChange={searchVolume}/>
      <ul className="list-group">
        {buildVolumeItems(volumes, onClickVolume)}
      </ul>
    </div>
  )
}

export default VolumeList