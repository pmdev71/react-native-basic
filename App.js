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

export default function App() {
  const [location, setLocation] = useState(false);
  const [storage, setStorage] = useState(false);
  const [mic, setMic] = useState(false);

  const toggleLocation = () => {
    setLocation((previousState) => !previousState);
    Alert.alert('Value changed!');
  };
  const toggleStorage = () => {
    setStorage((previousState) => !previousState);
    Alert.alert('Value changed!');
  };
  const toggleMic = () => {
    setMic((previousState) => !previousState);
    Alert.alert('Value changed!');
  };

  return (
    <View style={styles.container}>
      <Text>Location access {location ? 'On' : 'Off'}</Text>
      <Switch
        value={location}
        trackColor={{ false: 'red', true: 'green' }}
        thumbColor={location ? 'yellow' : 'pink'}
        onValueChange={toggleLocation}
      />
      <Text>Storage access {storage ? 'On' : 'Off'}</Text>
      <Switch
        value={storage}
        trackColor={{ false: 'red', true: 'green' }}
        thumbColor={storage ? 'yellow' : 'pink'}
        onValueChange={toggleStorage}
      />
      <Text>Mic access {mic ? 'On' : 'Off'}</Text>
      <Switch
        value={mic}
        trackColor={{ false: 'red', true: 'green' }}
        thumbColor={mic ? 'yellow' : 'pink'}
        onValueChange={toggleMic}
      />
    </View>
  );
}
