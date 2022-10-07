import React from "react";
import { View } from "react-native";
import styles from "../../Home/style";
import Styles from "../style";
const Dot = ({ index, activIndex }) => {
  const dotStyle =
    index === activIndex
      ? [Styles.innerView2, { width: 16, height: 16 }]
      : Styles.innerView;
  return <View style={dotStyle}></View>;
};

export default Dot;
