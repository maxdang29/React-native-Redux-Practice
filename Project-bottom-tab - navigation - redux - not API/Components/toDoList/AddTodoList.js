import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

import * as actionTask from '../../Redux/Actions/TodoList/taskAction';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  DatePickerAndroid,
} from 'react-native';

class AddTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: this.props.todoData,
      attribute: [
        {
          name: '',
          status: true,
          androidDate: `${new Date().getUTCDate()}/${new Date().getUTCMonth() +
            1}/${new Date().getUTCFullYear()}`,
        },
      ],
    };
  }
  onSaveTask = () => {
    const {todoData} = this.props;
    const {name, status, androidDate} = this.state;
    this.props.addTask({
      id: new Date().getTime() + '',
      name: name,
      status: true,
      date: androidDate,
    });
  };

  onChangeValue = text => {
    this.setState({
      name: text,
    });
  };

  setDateAndroid = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
        minDate: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({androidDate: `${day}/${month + 1}/${year}`});
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
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
        <View>
          <TouchableOpacity onPress={() => this.setDateAndroid()}>
            <View style={styles.datePicker}>
              <Icon name="ios-calendar" size={40} color="rgb(49, 49, 49)" />
              <Text style={styles.textDate}>{this.state.androidDate}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableHighlight style={styles.button} onPress={this.onSaveTask}>
          <Text>ADD</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    margin: 10,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    height: 50,
    borderColor: '#41b8c1',
    borderWidth: 1,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#41b8c1',
    backgroundColor: 'yellow',
  },
  datePicker: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  textDate: {
    marginLeft: 10,
    height: 40,
    borderColor: '#41b8c1',
    borderWidth: 1,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const mapStateToProps = store => {
  return {
    foods: store.taskReducers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: newTask => {
      dispatch(actionTask.addTask(newTask));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoList);
