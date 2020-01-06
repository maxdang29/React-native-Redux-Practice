import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class TodoItem extends Component {
  deleteItem = id => {
    this.props.deleteTask(id);
  };

  updateTask = id => {
    this.props.updateTask(id);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.updateTask(this.props.item.id)}>
          <Text
            style={[this.props.item.status ? null : styles.textNotComplete]}>
            {this.props.item.name}
          </Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={[styles.button]}
          onPress={() => this.deleteItem(this.props.item.id)}>
          <Icon name="ios-trash" style={styles.icon} solid />
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
  icon: {
    fontSize: 30,
    color: 'red',
  },
  textNotComplete: {
    textDecorationLine: 'line-through',
  },
});
