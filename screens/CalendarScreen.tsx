import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import React, { useState, useMemo, useEffect, useLayoutEffect } from 'react';

import MyCalendar from '../components/MyCalendar';

const CalendarScreen = ({ navigation }) => {

    const [selected, setSelected] = useState('');
    const [dotted, setDotted] = useState({'2022-12-01':2, '2022-12-12':1, '2022-12-22':4, '2022-12-25':5});

    // const marked = useMemo(() => ({
    //     [selected]: selectedStyle
    // }), [selected]);

    const handleDayPress = (day) => {
        setSelected(day.dateString);
    }
 

    return (
        <View style={styles.container}>
            <MyCalendar
                onDayPress={handleDayPress}
                dotted={dotted}
                selected={selected}
            />
        </View>
    );
}

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {

    },
})