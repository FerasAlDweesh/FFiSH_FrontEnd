import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handlePress = () => {
    authStore.login(this.state, this.props.navigation);
  };

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button full onPress={this.handlePress}>
          <Text>Login</Text>
        </Button>
        <Button full onPress={() => this.props.navigation.navigate("Register")}>
          <Text>Register Now!</Text>
        </Button>
      </Form>
    );
  }
}
Login.navigationOptions = {
  title: "Login"
};
export default observer(Login);
