import { StyleSheet, View } from 'react-native';
import pxToDp from '../../functions/pxToDp';

import SpotPhoto from './SpotPhoto';
import SpotInfo from './SpotInfo';

const SpotShort = props => {
    const spot = props.spot;
    return (
        <View style={styles.container}>
        <View style={styles.photo}>
            <SpotPhoto pic={spot.pic} />
        </View>
        <View style={styles.info}>
            <SpotInfo
                spot={spot}
                fontColor="black"
                bgColor="white"
                titleSize={pxToDp(25)}
            />
            {/* for decoration */}
            <View style={styles.border} />
        </View>
    </View>
    )
}

export default SpotShort;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: pxToDp(31),
        borderWidth: 1,
    },
    photo: {
        width: pxToDp(328),
        zIndex: 5,

    },
    info: {
        position: 'relative',
        width: pxToDp(300),
        marginTop: pxToDp(-8),
    },
    border: {
        position: 'absolute',
        top: pxToDp(4),
        left: pxToDp(4),
        bottom: pxToDp(-6.5),
        right: pxToDp(-5.5),

        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
        borderColor: '#83BB93',
        borderLeftColor: 'rgba(0,0,0,0)',
        borderTopColor: 'rgba(0,0,0,0)',
    },
})

