import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, Modal} from 'react-native';
import ItemInput from '../../components/login-logOut/itemInput';
import Button from '../../components/login-logOut/button';
import {Navigation} from 'react-native-navigation';
import {
  goMainScreen,
  goHome,
  bottomTabs,
  goToRegister,
} from '../../navigation/showBottom';
import {registerScreens} from '../../navigation/registerScreens';

import * as actionUser from '../../redux/userRedux/actions/userAction';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
registerScreens();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errName: '',
      errEmail: '',
      errPassword: '',
    };
  }
  componentDidUpdate() {
    if (this.props.token) {
      bottomTabs();
    }
  }

  moveToMainScreen = () => {
    bottomTabs();
  };

  moveToRegister = () => {
    goToRegister();
  };

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
    if (!this.email.getText()) {
      this.email.focus();
      this.email.changeErrName();
      return null;
    }
  };

  onLogin = () => {
    const data = {
      username: this.fullName.getText(),
      email: this.email.getText(),
      password: this.password.getText(),
    };
  
    if (
      data.username === undefined ||
      data.username === '' ||
      data.password === undefined ||
      data.password === '' ||
      data.email === undefined ||
      data.email === ''
    ) {
      this.onFocus();
    } else {
      this.props.login(data);
    }
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
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <Text style={styles.title}>Login</Text>
          <ItemInput
            ref={ref => (this.fullName = ref)}
            title="Tên người dùng *"
            onBlur={() => this.onBlur(this.fullName.getText(), 'errName')}
            errName={this.state.errName}
            onSubmitEditing={() => {
              this.focusNextField('email');
            }}
          />

          <ItemInput
            ref={ref => (this.email = ref)}
            title="Email *"
            onBlur={() => this.onBlur(this.email.getText(), 'errEmail')}
            errName={this.state.errEmail}
            onSubmitEditing={() => {
              this.focusNextField('password');
            }}
          />

          <ItemInput
            ref={ref => (this.password = ref)}
            title="Mật khẩu *"
            isSecureTextEntry={true}
            onBlur={() => this.onBlur(this.password.getText(), 'errPassword')}
            errName={this.state.errPassword}
          />
          <View style={styles.containerButton}>
            <Button
              title="Đăng kí"
              onclicked={this.moveToRegister}
              backgroundColor="#41b8c1"
            />
            <Button
              title="Đăng nhập"
              backgroundColor="white"
              onLogin={this.onLogin}
              isLogin={true}
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
    account: store.userReducer.account,
    token: store.userReducer.token,
    error: store.userReducer.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(actionUser.login(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
