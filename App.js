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
} from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function App() {
  const [age, setAge] = useState(0);

  const ageHandeler = () => {
    if (age >= 20) {
      Alert.alert('Yes');
    } else {
      Alert.alert('No');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} />
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setAge(text)}
      />

      <Button title="Can I drink?" onPress={ageHandeler}></Button>
    </View>
  );
}
