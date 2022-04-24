import React, { useState, useEffect } from 'react';
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
import styles from './style';

export default function Greeting() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text>From Gretting.js Component</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setName(text)}
        placeholder="name"
      />

      <Button title="Click" onPress={() => Alert.alert(name)} />
    </View>
  );
}
