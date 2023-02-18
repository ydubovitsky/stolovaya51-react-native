import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MenuInterface } from "../../../../types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type MealTimeSliderProps = {
  menu: MenuInterface;
  setMealTimeState: any;
};

const MealTimeSlider: React.FC<MealTimeSliderProps> = ({
  menu,
  setMealTimeState,
}): JSX.Element => {

  const showMealTimeIcon = (mealTime: string) => {
    switch (mealTime) {
      case "Завтрак":
        return <Icon name={"bread-slice"} size={30} color={"#6BADC9"} />
      case "Полуфабрикаты":
        return <Icon name={"food-drumstick"} size={30} color={"#6BADC9"} />
      case "Ланч":
        return <Icon name={"food"} size={30} color={"#6BADC9"} />
      case "Напитки":
        return <Icon name={"coffee"} size={30} color={"#6BADC9"} />
      case "Остальное":
        return <Icon name={"food-fork-drink"} size={30} color={"#6BADC9"} />
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {menu.menuEntities.map((entity) => (
          <TouchableOpacity
            style={styles.menuItem}
            key={entity.id}
            onPress={() => setMealTimeState(entity.name)}
          >
            {showMealTimeIcon(entity.name)}
            <Text style={styles.menuItemName}>{entity.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  menuItem: {
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginRight: 10,
  },
  menuItemName: {
    textAlign: "center",
    fontSize: 14,
  },
});

export default MealTimeSlider;
