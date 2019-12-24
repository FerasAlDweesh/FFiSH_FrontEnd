import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Container } from "native-base";

// Component
import MerchantCard from "./MerchantCard";

// Buttons
import LogoutButton from "../Buttons/LogoutButton";

// Stores
import vendorStore from "../../stores/vendorStore";

const VendorList = () => {
  if (vendorStore.loading) return <Spinner />;

  const vendorList = vendorStore.vendorCards.map(card => (
    <MerchantCard card={card} key={card.id} />
  ));
  return (
    <Container>
      <Content>
        <List>{vendorList}</List>
      </Content>
    </Container>
  );
};

VendorList.navigationOptions = {
  title: "Vendor List",
  headerLeft: <LogoutButton />
};

export default observer(VendorList);
