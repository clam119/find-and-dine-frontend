import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "absolute",
    top: 0,
    backgroundColor: "pink",
  },
  card: {
    width: "85%",
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "gray",
    borderColor: "black",
    borderWidth: 3,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 24,
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  containerList: {
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    top: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    position: "absolute",
    top: 0,
    backgroundColor: "pink",
  },
  helperIconLeft: {
    position: "absolute",
    top: '6%',
    right: '10%',
    aspectRatio: 1,
    width: 50,
    height: 50,
    fill: 'pink',
    zIndex: 2
  },
  helperIconRight: {
    position: "absolute",
    top: '6%',
    left: '10%',
    aspectRatio: 1,
    width: 50,
    height: 50,
    zIndex: 2
  },
  item: {
    flexDirection: "row",
    backgroundColor: "gray",
    marginTop: "1%",
    marginBottom: "1%",
    marginLeft: "2%",
    marginRight: "2%",
    borderRadius: 10,
  },
  logo: {
    aspectRatio: 1,
    height: 60,
    width: 120,
    borderRadius: 10,
    margin: "2%",
  },
  bottomNavBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    top: 20,
    justifyContent: "center",
  },
  titleList: {
    flex: 1,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  votes: {
    position: "absolute",
    right: 0,
    textAlign: "center",
    bottom: 0,
    margin: "1%",
  },
});

export default styles;
