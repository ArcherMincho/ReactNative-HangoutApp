import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../functions/pxToDp';

import BackBtn from '../components/common/BackBtn';
import HeaderBar from '../components/common/HeaderBar';
import InputBox from '../components/plan/InputBox';
import TimeInputBox from '../components/plan/TimeInputBox';

const AddPlanScreen = ({ navigation, route }) => {

    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const preScreen = route.params?.preScreen; // if navigated from SpotScreen

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
                    <InputBox
                        title="Location"
                        value={location}
                        onChangeText={setLocation}
                    />
                    <View style={styles.timeContainer}>
                        <Text style={styles.dateTitle}>Fill in a time</Text>
                        <InputBox
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
                            <TimeInputBox
                                title="Start time"
                                value={start}
                                onChangeText={setStart}
                            />
                            <TimeInputBox
                                title="End time"
                                value={end}
                                onChangeText={setEnd}
                            />
                        </View>
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
});