import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreenTabNavigator from './HomeScreenTabNavigator'
import SignOutScreen from './SignOutScreen';
import DoctorProfileScreen from './DoctorProfileScreen';


const InnerStackNavigator = new createStackNavigator({
    TabNavigator:{screen:HomeScreenTabNavigator}
})

const AppDrawerNavigator = new createDrawerNavigator({
     GoBack: {screen:InnerStackNavigator},
     DoctorProfile: {screen:DoctorProfileScreen},
     SignOut: {screen:SignOutScreen}


})

export default createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});
