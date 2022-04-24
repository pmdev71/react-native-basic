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
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'red', flex: 1 }}></View>
      <View style={{ backgroundColor: 'green', flex: 1 }}></View>
      <View style={{ backgroundColor: 'blue', flex: 2 }}></View>
      <View style={{ backgroundColor: 'yellow', flex: 1 }}></View>
      <View style={{ backgroundColor: 'black', flex: 1 }}></View>
      <View style={{ backgroundColor: 'green', flex: 1 }}></View>
      <View style={{ backgroundColor: 'blue', flex: 1 }}></View>
      <View style={{ backgroundColor: 'yellow', flex: 1 }}></View>
    </View>
  );
}
