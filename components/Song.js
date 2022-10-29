import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from '../utils/millisToMinutesAndSeconds';


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');


export default function Song({ name, duration_ms, album, artists, track_number, id }) {
    return (

        <View style={styles.track}>
            <View style={styles.track_number_box}>
                <Text style={styles.track_number}>{track_number}</Text>
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
        </View>
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
    }
});