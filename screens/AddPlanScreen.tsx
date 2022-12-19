import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import pxToDp from '../functions/pxToDp';

import BackBtn from '../components/common/BackBtn';
import HeaderBar from '../components/common/HeaderBar';
import InfoInput from '../components/plan/InfoInput';
import TimeBox from '../components/plan/TimeBox';
import InviteBox from '../components/plan/InviteBox';
import MessageBox from '../components/plan/MessageBox';

const AddPlanScreen = ({ navigation, route }) => {

    // if navigated from SpotScreen or CalendarScreen
    const preScreen = route.params?.preScreen;

    // selected friends for filtering, passed from SelectScreen
    const fri = route.params ? route.params.fri : [];

    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [message, setMessage] = useState("");

    // time input refs
    let sHour, sMin, eHour, eMin;

    // listen to changes of route with an navigation listener
    // get plan date's YMD when passed from CalendarScreen
    useEffect(() => {
        return navigation.addListener('focus', () => {
            const ymd = route.params?.YMD;
            const loc = route.params?.location;
            if (ymd)
                setDate(ymd.slice(5));
            if (loc)
                setLocation(loc);
        });
    }, [route]);

    // to refresh this screen when any of the bottom buttons is clicked on
    // called by this screen
    const refresh = (obj) => {
        const loc = obj.location || "";
        const d = obj.date || "";
        setLocation(loc);
        setDate(d);
        setStart("");
        setEnd("");
        setMessage("");
        fri.length = 0;
        sHour?.clear();
        sMin?.clear();
        eHour?.clear();
        eMin?.clear();
    }

    // when the Add Locally button is clicked on
    const handleAddLocally = () => {
        if (location.length && date.length && start.length && end.length) {
            const YMD = createYMD();
            const planInfo = createPlanInfo();
            refresh({});
            navigation.navigate("Calendar", { YMD, plan: { YMD, planInfo } });
        }
    }

    // when the Invite button is clicked on
    const handleInvite = () => {
        if (fri.length) {
            handleAddLocally();
        }
    }

    // to display the plan for the right date in Calendar
    const createYMD = () => {
        const year = route.params?.YMD?.slice(0, 4) || (new Date()).getFullYear();
        return year + "-" + date.slice();
    };

    // to display the plan in Calendar
    const createPlanInfo = () => {
        const sTime = start || "00:00";
        const eTime = end || "00:00";
        return {
            name: location.slice(),
            time: sTime.slice() + " ~ " + eTime.slice(),
            past: false,
            people: fri.slice(),
        };
    };

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar
                center={
                    <View>
                        <Text style={styles.headerText}>Add  Plan</Text>
                    </View>
                }
                leftFixed={preScreen &&
                    <BackBtn onPress={() => navigation.goBack()}
                    />
                }
            />

            <View style={styles.contentContainer}>
                <ScrollView style={styles.scrollContainer}>
                    <InfoInput
                        title="Location"
                        value={location}
                        onChangeText={setLocation}
                    />
                    <TimeBox
                        date={date} setDate={setDate}
                        start={start} setStart={setStart}
                        end={end} setEnd={setEnd}
                        sHourRef={r => sHour = r} sMinRef={r => sMin = r}
                        eHourRef={r => eHour = r} eMinRef={r => eMin = r}
                    />
                    <InviteBox
                        people={fri}
                        onPress={() => navigation.navigate("Select", { preScreen: route.name, fri })}
                    />
                    <MessageBox value={message} onChangeText={setMessage} />
                    <View style={styles.btnContainer}>
                        <Pressable
                            onPress={handleAddLocally}
                            style={({ pressed }) => [styles.btn, pressed && styles.onPressed]}
                        >
                            <Text style={styles.btnText}>Add Locally</Text>
                        </Pressable>
                        <Pressable
                            onPress={handleInvite}
                            style={({ pressed }) => [
                                styles.btn,
                                { backgroundColor: '#F1B94C' },
                                pressed && styles.onPressed]
                            }
                        >
                            <Text style={styles.btnText}>Invite</Text>
                        </Pressable>
                    </View>
                </ScrollView>

                {/* for decoration */}
                <View style={styles.border} />
            </View>
        </SafeAreaView>
    )
};

export default AddPlanScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: pxToDp(200),
    },
    headerText: {
        fontSize: pxToDp(25),
        fontWeight: '800',
        textAlign: 'center',
    },
    contentContainer: {
        position: 'relative',
        width: pxToDp(328),
        height: pxToDp(638),

        borderRadius: pxToDp(10),
        borderWidth: pxToDp(2),
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
    },
    scrollContainer: {
        width: '100%',
        paddingVertical: pxToDp(32),
        paddingHorizontal: pxToDp(15),
    },
    btnContainer: {
        width: pxToDp(296),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: pxToDp(100),
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
        fontSize: pxToDp(20),
        fontWeight: '400',
    },

});