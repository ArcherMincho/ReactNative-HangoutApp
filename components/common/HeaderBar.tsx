import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert } from 'react-native';
import pxToDp from '../../functions/pxToDp';

const HeaderBar = props => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                {props.left}
            </View>
            <View style={styles.right}>
                {props.right}
            </View>
        </View>
    )
}

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: pxToDp(31),
        paddingVertical: pxToDp(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


        // // for IOS
        // shadowColor: '#555',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: .3,
        // shadowRadius: 1.5,
        // // for Android
        // elevation: 1.5,
    },
    left: {
        // marginLeft: '5%',

    },
    right: {
        // marginRight: '5%',
    }
})