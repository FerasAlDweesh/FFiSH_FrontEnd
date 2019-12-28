import React from "react";
import { observer } from "mobx-react";

import Background from "../../Auth/components/Background";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Text,
  Spinner,
  Container,
  Header,
  Content,
  Accordion,
  List,
  ListItem,
  Title,
  Thumbnail,
  headerLeft,
  Left,
  Right,
  Icon
} from "native-base";
// Component
import MyCarousel from "../Carousel/index";

// Buttons
import LogoutButton from "../Buttons/LogoutButton";

// Stores
import vendorStore from "../../stores/vendorStore";

const VendorList = () => {
  if (vendorStore.loading) return <Spinner color="red" />;

  return (
    <Background>
      <Container>
        <Left>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "DamascusBold",
              position: "absolute",
              right: 15
            }}
          >
            Restaurants
          </Text>
        </Left>
        <MyCarousel />
        <Left>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "DamascusBold",
              position: "absolute",
              right: 15
            }}
          >
            Cafes
          </Text>
        </Left>
        <MyCarousel />
        <Left>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "DamascusBold",
              position: "absolute",
              right: 15
            }}
          >
            Donuts
          </Text>
        </Left>
        <MyCarousel />
      </Container>
    </Background>
  );
};

VendorList.navigationOptions = {
  title: "Vendor Cards",
  headerLeft: <LogoutButton />
};

export default observer(VendorList);
