import { StyleSheet, SafeAreaView } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthButton from "./components/AuthButton";
import MyTopTracks from "./components/MyTopTracks";
import PreviewScreen from './components/PreviewScreen';
import DetailsScreen from "./components/DetailsScreen";


function MainScreen() {
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="MainScreen" component={MainScreen} />
        <Stack.Screen options={{ title: 'Song preview', 
            headerStyle: { backgroundColor: Themes.colors.background},
            headerTitleStyle: {
            color: 'white', 
            }, }} name="PreviewScreen" component={PreviewScreen} />
        <Stack.Screen options={{ 
            title: 'Song details', 
            headerStyle: { backgroundColor: Themes.colors.background},
            headerTitleStyle: {
            color: 'white',
          }, }} name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
