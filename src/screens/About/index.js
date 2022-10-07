import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, useWindowDimensions, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { useFonts } from "expo-font";
import icon from "../../utils/icons";
import Style from "./style";

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
          نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من اعمال
          الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب الكهرباء والسباكة
          والنجارة واعمال السيراميك والرخام والواجهات والدهانات.
          {"\n"}
          نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب العقارات
          والوحدات السكنية والشركات والهيئات والمؤسسات الحكومية وغيرها من
          الوحدات وتركيب كافة الخدمات واعمال التشطيبات الكاملة.
          {"\n"}
          نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب المتطورة
          والاشكال العصرية.
        </Text>
      </View>
    </View>
  );
};

export default About;
