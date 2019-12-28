import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
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
    width: 350,
    position: "relative",
    top: 2,
    left: 2
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
  },
  rating: {
    position: "absolute",
    bottom: 10,
    borderColor: "black"
  },
  icon: {
    color: "rgb(153,0,0)",
    position: "absolute",
    marginLeft: 20,
    bottom: 5,
    right: 5
  }
});
export default styles;