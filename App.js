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
import CustomSwitch from './CustomSwitch';

export default function App() {
  const [location, setLocation] = useState(false);
  const [storage, setStorage] = useState(false);
  const [mic, setMic] = useState(false);

  const toggleLocation = () => {
    setLocation((previousState) => !previousState);
  };
  const toggleStorage = () => {
    setStorage((previousState) => !previousState);
  };
  const toggleMic = () => {
    setMic((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text>Location access {location ? 'On' : 'Off'}</Text>
      <CustomSwitch isEnable={location} toggleSwitch={setLocation} />
      <Text>Storage access {storage ? 'On' : 'Off'}</Text>
      <CustomSwitch isEnable={storage} toggleSwitch={setStorage} />
      <Text>Mic access {mic ? 'On' : 'Off'}</Text>
      <CustomSwitch isEnable={mic} toggleSwitch={setMic} />
    </View>
  );
}
