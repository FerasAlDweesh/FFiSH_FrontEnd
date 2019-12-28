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
import { Thumbnail } from "native-base";
import cardStore from "../../stores/cardStore";

// Buttons
import AddPointButton from "../Buttons/AddPointButton";

const { width: screenWidth } = Dimensions.get("window");
class MyCardsCarousel extends Component {
  _renderItem({ item, index }, parallaxProps) {
    return (
      <View>
        <ImageBackground
          style={{
            height: 190,
            width: 350,
            position: "relative",
            top: 2,
            left: 2
          }}
        >
          <ParallaxImage
            source={{
              uri: item.vendor.image
            }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
          <Thumbnail
            bordered
            source={{
              uri:
                "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"
            }}
            style={{
              position: "absolute"
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
              position: "absolute",
              marginLeft: 20,
              top: 15,
              left: 50
            }}
          >
            {item.vendor.name}
          </Text>
        </ImageBackground>
      </View>
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

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 160
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 1, android: 0 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 15
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover"
  }
});

export default observer(MyCardsCarousel);
