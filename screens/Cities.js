import React,{useState,useEffect} from 'react'
import {ScrollView, StyleSheet, Text, View,ImageBackground } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { connect } from "react-redux"
import citiesAction from '../Redux/Action/citiesAction'
import CardCity from '../components/CardCity'


const Cities = (props) => {
  
    const { getCities,filterCities,filteredCities,allCitiesArr} = props
    const [search, setSearch] = useState('')

    useEffect(() => {
        getCities()
         
    }, [])

    const updateSearch = (search) => {
        filterCities(search)
        setSearch(search)
        // console.log(filteredCities)
      };

    return (
        <ScrollView>
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
                <Text>LOADING.....</Text>:
                filteredCities.length ===0?
                <Text>there aren´t cities</Text>:
                filteredCities.map(city=> <CardCity navigation={props.navigation} city={city} key={city._id}/>)
                } 
            </View> 

        </ScrollView>
    )
}
//if(allCitiesArr.lengthh == 0)? loading... : filter fliteredCities

const styles = StyleSheet.create({
    backImg: {
        width: "100%",
        height: 300,
        justifyContent: "flex-end",
        alignItems: "center"
      },
      text:{
          fontFamily: "AlegreyaSans_700Bold_Italic",
          fontSize: 30
      },
      citiesContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      },
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

{/* <ImageBackground style={styles.imageCity} source={{uri:'https://th.bing.com/th/id/OIP._1yJ5YZ_Ar9qb0KK4gVtMwHaEK?pid=ImgDet&rs=1'}} >
                    <Text style={styles.textCity}>city Example</Text>
                </ImageBackground> */}