import React from "react";
import { withNavigation } from "react-navigation";
// import { View } from "react-native";
import { Image, Alert } from "react-native";

// stores
import authStore from "../../stores/authStore";

// NativeBase Components
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  ListItem
} from "native-base";

// Style
// import styles from "./styles";

const VendorCard = props => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>{props.card.vendor.name}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default withNavigation(VendorCard);
