import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './src/navigations/authNavigation';
import HomeNavigation from './src/navigations/homeNavigation';
import BottomTabNavigation from './src/navigations/bottomTabNavigation';
import MyDrawer from './src/navigations/drawNavigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      {/* <BottomTabNavigation /> */}
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
