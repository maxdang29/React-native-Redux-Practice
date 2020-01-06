import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {AddContainer} from '../containers/AddContainer';

export default class TaskManagerComponent extends Component {
  render() {
    return (
      <View>
        <AddContainer />
      </View>
    );
  }
}
