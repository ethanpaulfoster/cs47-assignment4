import { WebView } from 'react-native-webview';

export default function PreviewScreen({ route }) {
    const preview_url = route.params.preview_url
  return (
    <WebView source={{uri: (preview_url)}}/>
  );
}