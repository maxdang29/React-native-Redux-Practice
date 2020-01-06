import React, {Component} from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  onPress = () => {
    if (this.props.isLogin) {
      this.props.onLogin();
    } else {
      this.props.onclicked();
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableHighlight
          style={[
            styles.buttonLogin,
            {backgroundColor: [this.props.backgroundColor]},
          ]}
          onPress={this.onPress}>
          <Text>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonLogin: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#41b8c1',
    margin: 5,
    height: 50,
  },
});
