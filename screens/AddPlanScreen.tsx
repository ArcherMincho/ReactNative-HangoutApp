import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import pxToDp from '../functions/pxToDp';

import BackBtn from '../components/common/BackBtn';
import HeaderBar from '../components/common/HeaderBar';
import InfoInput from '../components/plan/InfoInput';
import TimeBox from '../components/plan/TimeBox';
import InviteBox from '../components/plan/InviteBox';

const AddPlanScreen = ({ navigation, route }) => {

    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

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
                        onPress={() => navigation.navigate("Select", { preScreen: 'Add', fri })} />


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

});