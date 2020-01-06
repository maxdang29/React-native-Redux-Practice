import React, {Component} from './node_modules/react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Navigation} from './node_modules/react-native-navigation';

export default class Test extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>test</Text>
      </View>
    );
  }
}
