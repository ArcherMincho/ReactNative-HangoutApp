import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import pxToDp from '../../functions/pxToDp';
import img_load from '../../functions/img_load';
import StaticRatingStar from '../common/StaticRatingStar';
import SpotPostPics from './SpotPostPics';
import SpotComment from './SpotComment';

const SpotPost = props => {
    const post = props.post;
    return (
        <View style={styles.container}>
            <Image
                style={styles.portrait}
                source={img_load["portrait" + post.portrait]}
            />

            <View style={styles.comContainer}>
                <Text style={styles.nameText}>{post.name}</Text>

                <View style={styles.decContainer}>
                    <StaticRatingStar rating={post.star} fontColor="black" width={pxToDp(90)} />
                    <Text style={{ color: '#A6A3A3' }}>{post.timestamp}</Text>
                </View>

                <Text style={styles.comText}>{post.comment}</Text>
                <SpotPostPics user={post.portrait} pics={post.pics} />

                <SpotComment liked={post.liked} likes={post.likes} replies={post.replies} />
            </View>
        </View>
    )
}

export default SpotPost;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',

        width: '100%',
        paddingHorizontal: pxToDp(31),
        paddingVertical: pxToDp(15),
        borderTopWidth: pxToDp(2),
        borderColor: '#E4E4E4',
    },
    portrait: {
        width: pxToDp(40),
        height: pxToDp(40),
        marginRight: pxToDp(16),
        resizeMode: 'stretch',
    },
    comContainer: {
        width: pxToDp(256),
    },
    nameText: {
        fontSize: pxToDp(15),
        fontWeight: '600',
    },
    decContainer: {
        width: '100%',
        paddingVertical: pxToDp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    comText: {
        width: '98%',
        fontSize: pxToDp(14.5),
        fontWeight: '400',
    },

})