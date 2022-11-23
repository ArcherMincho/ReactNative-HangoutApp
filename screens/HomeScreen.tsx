import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import HeaderBar from '../components/common/HeaderBar';
import FilterBar from '../components/FilterBar';
import Dropdown from '../components/common/Dropdown';
import PostItem from '../components/PostItem';

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
                right={
                    <Pressable onPress={() => navigation.navigate('Post')}>
                        <FontAwesome name="comment-o" size={25} color={'black'} />
                    </Pressable>
                }
            />
            <FilterBar
                friendData={friendData}
                setFriends={setFriends}
                filterData={filterData}
                setFilters={setFilters}
                defaultFilters={filters}
            />
            <ScrollView style={styles.postContainer}>
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
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
    postContainer: {
        padding: '5%',
    }
}
);