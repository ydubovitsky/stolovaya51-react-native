import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MenuItemInterface } from "../../../../types";


const foodImageSource = require("./images/food-placeholder.png");

type MenuItemComponentProps = {
  menuItem: MenuItemInterface;
};

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({
  menuItem,
}): JSX.Element => {

  return (
    <View style={styles.container}>
      <View style={styles.menuItemsContainer}>
        <View style={styles.menuItem} key={menuItem.id}>
          <View style={styles.mealItemNameContainer}>
            <Text style={styles.mealItemName}>{menuItem.mealItem?.name}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={foodImageSource} style={styles.image} />
          </View>
          <View style={styles.portionContainer}>
            <View style={styles.mealItemPortion}>
              <Text>Порция: {menuItem.portion}</Text>
            </View>
            <View style={styles.mealItemCost}>
              <Text>Цена: {menuItem.cost} р.</Text>
            </View>
          </View>
        </View>
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
    marginVertical: 5,
  },
  menuItemsContainer: {
    flex: 1,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  mealItemNameContainer: {
    padding: 2,
  },
  mealItemName: {
    fontSize: 34,
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  portionContainer: {
    flexDirection: "row",
    padding: 5,
  },
  mealItemPortion: {
    flex: 1,
    padding: 2,
    alignItems: "center",
  },
  mealItemCost: {
    flex: 1,
    padding: 2,
    alignItems: "center",
  },
});

export default MenuItemComponent;
