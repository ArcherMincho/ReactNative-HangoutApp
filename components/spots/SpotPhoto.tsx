import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import pxToDp from '../../functions/pxToDp';
import img_load from '../../functions/img_load';


const SpotPhoto = props => {
    return (
        <View style={styles.container}>
            <Image
                source={img_load['png'+props.pic]}
                style={styles.img}
            ></Image>

        </View>
    );
};

export default SpotPhoto;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: pxToDp(1),
        borderRadius: pxToDp(10),
        padding: pxToDp(2),
    },
    img: {
        resizeMode: 'stretch',
        width: '99.5%',
        // width: pxToDp(320),
        height: pxToDp(182),
        alignSelf: 'center',
    }
})