import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');

  const pressHandler = () => {
    Alert.alert('Details', 'Are you sure you submit this information?', [
      { text: 'Yes', onPress: () => Alert.alert('Thanks') },
      { text: 'No', onPress: () => resetHandler() },
    ]);
  };

  const resetHandler = () => {
    setName('');
    setAge(0);
    setGender('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setAge(text)}
        placeholder="Age"
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setGender(text)}
        placeholder="Gender"
      />
      <Button title="Submit" onPress={() => pressHandler()} />
      <Text>
        {'Name: ' + name}, {'Age: ' + age}, {'Gender: ' + gender}
      </Text>
    </View>
  );
}
