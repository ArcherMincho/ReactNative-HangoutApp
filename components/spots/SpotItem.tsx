import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';
import SpotInfo from './SpotInfo';


const SpotItem = props => {
    return (
        <View style={styles.container}>
            <View style={{ width: '71.44%' }}>
                {props.spots.map(i => {
                    return (
                        <SpotInfo spot={i} />
                    )
                })}
            </View>
        </View>
    );
}

export default SpotItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'relative',

        borderWidth: 1,
        marginBottom: 15,
    }
})

