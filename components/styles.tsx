import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "75%",
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "gray",
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  title: {
    top: 20,
    justifyContent: "center",
  },
});

export default styles;
