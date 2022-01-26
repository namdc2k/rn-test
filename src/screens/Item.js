import react from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Item = ({ result, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ItemShow')}>
      <View style={styles.container}>
        <Text>{result.title}</Text>
      </View>
    </TouchableOpacity>
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

export default Item;
