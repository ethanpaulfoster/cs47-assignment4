import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import Song from "./Song";


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const renderSong = ({ item, index }) => (
  <Song
    name={item.name}
    duration_ms={item.duration_ms}
    album={item.album}
    track_number={item.track_number}
    artists={item.artists}
  />
);


export default function MyTopTracks({ myTracks }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLogoBox}>
          <Image style={styles.headerLogo}
            source={require('../assets/spotify-logo.png')}
          />
        </View>
        <Text style={styles.headerText}>
          My Top Tracks
        </Text>
      </View>
      <FlatList
        data={myTracks}
        renderItem={(item) => renderSong(item)}
        keyExtractor={(item) => item.id} />
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerLogo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  headerText: {
    fontSize: SCREEN_HEIGHT * 0.04,
    fontWeight: 'bold',
    color: 'white',
    margin: 8
  },
  headerLogoBox: {
    width: '7%',
    height: '100%',
    margin: 8
  }
});