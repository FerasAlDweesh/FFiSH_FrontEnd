import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    position: "absolute",
    marginLeft: 20,
    top: 15,
    left: 50,
    opacity: 1
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 15,
    height: 200,
    flexDirection: "row",
    marginTop: 15
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
    marginTop: 15
  },
  thumbnail: {
    position: "absolute",
    opacity: 1
  },
  background: {
    height: 190,
    width: 335,
    position: "relative",
    top: 28
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 1, android: 0 }), // Prevent a random Android rendering issue
    backgroundColor: "transparent",
    borderRadius: 15
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain"
  },
  rating: {
    position: "absolute",
    bottom: 10,
    left: 5
  },
  icon: {
    color: "white",
    position: "absolute",
    marginLeft: 20,
    bottom: 5,
    right: 5
  }
});
export default styles;
