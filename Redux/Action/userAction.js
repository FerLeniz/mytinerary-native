 import axios from "axios";
 import AsyncStorage from '@react-native-async-storage/async-storage';

const userActions = {
   postUser: (user) => {
     return async (dispatch) => {
       try{
        let resp = await axios.post("https://mytineraryleniz.herokuapp.com/api/signUpUser", {...user,})
        if (resp.data.success) {
          await AsyncStorage.setItem('name', resp.data.response.name)
          await AsyncStorage.setItem('url', resp.data.response.url)
          await AsyncStorage.setItem('token', resp.data.response.token)
          dispatch({ type: "LOG_USER", payload: resp.data.response });
        }
        return resp.data.errors
       }catch(error){
         console.log(error)
       }
     };
   },
   logUser: (user) => {
     return async (dispatch) => {
       try{
        let res = await axios.post("https://mytineraryleniz.herokuapp.com/api/logInUser", {
          ...user,
        })
        if (res.data.success) {
         await AsyncStorage.setItem('name', res.data.response.name)
         await AsyncStorage.setItem('url', res.data.response.url)
         await AsyncStorage.setItem('token', res.data.response.token)
          dispatch({ type: "LOG_USER", payload: res.data.response });
        }
        return res.data.error
       }catch(error){
         console.log(error)
       }
       
      // ;
     }
   },
   logOut: () => {
     return async (dispatch) => {
      await AsyncStorage.clear()
       return dispatch({ type: "LOG_OUT" });
     }
   },
   anticipateLogInLS: (token) => {
     return async (dispatch) => {
       try {
         let res = await axios.get("https://mytineraryleniz.herokuapp.com/api/verifyToken", {
           headers: { Authorization: "Bearer " + token },
         });
         dispatch({
           type: "LOG_USER",
           payload: { token, name: res.data.name, url: res.data.url },
         });
       } catch (e) {
       return dispatch({ type: "LOG_OUT" });
       }
     };
   },
 }

 export default userActions;
