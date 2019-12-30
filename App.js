import React from "react";
import AppContainer from "./navigation";
import { Spinner, Root } from "native-base";
import Font from "expo-font";
import authStore from "./stores/authStore";

class App extends React.Component {
  state = {
    loading: false
  };

  async componentDidMount() {
    // await Font.loadAsync({
    // Roboto: require("native-base/Fonts/Roboto.ttf")
    // Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    // });
    await authStore.checkForToken();
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="red" />;
    }

    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}

export default App;
