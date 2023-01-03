import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { StackActions } from '@react-navigation/native';
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
            time: '09:30 ~ 12:00',
            past: true,
            people: ["Dennis Denito", "Linnea Nilsson"]
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
            time: '09:30 ~ 12:00',
            past: true,
            people: ["Dennis Denito", "Linnea Nilsson"]
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
            people: ["Joakim Gustafsson", "Yining Li", "Oscar Larsson"]
        },
    ],
    '2022-12-19': [
        {
            name: "Egg & Milk",
            time: '09:30 ~ 12:00',
            past: false,
            people: ["Dennis Denito", "Yining Li"]
        },
    ],
};

const CalendarScreen = ({ navigation, route }) => {

    const [curYMD, setCurYMD] = useState("");

    // add a listener to navigation on route
    useEffect(() => {
        return navigation.addListener('focus', () => {
            const isDelete = route.params?.del;
            const isUpdate = route.params?.upd;
            const isAdd = route.params?.add;

            if (isDelete || isUpdate) {
                // to delete an event when the user left it
                const ymd = route.params.YMD;
                const n = route.params.name;
                eventData[ymd] = eventData[ymd]?.filter(({ name }) => name !== n);
                setCurYMD(route.params?.YMD);
            }
            if (isUpdate || isAdd) {
                // to finish the left update
                // pr to get data for added plans passed from AddPlanScreen
                addPlan(route.params?.plan);
            }
            // console.log(eventData[route.params?.YMD]);
        })
    }, [route]);

    // add plan to Calendar
    const addPlan = (plan) => {
        const ymd = plan.YMD;
        const name = plan.planInfo.name;
        const planInfo = plan.planInfo;

        if (eventData.hasOwnProperty(ymd)) {
            const date = eventData[ymd];
            const index = findEventIndex(ymd, name);
            if (index > -1) {
                date[index] = planInfo;
            } else {
                date.push(planInfo);
            }
        } else {
            eventData[ymd] = [planInfo];
        }
        setCurYMD(ymd);
        // console.log(eventData[ymd]);
    }

    // find an event with its name for a date with the given YMD
    const findEventIndex = (ymd, name) => {
        const date = eventData[ymd];
        for (let i = 0; i < date.length; i++) {
            if (date[i].name === name) {
                return i;
            }
        }
        return -1;
    }

    const countEvents = () => {
        const obj = {};
        for (const key in eventData) {
            if(eventData[key])
                obj[key] = eventData[key].length;
        }
        return obj;
    }

    const handleAddingNavigation = () => {
        const cur = curYMD.slice();
        setCurYMD("");
        navigation.dispatch(StackActions.push("AddOnDate",
            { preScreen: "Calendar", fri: [], YMD: cur }));
    }

    const handleEventPress = (e) => {
        const cur = curYMD.slice();
        setCurYMD("");
        navigation.navigate("Edit", { fri: e.people, YMD: cur, event: e });
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
                    <EventList events={eventData[curYMD]} isPast={true}
                        onEventPress={handleEventPress}
                    />
                    <EventList events={eventData[curYMD]} isPast={false}
                        onAddPress={handleAddingNavigation}
                        onEventPress={handleEventPress}
                    />
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
        paddingBottom: pxToDp(200),
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