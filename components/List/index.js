import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Container } from "native-base";

// Component
import VendorCard from "./VendorCard";

// Buttons
import LogoutButton from "../Buttons/LogoutButton";

// Stores

import cardStore from "../../stores/cardStore";

const CardList = ({ navigation }) => {
  if (cardStore.loading) return <Spinner />;
  const cardList = cardStore.cards.map(card => (
    <VendorCard card={card} key={card.id} />
  ));
  return (
    <Container>
      <Content>
        <List>{cardList}</List>
      </Content>
    </Container>
  );
};

CardList.navigationOptions = {
  title: "Card List",
  headerLeft: <LogoutButton />
};

export default observer(CardList);
