import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useState } from 'react';
import pxToDp from '../../functions/pxToDp';

const InputBox = props => {
    const { title, value, onChangeText } = props;
    const [focused, setFocused] = useState(false);


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder={title || "..."}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            {props.btn}
            {(focused || (value && value.length > 0)) &&
                <Text style={styles.title}>{title}</Text>
            }
        </View>
    )
}

export default InputBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',

        position: 'relative',
        width: pxToDp(248),
        paddingVertical: pxToDp(8.5),
        paddingHorizontal: '5%',

        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(10),

        backgroundColor: 'white',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowColor: '#EFCAD2',
        shadowOffset: { width: pxToDp(4), height: pxToDp(4) },
    },
    input: {
        flex: 1,
        fontSize: pxToDp(20),
        fontWeight: '500',
        marginLeft: '3%',
        marginRight: '2%',
    },
    title: {
        position: 'absolute',
        top: pxToDp(-7),
        left: pxToDp(15),
        height: pxToDp(10),
        paddingHorizontal: pxToDp(8),
        backgroundColor: 'white',
        fontSize: pxToDp(10),
    }
})