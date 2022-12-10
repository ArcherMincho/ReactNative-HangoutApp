import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import pxToDp from '../../functions/pxToDp';

const SpotComment = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleContainer}>
                <Text style={styles.titleText}>Latest Post from </Text>
                <Text style={[styles.titleText, { fontWeight: '700' }]}>
                    {props.promoter}
                </Text>
            </Text>

            <Text style={styles.commentText}>{props.latest}</Text>
        </View>
    );
};

export default SpotComment;

const styles = StyleSheet.create({
    container: {
        width: pxToDp(300),
        // height: pxToDp(178),
        padding: pxToDp(22),
        paddingTop: pxToDp(75),
        marginTop: pxToDp(25),

        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(10),
    },
    titleContainer: {
        marginBottom: pxToDp(16),
    },
    titleText: {
        fontSize: pxToDp(15),
        fontWeight: '500',
    },
    commentText: {
        fontSize: pxToDp(13),
        fontWeight: '500',
    }
})