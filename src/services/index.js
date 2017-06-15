import axios from 'axios'

const googleAPIKey = 'AIzaSyCq8kJFhP1UUMdW9zPVWXos2KJvJ31CPIQ'

export const getVolumes = (search) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?key=${googleAPIKey}&q=${search}`)
}

export const getVolume = (id) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${googleAPIKey}`)
}