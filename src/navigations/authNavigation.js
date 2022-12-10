import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens';
import { ROUTES } from '../constants';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNavigation