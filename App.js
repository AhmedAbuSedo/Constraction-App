import { StatusBar } from "expo-status-bar";
import Onboarding from "./src/screens/Onboarding/index";
import Home from "./src/screens/Home";
import Navigator from "./routes/homeStack";
export default function App() {
  return <Navigator />;
}
