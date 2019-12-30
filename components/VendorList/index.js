import React from "react";
import { observer } from "mobx-react";

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
import Background from "../../Auth/components/Background";

// Stores
import vendorStore from "../../stores/vendorStore";
import LogoutButton from "../Buttons/LogoutButton";

const VendorList = () => {
  if (vendorStore.loading) return <Spinner color="red" />;

  return (
    <Container>
      <Background>
        <Left>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "DamascusBold",
              position: "absolute",
              right: 0,
              top: 25,
              marginTop: 22
            }}
          >
            Restaurants
          </Text>
        </Left>
        <MyCarousel cards={vendorStore.restaurants} />
        <Left>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "DamascusBold",
              position: "absolute",
              right: 95,
              top: 25,
              marginTop: 22
            }}
          >
            Cafes
          </Text>
        </Left>
        <MyCarousel cards={vendorStore.cafes} />
        <Left>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "DamascusBold",
              position: "absolute",
              right: 75,
              top: 25,
              marginTop: 22
            }}
          >
            Donuts
          </Text>
        </Left>
        <MyCarousel cards={vendorStore.donuts} />
      </Background>
    </Container>
  );
};

VendorList.navigationOptions = {
  headerTransparent: true
};

export default observer(VendorList);
