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
import Greeting from './Greeting';
import InputCom from './components/inputCom';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting />
      <InputCom />
    </View>
  );
}
