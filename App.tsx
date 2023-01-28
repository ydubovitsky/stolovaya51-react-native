import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStackNavigator from "./src/app/routes/main-stack-navigator.route";

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
      {/* <StartScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
