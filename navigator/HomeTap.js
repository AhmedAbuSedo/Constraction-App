import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackHome from "./StackHome";
import About from "../src/screens/About/index";
import Contact from "../src/screens/Contact/index";

import { Ionicons } from "@expo/vector-icons";

const Tap = createBottomTabNavigator();

const HomeTap = () => {
  return (
    <Tap.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "StackHome") {
            focused ? (iconName = "home") : (iconName = "home-outline");
          } else if (route.name === "About") {
            focused
              ? (iconName = "md-reader")
              : (iconName = "md-reader-outline");
          } else if (route.name === "Contact") {
            focused ? (iconName = "md-mail") : (iconName = "md-mail-outline");
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
      initialRouteName="Home"
    >
      <Tap.Screen name="StackHome" component={StackHome} />
      <Tap.Screen name="About" component={About} />
      <Tap.Screen name="Contact" component={Contact} />
    </Tap.Navigator>
  );
};
export default HomeTap;
