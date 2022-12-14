import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import pxToDp from '../functions/pxToDp';
import Dropdown from './common/Dropdown';
import MultiDropdown from './common/MultiDropdown';

const FilterBar = props => {
    return (
        <View style={[styles.container, props.myStyle]}>
            <MultiDropdown
                data={props.friendData}
                setSelected={props.setFriends}
                // defaultOption={props.defaultFriends}
                label="Friend"
            />
            <MultiDropdown
                data={props.filterData}
                setSelected={props.setFilters}
                defaultOption={props.defaultFilters}
                label="Sort By"
            />
        </View>
    )
}

export default FilterBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: pxToDp(10),

        // // for IOS
        // shadowColor: '#555',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: .3,
        // shadowRadius: 1.5,
        // // for Android
        // elevation: 1.5,
    },
})