import {combineReducers} from 'redux';
import taskReducers from './todoListRedux/reducers/toDoList';
import userReducer from './userRedux/reducers/user';

const AllReducers = combineReducers({
  taskReducers,
  userReducer,
});

export default AllReducers;
