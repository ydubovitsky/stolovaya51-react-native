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
import * as Animatable from "react-native-animatable";
import { dumbMenuData } from "../../../data/menu-dumb-data";

const imageSource = require("./images/brooke-lark-HlNcigvUi4Q-unsplash.jpg");

const MenuScreen = ({
  route,
  navigation,
}: StackScreenProps<BottomTabNavigatorParamList, "Меню">): JSX.Element => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  // const menu: MenuInterface = useAppSelector(menuSelector);
  const menu = dumbMenuData;

  useEffect(() => {
    dispatch(getMenuByCustomDateAsync(convertDateToCustomDate(date)));
  }, [date]);

  const showMenuByDayElements = (): JSX.Element => (
    <ScrollView>
      {menu.menuEntities?.map((entity, idx) => (
        <Animatable.View
          animation={idx % 2 === 0 ? "bounceInLeft" : "bounceInRight"}
          duration={1500}
          key={entity.name}
        >
          <MealTimeComponent name={entity.name} menuItems={entity.menuItems} />
        </Animatable.View>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animatable.View animation="bounceInDown" duration={1500}>
          <Image source={imageSource} style={styles.image} />
        </Animatable.View>
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
