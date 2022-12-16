import { StyleSheet, View, Text, Pressable } from 'react-native';
import SingleBtn from './SingleBtn';

const AtFriends = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>

            <View style={styles.nameContainer}>
                {props.names && props.names.map(i => (
                    <Text key={i} style={styles.name}>{i}</Text>
                ))}
            </View>

            <SingleBtn
                name="angle-right"
                onPress={props.onPress} />

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
        padding: '5%',
        marginTop: '2%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    title: {
        padding: 10,
        fontSize: 20,
        fontWeight: "500",

    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        width: '70%',
    },
    name:{
        margin: 8,
        fontSize: 15,
        fontWeight: '400',
    }
})