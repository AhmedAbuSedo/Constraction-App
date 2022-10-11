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

import { SvgXml } from "react-native-svg";
import { useFonts } from "expo-font";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { List } from "../../utils/homeData";
import { Header } from "./components/header";
const ListItems = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.viewAll}
      onPress={() => navigate("Details", { item })}
    >
      <View style={styles.viewList}>
        <SvgXml xml={item.img} />
      </View>
      <Text style={styles.innerTxt}>{item.txt}</Text>
      <Text style={{ fontSize: 11, fontFamily: "CairoSemiBold" }}>
        {item.extra}
      </Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  const { height, width } = useWindowDimensions();
  const [loaded] = useFonts({
    CairoBold: require("../../../assets/fonts/Cairo-Bold.ttf"),
    CairoSemiBold: require("../../../assets/fonts/Cairo-SemiBold.ttf"),
  });
  if (!loaded) return null;

  return (
    <View style={[styles.container, { height: height, width: width }]}>
      <Header title={"المقاولات"} width={width} />
      <View style={{ height: height * 0.87, top: 90 }}>
        <FlatList
          data={List}
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          horizontal={false}
          keyExtractor={(item) => {
            return item.key;
          }}
          ListHeaderComponent={
            <View style={[styles.innerView, { width, marginRight: 35 }]}>
              <Text style={styles.innerTxthead}>الفهرس</Text>
            </View>
          }
          renderItem={({ item }) => <ListItems item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;
