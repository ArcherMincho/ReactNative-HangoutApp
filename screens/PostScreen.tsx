import { StyleSheet, ScrollView, TouchableOpacity, View, Text, Image, Alert, Pressable } from 'react-native';


import HeaderBar from '../components/common/HeaderBar';
import BackBtn from '../components/common/BackBtn';
import SelectSpot from '../components/SelectSpot';
import StarRating from '../components/StarRating';


let SpotData = [
    { key: 'OiShi', value: 'OiShi' },
    { key: 'District One', value: 'District One' },
    { key: 'L\'s', value: 'L\'s' },
]

const PostScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <HeaderBar
                left={
                    <BackBtn onPress={() => navigation.navigate("Spot")} />}
                right={
                    <Pressable style={styles.postBtn} onPress={() => alert("post it")}>
                        <Text style={styles.postBtnText}>Post</Text>
                    </Pressable>
                }
            />

            <SelectSpot data={SpotData} />

            <StarRating />


        </View>
    )
}

export default PostScreen;

const styles = StyleSheet.create({
    container: {

    },
    postBtn: {
        width: 50,
        borderRadius: 5,
        backgroundColor: '#333',
        textAlign: 'center',
    },
    postBtnText: {
        paddingHorizontal: '2%',
        paddingVertical: '5%',
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    }
})