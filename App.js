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
import { useState } from 'react';
import styles from './style';

export default function App() {
  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
