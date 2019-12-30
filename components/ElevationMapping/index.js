import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions
} from "react-native";
import MapView from "react-native-maps";

//Store
import vendorStore from "../../stores/vendorStore";
import { concatStatic } from "rxjs/operator/concat";

const Images = [
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5d094325aa12c40001ab48b9/1567025196603-ZC6PSKT2D5FBTBLVEIQ3/ke17ZwdGBToddI8pDm48kLzrpjkUFTz92gYXpVRdaejlfiSMXz2YNBs8ylwAJx2qrCLSIWAQvdC7iWmC9HNtRUzrleQE6n8UTwWEOoYw4mSSxbo6dgXg64KnMm5748MXHAHcYkp_JCZgyrthMov9rw/Elevation-Burger-compressor.png?format=300w"
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5d094325aa12c40001ab48b9/1567025297589-LHCR4D3CLZGJINCVAKS5/ke17ZwdGBToddI8pDm48kE28jrvoSmS6PR6gvULO9n1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7UPPfIJFSF9MDeSHXxnsR9oPbl88L8a0JOy9TKvtQQ3x4S0tZFmsM2fh2p3s0f5sRg/burgers-vertigo.png?format=300w"
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5d094325aa12c40001ab48b9/1567025396263-4SHX8MLGONA1Q13MRXRG/ke17ZwdGBToddI8pDm48kFJQ5THuqihB3lBtDpCmJN7lfiSMXz2YNBs8ylwAJx2qrCLSIWAQvdC7iWmC9HNtRcKkjJCnCcWexit05rpHJQ84Eo8I7CXfYGaukgV5KO1xOVadLqc9o1s1v6M5MOzLUQ/Fiery-Sunrise-Burger-compressor.png?format=300w"
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5d094325aa12c40001ab48b9/1567026025645-193UEYIB9KWTHS38ZN82/ke17ZwdGBToddI8pDm48kIdAJ3tANgSqXS1ORFe7Q3DlfiSMXz2YNBs8ylwAJx2qrCLSIWAQvdC7iWmC9HNtRYhSe1p8X98dQ3-g1kAJtO3FLhOBAzo7ydQ59NQ1pJm_sx9Ro9VwHLEi9PcnbQL3Nw/Paleo-Burger-105w-compressor.png?format=300w"
  }
];
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class ElevationMapping extends Component {
  state = {
    markers: [
      {
        coordinate: {
          latitude: 29.36055,
          longitude: 47.98192
        },
        title: "The Elevation Burger",
        description: "Points to redeem:",
        points: "* * * * *",
        image: Images[0]
      },
      {
        coordinate: {
          latitude: 29.294307,
          longitude: 47.909315
        },
        title: "Vertigo Burger 690-1950 Cal",
        description: "Points to redeem:",
        points: "* * * * * * *",
        image: Images[1]
      },
      {
        coordinate: {
          latitude: 29.32054,
          longitude: 48.088477
        },
        title: "Fiery Sunrise Burger 890 Cal",
        description: "Points to redeem:",
        points: "* * * * * *",
        image: Images[2]
      },
      {
        coordinate: {
          latitude: 29.136305,
          longitude: 48.131678
        },
        title: "Paleo Burger 505 Cal",
        description: "Points to redeem:",
        points: "* * * *",
        image: Images[3]
      }
    ],
    region: {
      latitude: 29.378586,
      longitude: 47.990341,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068
    }
  };
  animation = new Animated.Value(0);

  componentDidMount() {
    this.index = 0;
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta
            },
            350
          );
        }
      }, 10);
    });
  }
  interpolations = this.state.markers.map((marker, index) => {
    inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH
    ];
    scale = this.animation.interpolate({
      inputRange,
      outputRange: [1, 2.5, 1],
      extrapolate: "clamp"
    });
    opacity = this.animation.interpolate({
      inputRange,
      outputRange: [0.35, 1, 0.35],
      extrapolate: "clamp"
    });
    return { scale, opacity };
  });

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={map => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: this.interpolations[index].scale
                }
              ]
            };
            const opacityStyle = {
              opacity: this.interpolations[index].opacity
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap]}>
                  <Animated.View style={[styles.ring]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation
                  }
                }
              }
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>
                  {marker.title}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.points}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 750,
    width: 500,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden"
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center"
  },
  textContent: {
    flex: 1
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold"
  },
  cardDescription: {
    fontSize: 12,
    color: "#444"
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)"
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
