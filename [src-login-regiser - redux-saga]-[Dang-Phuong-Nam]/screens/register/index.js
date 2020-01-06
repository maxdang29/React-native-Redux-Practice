import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, Modal} from 'react-native';
import ItemInput from '../../components/login-logOut/itemInput';
import Button from '../../components/login-logOut/button';
import {Navigation} from 'react-native-navigation';
import {
  goMainScreen,
  goHome,
  bottomTabs,
  goToLogin,
} from '../../navigation/showBottom';
import {registerScreens} from '../../navigation/registerScreens';

import * as actionUser from '../../redux/userRedux/actions/userAction';
import {connect} from 'react-redux';
registerScreens();

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      attribute: [
        {
          name: '',
          email: '',
          phone: 0,
          nameAccount: '',
          password: '',
          confirmPassword: '',
        },
      ],
      error: [
        {
          errName: '',
          errEmail: '',
          errPhone: 0,
          errNameAccount: '',
          errPassword: '',
          errConfirmPassword: '',
        },
      ],
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
    if (this.props.error) {
      // alert("");
    }
  }

  handleRegister = (
    name,
    email,
    phone,
    nameAccount,
    password,
    confirmPassword,
  ) => {
    if (
      name !== undefined &&
      email !== undefined &&
      phone !== undefined &&
      nameAccount !== undefined &&
      password !== undefined &&
      confirmPassword !== undefined
    ) {
      if (password === confirmPassword) {
        alert('name is ' + name);
        this.addUser();
      }
      if (password !== confirmPassword) {
        alert('Not confirm password');
        this.password.focus();
        this.confirmPassword.changeErrName();
        this.password.changeErrName();
      }
    } else {
      this.onFocus();
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

  onLogin = () => {
    goToLogin();
  };
  addUser = () => {
    const {
      name,
      email,
      phone,
      nameAccount,
      password,
      confirmPassword,
    } = this.state;
    const newUser = {
      username: name,
      email: email,
      password: password,
      name: nameAccount,
      phoneNumber: phone,
    };
    // const newUser = {
    //   username: 'nam5sd55',
    //   email: 'nam5ass55@gmail.com',
    //   password: '123',
    //   name: 'nam',
    //   phoneNumber: '1231234',
    // };

    this.props.addUser(newUser);
  };

  render() {
    const {
      name,
      email,
      phone,
      nameAccount,
      password,
      confirmPassword,
    } = this.state;
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <Text style={styles.title}>Đăng kí</Text>
          <ItemInput
            ref={ref => (this.fullName = ref)}
            title="Tên người dùng *"
            onchangeText={value => this.onchangeText('name', value)}
            value={this.state.name}
            onBlur={() => this.onBlur(name, 'errName')}
            errName={this.state.errName}
            onSubmitEditing={() => {
              this.focusNextField('email');
            }}
          />
          <ItemInput
            ref={ref => (this.email = ref)}
            title="Email *"
            onchangeText={value => this.onchangeText('email', value)}
            onBlur={() => this.onBlur(email, 'errEmail')}
            errName={this.state.errEmail}
            onSubmitEditing={() => {
              this.focusNextField('phone');
            }}
          />
          <ItemInput
            ref={ref => (this.phone = ref)}
            title="Số điện thoại *"
            onchangeText={value => this.onchangeText('phone', value)}
            onBlur={() => this.onBlur(phone, 'errPhone')}
            errName={this.state.errPhone}
            onSubmitEditing={() => {
              this.focusNextField('nameAccount');
            }}
            type="numeric"
          />
          <ItemInput
            ref={ref => (this.nameAccount = ref)}
            title="Tên tài khoản *"
            onchangeText={value => this.onchangeText('nameAccount', value)}
            onBlur={() => this.onBlur(nameAccount, 'errNameAccount')}
            errName={this.state.errNameAccount}
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
            onSubmitEditing={() => {
              this.focusNextField('confirmPassword');
            }}
          />
          <ItemInput
            ref={ref => (this.confirmPassword = ref)}
            title="Xác nhập mật khẩu *"
            isSecureTextEntry={true}
            onchangeText={value => this.onchangeText('confirmPassword', value)}
            onBlur={() => this.onBlur(confirmPassword, 'errConfirmPassword')}
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
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
              nameAccount={this.state.nameAccount}
              password={this.state.password}
              confirmPassword={this.state.confirmPassword}
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
