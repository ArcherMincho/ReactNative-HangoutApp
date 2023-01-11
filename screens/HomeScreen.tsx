/**
 * The home screen of the application
 * A screen for Restaurant Discovery
 */

import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import pxToDp from '../functions/pxToDp';

import HeaderBar from '../components/common/HeaderBar';
import FilterBar from '../components/spots/FilterBar';
import SpotItem from '../components/spots/SpotItem';
import SearchBar from '../components/common/SearchBar';


// const filterData = [
//     { key: 'Nearest', value: 'Nearest' },
//     { key: 'Oldest', value: 'Oldest' },
//     { key: 'Hot', value: 'Hot' },
// ]

const SpotData = [
    {
        name: 'Big Bird',
        star: 4.5,
        location: 'Ovre Husargatan 17',
        open: '12PM',
        distance: '868m',
        promoter1: 'Amy Brown',
        promoter2: 'Joakim Gustafsson',
        pic: '0',
        latest: 'For everyone who loves chicken, you should definitely come here! Omg they have the best fried chicken in gbg. A solid 10/10.'
    },
    {
        name: 'Ramen-Ya',
        star: 4.0,
        location: 'Linneplatsen 4',
        open: '5PM',
        distance: '1.8km',
        promoter1: 'Oscar Larsson',
        pic: '1',
        latest: 'For everyone who loves chicken, you should definitely come here! Omg they have the best fried chicken in gbg. A solid 10/10.'
    },
    {
        name: 'Brunchoteket',
        star: 3.5,
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

const HomeScreen = ({ navigation, route }) => {
    // const [filters, setFilters] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [clicked, setClicked] = useState(false);

    // selected friends for filtering, passed from SelectScreen
    const fri = route.params ? route.params.fri : [];

    const navigateTo = (spot) => {
        navigation.navigate("Spot", { spot });
    }


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
                }
                right={
                    <Pressable onPress={() => navigation.navigate("Post")}>
                        <FontAwesome5 name="comment-alt" size={pxToDp(26)} color={'black'} />
                    </Pressable>
                }
            />

            <ScrollView style={styles.contentContainer}>
                <SearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                    clicked={clicked}
                    setClicked={setClicked}
                />

                <FilterBar
                    filterText={fri && fri[0]}
                    onPress={() => navigation.navigate("Select", { preScreen: 'SpotHome', fri })}
                />

                <View style={{ width: '100%' }}>
                    {SpotData.map(i => {
                        return (
                            <SpotItem key={i.name} spot={i} onPress={navigateTo} />
                        )
                    })}
                </View>
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
        marginVertical: pxToDp(20),
    },
    contentContainer: {
        paddingHorizontal: pxToDp(31),
    },
    headerText: {
        fontSize: pxToDp(32),
        fontWeight: '800',
    },
}
);