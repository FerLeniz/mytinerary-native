import React from "react"
import { ThemeProvider } from "react-native-elements"
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster"
import {
  CabinSketch_400Regular,
  CabinSketch_700Bold,
} from "@expo-google-fonts/cabin-sketch"
import {
  AlegreyaSans_500Medium,
  AlegreyaSans_500Medium_Italic,
  AlegreyaSans_700Bold,
  AlegreyaSans_700Bold_Italic,
  AlegreyaSans_800ExtraBold,
  AlegreyaSans_800ExtraBold_Italic,
  AlegreyaSans_900Black,
  AlegreyaSans_900Black_Italic,
} from "@expo-google-fonts/alegreya-sans"
import AppLoading from "expo-app-loading"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import rootReducer from "./Redux/Reducer/rootReducer"
import { NavigationContainer } from "@react-navigation/native"
import Drawer from "./navigation/Drawer"
import Toast from 'react-native-toast-message';

const globalStore = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Lobster_400Regular,
    CabinSketch_400Regular,
    CabinSketch_700Bold,
    AlegreyaSans_700Bold,
    AlegreyaSans_700Bold_Italic,
    AlegreyaSans_800ExtraBold,
    AlegreyaSans_500Medium_Italic,
    AlegreyaSans_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={globalStore}>
        <NavigationContainer >
          <ThemeProvider >
            <Drawer />
          </ThemeProvider>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    )
  }
}
