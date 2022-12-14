import { StyleSheet, View, Image, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5  } from '@expo/vector-icons';
import pxToDp from '../functions/pxToDp';

const SpotOpBtn = props => {
    const color = '#F1B94C';
    const size = pxToDp(27);
    return (
        <View style={styles.container}>
            <Pressable>
                <FontAwesome5 name="bookmark" size={size-1} color={color} />
            </Pressable>
            <Pressable onPress={props.onAdd}>
                <FontAwesome name="plus" size={size} color={color} />
            </Pressable>
            <Pressable>
                <FontAwesome name="share" size={size} color={color} />
            </Pressable>
        </View>

    )
}

export default SpotOpBtn;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: pxToDp(100),
    },
})