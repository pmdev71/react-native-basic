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
  Platform,
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OS : {Platform.OS}</Text>
      <Text>OS Version : {Platform.Version}</Text>
      <Text>isTV : {Platform.isTV.toString()}</Text>
      <Text>Constants : {JSON.stringify(Platform.constants, null, 2)}</Text>
    </View>
  );
}
