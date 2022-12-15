/**
 * Component for viewing liked people and comments to this post
 */

import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';

const PostComment = props => {
    return (
        <View style={styles.container}>
            <View style={styles.likedContainer}>
                <Text>
                    <FontAwesome5 name="heart" size={pxToDp(18)} color="black" />
                </Text>
            </View>
        </View>
    )
}

export default PostComment;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: pxToDp(8),

        borderWidth: pxToDp(1),
        borderRadius: pxToDp(10),
        backgroundColor: '#EFCAD2',
    },
    likedContainer: {
        width: '100%',
        paddingVertical: pxToDp(5),
    },
    likedIcon: {

    }
})