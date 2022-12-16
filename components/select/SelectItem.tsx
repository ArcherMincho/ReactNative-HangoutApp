import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';
import img_load from '../../functions/img_load';

const SelectItem = props => {
    const size = pxToDp(24);
    const { item, onSelectedChange } = props;
    const [selected, setSelected] = useState(item.selected);

    const handleSelectedChange = () => {
        const status = !selected;
        setSelected(status);
        onSelectedChange(item.name, status);
        console.log(item.name + status)
    }

    return (
        <View style={styles.container}>
            {item && (
                <View style={styles.rowLayout}>
                    <View style={styles.rowLayout}>
                        <Image
                            source={img_load["portrait" + item.index]}
                            style={styles.img}
                        />
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                    <Pressable onPress={handleSelectedChange}>
                        {selected
                            ? <MaterialCommunityIcons name="sticker-check-outline" size={size} color="#F1B94C" />
                            : <MaterialCommunityIcons name="sticker-outline" size={size} color="black" />
                        }
                    </Pressable>
                </View>
            )}
        </View>

    )
}

export default SelectItem;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: pxToDp(70),
        padding: pxToDp(15),
        marginBottom: pxToDp(20),

        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(10),
    },
    rowLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    img: {
        width: pxToDp(40),
        height: pxToDp(40),
        resizeMode: 'stretch',
        marginRight: pxToDp(16),
    },
    text: {
        fontSize: pxToDp(15),
        fontWeight: '500',
    },
    selectBox: {
        width: pxToDp(16),
        height: pxToDp(16),
        borderWidth: pxToDp(2),
        borderColor: 'black',
        backgroundColor: 'white',
    },
    selected: {
        borderColor: '#F1B94C',
        backgroundColor: '#F1B94C',
    }
})