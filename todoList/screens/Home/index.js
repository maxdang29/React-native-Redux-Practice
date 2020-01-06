import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import AddTodoList from './AddTodoList';
import ListToDo from './listTodo';
import todoData from '../../data/todoData';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: todoData,
    };
  }
  autoRefreshFlatList = list => {
    this.setState({
      todoData: list,
    });
  };

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
        }}>
       
        <AddTodoList
          todoData={this.state.todoData}
          autoRefreshFlatList={value =>
            this.autoRefreshFlatList(value)
          }></AddTodoList>
        <ScrollView>
          <View>
            <ListToDo
              todoData={this.state.todoData}
              autoRefreshFlatList={value =>
                this.autoRefreshFlatList(value)
              }></ListToDo>
          </View>
        </ScrollView>
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
