import { StyleSheet, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';
import img_load from '../../functions/img_load';

const ImageBox = props => {
    const img = img_load['../../aassets/' + props.img]

    return (
        <View>
            {img
                ? <Image style={styles.img} source={img} />
                : <AntDesign name="plussquare" size={pxToDp(90)} color="#E4E4E4" />
            }
        </View>
    )
}

export default ImageBox;

const styles = StyleSheet.create({
    img: {
        width: pxToDp(90),
        height: pxToDp(90),
        resizeMode: 'stretch',
        borderRadius: pxToDp(3),
        backgroundColor: '#E4E4E4'
    }
})