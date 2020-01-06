import callApi from './apiCaller';
const urlUser = 'https://csm-api-staging.enouvo.com/api/v1';
export const register = data => {
  return callApi(urlUser + '/auth/register', 'POST', data);
};

export const login = data => {
  return callApi(urlUser + '/auth/login', 'POST', data);
};
