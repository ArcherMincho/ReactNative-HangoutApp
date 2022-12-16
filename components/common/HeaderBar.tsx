import { StyleSheet, View } from 'react-native';
import pxToDp from '../../functions/pxToDp';

const HeaderBar = props => {
    return (
        <View style={[
            styles.container,
            props.center && styles.centered
        ]}>
            {props.leftFixed && (
                <View style={styles.leftFixed}>
                    {props.leftFixed}
                </View>
            )}
            {props.left && (
                <View>{props.left}</View>
            )}
            {props.center && (
                <View>{props.center}</View>
            )}
            {props.right && (
                <View>{props.right}</View>
            )}
            {props.rightFixed && (
                <View style={styles.rightFixed}>
                    {props.rightFixed}
                </View>
            )}
        </View>
    )
}

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: '100%',
        paddingHorizontal: pxToDp(31),
        paddingVertical: pxToDp(15),
        marginBottom: pxToDp(5),
    },
    centered: {
        justifyContent: 'center',
    },
    leftFixed: {
        position: 'absolute',
        left: pxToDp(31),
    },
    rightFixed: {
        position: 'absolute',
        right: pxToDp(31),
    },
})