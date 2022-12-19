import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../functions/pxToDp';

import HeaderBar from '../components/common/HeaderBar';
import WeekCalendar from '../components/calendar/WeekCalendar';
import EventList from '../components/calendar/EventList';

const eventData = {
    '2022-12-12': [
        {
            name: "Hing Wa",
            time: '14:00 ~ 16:00',
            past: true,
            people: ["Joakim Gustafsson"]
        },
    ],
    '2022-12-14': [
        {
            name: "Egg & Milk",
            time: '9:30 ~ 12:00',
            past: true,
            people: ["Dennis Denito", "Jan Bjork"]
        },
        {
            name: "Hing Wa",
            time: '14:00 ~ 16:00',
            past: true,
            people: ["Joakim Gustafsson"]
        },
    ],
    '2022-12-17': [
        {
            name: "Egg & Milk",
            time: '9:30 ~ 12:00',
            past: true,
            people: ["Dennis Denito", "Jan Bjork"]
        },
        {
            name: "Hing Wa",
            time: '14:00 ~ 16:00',
            past: false,
            people: ["Joakim Gustafsson"]
        },
        {
            name: "Sing Sing",
            time: '18:00 ~ 22:00',
            past: false,
            people: ["Joakim Gustafsson", "Yining Li", "Tahiko Matsui"]
        },
    ],
    '2022-12-18': [
        {
            name: "Egg & Milk",
            time: '9:30 ~ 12:00',
            past: false,
            people: ["Dennis Denito", "Jan Bjork"]
        },
    ],
};

const CalendarScreen = ({ navigation }) => {

    const [curYMD, setCurYMD] = useState("");

    const countEvents = () => {
        const obj = {};
        for (const key in eventData) {
            obj[key] = eventData[key].length;
        }
        return obj;
    }

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
                <WeekCalendar
                    curYMD={curYMD}
                    setCurYMD={setCurYMD}
                    eventNums={countEvents()}
                />

                <ScrollView style={styles.eventContainer}>
                    <EventList events={eventData[curYMD]} isPast={true} />
                    <EventList events={eventData[curYMD]} isPast={false} />
                </ScrollView>

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
        position: 'relative',
        height: pxToDp(638),
        width: pxToDp(328),
        borderRadius: pxToDp(10),
        borderWidth: pxToDp(2),
    },
    headerText: {
        fontSize: pxToDp(32),
        fontWeight: '800',
    },
    eventContainer: {
        paddingHorizontal: pxToDp(16),
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