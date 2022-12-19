import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import pxToDp from '../functions/pxToDp';

import BackBtn from '../components/common/BackBtn';
import HeaderBar from '../components/common/HeaderBar';
import InfoInput from '../components/plan/InfoInput';
import TimeBox from '../components/plan/TimeBox';
import InviteBox from '../components/plan/InviteBox';
import MessageBox from '../components/plan/MessageBox';

const AddPlanScreen = ({ navigation, route }) => {

    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [message, setMessage] = useState("");

    // if navigated from SpotScreen
    const preScreen = route.params?.preScreen;

    // selected friends for filtering, passed from SelectScreen
    const fri = route.params ? route.params.fri : [];

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar
                center={
                    <View>
                        <Text style={styles.headerText}>Add  Plan</Text>
                    </View>
                }
                leftFixed={preScreen &&
                    <BackBtn onPress={() => navigation.navigate(preScreen)}
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
                    />
                    <InviteBox
                        people={fri}
                        onPress={() => navigation.navigate("Select", { preScreen: 'Add', fri })}
                    />
                    <MessageBox value={message} onChangeText={setMessage} />
                    <View style={styles.btnContainer}>
                        <Pressable
                            style={({ pressed }) => [styles.btn, pressed && styles.onPressed]}
                        >
                            <Text style={styles.btnText}>Add Locally</Text>
                        </Pressable>
                        <Pressable
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