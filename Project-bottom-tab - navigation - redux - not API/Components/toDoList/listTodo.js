import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, SectionList} from 'react-native';
import TodoItem from './TodoItem';
import {connect} from 'react-redux';
import * as actionTask from '../../redux/actions/todoList/taskAction';
import {switchToSection} from '../../utils/contains';

class ListToDo extends Component {
  constructor(props) {
    super(props);
  }

  deleteTask = id => {
    this.props.deleteTask(id);
  };
  updateTask = id => {
    this.props.updateTaskStatus(id);
  };

  render() {
    return (
      <SafeAreaView style={styles.listTodo}>
        <SectionList
          sections={this.props.tasks}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => (
            <TodoItem
              item={item}
              index={index}
              listTodo={this.props.todoData}
              deleteTask={id => this.deleteTask(id)}
              updateTask={id => this.updateTask(id)}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listTodo: {
    marginTop: 40,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#41b8c1',
    margin: 15,
    borderRadius: 10,
    marginBottom: 40,
  },
  header: {
    height: 30,
    textAlign: 'left',
    margin: 10,
    fontWeight: 'bold',
    borderColor: '#41b8c1',
    borderBottomWidth: 2,
  },
});

const mapStateToProps = store => {
  return {
    tasks: switchToSection(store.taskReducers.tasks),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => {
      dispatch(actionTask.deleteTask(id));
    },
    updateTaskStatus: id => {
      dispatch(actionTask.updateTaskStatus(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);
