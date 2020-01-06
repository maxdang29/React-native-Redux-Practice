import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableHighlight style={styles.button}>
          <Text>{this.props.title}</Text>
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
