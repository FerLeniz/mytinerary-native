import React from "react"
import {ScrollView, StyleSheet, Text, View } from "react-native"
import Hero from '../components/Hero'
import CarouselImg from '../components/CarouselImg'
import Footer from '../components/Footer'

const Home = (props) => {
  
  return (
      <ScrollView>
        <Hero navigation={props.navigation} /> 
        <CarouselImg/> 
        <Footer/>
      </ScrollView>
  )
}

export default Home


