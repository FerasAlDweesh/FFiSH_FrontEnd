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
import ElevationMapping from "../ElevationMapping";

class ElevationDetail extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ElevationMapping />
        </Content>
      </Container>
    );
  }
}

ElevationDetail.navigationOptions = ({ navigation }) => ({
  title: "Elevation Burger"
});

export default observer(ElevationDetail);
