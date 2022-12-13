import { StyleSheet, View, Text, Image, Pressable, Dimensions } from 'react-native';
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

            {/* for decoration */}
            <View style={styles.border} />
        </View>
    );
};

export default SpotComment;

const styles = StyleSheet.create({
    container: {
        position: 'relative',

        width: pxToDp(300),
        // height: pxToDp(178),
        padding: pxToDp(22),
        paddingTop: pxToDp(75),
        marginTop: pxToDp(25),

        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(10),

        // backgroundColor: 'white',
        // shadowColor: '#83BB93',
        // shadowOffset: {width: pxToDp(4),height: pxToDp(4)},
        // shadowOpacity: 1,
        // shadowRadius: 0,
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
    },
    border :{
        position: 'absolute',
        top: pxToDp(4),
        left: pxToDp(4),
        bottom: pxToDp(-7.5),
        right: pxToDp(-6.5),

        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
        borderColor: '#83BB93',
        borderLeftColor: 'rgba(0,0,0,0)',
        borderTopColor: 'rgba(0,0,0,0)',
    }
})