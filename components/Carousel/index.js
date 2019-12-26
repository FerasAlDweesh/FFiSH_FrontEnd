import React, { Component } from "react";
import { observer } from "mobx-react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import vendorStore from "../../stores/vendorStore";

const { width: screenWidth } = Dimensions.get("window");
class MyCarousel extends Component {
  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{
            uri: item.image
          }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    );
  }

  render() {
    console.log("carousel");
    console.log(vendorStore.vendorCards);
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

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 1, android: 0 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover"
  }
});

export default observer(MyCarousel);
