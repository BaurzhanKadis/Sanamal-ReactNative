import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { IpiKara, Status } from '../screens';
import { ROUTES } from '../constants';

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.STATUS} component={Status} />
      <Stack.Screen name={ROUTES.IPIKARA} component={IpiKara} />
    </Stack.Navigator>
  );
}

export default HomeNavigation