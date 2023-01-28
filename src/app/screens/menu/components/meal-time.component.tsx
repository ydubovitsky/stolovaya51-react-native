import React from "react";
import { StyleSheet, Text, View } from "react-native";

const json = {
  name: "Завтрак",
  menuItems: [
    {
      name: "Яичнаца",
      cost: "500р",
      portion: "2штуки",
    },
    {
      name: "Суп",
      cost: "500р",
      portion: "2штуки",
    },
    {
      name: "Макароны",
      cost: "500р",
      portion: "2штуки",
    },
    {
      name: "Очень вкусное пивко",
      cost: "500р",
      portion: "2штуки",
    },
  ],
};

const MealTimeComponent = () : JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.mealTimeTitle}>{json.name}</Text>
      <View style={styles.menuItemsContainer}>
        {json.menuItems.map((menuItem) => (
          <View style={styles.menuItem} key={menuItem.name}>
            <View style={styles.textContainer}>
              <Text>{menuItem.name}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{menuItem.portion}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{menuItem.cost}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginVertical: 5
  },
  mealTimeTitle: {
    fontSize: 30,
    fontStyle: "italic",
    textDecorationLine: "underline"
  },
  menuItemsContainer: {
    width: "100%",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "center"
  }
});

export default MealTimeComponent;
