import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import MainStackNavigator from "./src/app/routes/main-stack-navigator.route";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./src/redux/store";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
