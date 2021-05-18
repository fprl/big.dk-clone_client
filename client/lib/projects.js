import axios from 'axios'
const BASE_URL = 'http://localhost:1337/projects'

async function getAll() {
  const request = await axios.get(BASE_URL)
  return request.data
}

async function getOne(slug) {
  // const request = await axios.get(`${BASE_URL}/${id}`)
  const request = await axios.get(`${BASE_URL}?slug=${slug}`)
  return request.data
}

export const projectsApi = {
  getAll, getOne
}
