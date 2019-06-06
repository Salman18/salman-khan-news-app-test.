import React, { Component } from "react";
import {
  View,
  FlatList,
  Text,
  StatusBar,
  ActivityIndicator
} from "react-native";
import List from "../Card/List";

import styles from "./NewsListStyles";

class NewsList extends Component {
  componentDidMount() {
    this.props.getData();
    console.log("here", this.props);
  }
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#000000"
    },
    headerTintColor: "#fffF",
    headdingStyle: {
      fontWeight: "300"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        {this.props.loading ? (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            data={this.props.data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <List {...item} />}
            keyExtractor={item => item.publishedAt}
          />
        )}
      </View>
    );
  }
}

export default NewsList;
