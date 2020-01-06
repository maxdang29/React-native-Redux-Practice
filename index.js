/**
 * @format
 */

import TaskManagerComponent from './TodoList-Redux/components/taskManagerComponent';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AllReducers from './TodoList-Redux/reducers/index';
import {View, FlatList, SafeAreaView, StyleSheet} from 'react-native';

import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {
  bottomTabs,
  goToLogin,
} from './Project-bottom-tab/navigation//showBottom';
import {AsyncStorage} from 'react-native';
let store = createStore(AllReducers);

//Bottom tab
import {registerScreens} from './Project-bottom-tab/navigation/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  const token = await AsyncStorage.getItem('token');
  if (token === null) {
    goToLogin();
  } else {
    bottomTabs();
  }
});
