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
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';
import CustomButton from './CustomButton';

export default function App() {
  const [name, setName] = useState('Button');

  const clickHandler = () => {
    Alert.alert('Your name is ' + name.toString());
  };
  const clickPop = () => {
    Alert.alert('Your Clicked Pop Button ');
  };
  const clickUpdate = () => {
    Alert.alert('Your Clicked Update Button ');
  };
  const clickDelete = () => {
    Alert.alert('Your Clicked Delete Button ');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setName(text)}
        placeholder="Your Name..."
      />
      <CustomButton name="Push" click={clickHandler} />
      <CustomButton name="Pop" click={clickPop} />
      <CustomButton name="Update" click={clickUpdate} />
      <CustomButton name="Delete" click={clickDelete} />
    </View>
  );
}
