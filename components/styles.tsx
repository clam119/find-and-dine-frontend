import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden'
  },
  body: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "absolute",
    top: 0,
    backgroundColor: "pink",
  },
  bottomNavBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  binIcon: {
    right: "26%"
  },
  card: {
    width: "85%",
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 13,
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 0,
  },
  cardExpanded: {
    backgroundColor: "purple",
  },
  cardGradient: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    position: 'absolute',
    zIndex: 1
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 24,
    position: 'absolute',
    bottom: '10%',
    zIndex: 2,
    fontWeight: 'bold',
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
    width: "100%",
    top: 0,
  },
  delete: {
    width: "100%",
    height: "100%",
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems: "center",
    top: 0,
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
    width: "90%",
    flexDirection:'row',
    alignSelf:'center',
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
    margin: "0%",
  },
  refreshIcon:{
    left: "27%",
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
    right: '3%',
    textAlign: "center",
    bottom: '3%',
    margin: "1%",
    zIndex: 2
  },

});

export default styles;
