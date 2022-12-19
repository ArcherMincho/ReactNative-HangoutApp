import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useState } from 'react';
import pxToDp from '../../functions/pxToDp';

const MessageBox = props => {
    const { value, onChangeText } = props;
    const [focused, setFocused] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                onChangeText={onChangeText}
                value={value}
                placeholder="Additional Message"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                multiline
            />
            {(focused || (value && value.length > 0)) &&
                <Text style={styles.title}>Message</Text>
            }
        </View>
    )
}

export default MessageBox;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: pxToDp(248),
        height: pxToDp(99),
        paddingVertical: pxToDp(8.5),
        paddingHorizontal: pxToDp(22),
        marginVertical: pxToDp(32),
        alignSelf: 'center',

        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(10),

        backgroundColor: 'white',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowColor: '#EFCAD2',
        shadowOffset: { width: pxToDp(4), height: pxToDp(4) },
    },
    inputText: {
        fontSize: pxToDp(20),
        fontWeight: '400',
    },
    title: {
        position: 'absolute',
        top: pxToDp(-7),
        left: pxToDp(15),
        height: pxToDp(10),
        paddingHorizontal: pxToDp(8),
        backgroundColor: 'white',
        fontSize: pxToDp(10),
        fontWeight: '500',
    }
})