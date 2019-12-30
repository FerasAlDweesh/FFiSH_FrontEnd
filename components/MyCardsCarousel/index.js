import React, { Component } from "react";
import { observer } from "mobx-react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ImageBackground
} from "react-native";

// NativeBase Components
import { Icon, Card } from "native-base";
import { Rating } from "react-native-ratings";

// Style
import styles from "./styles";

// Stores
import vendorStore from "../../stores/vendorStore";
import pointStore from "../../stores/pointStore";
import cardStore from "../../stores/cardStore";
import LogoutButton from "../Buttons/LogoutButton";

const circle = require("../../Auth/assets/circle.png");
const rating_icon = require("../../Auth/assets/ratingicon.png");

const { width: screenWidth } = Dimensions.get("window");
class MyCardsCarousel extends Component {
  _renderItem({ item, index }, parallaxProps) {
    return (
      <Card style={styles.transparent}>
        <ImageBackground style={styles.background}>
          <ParallaxImage
            source={{
              uri: item.vendor.image
            }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />

          {item.user_points / item.vendor_points >= 1 && (
            <Icon
              name="gift"
              type="MaterialCommunityIcons"
              style={styles.icon}
            />
          )}
          <Rating
            type="custom"
            ratingImage={circle}
            ratingColor=""
            ratingBackgroundColor=""
            ratingCount={item.vendor_points}
            imageSize={28}
            readonly
            style={styles.rating}
          />
          <Rating
            type="custom"
            ratingImage={rating_icon}
            ratingColor=""
            ratingBackgroundColor=""
            ratingCount={item.user_points % item.vendor_points}
            imageSize={28}
            readonly
            style={styles.rating}
          />
        </ImageBackground>
      </Card>
    );
  }

  render() {
    return (
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={cardStore.cards}
        renderItem={this._renderItem}
        hasParallaxImages={true}
      />
    );
  }
}

export default observer(MyCardsCarousel);
