import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={styles.container}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={styles.text}>
            <Feather name="settings" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
          <Text style={styles.text}>Discover</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.center}>{index ? "All News" : "Discover"}</Text>
      {index ? (
        <TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text style={styles.text}>All News</Text>
          <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#282C35",
    alignItems: "center",
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 75,
    justifyContent: "space-between",
  },
  text: {
    color: "lightgrey",
    fontSize: 16,
  },
  right: {
    width: 75,
    alignItems: "flex-end",
  },
});
