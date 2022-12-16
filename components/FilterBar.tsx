import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import pxToDp from '../functions/pxToDp';

const FilterBar = props => {
    const { onPress, filterText } = props;
    return (
        <View style={[styles.container]}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) =>
                    [styles.btn, pressed && styles.onPressedBorder]}>
                {({ pressed }) => {
                    return (
                        <Text style={[styles.text, pressed && styles.onPressedText]}>
                            Friends{filterText &&
                                <Text>: {filterText.slice(0, filterText.indexOf(' '))}...</Text>
                            }
                        </Text>
                    )
                }}
            </Pressable>

            <Pressable
                onPress={onPress}
                style={({ pressed }) =>
                    [styles.btn, pressed && styles.onPressedBorder]}>
                {({ pressed }) => {
                    return (
                        <View style={styles.flexRowContainer}>
                            <Text style={[styles.text, pressed && styles.onPressedText]}>
                                Sort by
                            </Text>
                            <Entypo name="chevron-small-down" size={pxToDp(24)} color="black" />
                        </View>

                    )
                }}
            </Pressable>
        </View>
    )
}

export default FilterBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: pxToDp(18),
        marginBottom: pxToDp(15),
    },
    btn: {
        justifyContent: 'center',
        height: pxToDp(32),
        paddingHorizontal: pxToDp(22),
        marginRight: pxToDp(19),

        borderWidth: pxToDp(1.5),
        borderRadius: pxToDp(10),
        borderColor: "black",
    },
    onPressedBorder: {
        borderColor: '#F1B94C',
    },
    onPressedText: {
        color: '#F1B94C',
    },
    text: {
        fontSize: pxToDp(13.5),
        fontWeight: '500',
    },
    flexRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})