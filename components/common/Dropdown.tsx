import { StyleSheet, View, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Dropdown = props => {
    return (
        <View style={styles.container}>
            <SelectList
                data={props.data}
                setSelected={props.setSelected}
                save="value"
                // arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />}
                // searchicon={<FontAwesome name="search" size={12} color={'black'} />}
                // search={props.search}
                // boxStyles={{ borderRadius: 0 }} //override default styles
                defaultOption={props.defaultOption}
            />
        </View>
    );
}

export default Dropdown;

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
})