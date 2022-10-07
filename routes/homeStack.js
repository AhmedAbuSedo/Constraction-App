import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../src/screens/Home";
import About from "../src/screens/About";
import Contact from "../src/screens/contact";
import Onboarding from "../src/screens/Onboarding";
const screens = {
  Onboarding: {
    screen: Onboarding,
  },
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  },
  Contact: {
    screen: Contact,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(HomeStack);
