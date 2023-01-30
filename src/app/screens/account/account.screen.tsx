import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-paper";
const imageSource = require("./images/joanna-nix-walkup-Kp1Oz5fSxiw-unsplash.jpg");

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
        <Avatar.Image size={300} source={imageSource} />
      </Animatable.View>
      <View style={styles.description}>
        <Text style={styles.text}>Здесь скоро будет ваш личный кабинет</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.text}>
          А пока вы можете ознакомиться с меню на сегодняшний день 😘
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  description: {
    padding: "10%",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default AccountScreen;
