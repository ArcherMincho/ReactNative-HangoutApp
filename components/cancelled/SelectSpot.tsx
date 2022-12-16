import { StyleSheet, View, Text } from 'react-native';
import Dropdown from './Dropdown';

const SelectSpot = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Spot:</Text>
            <Dropdown
                data={props.data}
                setSelected={() => { }}
                search={true}
            // defaultOption={SpotData[1]}
            />
        </View>
    )
}

export default SelectSpot;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginRight: 10,
        fontWeight: '400',
        fontSize: 17,
    }
})

