import { StyleSheet, Dimensions } from "react-native";

const NewsDetailStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    width: "75%",
    padding: 12
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000"
  },
  author: {
    color: "#000000",
    marginTop: 5
  },
  description: {
    padding: 10,
    fontSize: 18,
    color: "#000000"
  },
  image: {
    width: Dimensions.get("window").width,
    height: 250
  }
});

export default NewsDetailStyles;
