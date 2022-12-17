import { View, StyleSheet, Text, Pressable } from 'react-native';
import pxToDp from '../../functions/pxToDp';


const WeekDateItem = props => {
    const dots = [];
    for(let i = 1; i <= props.dots && i <= 3; i++) {
        dots.push(i);
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={props.onPress}
                style={({ pressed }) =>
                    [styles.dateContainer,
                    props.isToday && styles.today,
                    props.current && styles.current,
                    pressed && styles.onPressed]}
            >
                <Text style={styles.text}>{props.date}</Text>
                <Text style={styles.text}>{props.day}</Text>
            </Pressable>

            <View style={styles.dotContainer}>
                {dots.map(i => (
                    <View key={i+'1'} style={styles.dot}></View>
                ))}
            </View>

        </View>

    )
}

export default WeekDateItem;

const styles = StyleSheet.create({
    container: {

    },
    dateContainer: {
        justifyContent: 'space-between',
        width: pxToDp(29),
        height: pxToDp(65),
        paddingVertical: pxToDp(12),

        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
        borderColor: 'black',
        backgroundColor: '#83BB93',
    },
    text: {
        fontSize: pxToDp(15),
        fontWeight: '800',
        color: 'white',
        textAlign: 'center',
    },
    current: {
        backgroundColor: '#F1B94C',
    },
    today: {
        backgroundColor: '#537D5F',
    },
    onPressed: {
        borderColor: '#F1B94C',
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: pxToDp(11),
    },
    dot: {
        width: pxToDp(6),
        height: pxToDp(6),
        margin: pxToDp(2),
        borderRadius: pxToDp(6),
        backgroundColor: '#D9D9D9',
    }
})