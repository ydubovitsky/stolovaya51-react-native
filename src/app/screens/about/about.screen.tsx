import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";
import * as Animatable from "react-native-animatable";

const foodImageSource = require("./images/about-screen.png");

/**
 * StartScreen functional component!
 * @param param0
 * @returns
 */
const AboutScreen = ({
  route,
  navigation,
}: StackScreenProps<
  BottomTabNavigatorParamList,
  "О приложении"
>): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={foodImageSource} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
      <Animatable.View animation="fadeIn">
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutText}>Это приложение написано</Text>
          <Text style={styles.aboutText}>специльно для института точных приборов</Text>
          <Text style={styles.aboutText}>По всем вопросам и предложениям обращаться на почту:</Text>
          <Text style={styles.aboutText}>y.dubovitsky@gmail.com</Text>
        </View>
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-around"
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 4,
    alignContent: "center",
    justifyContent: "space-around",
    padding: 10
  },
  aboutContainer: {
    padding: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutText: {
    fontSize: 15,
    textAlign: "center"
  }
});

export default AboutScreen;
