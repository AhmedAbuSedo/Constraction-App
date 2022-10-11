import React from "react";
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import styles from "./style";
import { Header } from "../Home/components/header";
import info from "../../utils/info";

const Contact = () => {
  const { height, width } = useWindowDimensions();
  const [loaded] = useFonts({
    CairoBold: require("../../../assets/fonts/Cairo-Bold.ttf"),
    CairoRegular: require("../../../assets/fonts/Cairo-Regular.ttf"),
  });
  if (!loaded) return null;

  return (
    <View style={[styles.container, { width, height }]}>
      <Header title={"تواصل معنا"} width={width} />

      <ImageBackground
        style={[styles.qr, { width: 256.37, height: 256.73, marginTop: 170 }]}
        source={require("../../../assets/Group3489.png")}
      >
        <Image source={require("../../../assets/Group3487.png")} />
        <View style={{ position: "absolute", zIndex: 1, bottom: 0 }}>
          <Image source={require("../../../assets/Scaning.png")} />
        </View>
      </ImageBackground>
      <View
        style={{ width: 260, height: 205, marginTop: 78.3, marginRight: -60 }}
      >
        <Text
          style={[
            styles.innertxt,
            { fontFamily: "CairoBold", marginBottom: 10 },
          ]}
        >
          تواصل معنا على :
        </Text>
        <Text
          style={[
            styles.innertxt,
            { fontFamily: "CairoRegular", textAlign: "right" },
          ]}
        >
          {info.Contacttxt}
        </Text>
      </View>
    </View>
  );
};

export default Contact;
