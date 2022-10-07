import React from "react";
import { StyleSheet, View } from "react-native";

const Styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: -200,
  },

  View: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 150,
  },
  innerView: {
    marginTop: 120,
    marginHorizontal: 5,
    width: 5,
    height: 5,
    borderWidth: 7,
    borderColor: "#AEAEAE",
    borderRadius: 10,
    backgroundColor: "#AEAEAE",
  },
  innerView2: {
    marginTop: 120,
    marginHorizontal: 5,
    width: 5,
    height: 5,
    borderWidth: 7,
    borderColor: "#0C0303",
    borderRadius: 10,
    backgroundColor: "#0C0303",
  },
  skip: {
    // backgroundColor: "red",
    position: "absolute",
    zIndex: 1,
    bottom: 30,
    right: 20,
    borderWidth: 1,
    borderColor: "#848698",
    borderRadius: 12,
    width: 100,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  skipTxt: {
    textAlign: "center",
    fontSize: 25,
    color: "#848698",
  },
});

export default Styles;
