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
  Modal,
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';
import OutputCom from './components/OutputCom';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setName(text)}
        placeholder="Name here..."
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setAge(text)}
        placeholder="Age here..."
      />
      <OutputCom userName={name} userAge={age} />
    </View>
  );
}
