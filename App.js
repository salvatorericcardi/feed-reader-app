import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Feed from './components/Feed';

export default function App() {
  return (
    <View style={styles.container}>
      <Feed></Feed>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd6ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});