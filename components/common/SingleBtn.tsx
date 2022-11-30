import { StyleSheet, View, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SingleBtn = props => {
    return (
        <Pressable style={{ margin: 10 }} onPress={props.onPress}>
            <FontAwesome
                name={props.name}
                size={props.size || 25}
                color={props.color || 'black'} />
        </Pressable>
    )
}

export default SingleBtn;
