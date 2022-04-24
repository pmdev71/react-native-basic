import react from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import styles from './style';

export default function CustomButton(props) {
  return (
    <TouchableOpacity onPress={() => props.click()}>
      <View style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
