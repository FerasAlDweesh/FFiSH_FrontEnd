import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ImageBackground
} from "react-native";
import vendorStore from "../../stores/vendorStore";
import { red, bold } from "ansi-colors";
import { Thumbnail } from "native-base";
import { TouchableOpacity } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
class MyCarousel extends Component {
  _renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            if (item.id === 1) this.props.navigation.navigate("VendorDetail");
            else if (item.id === 2)
              this.props.navigation.navigate("ElevationDetail");
            else if (item.id === 10)
              this.props.navigation.navigate("KrispyDetail");
          }}
        >
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
              {item.name}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

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

export default withNavigation(observer(MyCarousel));
