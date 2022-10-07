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
import icon from "../../utils/icons";
import { SvgXml } from "react-native-svg";
import { useFonts } from "expo-font";
import styles from "./style";
const list = [
  {
    key: 0,
    img: icon.img1,
    txt: "متطلبات تأسيس منشاة مقاولات",
  },
  {
    key: 1,
    img: icon.img2,
    txt: "التعريف\n  بقطاع المقاولات ",
  },
  {
    key: 2,
    img: icon.img3,
    txt: " قواعد وإجراءات أساسية بشأن التعاقد ",
  },
  {
    key: 3,
    img: icon.img4,
    txt: "تراخيص مزاولة\n  نشاط المقاولات",
  },
  {
    key: 4,
    img: icon.img5,
    txt: "منصات الكترونية \n في خدمة المقاول",
  },
  {
    key: 5,
    img: icon.img6,
    txt: "الجهات\nذات العلاقة",
  },
  {
    key: 6,
    img: icon.img7,
    txt: "آليات تسليم \n مشاريع المقاولات",
  },
  {
    key: 7,
    img: icon.img8,
    txt: "خطة عمل المشروعات",
  },
  {
    key: 8,
    img: icon.img9,
    txt: "علاقة  المقاول مع مكاتب",
  },
  {
    key: 9,
    img: icon.img10,
    txt: "أنظمة\n  عقود المقاولات ",
  },
  {
    key: 10,
    img: icon.img11,
    txt: "لجنة المقاولات :",
    extra: "رسالتها- أهدافها – إنجازاتها",
  },
  {
    key: 11,
    img: icon.img12,
    txt: "الجانب  \n الاجتماعي والوطني ",
  },
];
const Home = ({ navigation }) => {
  const pressHandlerHome = () => {
    navigation.navigate("Home");
  };
  const pressHandlerAbout = () => {
    navigation.navigate("About");
    // navigation.push("About");
  };
  const pressHandlerContact = () => {
    navigation.navigate("Contact");
  };
  const { height, width } = useWindowDimensions();
  const [loaded] = useFonts({
    CairoBold: require("../../../assets/fonts/Cairo-Bold.ttf"),
    CairoSemiBold: require("../../../assets/fonts/Cairo-SemiBold.ttf"),
  });
  if (!loaded) return null;
  const ListItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}} style={styles.viewAll}>
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
  return (
    <View style={[styles.container, { height: height, width: width }]}>
      <ImageBackground
        style={[styles.backgroundImg, { width }]}
        source={require("../../../assets/image.png")}
      >
        <Text style={styles.txt}>المقاولات</Text>
      </ImageBackground>
      <View style={{ height: height * 0.83, top: 90 }}>
        <FlatList
          data={list}
          contentContainerStyle={{ alignItems: "center", marginLeft: 0 }}
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
      <View style={{ justifyContent: "space-between", width: width }}>
        <View style={styles.footer}>
          <TouchableOpacity onPress={pressHandlerHome}>
            <Image source={require("../../../assets/Group1087.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={pressHandlerAbout}>
            <Image source={require("../../../assets/Group1086.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={pressHandlerContact}>
            <Image source={require("../../../assets/Group1088.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
