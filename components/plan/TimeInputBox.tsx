import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';

const TimeInputBox = props => {
    const { title, value, onChangeText } = props;
    const [hour, setHour] = useState("");
    const [min, setMin] = useState("");
    let hourInput, minInput;

    // jump to the input for minutes when hour is filled
    useEffect(() => {
        if (hour.length === 2 && min.length === 0)
            minInput.focus();
    }, [hour, min]);

    // add 0 to single-digit hour automatically when the hour input is blurred
    const handleEnded = (t, set) => {
        const time = t.slice();
        if (time.length > 0 && time.length < 2) {
            set("0" + time);
        }
    };

    // jump to the input for hour when deleted continuously
    const handleBackspaceDown = (e) => {
        if (min.length === 0 && e.nativeEvent.key === 'Backspace') {
            hourInput.focus();
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                ref={r => { hourInput = r }}
                style={styles.input}
                onChangeText={setHour}
                value={value ? value.slice(0, 2) : hour}
                placeholder={"00"}
                maxLength={2}
                keyboardType="numeric"
                onBlur={() => handleEnded(hour, setHour)}
            />
            <Text style={styles.colon}>:</Text>
            <TextInput
                ref={r => { minInput = r }}
                style={styles.input}
                onChangeText={setMin}
                value={value ? value.slice(2, 4) : min}
                placeholder={"00"}
                maxLength={2}
                keyboardType="numeric"
                autoFocus={false}
                onBlur={() => handleEnded(min, setMin)}
                onKeyPress={handleBackspaceDown}
            />
            <Pressable>
                {({ pressed }) => (
                    <Entypo
                        name="chevron-down"
                        size={pxToDp(20)}
                        color={pressed ? '#F1B94C' : 'black'}
                    />
                )}
            </Pressable>

            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default TimeInputBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        position: 'relative',
        width: pxToDp(112),
        paddingVertical: pxToDp(8.5),
        paddingLeft: pxToDp(13),
        paddingRight: pxToDp(7),

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
    },
    colon: {
        flex: 0.3,
        fontSize: pxToDp(18),
        fontWeight: '500',
        color: "gray",
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