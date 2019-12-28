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

// Buttons
import LogoutButton from "../Buttons/LogoutButton";

// Stores
import vendorStore from "../../stores/vendorStore";

const VendorList = () => {
  if (vendorStore.loading) return <Spinner color="red" />;

  return (
    <Container>
      <Left>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "DamascusBold"
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
            fontFamily: "DamascusBold"
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
            fontFamily: "DamascusBold"
          }}
        >
          Donuts
        </Text>
      </Left>
      <MyCarousel />
    </Container>
  );
};

VendorList.navigationOptions = {
  title: "Vendor Cards",
  headerLeft: <LogoutButton />
};

export default observer(VendorList);
