import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import HeaderBar from '../components/common/HeaderBar';
import PostOpBtn from '../components/PostOpBtn';
import PostItem from '../components/PostItem';
import PostComment from '../components/PostComment';

const commentData = [
    {
        name: 'Joakim X',
        star: 5.0,
        comment: 'For everyone who loves chicken, you should definitely come here! Omg they have the best fried chicken in gtg. A solid 10/10.',
    },
    {
        name: 'Anders B',
        star: 4.0,
        comment: 'Everything is good, but my classmate said the sweet & sour chicken is waaaaay too sweet but I think it was really good. I have a sweet tooth tho! Not sure if you guys would like it.',
    },
]

const PostScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <HeaderBar
                left={
                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <FontAwesome name="chevron-left" size={25} color={'black'} />
                    </Pressable>}
                right={
                    <PostOpBtn />
                }
            />
            <View style={styles.post}>
                <PostItem myStyle={styles.removeShadow} />
            </View>
            <View style={styles.commentsContainer}>
                {commentData.map(c => {
                    return (
                        <PostComment 
                            name={c.name}
                            comment={c.comment}
                        />
                    )
                })}
            </View>
        </View>
    );
}

export default PostScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    post: {
        paddingVertical: '8%',
        paddingHorizontal: '5%',
        borderWidth: 1,
    },
    removeShadow: {
        // for IOS
        shadowColor: '#fff',
        // for Android
        elevation: 0,
        marginBottom: 0,
    },
    commentsContainer: {
        width: '100%',
        padding: '5%',
    }
}
);