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
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';
import CustomButton from './CustomButton';

export default function App() {
  const DATA = [
    {
      title: 'Student',
      data: ['Palash', 'Sohag', 'Arif'],
    },
    {
      title: 'Teacher',
      data: ['Tuhin', 'Nuri', 'Sobur'],
    },
    {
      title: 'Admin',
      data: ['Kamal', 'Kasha', 'Shuvo'],
    },
  ];

  const Name = ({ title }) => {
    return (
      <View>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Name title={item} />}
        renderSectionHeader={({ section: { title } }) => {
          return <Text>{title}</Text>;
        }}
      />
    </View>
  );
}
