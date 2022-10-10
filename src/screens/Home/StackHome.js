import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./index";
import Details from "../details/details";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const StackHome = () => {
  const { navigate, goBack, canGoBack } = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => (
            <AntDesign
              name="back"
              size={24}
              color="black"
              onPress={() => canGoBack() && navigate("Home")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default StackHome;
