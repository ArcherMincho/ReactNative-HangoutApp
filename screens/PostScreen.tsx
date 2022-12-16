import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import pxToDp from '../functions/pxToDp';

import HeaderBar from '../components/common/HeaderBar';
import BackBtn from '../components/common/BackBtn';
import PostBtn from '../components/post/PostBtn';
import SearchBar from '../components/common/SearchBar';

import MyStarRating from '../components/post/MyStarRating';
import CommentBox from '../components/post/CommentBox';
import AtFriends from '../components/post/AtFriends';

const PostScreen = ({ navigation, route }) => {
    const [searchText, setSearchText] = useState("");
    const [clicked, setClicked] = useState(false);
    const [star, setStar] = useState(0);
    const [comment, setComment] = useState("");

    // selected friends to notify, passed from SelectScreen
    const fri = route.params ? route.params.fri : [];

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar
                left={
                    <BackBtn onPress={() => navigation.navigate('SpotHome')} />}
                right={
                    <PostBtn onPress={() => navigation.navigate('Post')} />
                }
            />

            <ScrollView style={styles.contentContainer}>
                <View style={styles.searchContainer}>
                    <Text style={styles.searchLabel}>Restaurant</Text>
                    <View style={styles.search}>
                        <SearchBar
                            searchText={searchText}
                            setSearchText={setSearchText}
                            clicked={clicked}
                            setClicked={setClicked}
                        />
                    </View>
                </View>

                <MyStarRating star={star} setStar={setStar} />

                <CommentBox
                    onChangeText={setComment}
                    value={comment}
                />

                <AtFriends
                    title="Notify Friends"
                    names={fri}
                    onPress={() => navigation.navigate("Select", { preScreen: 'Post', fri })}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default PostScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: pxToDp(31),
        flex: 1, // to let ScrollView auto fills the space, its container should also set flex
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchLabel: {
        fontSize: pxToDp(20),
        fontWeight: '400',
    },
    search: {
        width: pxToDp(208),
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