import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { Themes } from "../assets/Themes";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');


export default function AuthButton({ authFunction }) {
  return (
    <Pressable style={styles.authButton}
      onPress={() => { authFunction() }}>
      <View style={styles.imageBox}>
        <Image style={styles.logo}
          source={require('../assets/spotify-logo.png')}
        />
      </View>
      <Text style={styles.connectText}>
        CONNECT WITH SPOTIFY
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%'
  },
  authButton: {
    height: '4%',
    borderRadius: 99999,
    backgroundColor: '#1DB954',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 8
  },
  connectText: {
    color: 'white',
    fontSize: SCREEN_HEIGHT * 0.015,
    marginHorizontal: 6
  },
  imageBox: {
    height: '70%',
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '80%',
    width: '80%',
    resizeMode: 'contain'
  }
});