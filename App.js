import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen"
import ResultsScreen from "./src/screens/ResultsScreen"


const AppNavigator = createStackNavigator({
  Home:HomeScreen,
  Result:ResultsScreen
},
{
  initialRouteName:"Home",
  defaultNavigationOptions:{
    title:"Business Search",
    headerTitleAlign:"center",
    headerStyle:{
      backgroundColor:"purple",
    },
    headerTitleStyle:{
      color:"white"
    },
  }
}
)


export default createAppContainer(AppNavigator);
