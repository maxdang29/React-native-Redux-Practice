import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import ItemInput from '../../components/login-logOut/itemInput';
import Button from '../../components/login-logOut/button';
import {bottomTabs, goToLogin} from '../../navigation/showBottom';
import {registerScreens} from '../../navigation/registerScreens';

import * as actionUser from '../../redux/userRedux/actions/userAction';
import {connect} from 'react-redux';
registerScreens();

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errName: '',
      errEmail: '',
      errPhone: 0,
      errNameAccount: '',
      errPassword: '',

      isError: 'gray',
    };
  }

  moveToLogin = () => {
    goToLogin();
  };

  onFocus = () => {
    if (!this.fullName.getText()) {
      this.fullName.focus();
      this.fullName.changeErrName();
      return null;
    }
    if (!this.email.getText()) {
      this.email.focus();
      this.email.changeErrName();
      return null;
    }
    if (!this.phone.getText()) {
      this.phone.changeErrName();
      this.phone.focus();
      return null;
    }
    if (!this.nameAccount.getText()) {
      this.nameAccount.focus();
      this.nameAccount.changeErrName();
      return null;
    }
    if (!this.password.getText()) {
      this.password.focus();
      this.password.changeErrName();
      return null;
    }
    if (!this.confirmPassword.getText()) {
      this.confirmPassword.focus();
      this.confirmPassword.changeErrName();
      return null;
    }
  };
  componentDidUpdate() {
    if (this.props.token) {
      bottomTabs();
    }
  }

  handleRegister = () => {
    const data = {
      username: this.fullName.getText(),
      email: this.email.getText(),
      password: this.password.getText(),
      name: this.nameAccount.getText(),
      phoneNumber: this.phone.getText(),
    };
    if (
      data.username !== undefined &&
      data.email !== undefined &&
      data.phoneNumber !== undefined &&
      data.name !== undefined &&
      data.password !== undefined &&
      this.confirmPassword.getText() !== undefined
    ) {
      if (data.password === this.confirmPassword.getText()) {
        this.props.addUser(data);
      }
      if (data.password !== this.confirmPassword.getText()) {
        alert('Not confirm password');
        this.password.focus();
        this.confirmPassword.changeErrName();
        this.password.changeErrName();
      }
    } else {
      this.onFocus();
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

  onLogin = () => {
    goToLogin();
  };

  render() {
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <Text style={styles.title}>Đăng kí</Text>
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
              this.focusNextField('phone');
            }}
          />
          <ItemInput
            ref={ref => (this.phone = ref)}
            title="Số điện thoại *"
            onBlur={() => this.onBlur(this.phone.getText(), 'errPhone')}
            errName={this.state.errPhone}
            onSubmitEditing={() => {
              this.focusNextField('nameAccount');
            }}
            type="numeric"
          />
          <ItemInput
            ref={ref => (this.nameAccount = ref)}
            title="Tên tài khoản *"
            onBlur={() =>
              this.onBlur(this.nameAccount.getText(), 'errNameAccount')
            }
            errName={this.state.errNameAccount}
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
            onSubmitEditing={() => {
              this.focusNextField('confirmPassword');
            }}
          />
          <ItemInput
            ref={ref => (this.confirmPassword = ref)}
            title="Xác nhập mật khẩu *"
            isSecureTextEntry={true}
            onBlur={() =>
              this.onBlur(this.confirmPassword.getText(), 'errConfirmPassword')
            }
            errName={this.state.errConfirmPassword}
          />
          <View style={styles.containerButton}>
            <Button
              title="Đăng nhập"
              backgroundColor="white"
              onclicked={this.onLogin}
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
    account: store.userReducer.account,
    token: store.userReducer.token,
    error: store.userReducer.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllUser: () => {
      dispatch(actionUser.getAllUser());
    },
    addUser: newUser => {
      dispatch(actionUser.addUser(newUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
