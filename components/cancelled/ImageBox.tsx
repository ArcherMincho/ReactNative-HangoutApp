import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';

const ImageBox = props => {
    const img = props.img ? props.img : '../../assets/plus.png';

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/plus.png')} />
        </View>
    )
}

export default ImageBox;

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
    },
    img: {
        flex: 1,
    }
})