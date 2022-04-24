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
  Modal,
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';

export default function App() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Main screen____</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setName(text)}
        placeholder="name"
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setAge(text)}
        placeholder="Age"
      />
      <Button title="Open Modal" onPress={() => setModal(true)} />
      <Modal visible={modal}>
        <View style={styles.container}>
          <Text>_____Modal screen</Text>
          <Text>
            Name: {name} , Age: {age}
          </Text>
          <Button title="Close Modal" onPress={() => setModal(false)} />
        </View>
      </Modal>
    </View>
  );
}
