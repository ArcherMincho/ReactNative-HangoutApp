import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import pxToDp from '../../functions/pxToDp';


const SpotOpBtn = props => {

    const sources = [
        {
            name: "bookmark",
            source: require('../../assets/yellow/bookmark.png')
        },
        {
            name: "plus",
            source: require('../../assets/yellow/plus.png')
        },
        {
            name: "share",
            source: require('../../assets/yellow/share.png')
        }
    ]

    return (
        <View style={styles.container}>
            {sources.map(i => {
                return (
                    <TouchableOpacity
                        key={i.name}
                        onPress={() => {}}
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