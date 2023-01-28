import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "../screens/menu/menu.screen";
import AccountScreen from "../screens/account/account.screen";
import AboutScreen from "../screens/about/about.screen";

export type MainStackParamList = {
  MenuScreen: undefined;
};

export type BottomTabNavigatorParamList = {
  Меню: undefined;
  Аккаунт: undefined;
  "О приложении": undefined;
};

const Stack = createStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MenuScreen" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Меню" component={MenuScreen} />
      <Tab.Screen name="Аккаунт" component={AccountScreen} />
      <Tab.Screen name="О приложении" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;
