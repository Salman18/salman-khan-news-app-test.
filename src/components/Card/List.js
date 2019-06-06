import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import styles from "./ListStyles";

const List = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("NewsDetail", { ...props })}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{props.title}</Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
      <View>
        <Image source={{ uri: props.urlToImage }} style={styles.imageStyle} />
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(List);
