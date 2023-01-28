import React from "react";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import {
  Button,
  Image,
  StyleSheet,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";
import { MainStackParamList } from "../../routes/main-stack-navigator.route";
const imageSource = require("./images/application-start-logo.png");

/**
 * StartScreen functional component!
 * @param param0 
 * @returns 
 */
const StartScreen = ({
  route,
  navigation,
}: StackScreenProps<MainStackParamList, "StartScreen">): JSX.Element => {

  setTimeout(() => {
    navigation.navigate("MainScreen")
  }, 5000);

  return (
    <View style={styles.container}>
      <Animatable.View animation="zoomInUp">
        <Image style={styles.image} source={imageSource} />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default StartScreen;
