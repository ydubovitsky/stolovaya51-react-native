import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import * as Animatable from "react-native-animatable";

const MainScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="zoomInUp">
      </Animatable.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
