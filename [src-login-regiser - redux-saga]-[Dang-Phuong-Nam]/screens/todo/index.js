import React, {Component} from 'react';
import * as actionTask from '../../redux/todoListRedux/actions/taskAction';
import {connect} from 'react-redux';
import {switchToSection} from '../../utils/contains';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import AddTodoList from '../../components/toDoList/addTodoList';
import ListToDo from '../../components/toDoList/listTodo';
import {todoData} from '../../utils/contains';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: todoData,
    };
  }

  componentDidMount() {
    this.props.getAllTask();
  }

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
        }}>
        <AddTodoList></AddTodoList>
        <ListToDo></ListToDo>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    color: 'red',
    fontSize: 30,
  },
});
const mapStateToProps = store => {
  return {
    tasks: switchToSection(store.taskReducers.tasks),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllTask: () => {
      dispatch(actionTask.getAllTask());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
