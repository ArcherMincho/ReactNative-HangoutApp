import { StyleSheet, Pressable, Text } from 'react-native';
import pxToDp from "../../functions/pxToDp";

const PostBtn = props => {
    return (
        <Pressable
            onPress={props.onPress}
            style={styles.container}
        >
            <Text style={styles.text}>Post</Text>
        </Pressable>
    )
}

export default PostBtn;

const styles = StyleSheet.create({
    container: {
        width: pxToDp(98),
        paddingVertical: pxToDp(7),

        backgroundColor: '#F1B94C',
        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(10),
    },
    text: {
        fontSize: pxToDp(20),
        fontWeight: '500',
        textAlign: 'center',
    }
})