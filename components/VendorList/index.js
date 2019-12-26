import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Container } from "native-base";
// Component
import MerchantCard from "./MerchantCard";
import MyCarousel from "../Carousel/index";

// Buttons
import LogoutButton from "../Buttons/LogoutButton";

// Stores
import vendorStore from "../../stores/vendorStore";

const VendorList = () => {
  console.log("vend", vendorStore.vendorCards);
  if (vendorStore.loading) return <Spinner color="red" />;

  const vendorList = vendorStore.vendorCards.map(card => (
    <MerchantCard card={card} key={card.id} />
  ));
  return (
    <Container>
      <MyCarousel />
      <MyCarousel />
      <MyCarousel />
    </Container>
  );
};

VendorList.navigationOptions = {
  title: "Vendor List",
  headerLeft: <LogoutButton />
};

export default observer(VendorList);
