import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const Details = () => {
  const { params } = useRoute();
  const { item } = params;
  return (
    <View style={styles.container}>
      <Text>This is Details Screen</Text>
      <Text style={styles.txt}>{item.txt}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
