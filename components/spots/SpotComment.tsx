import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';

const SpotComment = props => {
    const size = pxToDp(24);
    const gray = '#A6A3A3';
    const red = '#F28F8A';
    const pink = '#EFCAD2';

    return (
        <View style={styles.container}>
            <Pressable>
                {props.liked ?
                    <FontAwesome name="heart" size={size} color={red} />
                    : <FontAwesome name="heart-o" size={size} color={gray} />
                }
            </Pressable>

            <View style={styles.rightContainer}>
                <Pressable>
                    <FontAwesome5 name="comment-alt" size={size} color={gray} />
                </Pressable>
                <Pressable>
                    <FontAwesome5 name="bookmark" size={size} color={gray} />
                </Pressable>
            </View>

        </View>
    )
}

export default SpotComment;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: pxToDp(5),
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: pxToDp(53),
    }
})