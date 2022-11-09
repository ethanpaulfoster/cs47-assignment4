import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import { Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from '../utils/millisToMinutesAndSeconds';
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export default function Song({ name, duration_ms, album, artists, preview_url, external_urls, track_number, id }) {
    const navigation = useNavigation();
    return (

        <Pressable style={styles.track}
            onPress={() => navigation.navigate('DetailsScreen', {external_urls:external_urls})}>
            <View style={styles.track_number_box}>
                <Pressable style={styles.playButton}
                    onPress={() => navigation.navigate('PreviewScreen', {preview_url:preview_url})}>
                    <Entypo name="controller-play" size={SCREEN_WIDTH * 0.03} color="black" />
                </Pressable>
            </View>
            <View style={styles.album_cover_box}>
                <Image
                    source={album.images[1]}
                    style={styles.album_cover}
                />
            </View>
            <View style={styles.title}>
                <Text style={styles.song_name} numberOfLines={1}>{name}</Text>
                <Text style={styles.artist_name} numberOfLines={1}>{artists[0].name}</Text>
            </View>
            <View style={styles.album_name_box}>
                <Text style={styles.album_name} numberOfLines={1}>{album.name}</Text>
            </View>
            <View style={styles.duration_box}>
                <Text style={styles.duration}>{millisToMinutesAndSeconds(duration_ms)}</Text>
            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    track: {
        backgroundColor: Themes.colors.background,
        width: '100%',
        height: SCREEN_HEIGHT * 0.11,
        padding: 2,
        marginVertical: SCREEN_HEIGHT * 0.003,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    track_number_box: {
        width: '7%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    track_number: {
        color: 'white',
        fontSize: SCREEN_HEIGHT * 0.025,
    },
    album_cover_box: {
        width: '20%',
        height: '100%',
        paddingHorizontal: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '35%',
        paddingHorizontal: 3
    },
    song_name: {
        color: 'white',
        fontSize: SCREEN_HEIGHT * 0.025,
    },
    artist_name: {
        color: Themes.colors.gray,
        fontSize: SCREEN_HEIGHT * 0.025,
    },
    album_name_box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%'
    },
    album_name: {
        color: 'white',
        fontSize: SCREEN_HEIGHT * 0.025,
    },
    duration_box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%'
    },
    duration: {
        color: 'white',
        fontSize: SCREEN_HEIGHT * 0.025,
    },
    album_cover: {
        height: '100%',
        resizeMode: 'contain',
        width: '100%'
    },
    playButton: {
        width: SCREEN_WIDTH * 0.04,
        height: SCREEN_WIDTH * 0.04,
        backgroundColor: '#1DB954',
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99999
    }

});
