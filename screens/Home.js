import React from "react"
import {ScrollView, StyleSheet, Text, View } from "react-native"
import Hero from '../components/Hero'
import CarouselImg from '../components/CarouselImg'
import {Lobster_400Regular} from '@expo-google-fonts/lobster'

const Home = (props) => {
  
  return (
      <ScrollView>
        <Hero navigation={props.navigation} /> 
        <CarouselImg/>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Copyright © All rights Reserved</Text>
        </View> 
      </ScrollView>
  )
}

// AGREGAR Copyright © All rights Reserved

export default Home

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FCFC62',
    width: '100%',
  },
  footerText: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      paddingVertical: 5,
  }
})
