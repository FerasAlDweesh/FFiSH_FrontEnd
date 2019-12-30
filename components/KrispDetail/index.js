import React, { Component } from "react";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";

// NativeBase Components
import { Alert } from "react-native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

// Components
import KrispyMapping from "../KrispyMapping";

class KrispyDetail extends Component {
  render() {
    return (
      <Container>
        <Content>
          <KrispyMapping />
        </Content>
      </Container>
    );
  }
}

KrispyDetail.navigationOptions = ({ navigation }) => ({
  title: "Krispy Kreme"
});

export default observer(KrispyDetail);
