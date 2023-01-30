import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "../screens/menu/menu.screen";
import AccountScreen from "../screens/account/account.screen";
import AboutScreen from "../screens/about/about.screen";
import Icon from "react-native-vector-icons/Ionicons";
import MapScreen from "../screens/map/map.screen";

export type MainStackParamList = {
  MenuScreen: undefined;
};

export type BottomTabNavigatorParamList = {
  "Меню": undefined;
  "Как нас найти?": undefined;
  "Аккаунт": undefined;
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
    //!TODO Вынести в отдельную функцию или переписать
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Меню") {
            iconName = focused ? "fast-food-outline" : "fast-food-outline";
            return <Icon name={iconName} size={size} color={color} />;
          }
          if (route.name === "Как нас найти?") {
            iconName = focused ? "map" : "map-outline";
            return <Icon name={iconName} size={size} color={color} />;
          }
          if (route.name === "Аккаунт") {
            iconName = focused  ? "person"  : "person-outline";
            return <Icon name={iconName} size={size} color={color} />;
          }
          if (route.name === "О приложении") {
            iconName = focused ? "information-circle-outline" : "information-circle-outline";
            return <Icon name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Меню" component={MenuScreen} />
      <Tab.Screen name="Как нас найти?" component={MapScreen} />
      <Tab.Screen name="Аккаунт" component={AccountScreen} />
      <Tab.Screen name="О приложении" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;
