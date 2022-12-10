import { StyleSheet, ScrollView, View, Text, Image, Pressable } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../functions/pxToDp';

import HeaderBar from '../components/common/HeaderBar';
import FilterBar from '../components/FilterBar';
import Dropdown from '../components/common/Dropdown';
import SpotItem from '../components/spots/SpotItem';

const locationData = [
    { key: 'Sweden', value: 'Sweden', disabled: true },
    { key: 'Gothenburg', value: 'Gothenburg' },
    { key: 'Stockholm', value: 'Stockholm' },
    { key: 'Marmo', value: 'Marmo' },
]

const friendData = [
    { key: 'Alex', value: 'Alex' },
    { key: 'Echo', value: 'Echo' },
    { key: 'Jennifer', value: 'Jennifer' },
    { key: 'Yiqian', value: 'Yiqian' },
]

const filterData = [
    { key: 'Nearest', value: 'Nearest' },
    { key: 'Oldest', value: 'Oldest' },
    { key: 'Hot', value: 'Hot' },
]

const Spots = [
    {
        name: 'Big Bird',
        star: 4.7,
        location: 'Ovre Husargatan 17',
        open: '12PM',
        distance: '868m',
        promoter1: 'Amy Brown',
        promoter2: 'Joakim Gustafsson',
        pic: '2',
        latest: 'For everyone who loves chicken, you should definitely come here! Omg they have the best fried chicken in gbg. A solid 10/10.'
    },
    {
        name: 'Ramen-Ya',
        star: 4.5,
        location: 'Linneplatsen 4',
        open: '5PM',
        distance: '1.8km',
        promoter1: 'Oscar Larsson',
        pic: '1',
        latest: 'For everyone who loves chicken, you should definitely come here! Omg they have the best fried chicken in gbg. A solid 10/10.'
    },
    {
        name: 'Brunchoteket',
        star: 4.2,
        location: 'akaungstorget 2',
        open: '9AM',
        distance: '235m',
        promoter1: 'Linnea Nilsson',
        promoter2: 'Olivia Lundin',
        pic: '2',
        latest: 'For everyone who loves chicken, you should definitely come here! Omg they have the best fried chicken in gbg. A solid 10/10.'
    },
    {
        name: 'Da Matteo Vallgatan',
        star: 5.0,
        location: 'Vallgatan 5',
        open: '10AM',
        distance: '1.5km',
        promoter1: 'Tahiko Matsui',
        pic: '3',
        latest: 'For everyone who loves chicken, you should definitely come here! Omg they have the best fried chicken in gbg. A solid 10/10.'
    },

]

const HomeScreen = ({ navigation }) => {
    const [location, setLocation] = useState("");
    const [friends, setFriends] = useState([]);
    const [filters, setFilters] = useState([]);


    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title: '',
    //         headerLeft: () => (
    //             <View style={styles.headerLocation}>
    //             <Text style={styles.headerText}>Gothenburg</Text>
    //             </View>
    //             // <Dropdown
    //             //     data={locationData}
    //             //     setSelected={setLocation}
    //             //     search={false}
    //             //     defaultOption={locationData[1]}
    //             // />
    //         ),
    //         headerRight: () => (
    //             <Pressable style={{ marginHorizontal: '8%' }} onPress={() => navigation.navigate('Spot')}>
    //                 <FontAwesome name="comment-o" size={25} color={'black'} />
    //             </Pressable>
    //         )
    //     })
    // }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar
                left={
                    <View>
                        <Text style={styles.headerText}>Gothenburg</Text>
                    </View>
                    // <Dropdown
                    //     data={locationData}
                    //     setSelected={setLocation}
                    //     search={false}
                    //     defaultOption={locationData[1]}
                    // />
                }
                right={
                    <Pressable onPress={() => navigation.navigate('Spot')}>
                        <FontAwesome5 name="user-circle" size={pxToDp(27)} color={'black'} />
                    </Pressable>
                }
            />

            <FilterBar
                myStyle={styles.filterContainer}
                friendData={friendData}
                setFriends={setFriends}
                filterData={filterData}
                setFilters={setFilters}
                defaultFilters={filters}
            />

            <ScrollView style={styles.postContainer}>
                {Spots.map(i => {
                    return (
                        <SpotItem key={i.name} spot={i} />
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    filterContainer: {
        paddingHorizontal: pxToDp(31),
        paddingVertical: pxToDp(10),
    },
    postContainer: {
        paddingHorizontal: pxToDp(31),
    },
    headerText: {
        fontSize: pxToDp(32),
        fontWeight: '800',
    },
}
);