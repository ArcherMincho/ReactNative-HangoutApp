import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';

const SpotItem = props => {
    return (
        <View style={[styles.container, props.myStyle]}>
            <View style={styles.imgContainer}></View>

            <View style={styles.infoContainer}>
                <View style={styles.title}>
                    <Text>Abc Restaurant</Text>
                    <Text>135kr/person</Text>
                </View>
                <View style={styles.position}>
                    <Text>Scandinavian</Text>
                    <Text>868m</Text>
                </View>
                <Text>Recommended by xxx,xxx</Text>
                <View style={styles.comment}>
                    <View style={styles.commentPortrait}></View>
                    <Text>"xxxx tastes good, it's the best xxx in town"</Text>
                </View>
            </View>
        </View>
    )
}

export default SpotItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%',
        marginBottom: '8%',

        // for IOS
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: .8,
        shadowRadius: 2,
        // for Android
        elevation: 2,
    },
    imgContainer: {
        width: '30%',
        height: '40%',
        padding: 30,
        marginRight: '3%',
        backgroundColor: 'gray',
    },
    infoContainer: {
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    position: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    comment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    commentPortrait: {
        borderRadius: 50,
        borderWidth: 10,
        margin: 5,
        backgroundColor: 'gray',
    }
})