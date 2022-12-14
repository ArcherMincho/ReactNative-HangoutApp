import { StyleSheet, View, Pressable } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import pxToDp from "../../functions/pxToDp";

library.add(far);
library.add(fas);


const SideBar = props => {
    const size = pxToDp(28);
    const color = 'white';
    const iconNames = [
        ["far", "calendar"],
        ["fas", "store"],
        ["fas", "plus"],
        ["far", "circle-user"]
    ];

    return (
        <View style={styles.container}>
            {iconNames.map(i => {
                return (
                    <Pressable
                        key={i[1]}
                        style={({ pressed }) =>
                            [styles.btn, pressed && styles.onPressing]}
                    >
                        <FontAwesomeIcon icon={i} size={size} color={color} />
                    </Pressable>
                )
            })}
        </View>
    )
}

export default SideBar;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: pxToDp(140),
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