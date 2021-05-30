import axios from 'axios'
const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.CMS_LOCALHOST
    : process.env.CMS_HOST

async function getAll() {
  const request = await axios.get(`${BASE_URL}/projects?_limit=-1`)
  return request.data
}

async function getOne(slug) {
  // const request = await axios.get(`${BASE_URL}/${id}`)
  const request = await axios.get(`${BASE_URL}/projects?slug=${slug}`)
  return request.data
}

export default {
  getAll,
  getOne,
}
