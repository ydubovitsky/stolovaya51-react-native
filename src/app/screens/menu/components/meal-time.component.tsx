import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MenuItemInterface } from "../../../../types";

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

type MealTimeComponentProps = {
  name: string,
  menuItems: MenuItemInterface[]
}

const MealTimeComponent: React.FC<MealTimeComponentProps> = ({name, menuItems}) : JSX.Element => {
  return (
    <View style={styles.container} key={name}>
      <Text style={styles.mealTimeTitle}>{name}</Text>
      <View style={styles.menuItemsContainer}>
        {menuItems?.map((menuItem) => (
          <View style={styles.menuItem} key={menuItem.id}>
            <View style={styles.mealItemName}>
              <Text>{menuItem.mealItem?.name}</Text>
            </View>
            <View style={styles.mealItemPortion}>
              <Text>{menuItem.portion}</Text>
            </View>
            <View style={styles.mealItemCost}>
              <Text>{menuItem.cost} р.</Text>
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
  mealItemName: {
    flex: 1,
    padding: 2,
  },
  mealItemPortion: {
    flex: 1,
    padding: 2,
    alignItems: "center"
  },
  mealItemCost: {
    flex: 1,
    padding: 2,
    alignItems: "center"
  }
});

export default MealTimeComponent;
