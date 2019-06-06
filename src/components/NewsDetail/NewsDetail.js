import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

import styles from "./NewsDetailStyles";

class NewsDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    const {
      author,
      urlToImage,
      title,
      publishedAt,
      description
    } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>
            {author} {publishedAt}
          </Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: urlToImage
            }}
            resizeMode={"cover"}
          />
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default NewsDetailScreen;
