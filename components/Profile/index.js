import React, { Component } from "react";
import { observer } from "mobx-react";

import MyCardsCarousel from "../MyCardsCarousel/index";

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
  Left
} from "native-base";

// Buttons

import LogoutButton from "../Buttons/LogoutButton";

// Stores
import authStore from "../../stores/authStore";
import cardStore from "../../stores/cardStore";
import profileStore from "../../stores/profileStore";

class Profile extends Component {
  componentDidMount = async () => {
    if (authStore.user) {
      await profileStore.getUserProfile();
      await cardStore.fetchAllCards();
    } else {
      this.props.navigation.replace("Login");
    }
  };

  componentDidUpdate = () => {
    if (!authStore.user) {
      this.props.navigation.replace("Login");
    }
  };

  render() {
    console.log("this is a message", cardStore.cards);
    if (profileStore.loading || cardStore.loading) {
      return <Spinner />;
    } else {
      const myCards = cardStore.cards.map(card => ({
        title: card.name,
        content: card.id
      }));
      return (
        <>
          <Content>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    style={{ width: 120, height: 120, borderRadius: 30 / 2 }}
                    square
                    source={{
                      uri:
                        "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"
                    }}
                  />
                </Left>
                <Body>
                  <Text style={{ fontSize: 30 }}>{profileStore.user.name}</Text>
                  <Text note style={{ fontSize: 15 }}>
                    {profileStore.user.email}
                  </Text>
                </Body>
              </ListItem>
              <Header>
                <Left>
                  <Text style={{ fontSize: 30 }}>My Cards:</Text>
                </Left>
              </Header>
              <MyCardsCarousel />
            </List>
          </Content>
        </>
      );
    }
  }
}

Profile.navigationOptions = {
  title: "Profile",
  headerLeft: <LogoutButton />
};
export default observer(Profile);
