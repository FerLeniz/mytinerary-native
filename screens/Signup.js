import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native"
import { connect } from "react-redux"
import SelectPicker from "react-native-form-select-picker"
import userActions from "../Redux/Action/userAction"
import Toast from "react-native-toast-message"

const SignUp = (props) => {
  const [infoUser, setInfoUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    url: "",
    country: "",
  })
  const [errorName, setErrorName] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)
  const [errorLastName, setErrorLastName] = useState(null)
  const [errorUrl, setErrorUrl] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)

  const countries = [
    "Antigua y Barbuda",
    "Argentina",
    "Bahamas",
    "Barbados",
    "Belice",
    "Bolivia",
    "Brasil",
    "Canadá",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "Ecuador",
    "El Salvador",
    "Estados Unidos",
    "Granada",
    "Guatemala",
    "Guyana",
    "Haití",
    "Honduras",
    "Jamaica",
    "México",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "Santa Lucía",
    "Surinam",
    "Trinidad y Tobago",
    "Uruguay",
    "Venezuela",
  ]

  const changeValueInput = (e, field) => {
    setInfoUser({
      ...infoUser,
      [field]: e,
    })
  }

  const sendForm = async (e) => {
    let user = e ? infoUser : null
    if (
      user.name === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.password === "" ||
      user.url === "" ||
      user.country === ""
    ) {
      Toast.show({
        text1: "Complete all fields, please!",
        type: "error",
        position: "bottom",
      })
    } else {
      const resp = await props.postUser(user)
      if (resp) {
        setErrorName(
          resp.find((err) => err.context.key === "name")
            ? resp.find((err) => err.context.key === "name").message
            : null
        )
        setErrorEmail(
          resp.find((err) => err.context.key === "email")
            ? resp.find((err) => err.context.key === "email").message
            : null
        )
        setErrorPassword(
          resp.find((err) => err.context.key === "password")
            ? resp.find((err) => err.context.key === "password").message
            : null
        )
        setErrorUrl(
          resp.find((err) => err.context.key === "url")
            ? resp.find((err) => err.context.key === "url").message
            : null
        )
        setErrorLastName(
          resp.find((err) => err.context.key === "lastName")
            ? resp.find((err) => err.context.key === "lastName").message
            : null
        )
      } else {
        Toast.show({
          text1: "Welcome👋",
          position: "bottom",
        })
        props.navigation.navigate("Home")
      }
    }
  }

  return (
    <ScrollView>
      <ImageBackground
        style={styles.containerForm}
        source={{
          uri:
            "https://www.godominicanrepublic.com/wp-content/uploads/2017/11/PlayaBlanca-PhotoCredit_usatoday-com-1.jpg",
        }}
      >
        <Text style={styles.titleForm}>Sign Up!</Text>
        <Text style={styles.otherTitle}>Or already have an acoount?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("Sign In")
          }}
        >
          <Text style={styles.textSign}>Sign in here!</Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <View>
            <Text style={styles.errors}>
              {errorName ? errorName : null}&nbsp;
            </Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={infoUser.name}
              onChangeText={(e) => changeValueInput(e, "name")}
            />
            <Text style={styles.errors}>
              {errorLastName !== null ? errorLastName : null}&nbsp;
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={infoUser.lastName}
              onChangeText={(e) => changeValueInput(e, "lastName")}
            />
            <Text style={styles.errors}>
              {errorEmail ? errorEmail : null}&nbsp;
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={infoUser.email}
              onChangeText={(e) => changeValueInput(e, "email")}
            />
            <Text style={styles.errors}>
              {errorUrl ? errorUrl : null}&nbsp;
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Url"
              value={infoUser.url}
              onChangeText={(e) => changeValueInput(e, "url")}
            />
            <SelectPicker
              default="Choose a country"
              onValueChange={(e) => changeValueInput(e, "country")}
              placeholderStyle={{ color: "black" }}
              label="Country"
              style={styles.input}
              placeholder="Country"
            >
              {countries.map((country) => (
                <SelectPicker.Item
                  label={country}
                  value={country}
                  key={country}
                />
              ))}
            </SelectPicker>
            <Text style={styles.errors}>
              {errorPassword ? errorPassword : null}&nbsp;
            </Text>
            <TextInput
              style={styles.input}
              value={infoUser.password}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(e) => changeValueInput(e, "password")}
            />
          </View>
          <TouchableOpacity
            onPress={sendForm}
            style={styles.button}
            activeOpacity={0.7}
          >
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  containerForm: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#ececec",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    borderRadius: 20,
    margin: 30,
  },
  titleForm: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  otherTitle: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  textSign: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "CabinSketch_700Bold",
    backgroundColor: "white",
    padding: 5,
  },
  input: {
    height: 40,
    width: 230,
    margin: 12,
    padding: 10,
    borderRadius: 2,
    borderColor: "#000e19",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    marginTop: 20,
    backgroundColor: "#2f2f6b",
    width: "80%",
    height: 50,
    zIndex: 1,
    marginBottom:10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonSignIn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 10,
    borderStyle: "solid",
    borderColor: "black",
    width: "80%",
    height: 50,
    zIndex: 1,
    marginBottom: 20,
    borderWidth: 2,
  },
  textSignIn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  errors: {
    fontSize: 15,
    color: "red",
    textAlign: "center",
  },
})

const mapDispatchToProps = {
  postUser: userActions.postUser,
}

export default connect(null, mapDispatchToProps)(SignUp)
