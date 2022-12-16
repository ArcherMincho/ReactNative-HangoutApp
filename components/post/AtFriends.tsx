import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';

const AtFriends = props => {
    let names = props.names.slice();
    const last = names.pop();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>

            <Text style={styles.nameContainer}>
                {names && names.map(i => (
                    <Text key={i}>{i},  </Text>
                ))}
                <Text>{last}</Text>
            </Text>

            <Pressable onPress={props.onPress} style={styles.btn} >
                {({ pressed }) => {
                    const color = pressed ? '#F1B94C' : 'black';
                    return (
                        <Entypo 
                        name="chevron-right" 
                        size={pxToDp(24)} 
                        color={color} 
                        />
                    )
                }}
            </Pressable>

        </View>
    );
}

export default AtFriends;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

        width: '100%',

        borderTopWidth: pxToDp(1),
        borderBottomWidth: pxToDp(1),
        borderColor: '#E4E4E4',
        backgroundColor: 'white',
    },
    title: {
        fontSize: pxToDp(16),
        fontWeight: '500',
        paddingVertical: pxToDp(19),

    },
    nameContainer: {
        width: pxToDp(190),
        paddingVertical: pxToDp(19),
        paddingTop: pxToDp(21),
        paddingLeft: pxToDp(15),
        fontSize: pxToDp(13),
        fontWeight: '400',
    },
    btn: {
        alignSelf: 'center',
        paddingHorizontal: pxToDp(10),
        borderRadius: pxToDp(10),
    },
})