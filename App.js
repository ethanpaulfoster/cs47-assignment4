import { StyleSheet, SafeAreaView } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import AuthButton from "./components/AuthButton";
import MyTopTracks from "./components/MyTopTracks";

export default function App() {

  let contentDisplayed = null;

  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true)
  if (token) {
    contentDisplayed =
      <MyTopTracks myTracks={tracks} />
  } else {
    contentDisplayed =
      <AuthButton authFunction={getSpotifyAuth} />
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%'
  }
});
