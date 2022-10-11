import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, useWindowDimensions, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { useFonts } from "expo-font";
import icon from "../../utils/icons";
import Style from "./style";
import info from "../../utils/info";

const About = () => {
  const { height, width } = useWindowDimensions();
  const [loaded] = useFonts({
    CairoRegular: require("../../../assets/fonts/Cairo-Regular.ttf"),
    CairoSemiBold: require("../../../assets/fonts/Cairo-SemiBold.ttf"),
  });
  if (!loaded) return null;
  return (
    <View style={Style.container}>
      <View style={[Style.firstView, { width: width }]}>
        <SvgXml xml={icon.Logo} />
      </View>
      <View style={Style.txtView}>
        <Text style={[Style.txt, { fontFamily: "CairoSemiBold" }]}>من نحن</Text>
      </View>

      <View style={Style.innertxtView}>
        <Text style={[Style.abouttxtone, { fontFamily: "CairoRegular" }]}>
          {info.Abouttxt}
        </Text>
      </View>
    </View>
  );
};

export default About;
