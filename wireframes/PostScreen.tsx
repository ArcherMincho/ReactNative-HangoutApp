import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import { useState, useEffect, useLayoutEffect } from 'react';

import HeaderBar from '../components/common/HeaderBar';
import SingleBtn from '../components/cancelled/SingleBtn';
import SelectSpot from '../components/cancelled/SelectSpot';
import StarRating from '../components/post/MyStarRating';
import CommentBox from '../components/post/CommentBox';
import AtFriends from '../components/post/AtFriends';


let SpotData = [
    { key: 'OiShi', value: 'OiShi' },
    { key: 'District One', value: 'District One' },
    { key: 'L\'s', value: 'L\'s' },
]

let FriendData = [
    { key: 'Amy Brown', value: 'Amy Brown' },
    { key: 'Alex Ericsson', value: 'Alex Ericsson' },
    { key: 'Nick Nguyen', value: 'Nick Nguyen' },
    { key: 'Bob Valleberg', value: 'Bob Valleberg' },
    { key: 'Yining Li', value: 'Yining Li' },
]

let names = [];
FriendData.map(i => {
    names.push(i.key);
});

const PostScreen = ({ navigation }) => {
    const [text, onChangeText] = useState('place holder..');
    const [friends, SelectFriends] = useState(names);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: () => (
                <SingleBtn name="chevron-left" onPress={() => navigation.navigate('Spot')} />
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

            <AtFriends
                title="@ people"
                names={friends}
                onPress={()=>{alert(friends)}}
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