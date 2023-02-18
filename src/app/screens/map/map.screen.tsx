import React from "react";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { Image, StyleSheet, View, Text } from "react-native";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";
import { WebView } from "react-native-webview";

const imageSource = require("./images/map-screen.png");

/**
 * MapScreen functional component!
 * @param param0
 * @returns
 */
const MapScreen = ({
  route,
  navigation,
}: StackScreenProps<
  BottomTabNavigatorParamList,
  "Как нас найти?"
>): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.mapContainer}>
        <WebView
          source={{
            uri: "https://yandex.ru/maps/213/moscow/?ll=37.625930%2C55.861486&mode=poi&poi%5Bpoint%5D=37.625437%2C55.861986&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D97079608227&z=17.82",
          }}
        />
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
    resizeMode: "stretch",
  },
  mapContainer: {
    padding: 10,
    flex: 4,
  },
});

export default MapScreen;
