import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, Modal} from 'react-native';
import ItemInput from '../../components/itemInput';
import Button from '../../components/button';
import {Navigation} from 'react-native-navigation';
import {goMainScreen, goHome, bottomTabs} from '../../navigation/showBottom';
import {registerScreens} from '../../navigation/registerScreens';

import * as actionUser from '../../redux/actions/user/userAction';

import {connect} from 'react-redux';
registerScreens();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attribute: [
        {
          name: '',
          password: '',
        },
      ],
      error: [
        {
          errName: '',
          errPassword: '',
        },
      ],
    };
  }

  moveToMainScreen = () => {
    bottomTabs();
  };
  componentDidUpdate() {
    if (this.props.isLogin) {
      this.moveToMainScreen();
    }
  }
  onFocus = () => {
    if (!this.fullName.getText()) {
      this.fullName.focus();
      this.fullName.changeErrName();
      return null;
    }

    if (!this.password.getText()) {
      this.password.focus();
      this.password.changeErrName();
      return null;
    }
  };

  onLogin = () => {
    const {name, password} = this.state;
    if (
      name !== undefined ||
      name !== '' ||
      password !== undefined ||
      password !== ''
    ) {
      this.props.checkLogin({name: name, password: password});
    } else {
      //this.onFocus();
      this.moveToMainScreen();
    }
  };

  onchangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };
  validate = (atr, key) => {
    if (atr === undefined || atr === '') {
      this.setState({
        [key]: 'red',
      });
    } else {
      this.setState({
        [key]: 'gray',
      });
    }
  };

  onBlur = (atr, key) => {
    this.validate(atr, [key]);
  };

  focusNextField(nextField) {
    this[nextField].focus();
  }

  render() {
    const {name, password} = this.state;
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <Text style={styles.title}>Login</Text>
          <ItemInput
            ref={ref => (this.fullName = ref)}
            title="Tên người dùng *"
            onchangeText={value => this.onchangeText('name', value)}
            value={this.state.name}
            onBlur={() => this.onBlur(name, 'errName')}
            errName={this.state.errName}
            onSubmitEditing={() => {
              this.focusNextField('password');
            }}
          />

          <ItemInput
            ref={ref => (this.password = ref)}
            title="Mật khẩu *"
            isSecureTextEntry={true}
            onchangeText={value => this.onchangeText('password', value)}
            onBlur={() => this.onBlur(password, 'errPassword')}
            errName={this.state.errPassword}
          />
          <View style={styles.containerButton}>
            <Button
              title="Đăng nhập"
              backgroundColor="white"
              onLogin={this.onLogin}
              isLogin={true}
            />
            <Button
              title="Đăng kí"
              onclicked={this.handleRegister}
              backgroundColor="#41b8c1"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  containerButton: {
    flexDirection: 'row',
  },
});

const mapStateToProps = store => {
  return {
    isLogin: store.userReducer.isLogin,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkLogin: user => {
      dispatch(actionUser.checkLogin(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
