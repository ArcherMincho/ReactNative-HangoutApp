/**
 * Component for Social operation of a post
 * including liking / un-liking, commenting, and collecting
 */

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';

const PostSocialOp = props => {
    const size = pxToDp(24);
    const gray = '#A6A3A3';
    const yellow = '#F1B94C';
    const red = '#F28F8A';
    const pink = '#EFCAD2';

    const { liked, saved, onStatusChange, setInputVisible } = props;

    return (
        <View style={styles.container}>
            <Pressable onPress={() => { onStatusChange("liked") }}>
                {liked ?
                    <FontAwesome name="heart" size={size - 1} color={pink} />
                    : <FontAwesome5 name="heart" size={size} color={gray} />
                }
            </Pressable>

            <View style={styles.rightContainer}>
                <Pressable onPress={() => { setInputVisible(true) }} >
                    {({ pressed }) => {
                        return (
                            pressed
                                ? <FontAwesome5 name="comment-alt" size={size-1} color={yellow} />
                                : <FontAwesome5 name="comment-alt" size={size} color={gray} />
                        )
                    }}
                </Pressable>
                <Pressable onPress={() => { onStatusChange("saved") }}>
                    {saved ?
                        <FontAwesome name="bookmark" size={size} color={yellow} />
                        : <FontAwesome5 name="bookmark" size={size} color={gray} />
                    }
                </Pressable>
            </View>

        </View>
    )
}

export default PostSocialOp;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '95%',
        paddingVertical: pxToDp(5),
        marginBottom: pxToDp(5),
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: pxToDp(53),
    }
})