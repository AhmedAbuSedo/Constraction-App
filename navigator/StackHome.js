import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../src/screens/Home/index";
import Details from "../src/screens/Details/details";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const StackHome = () => {
  const { navigate, goBack, canGoBack } = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, gestureEnabled: true }}
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
