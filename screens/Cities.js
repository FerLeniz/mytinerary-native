import React,{useState,useEffect,useRef } from 'react'
import {ScrollView, StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { connect } from "react-redux"
import citiesAction from '../Redux/Action/citiesAction'
import CardCity from '../components/CardCity'
import Footer from '../components/Footer'
import { useScrollToTop } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

const Cities = (props) => {
  
    const { getCities,filterCities,filteredCities,allCitiesArr} = props
    const [search, setSearch] = useState('')
    const ref = useRef()

    useEffect(() => {
        getCities()
    }, [])

    const updateSearch = (search) => {
        filterCities(search)
        setSearch(search)
      };
      
        useScrollToTop(ref)
      
      
    return (
        <ScrollView ref={ref} >
            <ImageBackground style={styles.backImg} source={require('../assets/playa-cities.jpg')}>
            <Text style={styles.text} >Discover the world with us!</Text>
            <SearchBar
                placeholder="Search a City..."
                onChangeText={updateSearch}
                value={search}
                platform='ios'
                containerStyle={styles.input}
            />
            </ImageBackground>
             <View style={styles.citiesContainer}>
                {allCitiesArr.length ===0?
                <>
                <LottieView source={require('../assets/72659-loader-vb.json')} autoPlay loop />
                <Text style={styles.text}>Cities are coming...</Text>
                <Image style={styles.img} source={require('../assets/clock.png')}/>
                </>
                :
                filteredCities.length ===0?
                <>
                <Text style={styles.text}>There aren´t cities, try another one...</Text>
                <Image style={{width:'90%'}} source={require('../assets/lost1.jpg')}/>
                </>:
                filteredCities.map(city=> <CardCity navigation={props.navigation} city={city} key={city._id}/>)
                } 
            </View> 
            <Footer/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backImg: {
        width: "100%",
        height: 300,
        justifyContent: "flex-end",
        alignItems: "center"
      },
      text:{
          fontFamily: "AlegreyaSans_700Bold_Italic",
          fontSize: 25
      },
      citiesContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      },
      img:{
        width:'100%'
      }
})

const mapStateToProps = (state) => {
    return {
      allCitiesArr:state.cities.allCitiesArr,
      filteredCities: state.cities.filterCitArr,
    }
  }
  
  const mapDispatchToProps = {
    getCities: citiesAction.getAllCities,
    filterCities: citiesAction.filterCities,
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cities)