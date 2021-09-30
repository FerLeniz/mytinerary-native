import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { HomeStack, CitiesStack} from './Stack'

const drawer = createDrawerNavigator()

const Drawer = (props) => {

    return (
        <drawer.Navigator >
            <drawer.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
            <drawer.Screen name="Cities" component={CitiesStack} options={{headerShown: false}}/>
        </drawer.Navigator>
    )
}

const styles = StyleSheet.create({})

export default Drawer
