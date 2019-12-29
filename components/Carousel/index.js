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
import { Right, Icon, Container, Card } from "native-base";
import { Rating } from "react-native-ratings";
import vendorStore from "../../stores/vendorStore";
import { red, bold } from "ansi-colors";
import { Thumbnail } from "native-base";

// Style
import styles from "./styles";

// Stores
import pointStore from "../../stores/pointStore";

// Buttons
import AddPointButton from "../Buttons/AddPointButton";

const circle = require("../../Auth/assets/circle.png");
const rating_icon = require("../../Auth/assets/ratingicon.png");
const rating_icon2 = require("../../Auth/assets/ratingicon2.png");

const { width: screenWidth } = Dimensions.get("window");
class MyCarousel extends Component {
  _renderItem({ item, index }, parallaxProps) {
    return (
      <Card style={styles.transparent}>
        <ImageBackground style={styles.background}>
          <ParallaxImage
            source={{
              uri: item.image
            }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
          <Thumbnail
            bordered
            source={{ uri: item.image }}
            style={styles.thumbnail}
          />
          <Text style={styles.text}>{item.name}</Text>
          <Icon
            onPress={() => pointStore.addPoint(item.id)}
            name="plus-circle"
            type="MaterialCommunityIcons"
            style={styles.icon}
          />
          <Rating
            type="custom"
            ratingImage={circle}
            ratingColor=""
            ratingBackgroundColor=""
            ratingCount={item.points}
            imageSize={28}
            readonly
            onFinishRating={"this.ratingCompleted"}
            style={styles.rating}
          />
          <Rating
            type="custom"
            ratingImage={rating_icon}
            ratingColor=""
            ratingBackgroundColor=""
            ratingCount={3} //{pointStore.userPoints}
            imageSize={28}
            readonly
            onFinishRating={"this.ratingCompleted"}
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
        data={vendorStore.vendorCards}
        renderItem={this._renderItem}
        hasParallaxImages={true}
      />
    );
  }
}

export default observer(MyCarousel);
