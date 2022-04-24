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
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';

export default function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.warn('DOM updated', number);
    // if (number > 10) {
    //   console.warn('Name updated', number);
    // }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{number}</Text>
      <View style={{ marginBottom: 10 }}>
        <Button title="Increase" onPress={() => setNumber(number + 1)} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="Decrise" onPress={() => setNumber(number - 1)} />
      </View>
    </View>
  );
}
