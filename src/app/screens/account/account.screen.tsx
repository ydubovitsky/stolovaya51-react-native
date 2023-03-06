import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const foodImageSource = require("./images/account-screen.png");

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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={foodImageSource} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.absoluteIconContainer}>
            <View style={styles.iconBorder}>
              <Icon name={"person"} size={50} color={"silver"} />
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Animatable.View animation="fadeIn" duration={1500}>
            <View style={styles.description}>
              <Text style={styles.text}>Здесь скоро будет ваш личный кабинет</Text>
              <Text style={styles.text}>А пока вы можете ознакомиться с меню на сегодняшний день</Text>
              <Text style={styles.text}>😘</Text>
            </View>
          </Animatable.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
  },
  iconContainer: {
    flex: 1,
  },
  absoluteIconContainer: {
    position: "absolute",
    top: -120,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBorder: {
    backgroundColor: "whitesmoke",
    borderWidth: 5,
    borderColor: "white",
    width: 150,
    height: 150,
    padding: 20,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    padding: "10%",
  },
  text: {
    fontSize: 20,
    fontFamily: "ShantellSans_400Regular",
    textAlign: "center",
  },
});

export default AccountScreen;
