import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { dumbMenuData } from "../../../data/menu-dumb-data";
import { getMenuByDateAsync } from "../../../redux/menu/menu.slice";
import { MenuInterface } from "../../../types";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";
import MealTimeSlider from "./components/meal-time-slider.component";
import MenuDatePickerComponent from "./components/menu-date-picker.component";
import MenuItemComponent from "./components/menu-item.component";

const imageSource = require("./images//menu-screen.png");

const MenuScreen = ({
  route,
  navigation,
}: StackScreenProps<BottomTabNavigatorParamList, "Меню">): JSX.Element => {
  const dispatch = useDispatch();
  const [date, setDate] = useState<Date>(new Date());

  //! Change me on production
  const menu: MenuInterface = dumbMenuData;
  const [mealTimeState, setMealTimeState] = useState<string>("Завтрак");

  useEffect(() => {
    dispatch(getMenuByDateAsync(date));
  }, [date]);

  const showMenuItems = () => {
    return menu.menuEntities
      .filter((entity) => entity.name == mealTimeState)
      .map((entity) =>
        entity.menuItems.map((menuItem) => {
          return <MenuItemComponent menuItem={menuItem} key={menuItem.id} />;
        })
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menuDatePickerContainer}>
          <MenuDatePickerComponent date={date} setDate={setDate}/>
        </View>
        <View style={styles.mealTimeSliderContainer}>
          <MealTimeSlider menu={menu} setMealTimeState={setMealTimeState} />
        </View>
        <View style={styles.menuItemsContainer}>
          <ScrollView>{showMenuItems()}</ScrollView>
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
    resizeMode: 'cover'
  },
  menuContainer: {
    padding: 10,
    flex: 4,
  },
  menuDatePickerContainer: {
    flex: 1,
    marginBottom: 10
  },
  mealTimeSliderContainer: {
    flex: 2,
    marginBottom: 10
  },
  menuItemsContainer: {
    flex: 9,
  },
});

export default MenuScreen;
