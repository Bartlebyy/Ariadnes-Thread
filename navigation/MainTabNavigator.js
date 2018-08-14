import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddMazeScreen from '../screens/AddMazeScreen';
import GalleryScreen from '../screens/GalleryScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const AddMazeStack = createStackNavigator({
  AddMaze: AddMazeScreen,
});

AddMazeStack.navigationOptions = {
  tabBarLabel: 'Add Maze',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? `ios-camera${focused ? '' : '-outline'}`
        : 'md-camera'}
    />
  ),
};

const GalleryStack = createStackNavigator({
  Gallery: GalleryScreen,
});

GalleryStack.navigationOptions = {
  tabBarLabel: 'Gallery',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? `ios-folder${focused ? '' : '-outline'}`
        : 'md-folder'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AddMazeStack,
  GalleryStack,
});
