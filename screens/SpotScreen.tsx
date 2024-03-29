import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import pxToDp from '../functions/pxToDp';

import HeaderBar from '../components/common/HeaderBar';
import SpotOpBtn from '../components/spots/SpotOpBtn';
import SpotPost from '../components/spots/SpotPost';
import BackBtn from '../components/common/BackBtn';
import SpotShort from '../components/spots/SpotShort';

const commentData = [
    {
        name: 'Amy Brown',
        portrait: '0',
        star: 5.0,
        timestamp: "32 minutes ago",
        pics: ["0", "1", "2"],
        liked: false,
        saved: false,
        likes: ["Olivia Lundin", "Dennis Denito"],
        comment: 'For everyone who loves chicken, you should definitely come here! Omg they have the best fried chicken in gtg. A solid 10/10.',
        replies: [
            { name: "Olivia Lundin", reply: "Looking yum! What is in the last pic?" }
        ]
    },
    {
        name: 'Joakim Gustafsson',
        portrait: '1',
        star: 4.5,
        timestamp: "2 August",
        pics: ["0"],
        liked: false,
        saved: false,
        likes: ["Dennis Denito"],
        comment: "I love their garlic fries! So flavourful! Wow they did put a lot of garlic here! My best advice: don't eat them if you're on a date, can't talk to anyone without smelling like...",
        replies: []
    },
    {
        name: 'Yining Li',
        portrait: '2',
        star: 4.0,
        timestamp: "17 July",
        pics: ["0", "1", "2", "3", "4"],
        liked: false,
        save: false,
        likes: ["Tahiko Matsui"],
        comment: 'Everything is good. Zhiran said the sweet & sour chicken is waaaaay too sweet but I think it was really good. I have a sweet tooth tho! Not sure if you guys would like it.',
        replies: [
            { name: "Tahiko Matsui", reply: "I have a sweet tooth too! Should have invited me, haven't seen you and Zhiran in a loooong time!" },
            { name: "Liyin Li", reply: "Let's hangout soon!" }
        ]
    },
]

const size = pxToDp(32);
const color = '#F1B94C';

const SpotScreen = ({ navigation, route }) => {

    const spot = route.params?.spot;

    const handleStatusChange = (name, status) => {
        commentData.map(c => {
            if (c.name == name) { // the name of the person the comment belongs to
                c[status] = !c[status]; // status "loved" or "saved"
                if (status === "liked") {
                    const [end] = c.likes.slice(-1);
                    // add the current user to those who liked this comment if haven't liked
                    // or delete the current users
                    end == "You" ? c.likes.pop() : c.likes.push("You");
                }
            }
        })
    };

    const handleReplyAdded = (name, reply) => {
        commentData.map(c => {
            if (c.name === name) {
                c.replies.push({ name: "you", reply: reply })
            }
        })
    };

    return (
        <SafeAreaView style={styles.container}>

            <HeaderBar
                left={
                    <BackBtn onPress={() => navigation.navigate('SpotHome')} />}
                right={
                    <SpotOpBtn onAdd={() => navigation.dispatch(StackActions.push("AddOnDate",
                    { preScreen: "Spot", fri: [], location: spot.name }))} />
                }
            />

            <ScrollView>
                <SpotShort spot={spot} />

                <View style={styles.commentsContainer}>
                    <View style={styles.comTitle}>
                        <Text style={styles.titleText}>Post</Text>
                        <Pressable
                            onPress={() => navigation.navigate('Post', {spotName:spot.name})}
                        >
                            {({ pressed }) => {
                                const name = pressed ? "ios-create" : "create-outline";
                                return (
                                    <Ionicons name={name} size={size} color={color} />
                                )
                            }}
                        </Pressable>
                    </View>
                    {commentData.map(c => {
                        return (
                            <SpotPost
                                key={c.name}
                                post={c}
                                onStatusChange={handleStatusChange}
                                onReplyAdded={handleReplyAdded}
                            />
                        )
                    })}
                </View>

                <View style={{ height: 100 }}></View>
            </ScrollView>
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
    },
    comTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: pxToDp(31),
        marginTop: pxToDp(38),
    },
    titleText: {
        fontSize: pxToDp(25),
        fontWeight: '800',
    },
    createPost: {
        width: pxToDp(32),
        height: pxToDp(32),
        resizeMode: 'stretch',
    }
}
);