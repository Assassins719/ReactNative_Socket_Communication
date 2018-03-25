/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import MapScreen from './screens/FinderMap'
import MichaelMissingScreen from './screens/MichaelMissing'
import MainScreen from './screens/MainScreen'

const AppNavigator = StackNavigator({
  MainScreen: { screen: MainScreen },
  MapScreen: { screen: MapScreen },
  MichaelMissingScreen: { screen: MichaelMissingScreen },

}, {
    initialRouteName: 'MainScreen',
  });

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}
