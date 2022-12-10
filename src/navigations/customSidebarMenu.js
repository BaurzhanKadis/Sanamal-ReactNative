import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../ass/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

const CustomSidebarMenu = (props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
      colors={["#a1c4fd", "#c2e9fb"]}
    >
      {/*Top Large Image */}
      <View style={styles.containerTop}>
        <Image source={logo} style={styles.sideMenuProfileIcon} />
        <Text style={styles.textTop}>Sanamal</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerBottom}>
        <Ionicons name="person-outline" size={24} color="black" />
        <Text>Баетов Саян</Text>
        <TouchableOpacity>
          <Ionicons name="exit-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* </LinearGradient> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
  },
  containerTop: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    paddingTop: 40,
    height: 120,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textTop: {
    marginLeft: 20,
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  containerBottom: {
    marginHorizontal: 20,
    display: "flex",
    fontSize: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "grey",
  },
  sideMenuProfileIcon: {
    width: 50,
    height: 50,
  },
});

export default CustomSidebarMenu;
