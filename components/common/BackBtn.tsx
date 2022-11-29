import { StyleSheet, View, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const BackBtn = props => {
    return (
        <Pressable style={{margin:10}} onPress={props.onPress}>
            <FontAwesome name="chevron-left" size={25} color={'black'} />
        </Pressable>
    )
}

export default BackBtn;
