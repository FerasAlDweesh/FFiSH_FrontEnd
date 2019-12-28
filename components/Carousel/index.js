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
            name="heart"
            type="MaterialCommunityIcons"
            style={styles.icon}
          />
          <Rating
            type="heart"
            ratingCount={item.points}
            startingValue={pointStore.userPoints} // divide user's points by vendors points
            imageSize={30}
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
