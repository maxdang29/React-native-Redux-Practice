import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class AddTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: this.props.todoData,
      attribute: [
        {
          id: '',
          name: '',
        },
      ],
    };
  }
  onSaveTask = () => {
    const newTask = {
      id: this.guidGenerator(),
      name: this.state.name,
    };
    this.props.todoData.push(newTask);
    this.props.autoRefreshFlatList(this.props.todoData);
  };

  guidGenerator = () => {
    var S4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    ); 
  };

  onChangeValue = text => {
    this.setState({
      id: this.guidGenerator(),
      name: text,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter to do list"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={this.onChangeValue}
        />
        <TouchableHighlight style={styles.button} onPress={this.onSaveTask}>
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flexDirection: 'row',
  },
  input: {
    padding: 10,
    marginLeft: 10,
    height: 50,
    borderColor: '#41b8c1',
    borderWidth: 1,
    flex: 6,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#41b8c1',
    marginRight: 10,
    height: 50,
  },
});
