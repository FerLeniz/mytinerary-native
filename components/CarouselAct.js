import React,{ useEffect, useState }  from 'react'
import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { connect } from "react-redux"
import ItineraryAction from "../Redux/Action/itineraryAction"

const CarouselAct = (props) => {
    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)
    const { idItinerary } = props

    useEffect(() => {
        uploadItineraries()
    }, [])

    const uploadItineraries = async () => {
        const responseAct = await props.getActivities(idItinerary)
        setActivities(responseAct)
        setLoading(!loading)
    }

    if (loading) {
        return <Image source={require('../assets/map.png')}/>
    }

     const _renderItem = ({item, index}) => {
     return (
         <View key={item._id} style={styles.slide}>
             <ImageBackground source={{ uri: item.activities[0].image }} style={styles.image}>
                   <Text style={styles.title}>{ item.activities[0].title }</Text>
             </ImageBackground>
         </View>
     )
 }

    return (
        <View style={styles.carouselContain}>
         <Carousel
                ref={(c) => { _carousel = c; }}
                data={activities}
                sliderWidth={410}
                itemWidth={400}
                renderItem={_renderItem}
                layout={"stack"}
                loop={true}
                autoplay={true}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    carouselContain:{
        marginTop:20,
        marginBottom:20,
        justifyContent:"center"
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: 300,
        width: "95%"
    },
    title:{
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        backgroundColor: "#2f2f6ba0",
        width: 400,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
})

const mapDispatchToProps = {
    getActivities: ItineraryAction.getActivities
}

export default connect(null, mapDispatchToProps)(CarouselAct)