import {combineReducers} from 'redux';
import taskReducers from './taskReducers';

const AllReducers = combineReducers({
  taskReducers,
});

export default AllReducers;
