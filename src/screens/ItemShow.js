import react from "react";
import { View, StyleSheet, Text } from "react-native";

const ItemShow = ({ result }) => {
  return (
      <View style={styles.container}>
        <Text>{result.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 10,
  },
});

export default ItemShow;
