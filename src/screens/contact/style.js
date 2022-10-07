import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImg: {
    height: 112,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  container: {
    backgroundColor: "#F9F9F9",
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    // justifyContent: "center",
  },
  txt: {
    fontSize: 16,
    fontFamily: "CairoBold",
    color: "#FFFFFF",
    marginTop: 40,
  },
  qr: {
    justifyContent: "center",
    alignItems: "center",
  },
  innertxt: {
    fontSize: 22,
  },
});
export default styles;
