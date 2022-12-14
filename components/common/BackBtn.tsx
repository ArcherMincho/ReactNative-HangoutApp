import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import pxToDp from "../../functions/pxToDp";


const size=pxToDp(23);

const BackBtn = props => {
    return (
        <TouchableOpacity 
        style={styles.container} 
        onPress={props.onPress}
        >
            <Image
            source={require('../../assets/left-arrow.png')}
            style={styles.img}
            />
        </TouchableOpacity>
    )
}

export default BackBtn;

const styles = StyleSheet.create({
    container: {
        width: pxToDp(35),
        height: pxToDp(35),

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#F1B94C',
        borderWidth: pxToDp(2),
        borderColor: 'black',
        borderRadius: pxToDp(50),
    },
    img: {
        width: pxToDp(23),
        height: pxToDp(23),
    }
});
