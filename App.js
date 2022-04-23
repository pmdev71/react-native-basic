import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Palash');
  const [age, setAge] = useState(24);

  return (
    <View style={styles.container}>
      <Text>Enter your name: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        placeholder="Enter name here.."
      />
      <Text>Enter your age: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter age here.."
        keyboardType="numeric"
      />
      <Text>
        My name is {name} and age is {age} years old.
      </Text>
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
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 150,
  },
});
