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
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';

export default function App() {
  const showTost = () => {
    ToastAndroid.show('Welcome to Android', ToastAndroid.SHORT);
  };

  const showWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Welcome to Android',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const showWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Welcome to Android showWithGravityAndOffset',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      90,
      100
    );
  };

  return (
    <View style={styles.container}>
      <Button title="showTost" onPress={() => showTost()}></Button>
      <Button
        title="showTostWithGravity"
        onPress={() => showWithGravity()}
      ></Button>
      <Button
        title="showTostWithGravityAndOffset"
        onPress={() => showWithGravityAndOffset()}
      ></Button>
    </View>
  );
}
