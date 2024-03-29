import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import StartScreen from '../screens/StartScreen';
import LoadingScreen from '../screens/LoadingScreen';
import Screen1 from '../screens/PreferenceScreen1';
import Screen2 from '../screens/PreferenceScreen2';
import Screen3 from '../screens/PreferenceScreen3';

const PreferenceStack = createStackNavigator();

function PreferenceStackNavigator() {
  return (
    <PreferenceStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <PreferenceStack.Screen name="Screen1" component={Screen1} />
      <PreferenceStack.Screen name="Screen2" component={Screen2} />
      <PreferenceStack.Screen name="Screen3" component={Screen3} />
    </PreferenceStack.Navigator>
  );
}

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="StartScreen" component={StartScreen} />
        <MainStack.Screen name="LoadingScreen" component={LoadingScreen} />
        <MainStack.Screen name="Preferences" component={PreferenceStackNavigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});