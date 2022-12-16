/**
 * Customized bottom tab bar
 */

import { StyleSheet, View, Pressable } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import pxToDp from "../../functions/pxToDp";

library.add(far);
library.add(fas);


const BottomTabBar = ({ state, descriptors, navigation }) => {
    const size = pxToDp(28);
    const color = 'white';
    const Icons = {
        Calendar: ["far", "calendar"],
        SpotHome: ["fas", "store"],
        Add: ["fas", "plus"],
        User: ["far", "circle-user"],
    };


    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true })
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                }

                return (
                    <Pressable
                        key={route.name}
                        style={({ pressed }) =>
                            [styles.btn, (pressed || isFocused) && styles.onPressing]}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                    >
                        <FontAwesomeIcon icon={Icons[route.name]} size={size} color={color} />
                    </Pressable>
                )
            })}
        </View>
    )
}

export default BottomTabBar;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: pxToDp(12),
        alignSelf: 'center',
        zIndex: 10,
        elevation: 10,

        flexDirection: 'row',
        justifyContent: 'space-around',

        width: pxToDp(320),
        height: pxToDp(62),
        paddingTop: pxToDp(9.5),
        paddingBottom: pxToDp(11),
        paddingHorizontal: pxToDp(30),

        backgroundColor: '#83BB93',
        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(30),
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: pxToDp(55),
        height: pxToDp(40),

        borderWidth: pxToDp(2),
        borderRadius: pxToDp(15),
        borderColor: "rgba(0,0,0,0)",
    },
    onPressing: {
        backgroundColor: '#F1B94C',
        borderColor: 'black',
    },
})