import { StyleSheet, View, Text, Image, Alert, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SpotOpBtn = props => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.starBtn}>
                <FontAwesome name="star" size={25} color={'gray'} />
            </Pressable>
            <Pressable style={styles.addBtn} onPress={props.onAdd}>
                <FontAwesome name="plus" size={25} color={'gray'} />
            </Pressable>
            <Pressable style={styles.shareBtn}>
                <FontAwesome name="share" size={25} color={'gray'} />
            </Pressable>
        </View>

    )
}

export default SpotOpBtn;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    starBtn: {
        marginRight: 10,
    },
    addBtn: {
        marginRight: 10,
    },
    shareBtn: {

    }

})