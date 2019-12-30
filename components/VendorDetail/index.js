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
import Mapping from "../Mapping";

class VendorDetail extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Mapping />
        </Content>
      </Container>
    );
  }
}

VendorDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("vendorName")
});

export default observer(VendorDetail);
