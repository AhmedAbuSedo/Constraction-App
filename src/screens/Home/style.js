import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    flex: 1,
    // backgroundColor: "red",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  innerTxtStyle: {
    marginTop: -35,
    alignItems: "center",
    fontFamily: "CairoBold",
  },
  backgroundImg: {
    height: 112,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    top: 0,
  },
  txt: {
    fontSize: 16,
    fontFamily: "CairoBold",
    color: "#FFFFFF",
    marginTop: 40,
  },
  innerTxt: {
    fontSize: 16,
    fontFamily: "CairoSemiBold",
    textAlign: "center",
  },
  innerTxthead: {
    fontSize: 16,
    fontFamily: "CairoSemiBold",
  },
  innerView: {
    marginTop: 20,
    marginBottom: 20,
  },
  viewList: {
    marginTop: 12.5,
    marginBottom: 3,
    width: 49,
    height: 49,
    borderWidth: 1,
    borderColor: "#A2AFCE",
    borderRadius: 49,
    justifyContent: "center",
    alignItems: "center",
  },
  viewAll: {
    backgroundColor: "#FFFFFF",
    width: 159,
    height: 136,
    alignItems: "center",
    marginHorizontal: 7.5,
    marginBottom: 15,
  },
  viewFlatList: {
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
  },
});

export default styles;
