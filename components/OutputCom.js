import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import styles from '../style';

export default function OutputCom(props) {
  if (props.userAge >= 18) {
    Alert.alert('Notice!', 'You can visit this link.');
  }
  // else {
  //   Alert.alert('Notice!', 'Oops.... You can visit this link.');
  // }
  return (
    <View style={styles.container}>
      <Text>Welcome, {props.userName}. Thanks for using our Dream apps.</Text>
    </View>
  );
}
