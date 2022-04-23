import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [fruit, setFruit] = useState([
    { name: 'Apple', key: 1 },
    { name: 'Banana', key: 2 },
    { name: 'Mango', key: 3 },
    { name: 'Orange', key: 4 },
    { name: 'Apple', key: 5 },
    { name: 'Mango', key: 6 },
    { name: 'Orange', key: 7 },
    { name: 'Apple', key: 8 },
    { name: 'Orange', key: 9 },
    { name: 'Apple', key: 10 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={fruit}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.itemStyle}>{item.name}</Text>
          </View>
        )}
      />

      {/* <ScrollView>
        {fruit.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.itemStyle}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40,
  },
  itemStyle: {
    fontSize: 22,
    backgroundColor: 'yellow',
    color: 'black',
    marginTop: 20,
    padding: 20,
  },
});
