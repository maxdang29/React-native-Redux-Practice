import axios from 'axios';

const API_URL = 'https://csm-api-staging.enouvo.com/api/v1';

export default function callApi(endpoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${API_URL}${endpoint}`,
    data: body,
  }).catch(err => {
    console.log('error api', err);
  });
}
