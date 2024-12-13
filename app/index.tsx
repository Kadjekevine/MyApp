import { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from "./constants/theme";
import { useNavigation } from "expo-router";

const slides = [
  {
    id: 1,
    title: "Discover Best Places",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quae, magnam quod, sapiente eos molestias minima consequuntur voluptate ullam repellendus soluta laudantium hic sunt, dolore dolorum fuga temporibus debitis? Sapiente.",
    image: require("@/assets/images/wel.png"),
  },
  {
    id: 2,
    title: "Quick and Easy Payments",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quae, magnam quod, sapiente eos molestias minima consequuntur voluptate ullam repellendus soluta laudantium hic sunt, dolore dolorum fuga temporibus debitis? Sapiente.",
    image: require("@/assets/images/5.png"),
  },
  {
    id: 3,
    title: "Discover your Dream Job here",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quae, magnam quod, sapiente eos molestias minima consequuntur voluptate ullam repellendus soluta laudantium hic sunt, dolore dolorum fuga temporibus debitis? Sapiente.",
    image: require("@/assets/images/1.png"),
  },
  {
    id: 4,
    title: "Discover your Dream Job here",
    description:
      "Explore all the existing job roles  based or your interest and study major.",
    image: require("@/assets/images/6.png"),
  },
];

export default function Index() {

  const navigator = useNavigation()
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label: any) => {
    return (
      <View style={styles.label}>
        <Text style={styles.next}>{label}</Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View
              style={styles.container}
            >
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 40,
                  height: 400,
                }}
                resizeMode="contain"
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          navigator.navigate("home" as never)
          setShowHomePage(true);
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    alignContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: SIZES.h1,
    color: COLORS.title,
    textAlign: "center",
    bottom: 20,
  },
  description: {
    fontWeight: "300",
    fontSize: SIZES.h4,
    color: COLORS.title,
    padding: 5,
    bottom: 20,
  },
  label: {
    padding: 12,
  },
  next: {
    color: COLORS.title,
    fontWeight: "600",
    fontSize: SIZES.h4,
  },
});
