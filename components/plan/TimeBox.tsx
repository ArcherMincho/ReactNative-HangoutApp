import { View, Text, Pressable, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';
import InfoInput from './InfoInput';
import TimeInput from './TimeInput';


const TimeBox = props => {
    const { date, setDate, start, setStart, end, setEnd } = props;

    return (
        <View style={styles.timeContainer}>
            <Text style={styles.dateTitle}>Fill in a time</Text>
            <InfoInput
                title="Date"
                value={date}
                onChangeText={setDate}
                btn={
                    <Pressable>
                        {({ pressed }) => (
                            <FontAwesome5
                                name="calendar-alt"
                                size={pxToDp(23)}
                                color={pressed ? '#F1B94C' : 'black'}
                            />
                        )}
                    </Pressable>
                }
            />
            <View style={styles.timeInput}>
                <TimeInput
                    title="Start time"
                    value={start}
                    onChangeText={setStart}
                />
                <TimeInput
                    title="End time"
                    value={end}
                    onChangeText={setEnd}
                />
            </View>
        </View>
    )
}

export default TimeBox;

const styles = StyleSheet.create({
    timeContainer: {
        marginVertical: pxToDp(30),
        paddingHorizontal: pxToDp(24),
        paddingVertical: pxToDp(16),
        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
    },
    dateTitle: {
        fontSize: pxToDp(12),
        fontWeight: '800',
        paddingBottom: pxToDp(5),
    },
    timeInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: pxToDp(250),
        marginTop: pxToDp(30),
    }
})