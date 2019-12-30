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

// Components
import Background from "../../Auth/components/Background";

// Buttons

import LogoutButton from "../Buttons/LogoutButton";

// Stores
import authStore from "../../stores/authStore";
import cardStore from "../../stores/cardStore";
import profileStore from "../../stores/profileStore";
import QrCode from "../QrCode";

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
            <Background>
              <List>
                <ListItem thumbnail style={{ top: 25 }}>
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
                    <Text style={{ fontSize: 30, fontFamily: "Damascus" }}>
                      {profileStore.user.name}
                    </Text>
                    <Text note style={{ fontSize: 15, fontFamily: "Damascus" }}>
                      {profileStore.user.email}
                    </Text>
                  </Body>
                </ListItem>
                <Header transparent>
                  <Left>
                    <Text
                      style={{
                        fontSize: 30,
                        fontFamily: "DamascusBold"
                      }}
                    >
                      Favorites
                    </Text>
                  </Left>
                </Header>
                <MyCardsCarousel />
                <Header transparent>
                  <Left>
                    <Text
                      style={{
                        fontSize: 30,
                        fontFamily: "DamascusBold"
                      }}
                    >
                      Rewards
                    </Text>
                  </Left>
                </Header>
              </List>
            </Background>
          </Content>
          <LogoutButton />
        </>
      );
    }
  }
}

Profile.navigationOptions = {
  headerTintColor: "#F24502",
  headerTransparent: true
};
export default observer(Profile);
