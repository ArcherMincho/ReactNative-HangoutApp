import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import { useState, useEffect, useLayoutEffect } from 'react';

import HeaderBar from '../components/common/HeaderBar';
import BackBtn from '../components/common/BackBtn';
import SelectSpot from '../components/SelectSpot';
import StarRating from '../components/StarRating';
import CommentBox from '../components/CommentBox';


let SpotData = [
    { key: 'OiShi', value: 'OiShi' },
    { key: 'District One', value: 'District One' },
    { key: 'L\'s', value: 'L\'s' },
]

const PostScreen = ({ navigation }) => {
    const [text, onChangeText] = useState('place holder..');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: () => (
                <BackBtn onPress={() => navigation.navigate('Spot')} />
            ),
            headerRight: () => (
                <Pressable style={styles.postBtn} onPress={() => alert("post it")}>
                    <Text style={styles.postBtnText}>Post</Text>
                </Pressable>
            ),
        })
    }, [navigation]);

    return (
        <View style={styles.container}>
            <SelectSpot data={SpotData} />

            <StarRating />

            <CommentBox
                onChangeText={text => onChangeText(text)}
                value={text}
            />


        </View>
    )
}

export default PostScreen;

const styles = StyleSheet.create({
    container: {

    },
    postBtn: {
        width: 50,
        borderRadius: 5,
        backgroundColor: '#333',
        textAlign: 'center',
        margin: 10,
    },
    postBtnText: {
        paddingHorizontal: '2%',
        paddingVertical: '5%',
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    }
})