import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

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
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 55.861581,
            longitude: 37.625235,
            latitudeDelta: 0.00522,
            longitudeDelta: 0.00521,
          }}
        >
          <Marker
            coordinate={{
              latitude: 55.861581,
              longitude: 37.625235,
            }}
            title={"Столовая"}
            description={"Вкусно, быстро, доступно"}
          />
        </MapView>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.description}>
          <Text>Мы находимся по адресу: Декабристов ул., владение 51, Москва, 127490</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around"
  },
  mapContainer: {
    flex: 5,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  descriptionContainer: {
    flex: 1,
    padding: 10,
  },
  description: {
    padding: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
    minWidth: 88,
    marginVertical: 5,
  },
});

export default MapScreen;
