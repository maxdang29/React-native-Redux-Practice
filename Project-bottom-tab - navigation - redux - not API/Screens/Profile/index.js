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
import * as userAction from '../../redux/actions/user/userAction';
import {goToLogin} from '../../navigation/showBottom';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  signOut = () => {
    this.props.logOut();
    goToLogin();
  };

  render() {
    const {account} = this.props;
    return (
      <View>
        <View style={{width: '100%'}}>
          <ImageBackground
            source={require('../../../Image/mina.jpg')}
            style={{width: '100%', height: 200, justifyContent: 'flex-end'}}>
            <Text style={styles.name}>{account.nameAccount}</Text>
            <Text style={styles.email}>Email: {account.email}</Text>
          </ImageBackground>
        </View>

        <View style={[styles.inforContainer]}>
          <Text style={[styles.textInfor, styles.textLeft]}>Full name: </Text>
          <Text style={[styles.textInfor, styles.textRight]}>
            {account.name}
          </Text>
        </View>

        <View style={[styles.inforContainer]}>
          <Text style={[styles.textInfor, styles.textLeft]}>Phone number:</Text>
          <Text style={[styles.textInfor, styles.textRight]}>
            {account.phone}
          </Text>
        </View>
        <View style={[styles.inforContainer]}>
          <Text style={[styles.textInfor, styles.textLeft]}>Name Account:</Text>
          <Text style={[styles.textInfor, styles.textRight]}>
            {account.nameAccount}
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
    flex: 4,
  },
  textRight: {
    flex: 2,
  },
});
const mapStateToProps = store => {
  return {
    account: store.userReducer.account,
    isLogin: store.userReducer.isLogin,
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
