import { StyleSheet, View, Text } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MultiDropdown = props => {
    return (
        <MultipleSelectList
            data={props.data}
            setSelected={props.setSelected}
            save="value"
            arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />}
            searchicon={<FontAwesome name="search" size={12} color={'black'} />}
            // search={props.search}
            defaultOption={props.defaultOption}
            label={props.label}
        />
    );
}

export default MultiDropdown;