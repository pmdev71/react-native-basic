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
import CustomSectioLis from './components/CustomSectionList';

export default function App() {
  const DATA = [
    {
      title: 'Student',
      data: ['Palash', 'Sohag', 'Arif', 'Bappy', 'Arup'],
    },
    {
      title: 'Teacher',
      data: ['Tuhin', 'Nuri', 'Sobur'],
    },
  ];
  const DATA2 = [
    {
      title: 'Food',
      data: ['Fish', 'Rice', 'Egg'],
    },
    {
      title: 'Drinks',
      data: ['Coca-Cola', 'Fanta', 'Seven up', 'Speed'],
    },
  ];

  return (
    <View style={styles.container}>
      <CustomSectioLis data={DATA} />
      <CustomSectioLis data={DATA2} />
    </View>
  );
}
