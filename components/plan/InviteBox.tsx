import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import pxToDp from '../../functions/pxToDp';
import img_load from '../../functions/img_load';

const friendData = [
    "Amy Brown",
    "Joakim Gustafsson",
    "Yining Li",
    "Dennis Denito",
    "Linnea Nilsson",
    "Nicolas Zimmermann",
    "Olivia Lundin",
    "Oscar Larsson",
];

const InviteBox = props => {
    const { onPress, people } = props;

    return (
        <View style={styles.container}>
            <View>
            {people.map(p => {
                return (
                    <View key={p} style={styles.rowLayout}>
                        <Image
                            source={img_load["portrait" + friendData.indexOf(p)]}
                            style={styles.img}
                        />
                        <Text style={styles.text}>{p}</Text>
                    </View>
                )
            })}
            </View>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [styles.btn, pressed && styles.onPressed]}
            >
                <Text style={styles.btnText}>+ More </Text>
            </Pressable>
            <Text style={styles.title}>People</Text>
        </View>
    )
}

export default InviteBox;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: pxToDp(248),
        padding: pxToDp(13),
        alignSelf: 'center',

        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),

        backgroundColor: 'white',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowColor: '#EFCAD2',
        shadowOffset: { width: pxToDp(4), height: pxToDp(4) },
    },
    rowLayout: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: pxToDp(5),
    },
    img: {
        width: pxToDp(40),
        height: pxToDp(40),
        resizeMode: 'stretch',
    },
    text: {
        fontSize: pxToDp(15),
        fontWeight: '500',
        paddingLeft: pxToDp(15),
    },
    btn: {
        width: pxToDp(79),
        height: (27),
        alignSelf: 'flex-end',

        backgroundColor: '#F1B94C',
        borderWidth: pxToDp(2),
        borderRadius: pxToDp(10),
        borderColor: 'black',
    },
    onPressed: {
        borderColor: '#F1B94C',
    },
    btnText: {
        fontSize: pxToDp(15),
        fontWeight: '500',
        alignSelf: 'center'
    },
    title: {
        position: 'absolute',
        top: pxToDp(-7),
        left: pxToDp(15),
        height: pxToDp(10),
        paddingHorizontal: pxToDp(8),
        backgroundColor: 'white',
        fontSize: pxToDp(10),
        fontWeight: '500',
    }
});