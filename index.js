import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { createStore } from "redux";

import { Provider } from "react-redux";

const AppProvider = () => (
  <Provider store={createStore()}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppProvider);
