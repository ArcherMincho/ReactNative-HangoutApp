import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert } from 'react-native';

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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderBottomColor: 'gray',
    },
    left: {

    },
    right: {
    }
})