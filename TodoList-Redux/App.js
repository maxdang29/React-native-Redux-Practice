import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AddTodoList from '../todoList/AddTodoList';

export default class App extends Component {
  render() {
    return (
      <View>
        <AddTodoList></AddTodoList>
      </View>
    );
  }
}
