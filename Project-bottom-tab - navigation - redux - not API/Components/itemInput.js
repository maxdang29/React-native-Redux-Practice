import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errName: this.props.errName,
      isSecureTextEntry: false,
    };
  }

  focus() {
    this.inputRef.focus();
  }

  getText() {
    return this.inputRef._lastNativeText;
  }

  onchangeText = text => {
    this.setState({
      value: text,
    });
    this.props.onchangeText(text.text);
  };
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
          onChangeText={text => {
            this.onchangeText({text});
          }}
          onSubmitEditing={this.props.onSubmitEditing}
          onBlur={this.onBlur}
          keyboardType={this.props.type}
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
