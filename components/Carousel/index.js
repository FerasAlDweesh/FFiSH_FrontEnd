import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { Dimensions, ImageBackground } from "react-native";

// NativeBase Components
import { Icon, Card } from "native-base";
import { Rating } from "react-native-ratings";
import vendorStore from "../../stores/vendorStore";

import { red, bold } from "ansi-colors";
import { Thumbnail } from "native-base";
import { TouchableOpacity } from "react-native";


// Style
import styles from "./styles";

// Stores
import pointStore from "../../stores/pointStore";
import cardStore from "../../stores/cardStore";

const circle = require("../../Auth/assets/circle.png");
const rating_icon = require("../../Auth/assets/ratingicon.png");


const { width: screenWidth } = Dimensions.get("window");
class MyCarousel extends Component {
  _renderItem = ({ item, index }, parallaxProps) => {
    return (

      <Card style={styles.transparent}>
        <TouchableOpacity
          onPress={() => {
            if (item.id === 1) this.props.navigation.navigate("VendorDetail");
            else if (item.id === 2)
              this.props.navigation.navigate("ElevationDetail");
            else if (item.id === 10)
              this.props.navigation.navigate("KrispyDetail");
          }}
        >
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
          {/* <Icon
            onPress={() => pointStore.addPoint(item.id)}
            name="plus-circle"
            type="MaterialCommunityIcons"
            style={styles.icon}
          /> */}
        </ImageBackground>

        </TouchableOpacity>
      </Card>

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
        data={this.props.cards}
        renderItem={this._renderItem}
        hasParallaxImages={true}
      />
    );
  }
}

export default withNavigation(observer(MyCarousel));

