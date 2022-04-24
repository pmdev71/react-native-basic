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
  Switch,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';
import CustomButton from './CustomButton';

export default function App() {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
      Alert.alert('Thanks for waiting Mr. ' + name.toString());
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setName(text)}
        placeholder="Your Name..."
      />

      <ActivityIndicator size="large" color="red" animating={show} />
      <Button title="Submit" onPress={() => clickHandler()} />
    </View>
  );
}
