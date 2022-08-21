import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../Screens/Auth/LoginScreen";
import CategoryScreen from "../Screens/Home/CategoryScreen";
import SplashScreen from "../Screens/SplashScreen";
import AllMealsScreen from "../Screens/Home/AllMealsScreen";
import MealsDetailScreen from "../Screens/Home/MealsDetailScreen";
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="AllMealsScreen" component={AllMealsScreen} />
        <Stack.Screen name="MealsDetailScreen" component={MealsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
