import React from "react"
import { StyleSheet, Text, View, Image, Alert } from "react-native"
import { Button } from "react-native-elements"

const Hero = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.imgBack} source={require("../assets/playaImg.jpg")} />
        <View style={styles.heroText}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.title}>myTinerary</Text>
          <View style={styles.textContent}>
            <Text style={styles.text}>
              Find your perfect trip, designed by insiders who know and love their
              cities!
            </Text>
            <Text style={styles.text}>Hey! discover your favourite place</Text>
          </View>
          <Button
            title="Click Here!"
            buttonStyle={styles.heroButton}
            onPress={() => { props.navigation.navigate('Cities') }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 40,
            color: "#032e50",
            textAlign: "center",
            fontFamily: "CabinSketch_700Bold"
          }}
        >
          Popular myTineraries
        </Text>
      </View>
    </>
  )
}

export default Hero

const styles = StyleSheet.create({
  logo:{
    width: 66,
    height: 58,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBack: {
    width: "100%",
    height: 340,
  },
  heroText: {
    position: "absolute",
    marginLeft: 30,
  },
  title: {
    fontSize: 50,
    color: "white",
    color: "#2f2f6b",
    fontFamily: "Lobster_400Regular"
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginTop: 8,
    fontFamily: "AlegreyaSans_700Bold",
  },
  heroButton: {
    backgroundColor: "#2f2f6b",
    width: "52%",
    height: "50%",
    color: "white",
    alignItems: "center",
    marginTop: 20,
  },
  textContent:{
    marginTop:30
  }
})
