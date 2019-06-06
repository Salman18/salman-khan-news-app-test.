import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import NewsListContainer from "./src/containers/NewsListContainer";
import NewsDetail from "./src/components/NewsDetail/NewsDetail";

const Router = createStackNavigator({
  NewsListContainer: {
    screen: NewsListContainer
  },
  NewsDetail: {
    screen: NewsDetail
  }
});

const AppRouter = createAppContainer(Router);

export default class App extends Component {
  render() {
    return <AppRouter />;
  }
}
