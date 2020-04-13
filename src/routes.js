import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Details from './pages/New/Details';
import Problem from './pages/New/Problem';
import ProblemList from './pages/New/ProblemList';
import Confirm from './pages/New/Confirm';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Entregas: {
              screen: createStackNavigator(
                {
                  Dashboard,
                  Details,
                  Problem,
                  ProblemList,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerStyle: {
                      height: 50,
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Entregas',
                tabBarIcon: ({ tintColor }) => (
                  <Icon
                    name="format-align-justify"
                    size={20}
                    color={tintColor}
                  />
                ),
              },
            },
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7D40E7',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#FFFFFF',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
