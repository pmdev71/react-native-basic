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
} from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Palash', key: 1 },
    { name: 'Sohag', key: 2 },
    { name: 'Bappy', key: 3 },
    { name: 'Arup', key: 4 },
    { name: 'Rashed', key: 5 },
  ]);

  const pressHandler = (itemName) => {
    alert('You Clicked ' + itemName);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <View style={styles.itemStyle}>
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     marginTop: 40,
//   },
//   itemStyle: {
//     fontSize: 22,
//     backgroundColor: 'yellow',
//     color: 'black',
//     marginTop: 20,
//     padding: 20,
//   },
// });
