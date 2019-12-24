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

const MerchantCard = props => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            {/* <Image
              source={{ uri: props.card.image }}
              style={{ height: 200, width: null, flex: 1 }}
            /> */}

            <Text>Name: {props.card.name}</Text>

            <Text>Points: {props.card.points}</Text>

            <Text>ID: {props.card.user}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default withNavigation(MerchantCard);
