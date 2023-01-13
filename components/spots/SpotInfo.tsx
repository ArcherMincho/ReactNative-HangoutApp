import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import pxToDp from '../../functions/pxToDp';
import StaticRatingStar from './StaticRatingStar';

const SpotInfo = props => {
    const fontColor = props.fontColor || 'white';
    const { bgColor, titleSize, spot } = props;

    return (
        <View style={[
            styles.container,
            bgColor && { backgroundColor: bgColor }
        ]}>
            <View style={styles.titleContainer}>
                <View style={styles.title}>
                    <Text style={[
                        styles.heavyText,
                        { marginBottom: pxToDp(6), color: fontColor },
                        titleSize && { fontSize: titleSize }
                    ]}>
                        {spot.name}
                    </Text>
                    <StaticRatingStar rating={spot.star} fontColor={fontColor} />
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
        marginTop: pxToDp(1.5),
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