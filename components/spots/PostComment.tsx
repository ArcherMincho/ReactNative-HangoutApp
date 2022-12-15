/**
 * Component for viewing liked people and comments to this post
 */

import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';

const PostComment = props => {
    // Here, const likes = props.likes; will cause a problem:
    // since props.likes is an Array, the local likes variable is actually a pointer
    // therefore, likes.pop() will change the original props.likes data,
    // and everytime this component is rendered the original props.likes will delete its last elem
    const likes = props.likes.slice();
    const last = likes.pop();
    const replies = props.replies;
    const { inputVisible, onSubmitEditing, reply, setReply } = props;

    return (
        <View style={styles.container}>
            <View style={styles.likedContainer}>
                <Text>
                    <FontAwesome5 name="heart" size={pxToDp(15)} color="black" />
                    <Text>  </Text>
                    {likes && likes.map(i => {
                        return (
                            <Text key={i} style={styles.heavyText}>{i}, </Text>
                        )
                    })}
                    <Text style={styles.heavyText}>{last}</Text>
                </Text>
            </View>

            <View>
                {replies && replies.map(i => {
                    return (
                        <Text key={i.name} style={styles.reply}>
                            <Text style={styles.heavyText}>{i.name}  </Text>
                            {i.reply}
                        </Text>
                    )
                })}

                {inputVisible && (
                    <TextInput
                        style={styles.input}
                        placeholder="Comment.."
                        value={reply}
                        onChangeText={setReply}
                        autoFocus={true}
                        onSubmitEditing={onSubmitEditing}
                    />
                )}
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
        paddingVertical: pxToDp(5),
    },
    heavyText: {
        fontSize: pxToDp(13),
        fontWeight: '700',
    },
    reply: {
        paddingBottom: pxToDp(5),
    },
    input: {
        marginHorizontal: pxToDp(10),
        marginBottom: pxToDp(10),
        borderBottomWidth: pxToDp(1),
        borderColor: '#A6A3A3',
    }
})