import { StyleSheet, View, Image } from 'react-native';
import pxToDp from '../../functions/pxToDp';
import img_load from '../../functions/img_load';

const SpotPostPics = ({ user, pics }) => {
    return (
        <View style={styles.container}>
            {pics && pics.map(i => {
                return (
                    <Image
                        key={user+i}
                        style={styles.pic}
                        source={img_load["photo" + user + i]}
                    />
                )
            })}
        </View>
    )
}

export default SpotPostPics;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',

        width: '100%',
    },
    pic: {
        resizeMode: 'stretch',
        width: pxToDp(80),
        height: pxToDp(80),
        marginRight: pxToDp(5),
        marginTop: pxToDp(8),
        borderRadius: pxToDp(3),
    }
})