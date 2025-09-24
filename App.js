
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/Auth';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Registrar-se' }}
        />

        
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ title: 'Redefinir Senha' }}
        />
        <Stack.Screen
          name="PageHome"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

