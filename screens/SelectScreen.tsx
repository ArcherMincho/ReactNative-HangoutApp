import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import pxToDp from '../functions/pxToDp';

import BackBtn from '../components/common/BackBtn';
import HeaderBar from '../components/common/HeaderBar';
import SearchBar from '../components/common/SearchBar';
import SelectItem from '../components/select/SelectItem';

const friendData = [
    "Amy Brown",
    "Joakim Gustafsson",
    "Yining Li",
    "Dennis Denito",
    "Linnea Nilsson",
    "Nicolas Zimmermann",
    "Olivia Lundin",
    "Oscar Larsson",
];

const SelectScreen = ({ navigation, route }) => {
    const [searchText, setSearchText] = useState("");
    const [clicked, setClicked] = useState(false);

    // selected friends preserved from last time, passed by HomeScreen
    const { fri } = route.params;
    const [friends, setFriends] = useState(fri);

    const handleSelectedChange = (name, status) => {
        let fri = friends.slice();
        if (status) {
            fri.push(name);
        } else {
            const i = fri.indexOf(name);
            fri = fri.splice(i, 1);
        }
        setFriends(fri);
    }


    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar
                center={
                    <View>
                        <Text style={styles.headerText}>Select Friends</Text>
                    </View>
                }
                leftFixed={
                    <BackBtn onPress={() => navigation.navigate('SpotHome', { fri: [] })} />
                }
            />

            <ScrollView style={styles.contentContainer}>
                <SearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                    clicked={clicked}
                    setClicked={setClicked}
                />

                <View style={styles.selectContainer}>
                    {friendData.map((f, i) => {
                        return (
                            <SelectItem
                                key={i}
                                onSelectedChange={handleSelectedChange}
                                item={{ name: f, index: i, selected: friends.includes(f) }}
                            />
                        )
                    })}
                </View>
                <View style={{ height: pxToDp(150) }}></View>
            </ScrollView>

            <View style={styles.bottomBtnContainer}>
                <Pressable
                    style={styles.bottomBtn}
                    onPress={() => navigation.navigate('SpotHome',
                        { fri: friends.slice() }
                    )}
                >
                    <Text style={styles.bottomText}>Done</Text>
                </Pressable>
            </View>

        </SafeAreaView >
    )
}

export default SelectScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingHorizontal: pxToDp(31),
    },
    headerText: {
        fontSize: pxToDp(25),
        fontWeight: '800',
        textAlign: 'center',
    },
    selectContainer: {
        marginTop: pxToDp(22),
    },
    bottomBtnContainer: {
        position: 'absolute',
        bottom: pxToDp(65),
        width: '100%',
        paddingVertical: pxToDp(15),
        backgroundColor: 'white',
        zIndex: 10,
        elevation: 10,
    },
    bottomBtn: {
        width: pxToDp(168),
        paddingVertical: pxToDp(9),
        backgroundColor: '#F1B94C',
        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(10),
        alignSelf: 'center',
    },
    bottomText: {
        fontSize: pxToDp(20),
        fontWeight: '600',
        textAlign: 'center',
    },
})