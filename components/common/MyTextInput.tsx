import { StyleSheet, TextInput, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';

const MyTextInput = props => {
    return (
            <TextInput 
                style={styles.textInput}
                {...props}
                editable
            />
    )
}

export default MyTextInput;

const styles = StyleSheet.create({
    textInput: {
        padding: 0,
        height: '30%',
        textAlignVertical: 'top',
        fontSize: 14,
        paddingLeft: 20,
        marginBottom: 10,
    }
})