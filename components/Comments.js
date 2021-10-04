import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, ImageBackground } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { connect } from "react-redux"
import itineraryActions from '../Redux/Action/itineraryAction'
import Toast from 'react-native-toast-message'
import { Icon } from 'react-native-elements'
import Comment from './Comment'

const Comments = (props) => {
    const [loadingComment, setLoadingComment] = useState(true)
    const { commentsPeople, setCommentsPeople, token,name } = props
    const id = props.idItinerary
    const [newComment, setNewComment] = useState({
        message: "",
    })

    const commentInput = (e) => {
        setNewComment({
            ...newComment,
            message: e
        })
    }



    const sendComment = async () => {
        const emptySearch = newComment.message.charAt(0)
        if (props.token) {
            if (emptySearch === " " || newComment.message === "") {
                Toast.show({
                    text1: 'The fields must be complete',
                    type: 'error',
                    position: 'bottom',
                });
            } else {
                setLoadingComment(false)
                const response = await props.addComment({ message: newComment.message, token: token }, id)
                setCommentsPeople(response)
                setLoadingComment(true)
                setNewComment({
                    ...newComment,
                    message: ""
                })
            }
        } else {
            Toast.show({
                text1: 'You must be logged in to comment',
                type: 'error',
                position: 'bottom',
            });
        }
    }

    const deleteComment = async (idComentario, email) => {
        if (props.token) {
            if (email === props.name) {
                const response = await props.deleteCommentProp(idComentario, id)
                setCommentsPeople(response)
                Toast.show({
                    text1: 'Comment deleted successfully',
                    position: 'bottom',
                });

            }
        }
    }

    const editComment = async (idComentario, comment, email) => {
        if (email === props.name) {
            const response = await props.editComment(id, idComentario, comment)
            setCommentsPeople(response)
            Toast.show({
                text1: 'Comment edit successfully',
                position: 'bottom',
            });
        }
    }

    return (

        <View>
             {commentsPeople.map(comment => <Comment key={comment._id} comment={comment} editComment={editComment} deleteComment={deleteComment} />)}
            {token &&
                <View style={styles.containerInputAndButton}>
                    <Input
                        placeholder="Comment"
                        leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        onChangeText={commentInput}
                        containerStyle={styles.inputComment}
                        value={newComment.message}
                    />
                    <Icon onPress={loadingComment ? sendComment : null} name='paper-plane' type='font-awesome-5' size={35} color='#032e50' />
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({

    containerInputAndButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 20
    },
    inputComment: {
        width: "90%",
    }
})


const mapStateToProps = state => {
    return {
        token: state.user.token,
        url: state.user.url,
        name: state.user.name,
        // usuarioStatus: state.user.usuarioStatus
    }
}

const mapDispatchToProps = {
    addComment: itineraryActions.addComment,
    deleteCommentProp: itineraryActions.deleteComment,
    editComment: itineraryActions.editComment
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)