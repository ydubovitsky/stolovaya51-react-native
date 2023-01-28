import React from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import MealTimeComponent from "./components/meal-time.component";

const imageSource = require("./images/brooke-lark-HlNcigvUi4Q-unsplash.jpg");

const MainScreen = (): JSX.Element => {
  const getCurrentDate = () => new Date().toLocaleDateString();

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
    flex: 4,
  },
});

export default MainScreen;
