import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import pxToDp from '../../functions/pxToDp';

const SingleBtn = props => {
    return (
        <Pressable onPress={props.onPress} style={props.myStyle} >
        {({ pressed }) => {
            const color = pressed ? '#F1B94C' : 'black';
            return (
                <Entypo 
                name={props.name || "chevron-right"}
                size={pxToDp(24)} 
                color={color} 
                />
            )
        }}
    </Pressable>
    )
};

export default SingleBtn;