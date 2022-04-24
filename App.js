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
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('./assets/images/1.png')}
      />
    </View>
  );
}
