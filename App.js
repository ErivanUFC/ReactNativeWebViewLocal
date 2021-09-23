'use strict';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { WebView } from 'react-native-webview';

class App extends PureComponent {
  render() {
    return <WebView source={{ uri: "file:///android_asset/local-site.html" }} />;
  }
}

export default App;