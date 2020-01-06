import axios from 'axios';

const API_URL = '';

export default function callApi(endpoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${API_URL}${endpoint}`,
    data: body,
  })
    .then(function(response) {
      return response;
    })
    .catch(err => {
      throw err.response;
    });
}
