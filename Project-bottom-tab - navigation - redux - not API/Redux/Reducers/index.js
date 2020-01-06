import {combineReducers} from 'redux';
import taskReducers from './toDoList';
import userReducer from './user';

const AllReducers = combineReducers({
  taskReducers,
  userReducer,
});

export default AllReducers;
