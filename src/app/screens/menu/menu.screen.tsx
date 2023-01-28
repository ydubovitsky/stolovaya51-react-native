import React from "react";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import MealTimeComponent from "./components/meal-time.component";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";

const imageSource = require("./images/brooke-lark-HlNcigvUi4Q-unsplash.jpg");

const MenuScreen = ({
  route,
  navigation,
}: StackScreenProps<BottomTabNavigatorParamList, "Меню">): JSX.Element => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.menuContainer}>
        <ScrollView>
          <MealTimeComponent />
          <MealTimeComponent />
          <MealTimeComponent />
          <MealTimeComponent />
          <MealTimeComponent />
        </ScrollView>
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
    width: "100%",
    height: "100%",
  },
  menuContainer: {
    padding: 5,
    flex: 4,
  },
});

export default MenuScreen;
