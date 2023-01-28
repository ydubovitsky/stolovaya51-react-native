import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";

/**
 * StartScreen functional component!
 * @param param0 
 * @returns 
 */
const AboutScreen = ({
  route,
  navigation,
}: StackScreenProps<BottomTabNavigatorParamList, "О приложении">): JSX.Element => {

  return (
    <View style={styles.container}>
      <Animatable.View animation="zoomInUp">
        <Text>О приложении</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutScreen;