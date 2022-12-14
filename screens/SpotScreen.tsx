import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import pxToDp from '../functions/pxToDp';

import HeaderBar from '../components/common/HeaderBar';
import SpotOpBtn from '../components/SpotOpBtn';
import SpotPost from '../components/SpotPost';
import BackBtn from '../components/common/BackBtn';
import SpotShort from '../components/spots/SpotShort';

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

const SpotScreen = ({ navigation, route }) => {

    const spot = route.params.spot;

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title: '',
    //         headerLeft: () => (
    //             <SingleBtn name="chevron-left" onPress={() => navigation.navigate('Home')} />
    //         ),
    //         headerRight: () => (
    //             <SpotOpBtn onAdd={() => navigation.navigate('Post')} />
    //         ),
    //     })
    // }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>

            <HeaderBar
                left={
                    <BackBtn onPress={() => navigation.navigate('SpotHome')} />}
                right={
                    <SpotOpBtn onAdd={() => navigation.navigate('Post')} />
                }
            />

            <SpotShort spot={spot} />

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
        </SafeAreaView>
    );
}

export default SpotScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    commentsContainer: {
        width: '100%',
        padding: '5%',
    }
}
);