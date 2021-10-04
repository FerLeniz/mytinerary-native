import React, { useEffect, useRef, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native"
import { connect } from "react-redux"
import { Icon } from "react-native-elements"
import ItineraryAction from "../Redux/Action/itineraryAction"
import Itinerary from '../components/Itinerary'
import Footer from '../components/Footer'
import LottieView from 'lottie-react-native'

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
      setFoundCity({ loading: false, city: searchCity })
    }
    props.getItineraries(idCity)

    return () => {
      props.getItineraries(idCity)
    }
  }, [])

  const { loading, city } = foundCity

  if (loading) {
    return (
         <LottieView source={require('../assets/72659-loader-vb.json')} autoPlay loop />
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
            containerStyle={{ marginBottom: 10 }}
          />
          <Text>{city.country}</Text>
        </View>
        <View style={styles.columnText}>
          <Icon
            name="money-bill-wave"
            type="font-awesome-5"
            color="#032e50"
            containerStyle={{ marginBottom: 10 }}
          />
          <Text>{city.currentMoney}</Text>
        </View>
        <View style={styles.columnText}>
          <Icon
            name="language"
            type="font-awesome-5"
            color="#032e50"
            containerStyle={{ marginBottom: 10 }}
          />
          <Text>{city.language}</Text>
        </View>
      </View>
      <View>
         {props.itineraries.length === 0 || props.itineraries === 'There are not itineraries'  ? (
          <>
            <Text style={styles.textNotFound}> There aren´t itineraries.. yet</Text>
            <Image style={{width: '95%'}} source={require('../assets/lost.png')}/>
          </>
        ) : (
          props.itineraries.map((item) => (
            <Itinerary key={item._id} itinerary={item} />
          ))
        )} 
      </View>
      <Footer/>
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
  columnText: {
    flexDirection: "column",
    justifyContent: "center",
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
  textNotFound:{
    textAlign:'center',
    fontSize:30,
    fontFamily:'AlegreyaSans_700Bold',
    marginVertical:15
  }
})

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries.itinerary,
    allCitiesArr: state.cities.allCitiesArr,
  }
}

const mapDispatchToProps = {
  getItineraries: ItineraryAction.getItineraries,
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
