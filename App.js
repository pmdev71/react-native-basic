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
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style';

export default function App() {
  const [refresh, setRefresh] = useState(false);

  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text>Pull for Refresh</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }
      />
    </View>
  );
}
