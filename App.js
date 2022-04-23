import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        color="red"
        onPress={() => alert('Thanks for click me.')}
        // disabled={true}
      ></Button>

      <Button
        title="Press Me"
        color="green"
        onPress={() => alert('Congratulation.')}
        // disabled={true}
      ></Button>
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
});
