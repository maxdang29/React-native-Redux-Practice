import * as types from '../actions/actionTypes';

const init = {
  users: [],
  token: undefined,
  error: undefined,
  account: {},
};

const userReducer = (state = init, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {...state, users: action.data};

    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        account: action.data.data,
        token: action.data.data.token,
        error: undefined,
      };

    case types.ADD_USER_FAILED:
      return {
        ...state,
        error: action.error,
        token: undefined,
      };

    case types.GET_ALL_USER:
      return {...state, users: action.data, account: {}};

    case types.LOGIN:
      return {...state, account: action.account};

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        account: action.data.data,
        token: action.data.data.token,
        error: undefined,
      };

    case types.LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        token: undefined,
      };

    case types.LOG_OUT:
      return {...state, token: undefined, account: {}};

    default:
      return state;
  }
};

export default userReducer;
