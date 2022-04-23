import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Palash');

  const [person, setPerson] = useState({
    name: '',
    age: 0,
    id: '',
  });

  const ClickHandler = () => {
    setName('Sohag');
  };

  const ClickHandlerPerson = () => {
    setPerson({
      name: 'Bappy Raha',
      age: 35,
      id: '182-110',
    });
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>
        Name: {person.name}, ID: {person.id}, Age: {person.age}
      </Text>
      <Button title="Change Name" onPress={ClickHandler}></Button>
      <Button title="Show Person" onPress={ClickHandlerPerson}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
