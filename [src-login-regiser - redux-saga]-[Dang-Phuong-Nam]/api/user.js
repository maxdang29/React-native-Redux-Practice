import callApi from './apiCaller';

export const register = data => {
   callApi('/auth/register', 'POST', data);
};

export const login = data => {
  return callApi('/auth/login', 'POST', data);
};
