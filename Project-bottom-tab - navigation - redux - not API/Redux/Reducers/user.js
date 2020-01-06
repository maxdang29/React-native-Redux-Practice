import * as types from '../Actions/User/actionTypes';

const init = {
  users: [],
  isLogin: false,
  account: {},
};

const userReducer = (state = init, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {...state, users: action.data};
    case types.LOGIN:
      return {...state, isLogin: action.isLogin, account: action.account};
    case types.LOG_OUT:
      return {...state, isLogin: action.isLogin};
    case types.GET_ALL_USER:
      return {...state, users: action.data, account: {}};
    default:
      return state;
  }
};

export default userReducer;
