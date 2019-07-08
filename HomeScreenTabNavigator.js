import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator,TabNavigator,createAppContainer} from 'react-navigation';
import { Ionicons } from "react-native-vector-icons/Ionicons";
import ScreenOne from './TabNavigator/ScreenOne'
import ScreenTwo from './TabNavigator/ScreenTwo'

const HomeScreenTabNavigator = new createBottomTabNavigator({
    ScreenOne:{
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'View Patient',
           
        }

    },
    ScreenTwo:{
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Add Patient',
          
        }

    }
})

export default createAppContainer(HomeScreenTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
