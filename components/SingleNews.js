import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const SingleNews = ({ item, index }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        backgroundColor: "floralwhite",
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      <View style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  description: {
    padding: 15,
    paddingVertical: 5,
  },
  title: { fontSize: 25, fontWeight: "bold" },
  content: { fontSize: 22 },
});
