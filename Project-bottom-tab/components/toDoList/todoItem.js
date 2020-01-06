import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Navigation} from 'react-native-navigation';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import {showModalUpdate} from '../../navigation/showBottom';

export default class TodoItem extends Component {
  deleteItem = id => {
    this.props.deleteTask(id);
  };

  updateTaskStatus = item => {
    this.props.updateTaskStatus(item);
  };

  showModalUpdateTask = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'modalUpdateTask', 
              passProps: {
                item: this.props.item,
              },
              options: {
                topBar: {
                  title: {
                    text: 'Detail Event',
                  },
                },
              },
            },
          },
        ],
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.updateTaskStatus(this.props.item)}>
          <Text
            style={[this.props.item.status ? null : styles.textNotComplete]}>
            {this.props.item.name}
          </Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={[styles.button]}
          onPress={this.showModalUpdateTask}>
          <Icon name="ios-construct" style={styles.iconUpdate} solid />
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button]}
          onPress={() => this.deleteItem(this.props.item.id)}>
          <Icon name="ios-trash" style={styles.iconDelete} solid />
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
  iconDelete: {
    fontSize: 30,
    color: 'red',
  },
  iconUpdate: {
    fontSize: 30,
    color: 'blue',
  },
  textNotComplete: {
    textDecorationLine: 'line-through',
  },
});
