import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import pxToDp from '../../functions/pxToDp';

const SpotInfo = props => {
    const fontColor = props.fontColor || 'white';
    const spot = props.spot;

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

            {spot.promoter1 &&
                <Text style={[styles.mediumText, { color: fontColor }]}>
                    <Text>Recommended by </Text>

                    <Text style={{ fontWeight: '600' }}>{spot.promoter1}</Text>
                    <Text>, </Text>
                    {spot.promoter2 &&
                        <Text style={{ fontWeight: '600' }}>{spot.promoter2}</Text>
                    }
                    <Text>, etc.</Text>
                </Text>
            }


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
        fontSize: pxToDp(11),
        fontWeight: '500',
        marginBottom: pxToDp(3),
    },
    mediumText: {
        fontSize: pxToDp(13),
        fontWeight: '400',
        paddingTop: pxToDp(5),
    },
    heavyText: {
        fontSize: pxToDp(15.5),
        fontWeight: '600',
    }
})