import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../Screens/Auth/LoginScreen";
import HomeScreen from "../Screens/Home/HomeScreen";
import SplashScreen from "../Screens/SplashScreen";
import ScrollingScreen from "../Screens/Home/ScrollingScreen";
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="ScrollingScreen" component={ScrollingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
