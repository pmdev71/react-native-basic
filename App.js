import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Start page on native app....</Text>
      <Text>Palash Mandal</Text>
      <Text style={styles.textStyle}>Power of Text component.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: 'orange',
  },
});
