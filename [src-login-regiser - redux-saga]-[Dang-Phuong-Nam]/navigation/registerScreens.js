import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import TodoList from '../screens/todo/index';
import Home from '../screens/home/index';
import Detail from '../screens/home/detail';
import Register from '../screens/register';
import Profile from '../screens/profile';
import Login from '../screens/login';
import updateTask from '../screens/todo/updateTask';

import store from '../redux/store';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function registerScreens() {
  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => Home,
  );
  Navigation.registerComponent(
    'register',
    () => ReduxProvider(Register),
    () => Register,
  );
  Navigation.registerComponent(
    'detail',
    () => ReduxProvider(Detail),
    () => Detail,
  );

  Navigation.registerComponent(
    'todo',
    () => ReduxProvider(TodoList),
    () => TodoList,
  );
  Navigation.registerComponent(
    'profile',
    () => ReduxProvider(Profile),
    () => Profile,
  );
  Navigation.registerComponent(
    'login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'modalUpdateTask',
    () => ReduxProvider(updateTask),
    () => updateTask,
  );
}
