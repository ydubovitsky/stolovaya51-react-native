import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import { Image, StyleSheet, View, Text, Linking } from "react-native";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";
import * as Animatable from "react-native-animatable";

const foodImageSource = require("./images/about-screen.png");
const aboutInfoSource = require("./images/about-info.png");

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
            <Image source={aboutInfoSource} style={styles.aboutImage} />
          </View>
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>А так же посетите наш сайт:</Text>
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("http://stolovaya51.ru")}
            >
              stolovaya51.ru
            </Text>
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
    justifyContent: "space-around",
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
    padding: 10,
  },
  aboutContainer: {
    padding: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutImage: {
    width: 350,
    height: 350
  },
  aboutText: {
    fontFamily: "ShantellSans_400Regular",
    fontSize: 20,
    color: "#2D5F73"
  },
});

export default AboutScreen;
