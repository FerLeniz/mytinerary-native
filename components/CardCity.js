import React from "react"
import { StyleSheet, Text, ImageBackground, Pressable } from "react-native"

const CardCity = (props) => {
  const { name, image,_id } = props.city
  return (
    <Pressable onPress={() => props.navigation.navigate("City", { id: _id })}>
      <ImageBackground style={styles.imageCity} source={{ uri: image }}>
        <Text style={styles.textCity}>{name}</Text>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  imageCity: {
    width: "94%",
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "flex-end",
  },
  textCity: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    backgroundColor: "#2f2f6b",
    width: 330,
    textAlign: "center",
    fontFamily: "CabinSketch_400Regular",
  },
})

export default CardCity
