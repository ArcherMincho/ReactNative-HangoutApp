import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import HeaderBar from '../components/common/HeaderBar';
import FilterBar from '../components/FilterBar';
import Dropdown from '../components/common/Dropdown';

const locationData = [
    { key: 'Sweden', value: 'Sweden', disabled: true },
    { key: 'Gothenburg', value: 'Gothenburg' },
    { key: 'Stockholm', value: 'Stockholm' },
    { key: 'Marmo', value: 'Marmo' },
]

const friendData = [
    { key: 'Alex', value: 'Alex'},
    { key: 'Echo', value: 'Echo' },
    { key: 'Jennifer', value: 'Jennifer' },
    { key: 'Yiqian', value: 'Yiqian' },
]

const filterData = [
    { key: 'Nearest', value: 'Nearest'},
    { key: 'Oldest', value: 'Oldest' },
    { key: 'Hot', value: 'Hot' },
]

const HomeScreen = () => {
    const [location, setLocation] = useState("");
    const [friends, setFriends] = useState([]);
    const [filters, setFilters] = useState([]);


    return (
        <View style={styles.container}>
            <HeaderBar
                left={
                    <Dropdown
                        data={locationData}
                        setSelected={setLocation}
                        search={false}
                        defaultOption={locationData[1]}
                    />}
                right={<FontAwesome name="connment" size={12} color={'black'}/>}
            />
            <FilterBar
                friendData={friendData}
                setFriends={setFriends}
                filterData={filterData}
                setFilters={setFilters}
                defaultFilters={filters}
            />
            {/* <ScrollView /> */}
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        padding: 20,
        paddingBottom: 0,
        marginTop: 35,
        marginBottom: 10,
    },
    infoTitle: {
        flexDirection: 'row',
        marginBottom: 3,
        marginLeft: 2,
    },
    userLevel: {
        fontSize: 18,
        fontWeight: '800',
        alignSelf: 'center',
        color: 'gray',
    },
    userIcon: {
        width: 50,
        height: 50,
    },
    userName: {
        fontSize: 22,
        fontWeight: '800',
        alignSelf: 'center',
        color: '#0F6E00',
        fontStyle: 'italic',
        marginLeft: 5,
    },
    money: {
        flexDirection: 'row',
        marginTop: 10,
    },
    moneyText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'gray',
        marginLeft: 3,
        alignSelf: 'center',
    },
    moneyIcon: {
        width: 30,
        height: 30,
    },
    dog: {
        marginBottom: 20,
        width: '55%',
        height: '28%',
    },
    navButtonContainer: {
        position: 'absolute',
        bottom: 10,
        padding: 10,
        margin: 5,
    },
}
);