import React, {Component} from 'react';
import {View, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import TodoItem from '../../components/TodoItem';

export default class ListToDo extends Component {
  render() {
    return (
      <SafeAreaView style={styles.listTodo}>
        <FlatList
          data={this.props.todoData}
          renderItem={({item, index}) => (
            <TodoItem
              name={item.name}
              index={index}
              autoRefreshFlatList={this.props.autoRefreshFlatList}
              listTodo={this.props.todoData}
            />
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
  },
});
