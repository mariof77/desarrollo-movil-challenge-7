import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Screen1 from './src/components/Screen1'
import Screen2 from './src/components/Screen2'
import Screen3 from './src/components/Screen3'

export default createBottomTabNavigator({
  Screen1: Screen1,
  Screen2: Screen2,
  Screen3: Screen3
  // Settings: SettingsScreen,
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
