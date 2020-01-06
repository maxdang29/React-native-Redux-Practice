import {Navigation} from 'react-native-navigation';

export const bottomTabs = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    passProps: {
                      text: 'This is tab 1',
                    },
                  },
                },
              ],
              options: {
                topBar: {
                  visible: false,
                },
                bottomTab: {
                  text: 'Home',
                  icon: require('../../Image/dn.jpg'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                  iconColor: '#1B4C77',
                  selectedIconColor: '#0f0',
                },
              },
            },
          },
          {
            component: {
              name: 'todo',
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'ToDoList',
                  icon: require('../../Image/dn.jpg'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                  iconColor: '#1B4C77',
                  selectedIconColor: '#0f0',
                },
              },
            },
          },
          {
            component: {
              name: 'profile',
              passProps: {
                text: 'This is tab 3',
              },
              options: {
                bottomTab: {
                  text: 'User Profile',
                  icon: require('../../Image/dn.jpg'),
                  testID: 'THIRD_TAB_BAR_BUTTON',
                  iconColor: '#1B4C77',
                  selectedIconColor: '#0f0',
                },
              },
            },
          },
        ],
      },
    },
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
export const goToLogin = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'login',
            },
          },
        ],
      },
    },
  });
