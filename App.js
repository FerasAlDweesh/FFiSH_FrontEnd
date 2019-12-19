import React from "react";
import AppContainer from "./navigation";
import { Spinner } from "native-base";
import * as Font from "expo-font";
import authStore from "./stores/authStore";

class App extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    await authStore.checkForToken();
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return <AppContainer />;
  }
}

export default App;
