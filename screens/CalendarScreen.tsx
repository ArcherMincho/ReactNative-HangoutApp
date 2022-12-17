import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../functions/pxToDp';

import HeaderBar from '../components/common/HeaderBar';
import WeekCalendar from '../components/calendar/WeekCalendar';

const CalendarScreen = ({ navigation }) => {

    // const [selected, setSelected] = useState('');
    // const [dotted, setDotted] = useState({'2022-12-01':2, '2022-12-12':1, '2022-12-22':4, '2022-12-25':5});




    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar
                left={
                    <View>
                        <Text style={styles.headerText}>My Plans</Text>
                    </View>
                }
                right={
                    <Pressable onPress={() => navigation.navigate("Post")}>
                        <FontAwesome5 name="comment-alt" size={pxToDp(26)} color='black' />
                    </Pressable>
                }
            />

            <View style={styles.contentContainer}>
                <WeekCalendar />

                {/* for decoration */}
                <View style={styles.border} />
            </View>



        </SafeAreaView>
    );
}

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    contentContainer: {
        height: pxToDp(638),
        width: pxToDp(328),
        borderRadius: pxToDp(10),
        borderWidth: pxToDp(2),
    },
    headerText: {
        fontSize: pxToDp(32),
        fontWeight: '800',
    },
    border: {
        position: 'absolute',
        top: pxToDp(4),
        left: pxToDp(4),
        bottom: pxToDp(-7.5),
        right: pxToDp(-6.5),

        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
        borderColor: '#83BB93',
        borderLeftColor: 'rgba(0,0,0,0)',
        borderTopColor: 'rgba(0,0,0,0)',
        zIndex: -10,
    }
})