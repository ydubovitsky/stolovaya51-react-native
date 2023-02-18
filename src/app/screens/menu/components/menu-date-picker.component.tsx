import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type MenuDatePickerComponentProps = {
  date: Date;
  setDate: any;
};

const MenuDatePickerComponent: React.FC<MenuDatePickerComponentProps> = ({date, setDate}): JSX.Element => {

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Выберите дату: {date.toLocaleDateString()}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="ios-calendar-outline" size={20} color="red" onPress={showDatepicker} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between"
  },
  textContainer: {
    flex: 5,
    backgroundColor: "white",
    alignItems: "flex-start",
    height: "100%",
    paddingStart: 10,
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 10
  },
  iconContainer: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "white",
    height: "100%"
  },
});

export default MenuDatePickerComponent;
