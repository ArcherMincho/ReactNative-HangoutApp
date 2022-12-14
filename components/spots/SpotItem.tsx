import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import pxToDp from '../../functions/pxToDp';

import SpotInfo from './SpotInfo';
import SpotPhoto from './SpotPhoto';
import SpotComment from './SpotComment';
import SideBar from './SideBar';


const SpotItem = props => {
    const spot = props.spot;
    const [visible, setVisible] = useState(false);


    return (
        <View style={styles.container}>
            {visible && (
                <SideBar />
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

