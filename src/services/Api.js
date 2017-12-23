import axios from 'axios'

export default () => {
  let servicePath
  if (document.location.hostname == 'localhost') {
    servicePath = 'http://localhost:3001'
  } else {
    servicePath = 'https://murakami-api.herokuapp.com'
  }
  return axios.create({
    baseURL: servicePath
  })
}
