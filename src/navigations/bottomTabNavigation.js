import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Status, IpiKara, Sanak } from "../screens";
import { ROUTES } from "../constants";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function BottomTabNavigation({ navigation }) {
  return (
    <Tab.Navigator
      backBehavior="order"
      screenOptions={{
        // название по центру
        headerTitleAlign: "center",
        // headerShown: false,
        headerTitleStyle: {fontSize: 24},
        tabBarLabelStyle: {fontSize: 16},
        headerLeft: () => (
          <Ionicons
            style={{marginLeft: 10}}
            name="menu"
            size={28}
            color="black"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
        tabBarOptions: {},
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="server" size={24} color={color} />
            ) : (
              <Ionicons name="server-outline" size={24} color={color} />
            ),
          tabBarActiveTintColor: "red",
        }}
        name={ROUTES.IPIKARA_TAB}
        component={IpiKara}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="checkmark-circle" size={24} color={color} />
            ) : (
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color={color}
              />
            ),
          tabBarActiveTintColor: "red",
          tabBarAllowFontScaling: 34,
        }}
        name={ROUTES.SANAK_TAB}
        component={Sanak}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="stats-chart" size={24} color={color} />
            ) : (
              <Ionicons name="stats-chart-outline" size={24} color={color} />
            ),
          tabBarActiveTintColor: "red",
          tabBarAllowFontScaling: 34,
        }}
        name={ROUTES.STATUS}
        component={Status}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
