import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './../screens/login/LoginScreen';
import SignupScreen from './../screens/signup/SignupScreen';
import CreateProfileScreen from './../screens/createprofile/CreateProfileScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="createprofile" component={CreateProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
