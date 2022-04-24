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
  Alert,
  Image,
} from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function App() {
  const [dice, setDice] = useState(5);

  const images = {
    pics: {
      0: require('./assets/images/1.png'),
      1: require('./assets/images/2.png'),
      2: require('./assets/images/3.png'),
      3: require('./assets/images/4.png'),
      4: require('./assets/images/5.png'),
      5: require('./assets/images/6.png'),
    },
  };

  const buttonHandler = () => {
    setDice(Math.floor(Math.random() * 6)); //generate random number 1-5
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={images.pics[dice]} />
      <Button title="Roll" onPress={buttonHandler} />
    </View>
  );
}
