import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import icon from "../../utils/icons";
import Styles from "./style";
import Dot from "./Components/Dots";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const { navigate } = useNavigation();
  const iconImg = [
    { key: 0, img: icon.Logo },
    { key: 1, img: icon.Logo2 },
    { key: 2, img: icon.Logo },
    { key: 3, img: icon.Logo2 },
  ];
  const { width } = useWindowDimensions();
  const [activIndex, setActivIndex] = useState(0);
  const handleOnScroll = (event) => {
    // console.log(parseInt(event.nativeEvent.contentOffset.x));
    // console.log(parseInt(event.nativeEvent.contentOffset.x) == parseInt(width));
    const leftSpace = event.nativeEvent.contentOffset.x;
    const activIndex = Math.round(leftSpace / width);
    setActivIndex(activIndex);
  };
  return (
    <View style={Styles.cont}>
      <FlatList
        data={iconImg}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => handleOnScroll(event)}
        keyExtractor={(item) => {
          return item.key;
        }}
        renderItem={({ item }) => {
          return (
            <View style={[Styles.container, { width: width }]}>
              <SvgXml xml={item.img} />
            </View>
          );
        }}
      />
      <FlatList
        data={iconImg}
        style={{
          position: "absolute",
          bottom: 130,
          // backgroundColor: "red",
        }}
        horizontal
        keyExtractor={(item) => {
          return item.key;
        }}
        renderItem={({ item }) => {
          return <Dot index={item.key} activIndex={activIndex} />;
        }}
      />
      <TouchableOpacity
        onPress={() =>
          navigate(
            "HomeTap"
            // , {
            //   screen: "StackHome", //must been in HomeTap navigation
            //   params: {
            //     screen: "Details", //must been in StackHome navigation
            //     params: { item: {} },
            //   },
            // }
          )
        }
        style={Styles.skip}
      >
        <Text style={Styles.skipTxt}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Onboarding;

{
  /* <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => handleOnScroll(event)}
      >
        {iconImg.map((item) => {
          return (
            <View key={item.key} style={[Styles.container, { width: width }]}>
              <SvgXml xml={item.img} />
            </View>
          );
        })}
      </ScrollView>

      {scrol === 0 ? (
        <View style={Styles.View}>
          <View style={[Styles.innerView2, { width: 16, height: 16 }]}></View>
          <View style={Styles.innerView}></View>
        </View>
      ) : (
        <View style={Styles.View}>
          <View style={Styles.innerView}></View>
          <View style={[Styles.innerView2, { width: 16, height: 16 }]}></View>
        </View>
      )} */
}
