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
  const [isEnable, setIsEnable] = useState(false);

  const toggleSwitch = () => {
    setIsEnable((previousState) => !previousState);
    Alert.alert('Value changed.');
  };

  return (
    <View style={styles.container}>
      <Switch
        value={isEnable}
        trackColor={{ false: 'red', true: 'green' }}
        thumbColor={isEnable ? 'yellow' : 'pink'}
        onValueChange={toggleSwitch}
      />
    </View>
  );
}
