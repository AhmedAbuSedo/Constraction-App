import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./index";
import Details from "../details/details";
const Stack = createNativeStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
export default StackHome;
