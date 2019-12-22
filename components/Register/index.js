import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Register extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: ""
  };

  handlePress = () => {
    authStore.register(this.state, this.props.navigation);
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
        <Item>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Item>
          <Input
            placeholder="First Name"
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Last Name"
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Button full onPress={this.handlePress}>
          <Text>Register</Text>
        </Button>
        <Button full onPress={() => this.props.navigation.navigate("Login")}>
          <Text>Already registered? Login here!</Text>
        </Button>
      </Form>
    );
  }
}
Register.navigationOptions = {
  title: "Register"
};

export default Register;
