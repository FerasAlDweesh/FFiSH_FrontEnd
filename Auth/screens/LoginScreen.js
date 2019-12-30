import React, { Component } from "react";
import { observer } from "mobx-react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import { theme } from "../core/theme";

//NativeBase Components
import { Item, Input } from "native-base";

// Store
import authStore from "../../stores/authStore";

class LoginScreen extends Component {
  state = {
    username: "",
    password: ""
  };

  handlePress = () => {
    authStore.login(this.state, this.props.navigation);
  };

  componentDidMount = async () => {
    if (authStore.user) {
      this.props.navigation.replace("Profile");
    }
  };

  componentDidUpdate = () => {
    if (authStore.user) {
      this.props.navigation.replace("Profile");
    }
  };

  render() {
    return (
      <Background>
        <Logo />

        <Header>Welcome back.</Header>

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

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("ForgotPasswordScreen")
            }
          >
            <Text style={styles.label}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <Button full onPress={this.handlePress}>
          <Text>Login</Text>
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}>Don’t have an account? </Text>

          <Text
            onPress={() => this.props.navigation.navigate("Register")}
            style={styles.link}
          >
            Sign up
          </Text>
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  label: {
    color: theme.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

LoginScreen.navigationOptions = {
  title: "Login"
};

export default observer(LoginScreen);
