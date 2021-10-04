import React, { useEffect } from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer"
import { HomeStack, CitiesStack, SignInStack, SignUpStack } from "./Stack"
import { connect } from "react-redux"
import userActions from "../Redux/Action/userAction"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Icon } from "react-native-elements"

const drawer = createDrawerNavigator()

const Drawer = (props) => {
  const { token, name, url, logOut } = props
  useEffect(() => {
    loginLocalStoreUser()
  }, [])

  const loginLocalStoreUser = async () => {
    if (!props.token && AsyncStorage.getItem("token")) {
      const tokenAsyncStorage = await AsyncStorage.getItem("token")
      if (tokenAsyncStorage) {
        props.anticipateLogInLS(tokenAsyncStorage)
        return null
      }
    }
  }

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView
        style={{ backgroundColor: "#fde8b7" }}
        {...props}
      >
        <View style={styles.center}>
          {token ? (
            <View style={styles.containerUserPhoto}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 100 }}
                source={{ uri: url }}
              />
              <Text style={styles.nameUser}>Welcome {name}</Text>
            </View>
          ) : (
            <View style={styles.containerUserPhoto}>
              <Icon
                style={{
                  marginBottom: 1,
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                }}
                size={50}
                name="user"
                type="font-awesome-5"
                color="#032e50"
              />
            </View>
          )}
          <DrawerItemList {...props} />
          {token && (
            <DrawerItem
              label="Sign Out"
              style={{paddingLeft:25}}
              onPress={() => {
                logOut()
              }}
              icon={({ focused, color, size }) => <Icon color={'black'} size={40} name='star' />}
            />
          )}
        </View>
      </DrawerContentScrollView>
    )
  }

  return (
    <drawer.Navigator
      screenOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Icon
              name="home"
              type="font-awesome-5"
              color="black"
              style={{ paddingLeft: 28 }}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Cities"
        component={CitiesStack}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Icon
              name="city"
              type="font-awesome-5"
              color="black"
              style={{ paddingLeft: 28 }}
            />
          ),
        }}
      />

      {!token && (
        <>
          <drawer.Screen
            name="Sign In"
            component={SignInStack}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <Icon
                  name="user-tag"
                  type="font-awesome-5"
                  color="black"
                  style={{ paddingLeft: 28 }}
                />
              ),
            }}
          />
          <drawer.Screen
            name="Sign Up"
            component={SignUpStack}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <Icon
                  name="user-tag"
                  type="font-awesome-5"
                  color="black"
                  style={{ paddingLeft: 28 }}
                />
              ),
            }}
          />
        </>
      )}
    </drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  nameUser: {
    color: "black",
    fontFamily: "AlegreyaSans_700Bold_Italic",
    textAlign: "center",
    fontSize: 20,
    marginBottom:15
  },
  containerUserPhoto: {
    alignItems: "center",
  },
  container: {
    fontFamily: "AlegreyaSans_700Bold_Italic",
  },
  center: {
    justifyContent: "center",
  },
})

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    url: state.user.url,
    name: state.user.name,
  }
}

const mapDispatchToProps = {
  anticipateLogInLS: userActions.anticipateLogInLS,
  logOut: userActions.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
