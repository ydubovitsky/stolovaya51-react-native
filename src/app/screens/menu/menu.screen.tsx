import React from "react";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import MealTimeComponent from "./components/meal-time.component";
import { BottomTabNavigatorParamList } from "../../routes/main-stack-navigator.route";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getMenuByCustomDateAsync } from "../../../redux/menu/menu.slice";
import { convertDateToCustomDate } from "../../../utils/date.util";
import { useAppSelector } from "../../../redux/hooks";
import { menuSelector } from "../../../redux/menu/menu.slice";
import { MenuInterface } from "../../../types";

const imageSource = require("./images/brooke-lark-HlNcigvUi4Q-unsplash.jpg");

const MenuScreen = ({
  route,
  navigation,
}: StackScreenProps<BottomTabNavigatorParamList, "Меню">): JSX.Element => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const menu: MenuInterface = useAppSelector(menuSelector);

  useEffect(() => {
    dispatch(getMenuByCustomDateAsync(convertDateToCustomDate(date)));
  }, [date]);

  const showMenuByDayElements = (): JSX.Element => (
    <ScrollView>
      {menu.menuEntities?.map((entity) => (
        <MealTimeComponent
          name={entity.name}
          menuItems={entity.menuItems}
          key={entity.name}
        />
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.menuContainer}>{showMenuByDayElements()}</View>
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
    padding: 10,
    flex: 4,
  },
});

export default MenuScreen;
