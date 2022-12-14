import { StyleSheet, TextInput, View, Keyboard, Button, Pressable, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import pxToDp from "../../functions/pxToDp";

const SearchBar = props => {
    return (
        <View style={styles.container}>
            <Feather
                name="search"
                size={pxToDp(23)}
                color="black"
            />
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={props.searchText}
                onChangeText={props.setSearchText}
                onFocus={() => { props.setClicked(true) }}
            />
            {props.clicked && (
                <TouchableOpacity
                    style={styles.cross}
                    onPress={() => {
                        props.setSearchText("");
                        props.setClicked(false);
                    }}
                >
                    <Entypo name="cross" size={24} color="black" />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        width: '100%',
        paddingVertical: pxToDp(8.5),
        paddingLeft: pxToDp(17),
        marginTop: pxToDp(5),

        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(10),

        backgroundColor: 'white',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowColor: '#EFCAD2',
        shadowOffset: {width: pxToDp(4), height: pxToDp(4)},
    },
    input: {
        flex: 1,
        fontSize: pxToDp(20),
        marginLeft: pxToDp(13),
    },
    cross: {
        alignSelf: 'center',
        paddingHorizontal: pxToDp(13),
    },
})