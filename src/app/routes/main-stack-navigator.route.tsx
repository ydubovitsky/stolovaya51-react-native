import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StartScreen from "../screens/start/start.screen";
import MainScreen from "../screens/main/main.screen";

export type MainStackParamList = {
  StartScreen: undefined;
  MainScreen: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="MainScreen" component={MyTabs} />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Menu" component={MainScreen} />
      <Tab.Screen name="Info" component={MainScreen} />
      <Tab.Screen name="Account" component={MainScreen} />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;
