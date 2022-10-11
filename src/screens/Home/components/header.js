import { ImageBackground, Text } from "react-native";
import styles from "../style";
export const Header = ({ title, width }) => {
  return (
    <ImageBackground
      style={[styles.backgroundImg, { width }]}
      source={require("../../../../assets/image.png")}
    >
      <Text style={styles.txt}>{title}</Text>
    </ImageBackground>
  );
};
