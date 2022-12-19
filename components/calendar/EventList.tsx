import { View, StyleSheet, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';

const EventList = props => {
    const isPast = props.isPast;
    const title = isPast ? "Past" : "Incoming";
    const bgColor = isPast ? '#75CDF1' : '#F1B94C';
    const events = !props.events ? [] : props.events.filter(e => {
        return e.past === isPast;
    });
    const size = pxToDp(24);

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{title} Events</Text>
                {!isPast && (
                    <Pressable onPress={props.onPress}>
                        {({ pressed }) => {
                            return (
                                pressed
                                    ? <AntDesign name="pluscircle" size={size} color='#F1B94C' />
                                    : <AntDesign name="pluscircleo" size={size} color='#F1B94C' />
                            )
                        }}
                    </Pressable>
                )}
            </View>

            <View>
                {events.map(e => (
                    <Pressable
                        key={e.name}
                        style={({ pressed }) => [
                            styles.eventItem,
                            { backgroundColor: bgColor },
                            pressed && { borderColor: bgColor }
                        ]}
                    >
                        <View style={styles.eventTitle}>
                            <Text style={styles.name}>{e.name}</Text>
                            <Text>{e.time}</Text>
                        </View>
                        <Text style={styles.people}>{e.people.join()}</Text>
                    </Pressable>
                ))}
            </View>
        </View>


    )
}

export default EventList;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: pxToDp(12),
        marginBottom: pxToDp(32),

        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: pxToDp(17),
        fontWeight: '600',
    },
    eventItem: {
        padding: pxToDp(15),
        marginTop: pxToDp(16),
        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
        borderColor: 'black',
    },
    eventTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: pxToDp(8),
    },
    name: {
        fontSize: pxToDp(16),
        fontWeight: '500',
    },
    people: {
        fontWeight: '500',
    },
})