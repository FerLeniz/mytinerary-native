import React, { useEffect, useRef, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native"
import { connect } from "react-redux"
import { Icon } from "react-native-elements"
import ItineraryAction from "../Redux/Action/itineraryAction"

const City = (props) => {
  const [foundCity, setFoundCity] = useState({
    loading: true,
    city: null,
  })

  useEffect(() => {
    const idCity = props.route.params.id
    if (!(props.allCitiesArr.length === 0)) {
      let searchCity = props.allCitiesArr.find(
        (ciudad) => ciudad._id === idCity
      )
      console.log(searchCity)
      setFoundCity({ loading: false, city: searchCity })
    }
  }, [])

  const { loading, city } = foundCity

  if (loading) {
    return (
      <View style={styles.containerLoading}>
        <Text>LOADING...</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <ImageBackground
        style={styles.containerCity}
        source={{ uri: city.image }}
      >
        <View style={styles.backDrop}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "AlegreyaSans_700Bold",
              fontSize: 62,
              color: "white",
            }}
          >
            {city.name}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.textsContain}>
        <View style={styles.columnText}>
          <Icon
            name="globe-americas"
            type="font-awesome-5"
            color="#032e50"
            onPress={() => navigation.openDrawer()}
            containerStyle={{ marginBottom: 10 }}
          />
          <Text>{city.country}</Text>
        </View><View style={styles.columnText}>
          <Icon
            name="money-bill-wave"
            type="font-awesome-5"
            color="#032e50"
            onPress={() => navigation.openDrawer()}
            containerStyle={{ marginBottom: 10 }}
          />
          <Text>{city.currentMoney}</Text>
        </View>
        <View style={styles.columnText}>
          <Icon
            name="language"
            type="font-awesome-5"
            color="#032e50"
            onPress={() => navigation.openDrawer()}
            containerStyle={{ marginBottom: 10 }}
          />
          <Text>{city.language}</Text>
        </View>
      </View>
      <Text>ITINERARY</Text>
      {/* VACIO? no hay itnerario!! : itero itinerario... */}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    height: 300,
    width: "100%",
  },
  textsContain: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    
  },
  columnText:{
    flexDirection: "column",
    justifyContent: "center"
  },
  backDrop: {
    backgroundColor: "#2f2f6ba0",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  containerCity: {
    width: "100%",
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLoading: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
})

const mapStateToProps = (state) => {
  return {
    //que escuche al itinerario
    allCitiesArr: state.cities.allCitiesArr,
  }
}

const mapDispatchToProps = {
  // cargar itinerario
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
