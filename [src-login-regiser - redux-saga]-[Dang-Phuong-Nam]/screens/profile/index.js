import React, {Component} from 'react';

import {connect} from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import * as userAction from '../../redux/userRedux/actions/userAction';
import {goToLogin} from '../../navigation/showBottom';

import {AsyncStorage} from 'react-native';
class Profile extends Component {
  constructor(props) {
    super(props);
  }
  clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };
  signOut = () => {
    this.props.logOut();
  };
  componentDidUpdate() {
    if (this.props.token === undefined || this.props.token === '') {
      goToLogin();
      this.clearAsyncStorage();
    }
  }
  render() {
    const {account} = this.props;
    return (
      <View>
        <View style={{width: '100%'}}>
          <ImageBackground
            source={require('../../../Image/mina.jpg')}
            style={{
              width: '100%',
              height: 200,
              justifyContent: 'flex-end',
            }}></ImageBackground>
        </View>

        <View style={[styles.inforContainer]}>
          <Text style={[styles.textInfor, styles.textLeft]}>User Name: </Text>
          <Text style={[styles.textInfor, styles.textRight]}>
            {account.username}
          </Text>
        </View>

        <View style={[styles.inforContainer]}>
          <Text style={[styles.textInfor, styles.textLeft]}>Email:</Text>
          <Text style={[styles.textInfor, styles.textRight]}>
            {account.email}
          </Text>
        </View>
        <TouchableOpacity style={[styles.signOutBtn]} onPress={this.signOut}>
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  name: {
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
  },
  email: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  signOutBtn: {
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    margin: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  inforContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  textInfor: {
    fontSize: 20,
    color: 'gray',
  },
  textLeft: {
    flex: 1,
  },
  textRight: {
    flex: 2,
  },
});
const mapStateToProps = store => {
  return {
    account: store.userReducer.account,
    token: store.userReducer.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch(userAction.logOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
