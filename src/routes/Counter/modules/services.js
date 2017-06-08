import axios from 'axios'

export const getVolumes = (search) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
}