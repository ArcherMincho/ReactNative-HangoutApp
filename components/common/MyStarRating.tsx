import { StyleSheet,View, Text, Image, Alert, Pressable } from 'react-native';
import StarRating from "react-native-star-rating-widget";
import { FontAwesome } from '@expo/vector-icons';

const MyStarRating = props => {
    return (
        <View>
            <FontAwesome name="user-circle" size={27} color={'black'} />
        </View>
    );
}

export default MyStarRating;