import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import pxToDp from '../../functions/pxToDp';

const SpotInfo = props => {
    const fontColor = props.fontColor || 'white';
    const spot = props.spot;
    const lastPromoter = spot.promoters.pop() || 'Yining Li';
    const promoters = ['Amy Brown', 'Joakim Gustafsson'];

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <View style={styles.title}>
                    <Text style={[styles.heavyText, { color: fontColor }]}>
                        {spot.name}
                    </Text>
                    <Text style={[styles.lightText, { color: fontColor }]}>
                        {spot.star} stars
                    </Text>
                </View>
                <View style={styles.position}>
                    <Text style={[styles.lightText, { color: fontColor }]}>
                        {spot.location}
                    </Text>
                    <Text style={[styles.lightText, { color: fontColor }]}>
                        Opens {spot.open}
                    </Text>
                    <Text style={[styles.lightText, { color: fontColor }]}>
                        {spot.distance}m
                    </Text>
                </View>
            </View>


            <Text style={[styles.mediumText, { color: fontColor }]}>
                <Text>Recommended by </Text>
                {promoters.map(i => {
                    return (
                        <Text style={{ fontWeight: '600' }}>{i}, </Text>
                    )
                })}
                <Text>and </Text>
                <Text style={{ fontWeight: '600' }}>{lastPromoter}</Text>
                <Text>.</Text>
            </Text>


        </View>
    )
}

export default SpotInfo;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: '7%',
        paddingVertical: '4%',
        backgroundColor: '#83BB93',

        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(10),

        // // for IOS
        // shadowColor: '#999',
        // shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: .8,
        // shadowRadius: pxToDp(10),
        // // for Android
        // elevation: 2,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        alignItems: 'flex-start',
    },
    position: {
        alignItems: 'flex-end',
        paddingTop: pxToDp(1.5),
    },
    lightText: {
        fontSize: pxToDp(10.5),
        fontWeight: '400',
        marginBottom: pxToDp(3),
    },
    mediumText: {
        fontSize: pxToDp(12.5),
        fontWeight: '400',
        marginBottom: pxToDp(3),
    },
    heavyText: {
        fontSize: pxToDp(15),
        fontWeight: '600',
        marginBottom: pxToDp(3),
    }
})