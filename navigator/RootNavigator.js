import Onboarding from "../src/screens/Onboarding/index";
import HomeTap from "./HomeTap";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="HomeTap" component={HomeTap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
