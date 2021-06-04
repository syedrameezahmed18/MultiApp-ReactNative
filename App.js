import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Touchable, TouchableOpacity, Keyboard } from 'react-native';
import GoalScreen from './screens/GoalScreen';
import CovidScreen from './screens/CovidScreen';
import HomeScreen from './screens/HomeScreen';
import TrackerScreen from './screens/TrackerScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const navigator = createStackNavigator({
  Home: HomeScreen,
  Goal: GoalScreen,
  Covid: CovidScreen,
  Tracker: TrackerScreen
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Multi-App'
    }
  }
);

export default createAppContainer(navigator);





