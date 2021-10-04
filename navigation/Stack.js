import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import Cities from "../screens/Cities"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import City from "../screens/City"
import { Icon } from "react-native-elements"
const stack = createStackNavigator()

export const HomeStack = ({ navigation }) => {
  return (
    <stack.Navigator >
      <stack.Screen
        name="Go Home"
        component={Home}
        options={{
          headerRight: () => (
            <Icon
              name="bars"
              type="font-awesome-5"
              color="#032e50"
              onPress={() => navigation.openDrawer()}
              containerStyle={{ marginRight: 25 }}
            />
          ),
          title: "",
        }}
      />
    </stack.Navigator>
  )
}

export const CitiesStack = ({ navigation }) => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Go Cities"
        component={Cities}
        options={{
          //   headerShown: false,
          headerRight: () => (
            <Icon
              name="bars"
              type="font-awesome-5"
              color="#032e50"
              onPress={() => navigation.openDrawer()}
              containerStyle={{ marginRight: 25 }}
            />
          ),
          title: "",
        }}
      />
      <stack.Screen
        name="Go City"
        component={City}
        options={{
          // headerShown: false,
          headerRight: () => (
            <Icon
              name="bars"
              type="font-awesome-5"
              color="#032e50"
              onPress={() => navigation.openDrawer()}
              containerStyle={{ marginRight: 25 }}
            />
          ),
          title: "",
        }}
      />
    </stack.Navigator>
  )
}

export const SignInStack = ({ navigation }) => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Go SignIn"
        component={SignIn}
        options={{
          headerRight: () => (
            <Icon
              name="bars"
              type="font-awesome-5"
              color="#032e50"
              onPress={() => navigation.openDrawer()}
              containerStyle={{ marginRight: 25 }}
            />
          ),
          title: "",
        }}
      />
    </stack.Navigator>
  )
}

export const SignUpStack = ({ navigation }) => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Go SignUp"
        component={SignUp}
        options={{
          headerRight: () => (
            <Icon
              name="bars"
              type="font-awesome-5"
              color="#032e50"
              onPress={() => navigation.openDrawer()}
              containerStyle={{ marginRight: 25 }}
            />
          ),
          title: "",
        }}
      />
    </stack.Navigator>
  )
}
