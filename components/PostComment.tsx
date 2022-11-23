import { StyleSheet, ScrollView, View, Text, Image, Alert, Pressable } from 'react-native';

const PostComment = props => {
    return (
        <View style={styles.container}>
            <View style={styles.img}></View>
            <View style={styles.comment}>
                <Text>{props.name}</Text>
                <Text>{props.comment}</Text>
                <View style={styles.photoContainer}>
                    <View style={styles.photo}></View>
                    <View style={styles.photo}></View>
                    <View style={styles.photo}></View>
                    <View style={styles.photo}></View>
                    <View style={styles.photo}></View>
                </View>
            </View>
        </View>
    )
}

export default PostComment;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

        // for IOS
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: .8,
        shadowRadius: 2,
        // for Android
        elevation: 2,
    },
    img: {
        width: 60,
        height: 60,
        paddingHorizontal: 10,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: 'gray',
    },
    comment: {
        width: '80%',
    },
    photoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    photo: {
        width: 70,
        height: 70,
        marginRight: '5%',
        marginTop: '8%',
        backgroundColor: 'gray',
    }

})