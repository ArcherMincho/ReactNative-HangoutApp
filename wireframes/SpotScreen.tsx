import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import HeaderBar from '../components/common/HeaderBar';
import SingleBtn from '../components/common/SingleBtn';
import SpotOpBtn from '../components/spots/SpotOpBtn';
import SpotItem from '../components/cancelled/SpotItem';
import SpotPost from '../components/spots/SpotPost';

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

const SpotScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: () => (
                <SingleBtn name="chevron-left" onPress={() => navigation.navigate('Home')} />
            ),
            headerRight: () => (
                <SpotOpBtn onAdd={() => navigation.navigate('Post')} />
            ),
        })
    }, [navigation]);

    return (
        <View style={styles.container}>

            {/* <HeaderBar
                left={
                    <BackBtn onPress={() => navigation.navigate('Home')} />}
                right={
                    <SpotOpBtn onAdd={() => navigation.navigate('Post')} />
                }
            /> */}

            <View style={styles.spot}>
                <SpotItem myStyle={styles.removeShadow} />
            </View>

            <View style={styles.commentsContainer}>
                {commentData.map(c => {
                    return (
                        <SpotPost
                            key={c.name}
                            name={c.name}
                            comment={c.comment}
                        />
                    )
                })}
            </View>
        </View>
    );
}

export default SpotScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    spot: {
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