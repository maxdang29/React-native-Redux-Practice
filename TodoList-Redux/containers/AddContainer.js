import React, {Component} from 'react';
import {AddTodoList} from './../components/AddTodoList';
import {addNewTask} from '../actions';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';

class AddContainer extends Component {
  render() {
    return (
      <View>
        <AddTodoList />
      </View>
    );
  }
}

const mapStateToProps = store => {
  return {
    foods: store.taskReducers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onclickAdd: taskName => {
      dispatch(addNewTask(taskName));
    },
  };
};

export default connect(mapStateToProps, null)(AddContainer);
