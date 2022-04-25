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
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Click Count: {count1}</Text>
      <Text>Press Count: {count2}</Text>
      <Pressable>
        <Text onPress={() => setCount1(count1 + 1)}>Click me</Text>
        <Button title="Press" onPress={() => setCount2(count2 + 1)}></Button>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? 'green' : 'red' },
        ]}
      >
        {({ pressed }) => (
          <Text> {pressed ? 'Click Plz' : 'Thanks for Click'}</Text>
        )}
      </Pressable>
    </View>
  );
}
