import { StyleSheet, View, Pressable } from 'react-native';
import { useState } from 'react';
import pxToDp from '../../functions/pxToDp';

import SpotInfo from './SpotInfo';
import SpotPhoto from './SpotPhoto';
import SpotComment from './SpotComment';
import PopupBar from './PopupBar';


const SpotItem = props => {
    const spot = props.spot;
    const [visible, setVisible] = useState(false);

    function handlePress (routeName) {
        props.onPress(routeName, spot);
    }

    return (
        <View style={styles.container}>
            {visible && (
                <PopupBar onPress={handlePress} />
            )}

            <Pressable
                style={styles.infoContainer}
                onPress={() => setVisible(!visible)}
            >
                <SpotInfo spot={spot} />
            </Pressable>

            <SpotPhoto pic={spot.pic} />

            <SpotComment
                latest={spot.latest}
                promoter={spot.promoter1} />

        </View>
    );
}

export default SpotItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'relative',

        width: '100%',
        marginBottom: pxToDp(44),
    },
    infoContainer: {
        width: pxToDp(254),
        position: 'absolute',
        top: pxToDp(168),
        zIndex: 9,
        elevation: 9,
    }
})

