import { WebView } from "react-native-webview";

export default function DetailsScreen({ route }) {
    const external_url = route.params.external_urls.spotify
  return (
    <WebView source={{uri: (external_url)}}/>
  );
}