import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Copyright © All rights Reserved</Text>
        </View>
    )
}

export default Footer

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
