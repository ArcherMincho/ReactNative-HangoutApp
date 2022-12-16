import { StyleSheet, View } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import pxToDp from '../../functions/pxToDp';

const MyStarRating = props => {
    const { star, setStar } = props;

    return (
        <StarRating
            rating={star}
            maxStars={5}
            starSize={pxToDp(40)}
            style={styles.container}
            starStyle={styles.star}
            emptyColor="#A6A3A3"
            color="#F1B94C"
            enableHalfStar={true}
            enableSwiping={true}
            onChange={setStar}
        />
    )
}

export default MyStarRating;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pxToDp(14),
        paddingVertical: pxToDp(18),
    },
    star: {
        flex: 1,
    }
})