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
  SectionList,
  Pressable,
  RefreshControl,
  ToastAndroid,
  Appearance,
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';

export default function App() {
  // get light/dark based on device mood
  const colorScheme = Appearance.getColorScheme();

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colorScheme === 'light' ? 'white' : 'gray',
      }}
    >
      <TextInput
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: colorScheme === 'light' ? 'gray' : 'white',
          color: colorScheme === 'light' ? 'white' : 'black',
        }}
        onChangeText={(text) => setName(text)}
        placeholder="Name..."
      />
      <TextInput
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: colorScheme === 'light' ? 'gray' : 'white',
          color: colorScheme === 'light' ? 'white' : 'black',
        }}
        onChangeText={(text) => setAge(text)}
        placeholder="Age..."
      />

      <Text
        style={{
          fontSize: 20,
          color: colorScheme === 'light' ? 'blue' : 'white',
        }}
      >
        Name: {name}, Age: {age}
      </Text>
    </View>
  );
}
