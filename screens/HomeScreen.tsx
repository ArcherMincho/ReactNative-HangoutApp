import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
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
        distance: 868,
        promoters: ['Amy Brown', 'Joakim Gustafsson', 'Yining Li'],
    },
]

const HomeScreen = ({ navigation }) => {
    const [location, setLocation] = useState("");
    const [friends, setFriends] = useState([]);
    const [filters, setFilters] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: () => (
                <Dropdown
                    data={locationData}
                    setSelected={setLocation}
                    search={false}
                    defaultOption={locationData[1]}
                />
            ),
            headerRight: () => (
                <Pressable style={{ margin: '8%' }} onPress={() => navigation.navigate('Spot')}>
                    <FontAwesome name="comment-o" size={25} color={'black'} />
                </Pressable>
            )
        })
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* <HeaderBar
                left={
                    <Dropdown
                        data={locationData}
                        setSelected={setLocation}
                        search={false}
                        defaultOption={locationData[1]}
                    />}
                right={
                    <Pressable onPress={() => navigation.navigate('Spot')}>
                        <FontAwesome name="comment-o" size={25} color={'black'} />
                    </Pressable>
                }
            /> */}

            <FilterBar
                myStyle={styles.filterContainer}
                friendData={friendData}
                setFriends={setFriends}
                filterData={filterData}
                setFilters={setFilters}
                defaultFilters={filters}
            />

            <ScrollView style={styles.postContainer}>
                <SpotItem spots={Spots} />
                <SpotItem spots={Spots} />
                <SpotItem spots={Spots} />
                <SpotItem spots={Spots} />
            </ScrollView>
        </View>
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
    },
    postContainer: {
        paddingHorizontal: pxToDp(31),
    }
}
);