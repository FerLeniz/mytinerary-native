import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from "react-redux";
import userActions from '../Redux/Action/userAction'
import Toast from 'react-native-toast-message'
import Footer from '../components/Footer'

const SignIn = (props) => {

    const [infoUser, setInfoUser] = useState({
        email: "",
        password: "",
    })

    const changeValueInput = (e, field) => {
        setInfoUser({
            ...infoUser,
            [field]: e
        })
    }

    const sendForm = async (e) => {
        let user = e ? infoUser : null
        
        if (user.email === "" || user.password === "") {
            Toast.show({
                text1: 'Complete all fields, please!',
                type: 'error',
                position:'bottom' ,
            })
        } else {
            const respuesta = await props.logUser(user)
            if (respuesta) {
                    return (
                        Toast.show({
                            text1: respuesta,
                            type: 'error',
                            position: 'bottom',
                        })
                    )
                
            } else {
                Toast.show({
                    text1: 'Welcome👋',
                    position: 'bottom',
                });
                props.navigation.navigate('Home')
            }
        }


    }

    return (
        <View>
        <ImageBackground style={styles.containerForm} source={{ uri: "https://www.godominicanrepublic.com/wp-content/uploads/2017/11/PlayaBlanca-PhotoCredit_usatoday-com-1.jpg" }}>
        <Text style={styles.titleForm}>Sign In!</Text>
        <Text style={styles.otherTitle}>or... don´t have an account?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("Sign Up")
          }}
        >
          <Text style={styles.textSign}>Sign up here!</Text>
        </TouchableOpacity>
            <View style={styles.form}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={infoUser.email}
                        onChangeText={(e) => changeValueInput(e, 'email')}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={infoUser.password}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(e) => changeValueInput(e, 'password')}
                    />
                </View>
                <TouchableOpacity
                    onPress={sendForm}
                    style={styles.button}
                    activeOpacity={.7}
                >
                    <Text style={styles.text}>Sign In</Text>
                </TouchableOpacity >
            </View>
        </ImageBackground>
        <Footer/>
        </View>
    )
}
const styles = StyleSheet.create({

    containerForm: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: 'center',

    },
    form: {
        backgroundColor: "#ececec",
        justifyContent: "center",
        alignItems: 'center',
        width: "70%",
        borderRadius: 20

    },
    titleForm: {
        fontSize: 35,
        color: "white",
        fontWeight: "bold",
        textAlign: "left"
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
        marginVertical:10
      },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        padding: 10,
        borderRadius: 2,
        borderColor: "#000e19",
        borderStyle: "solid",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor:'white'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginTop: 20,
        backgroundColor: '#2f2f6b',
        width: "80%",
        height: 50,
        zIndex: 1,
        marginBottom:15
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

const mapDispatchToProps = {
    logUser:userActions.logUser
}
export default connect(null, mapDispatchToProps)(SignIn)