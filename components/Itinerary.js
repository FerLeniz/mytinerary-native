import React, { useEffect, useState } from "react"
import { Icon } from "react-native-elements"
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native"
import { Text } from "react-native-elements"
import Comments from './Comments'
import CarouselAct from "./CarouselAct"
import { connect } from "react-redux"
import { Avatar } from "react-native-elements"
import { Button } from "react-native-elements"
import itineraryActions from "../Redux/Action/itineraryAction"
import Toast from "react-native-toast-message"

const Itinerary = (props) => {
  const {
    itinerary: {
      comments,
      title,
      _id,
      name,
      duration,
      imagePerson,
      hashtags,
      price,
      likes,
      userLiked,
    },
  } = props
  const [btnVisible, setBtn] = useState(false)
  const [user, setUser] = useState("")
  const [heartLike, setHeartLike] = useState(false)
  const [usersLikes, setUsersLikes] = useState(userLiked)
  const [like, setLike] = useState(likes)
  const [loadingHeart, setLoadingHeart] = useState(true)
  const [commentsPeople, setCommentsPeople] = useState(comments)

  const changeStatusBtn = () => {
    setBtn(!btnVisible)
    setCommentsPeople(comments)
  }

  const likeBtn = async () => {
    if (props.token) {
      setLoadingHeart(false)
      setUser(props.name)
      const response = await props.viewLikes(_id, props.name)
      setLike(response.likes)
      setUsersLikes(response.userLikes)
      setHeartLike(response.btnStatus)
      setLoadingHeart(true)
    } else {
      Toast.show({
        text1: "You must be logged in to  like this!",
        type: "error",
        position: "bottom",
      })
    }
  }

  useEffect(() => {
    
    if (props.name && props.token) {
      if (usersLikes.includes(props.name)) {
        setHeartLike(true)
      } else {
        setHeartLike(false)
      }
    } else {
      setHeartLike(false)
    }
  }, [props.token,props.name])

  return (
    <ScrollView style={styles.containerItinerary}>
      <View>   
        <Text style={styles.titleItinerary}>{title}</Text>
        <View style={styles.containerHastag}>
          {hashtags.map((hash, index) => (
            <Text style={styles.hastag} key={index}>
              {hash}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.containerUserAndName}>
        <Avatar size="large" rounded source={{ uri: imagePerson }} />
        <Text style={styles.nameUser} h3>
          {name}
        </Text>
      </View>
      <View style={styles.containerPrecie}>
        <View style={styles.containerCash}>
          {Array(price)
            .fill(price)
            .map((bill, index) => (
              <Icon
                style={{ marginLeft: 10 }}
                size={35}
                key={index}
                name="money-bill-wave"
                type="font-awesome-5"
                color="#032e50"
              />
            ))}
        </View>
      </View>
      <View style={styles.containerHour}>
        <Icon size={35} name="clock" type="font-awesome-5" color="#032e50" />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontFamily: "AlegreyaSans_800ExtraBold",
          }}
        >
          {duration} hours
        </Text>
      </View>
      <View style={styles.containerLike}>
      <TouchableOpacity onPress={loadingHeart ? likeBtn : null}>
        <Icon
            style={{ marginLeft: 28 }}
            size={35}
            name="heart"
            type="font-awesome-5"
            color="red"
            solid={heartLike}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 25,
            fontFamily: "AlegreyaSans_800ExtraBold",
          }}
        >
          {like}
        </Text>
      </View>
      <View>
        {!btnVisible && (
          <Button
            buttonStyle={styles.btnView}
            onPress={changeStatusBtn}
            title={btnVisible ? "View Less" : "View More"}
          />
        )}
      </View>
      {btnVisible && (
        <View>
            <CarouselAct btnVisible={btnVisible} idItinerary={_id} />
           <Comments
            setCommentsPeople={setCommentsPeople}
            commentsPeople={commentsPeople}
            idItinerary={_id}
           /> 
          <Button
            buttonStyle={styles.btnView}
            onPress={changeStatusBtn}
            title={btnVisible ? "View Less" : "View More"}
          />
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerItinerary: {
    backgroundColor: "#fdffed",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  titleItinerary: {
    fontFamily: "AlegreyaSans_800ExtraBold",
    fontSize: 35,
  },
  containerHastag: {
    flexDirection: "row",
    alignItems: "center",
  },
  hastag: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  containerCarrusel: {
    justifyContent: "center",
    marginLeft: -10,
  },
  containerUserAndName: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameUser: {
    marginLeft: 20,
    fontFamily: "AlegreyaSans_500Medium_Italic",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    height: 300,
    width: "90%",
  },
  containerPrecie: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: "row",
  },
  containerCash: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerHour: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  containerLike: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: -17,
  },
  coin: {
    width: "20%",
    borderRadius: 100,
    height: "20%",
  },
  buttonHeart: {
    width: "10%",
  },

  paginationContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  btnView: {
    backgroundColor: "#032e50",
    height: 50,
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
  viewLikes: itineraryActions.viewLikes
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
