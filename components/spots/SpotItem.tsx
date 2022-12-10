import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import pxToDp from '../../functions/pxToDp';
import SpotInfo from './SpotInfo';
import SpotPhoto from './SpotPhoto';
import SpotComment from './SpotComment';


const SpotItem = props => {
    const spot = props.spot;
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <SpotInfo spot={spot} />
            </View>

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

        marginBottom: pxToDp(30),
        marginTop: 20,
    },
    infoContainer: {
        width: pxToDp(254),
        position: 'absolute',
        top: pxToDp(168),
        zIndex: 9,
        elevation: 9,
    }
})

