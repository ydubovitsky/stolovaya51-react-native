import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import * as Animatable from "react-native-animatable";

const imageSource = "./images/application-start-logo.png";

const StartScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="zoomInUp">
        <Image style={styles.image} source={require(imageSource)} />
      </Animatable.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default StartScreen;
