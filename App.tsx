import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StartScreen from "./src/app/screens/start/start.screen";

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
        <StartScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
