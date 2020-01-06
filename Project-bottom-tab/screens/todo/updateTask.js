import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import * as actionTask from '../../redux/todoListRedux/actions/taskAction';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  DatePickerAndroid,
} from 'react-native';

class UpdateTask extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props;
    this.state = {
      attribute: [
        {
          id: this.props.item.id,
          name: this.props.item.name,
          status: item.status,
          androidDate: item.date,
        },
      ],
    };
  }

  onSaveTask = () => {
    const {todoData} = this.props;
    const {name, status, androidDate, id} = this.state;
    this.props.updateTaskId({
      id: id,
      name: name,
      status: status,
      date: androidDate,
    });
    Navigation.dismissAllModals();
  };

  onChangeValue = text => {
    this.setState({
      name: text,
    });
  };
  componentDidMount(prevProps) {
    const {item} = this.props;

    this.setState({
      id: item.id,
      name: item.name,
      status: item.status,
      androidDate: item.date,
    });
  }

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
    const {name, androidDate} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          {...this.props}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter to do list"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={this.onChangeValue}>
          {this.state.name}
        </TextInput>
        <View>
          <TouchableOpacity onPress={() => this.setDateAndroid()}>
            <View style={styles.datePicker}>
              <Icon name="ios-calendar" size={40} color="rgb(49, 49, 49)" />
              <Text style={styles.textDate}>{androidDate}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableHighlight style={styles.button} onPress={this.onSaveTask}>
          <Text>UPDATE</Text>
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
    updateTaskId: newTask => {
      dispatch(actionTask.updateTaskId(newTask));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTask);
