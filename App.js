import { StatusBar } from "expo-status-bar";
import Onboarding from "./src/screens/Onboarding/index";
import HomeTap from "./src/screens/Home/HomeTap";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="HomeTap" component={HomeTap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
