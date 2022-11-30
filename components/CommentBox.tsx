import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';

import MyTextInput from './common/MyTextInput';
import ImageBox from './common/ImageBox';

const CommentBox = props => {
    return (
        <View style={styles.container}>
            <MyTextInput 
                onChangeText={props.onChangeText}
                value={props.value}
                multiline
                numberOfLines={4}
                />

            <View style={styles.imgContainer}>
                <ImageBox />
            </View>
        </View>
    )
}

export default CommentBox;

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    imgContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // borderWidth: 1,
    }
})