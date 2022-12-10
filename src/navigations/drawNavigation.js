import {} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigation from "./bottomTabNavigation";
import CustomSidebarMenu from "./customSidebarMenu";
import { ROUTES } from "../constants";
import { Login, IpiKara } from "../screens";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      screenOptions={{
        drawerContentStyle: { marginTop: 20 },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name={ROUTES.IPIKARA_DRAWER}
        component={BottomTabNavigation}
      />
      <Drawer.Screen name={ROUTES.IPIKARA} component={IpiKara} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
