import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../functions/pxToDp';

import BackBtn from '../components/common/BackBtn';
import HeaderBar from '../components/common/HeaderBar';
import InfoInput from '../components/plan/InfoInput';
import TimeInput from '../components/plan/TimeInput';
import InviteBox from '../components/plan/InviteBox';


const EditPlanScreen = ({ navigation, route }) => {

    const event = route.params ? route.params.event : {};
    const YMD = route.params?.YMD;

    // selected friends for filtering, passed from SelectScreen
    const fri = route.params?.fri || event?.people || [];

    const [location, setLocation] = useState(event?.name || "");
    const [date, setDate] = useState(YMD?.slice(5) || "");
    const [start, setStart] = useState(event?.time?.slice(0, 5) || "");
    const [end, setEnd] = useState(event?.time?.slice(8, 13) || "");

    console.log(start + end);


    // to display the plan for the right date in Calendar
    const createYMD = () => {
        return YMD?.slice(0, 4) + "-" + date;
    };

    // to display the plan in Calendar
    const createPlanInfo = () => {
        const sTime = start || "00:00";
        const eTime = end || "00:00";
        return {
            name: location,
            time: sTime + " ~ " + eTime,
            past: false,
            people: fri,
        };
    };

    // when the Leave button is clicked on
    const handleLeave = () => {
        navigation.navigate("Calendar",
            { del: true, YMD, name: event?.name }
        );
    }

    // when the Update button is clicked on
    const handleUpdate = () => {
        navigation.navigate("Calendar",
            {
                upd: true,
                YMD,
                name: event.name,
                plan: { YMD: createYMD(), planInfo: createPlanInfo() }
            }
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar
                center={
                    <View>
                        <Text style={styles.headerText}>Event</Text>
                    </View>
                }
                leftFixed={
                    <BackBtn onPress={() => navigation.goBack()}
                    />
                }
            />

            <ScrollView style={styles.contentContainer}>
                <View style={styles.formContainer}>
                    <View style={styles.locationInput}>
                        <InfoInput
                            title="Location"
                            value={location}
                            onChangeText={setLocation}
                        />
                    </View>
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
                    <InviteBox
                        people={fri}
                        onPress={() => navigation.navigate("Select", { preScreen: route.name, fri })}
                    />
                    <Pressable
                        onPress={handleUpdate}
                        style={({ pressed }) => [
                            styles.btn, styles.updateBtn,
                            { backgroundColor: '#F1B94C' },
                            pressed && styles.onPressed]
                        }
                    >
                        <Text style={styles.btnText}>Update</Text>
                    </Pressable>
                </View>

                <View style={styles.btnContainer}>
                    <Pressable
                        onPress={handleLeave}
                        style={({ pressed }) => [styles.btn, pressed && styles.onPressed]}
                    >
                        <Text style={styles.btnText}>Leave</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        style={({ pressed }) => [
                            styles.btn,
                            { backgroundColor: '#F28F8A' },
                            pressed && styles.onPressed]
                        }
                    >
                        <Text style={styles.btnText}>Cancel</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default EditPlanScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        // paddingBottom: pxToDp(200),
    },
    headerText: {
        fontSize: pxToDp(25),
        fontWeight: '800',
        textAlign: 'center',
    },
    contentContainer: {
        marginHorizontal: pxToDp(29),
    },
    formContainer: {
        width: pxToDp(300),
        alignSelf: 'center',

        backgroundColor: 'white',
        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
    },
    locationInput: {
        marginVertical: pxToDp(38),
    },
    timeInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: pxToDp(250),
        marginVertical: pxToDp(38),
    },
    updateBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        width: pxToDp(168),
        height: pxToDp(40),
        marginTop: pxToDp(24),
        marginBottom: pxToDp(16),

        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
        borderColor: 'black',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: pxToDp(-24),
        zIndex: -1,

        width: pxToDp(328),
        height: pxToDp(112),
        paddingHorizontal: pxToDp(16),
        paddingTop: pxToDp(48),

        backgroundColor: '#75CDF1',
        borderRadius: pxToDp(20),
        borderWidth: pxToDp(2),
    },
    btn: {
        width: pxToDp(136),
        height: (40),
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
        borderColor: 'black',
    },
    onPressed: {
        borderColor: '#F1B94C',
    },
    btnText: {
        fontSize: pxToDp(22),
        fontWeight: '400',
    },


});