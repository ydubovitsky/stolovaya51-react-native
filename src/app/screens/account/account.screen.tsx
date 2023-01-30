import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";
import { SafeAreaView } from "react-native-safe-area-context";


/**
 * StartScreen functional component!
 * @param param0 
 * @returns 
 */
const AccountScreen = ({
  route,
  navigation,
}: StackScreenProps<BottomTabNavigatorParamList, "Аккаунт">): JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="zoomInUp">
        <Text>Account Screnn</Text>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccountScreen;
