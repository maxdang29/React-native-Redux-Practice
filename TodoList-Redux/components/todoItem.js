import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import ListToDo from '../listTodo';

export default class TodoItem extends Component {
  deleteItem = () => {
    const {listTodo, index} = this.props;
    listTodo.splice(index, 1);
    this.props.autoRefreshFlatList(listTodo);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
        <TouchableHighlight
          style={[styles.button, styles.brnDelete]}
          onPress={this.deleteItem}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    padding: 10,
    marginLeft: 0,
    height: 50,
    borderColor: '#41b8c1',
    borderBottomWidth: 1,

    flex: 6,

    textAlignVertical: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,

    marginRight: 0,
    height: 50,
    borderColor: '#41b8c1',
  },
  delete: {
    color: 'white',
  },
  brnDelete: {
    backgroundColor: 'red',
  },
});
