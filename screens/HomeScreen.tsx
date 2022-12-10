import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import HeaderBar from '../components/common/HeaderBar';
import FilterBar from '../components/FilterBar';
import Dropdown from '../components/common/Dropdown';
import SpotItem from '../components/SpotItem';

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
                friendData={friendData}
                setFriends={setFriends}
                filterData={filterData}
                setFilters={setFilters}
                defaultFilters={filters}
            />

            <ScrollView style={styles.postContainer}>
                <SpotItem />
                <SpotItem />
                <SpotItem />
                <SpotItem />
                <SpotItem />
                <SpotItem />
                <SpotItem />
                <SpotItem />
                <SpotItem />
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingHorizontal: '8%',
    },
    postContainer: {
    }
}
);