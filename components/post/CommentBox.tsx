import { StyleSheet, View, TextInput } from 'react-native';
import pxToDp from '../../functions/pxToDp';

const CommentBox = props => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder="Let's talk about your experience in this restaurant..."
                multiline
            // numberOfLines={4}
            />

            {/* for decoration */}
            <View style={styles.border} />
        </View>
    )
}

export default CommentBox;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
        paddingHorizontal: pxToDp(25),
        paddingVertical: pxToDp(15),
    },
    inputText: {
        fontSize: pxToDp(18),
        height: pxToDp(150),
    },
    imgContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    border :{
        position: 'absolute',
        top: pxToDp(4),
        left: pxToDp(4),
        bottom: pxToDp(-7.5),
        right: pxToDp(-6.5),

        borderWidth: pxToDp(2.5),
        borderRadius: pxToDp(10),
        borderColor: '#EFCAD2',
        borderLeftColor: 'rgba(0,0,0,0)',
        borderTopColor: 'rgba(0,0,0,0)',
    }
})