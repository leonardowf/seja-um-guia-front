import React from 'react'
import { map } from 'lodash'
import SearchField from './SearchField'
import VolumeItem from './VolumeItem'

const buildAuthorsInformation = (volumeInfo) => {
  const {
    authors,
    publisher
  } = volumeInfo

  if (authors) {
    return authors.join(', ')
  }

  if (publisher) {
    return publisher
  }

  return ''
}
const buildImageLink = (volumeInfo) => {
  const {
    imageLinks
  } = volumeInfo

  if (!imageLinks) {
    return null
  }

  const {
    thumbnail
  } = imageLinks

  return thumbnail
}
const buildVolumeChunks = (volumes) => {
  let chunks = []
  let i,j,temparray,chunk = 3;
  for (i=0,j=volumes.length; i<j; i+=chunk) {
    temparray = volumes.slice(i,i+chunk);
    chunks.push(temparray)
  }

  return chunks
}

const buildVolumeItems = (volumes, onClickVolume) => {
  return (
    map(volumes, (volume) => {
        const author = buildAuthorsInformation(volume.volumeInfo)
        const imageLink = buildImageLink(volume.volumeInfo)

        const {
          title,

        } = volume.volumeInfo

        return <VolumeItem onClick={() => {onClickVolume(volume)}}
                           key={volume.id}
                           name={title}
                           author={author}
                           imageLink={imageLink} />
      }

    )
  )
}

const mapChunksToRows = (volumeChunks, onClickVolume) => {
  return map(volumeChunks, (volumeChunk) => {
    return (
      <div className='row'>
        {buildVolumeItems(volumeChunk, onClickVolume)}
      </div>
    )
  })
}

const VolumeList = ({ volumes, searchVolume, onClickVolume}) => {
  const volumeChunks = buildVolumeChunks(volumes)

  return (
    <div>
      <SearchField onTextChange={searchVolume}/>
      {mapChunksToRows(volumeChunks, onClickVolume)}
    </div>
  )
}

export default VolumeList