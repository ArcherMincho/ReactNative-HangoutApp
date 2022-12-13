import { StyleSheet, View, Text, Image, Alert, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';

const StaticRatingStar = ({ rating, fontColor }) => {
    const size = pxToDp(14);
    const color = '#F1B94C';
    let rate = rating;
    return (
        <View style={[styles.container, styles.flexRow]}>
            <View style={[styles.starContainer, styles.flexRow]}>
                {[...Array(5)].map(() => {
                    let name;
                    if (rate >= 1)
                        name = "star";
                    else if (rate == 0.5)
                        name = "star-half-full";
                    else
                        name = "star-o";
                    rate--;
                    return (
                        <FontAwesome key={rate} name={name} size={size} color={color} />
                    )
                })}
            </View>
            <Text style={[styles.lightText, { color: fontColor }]}>{rating}</Text>

        </View>
    );
}

export default StaticRatingStar;

const styles = StyleSheet.create({
    container: {
    },
    starContainer: {
        width: pxToDp(80),
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lightText: {
        fontSize: pxToDp(11),
        fontWeight: '500',
        marginBottom: pxToDp(3),
        marginLeft: pxToDp(4),
    },
});