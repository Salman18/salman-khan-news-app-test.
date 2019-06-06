import { StyleSheet } from "react-native";

const ListStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  textContainer: {
    flexDirection: "column",
    width: "70%",
    paddingVertical: 5,
    paddingLeft: 5
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000"
  },
  author: {
    fontSize: 14,
    marginTop: 5
  },
  imageStyle: {
    height: 75,
    width: 75
  }
});

export default ListStyles;
