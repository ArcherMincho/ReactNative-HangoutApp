import { StyleSheet, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import pxToDp from '../../functions/pxToDp';


const SpotOpBtn = props => {

    const [saved, setSaved] = useState(false);
    const sources = [
        {
            name: "plus",
            source: require('../../assets/yellow/plus.png'),
            onPress: props.onAdd
        },
        {
            name: "share",
            source: require('../../assets/yellow/share.png'),
            onPress: () => {}
        }
    ]


    return (
        <View style={styles.container}>
            <Pressable onPress={() => setSaved(!saved)}>
                {
                    saved
                        ? <FontAwesome name="bookmark" size={pxToDp(27)} color='#F1B94C' />
                        : <FontAwesome5 name="bookmark" size={pxToDp(27)} color='#F1B94C' />
                }
            </Pressable>
            {sources.map(i => {
                return (
                    <TouchableOpacity
                        key={i.name}
                        onPress={i.onPress}
                    >
                        <Image source={i.source} style={styles.img} />
                    </TouchableOpacity>
                )
            })}
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
    img: {
        width: pxToDp(27),
        height: pxToDp(27),
        resizeMode: 'stretch'
    }
})