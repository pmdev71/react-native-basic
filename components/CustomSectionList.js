import react from 'react';
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
import styles from '../style.js';

export default function CustonSectionList(props) {
  const Item = ({ title }) => {
    return (
      <View>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={props.data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => {
          return <Text>{title}</Text>;
        }}
      />
    </View>
  );
}
