import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {validateEmpty, validateEmail} from '../../utils/validate';

export default class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errName: 'gray',
      isSecureTextEntry: false,
      isValidate: false,
    };
  }

  focus() {
    this.inputRef.focus();
  }

  getText() {
    return this.inputRef._lastNativeText;
  }

  changeErrName = () => {
    this.setState({
      errName: 'red',
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.errName !== prevProps.errName) {
      this.setState({
        errName: this.props.errName,
      });
    }
  }

  onBlur = () => {
    this.props.onBlur();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.label}>{this.props.title}</Text>
        <TextInput
          ref={ref => (this.inputRef = ref)}
          style={[
            styles.input,
            {
              borderColor: this.state.errName,
            },
          ]}
          secureTextEntry={this.props.isSecureTextEntry}
          onSubmitEditing={this.props.onSubmitEditing}
          onBlur={this.onBlur}
          keyboardType={this.props.type ? this.props.type : 'default'}
          autoCapitalize="none"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
  },
  input: {
    marginBottom: 15,
    marginTop: 15,
    height: 50,
    borderWidth: 0.3,
    fontSize: 20,
  },
});
